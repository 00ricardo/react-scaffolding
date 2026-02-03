import rutils from '00ricardo-utils';

const deepFreeze = (obj) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop]))
      deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};

const operators = [
  // * Equal
  {
    label: '=',
    src: 'equals.js',
    values: 'single',
    handler: function (lotValue, searchValue) {
      if (!rutils.hasValue(lotValue) || !rutils.hasValue(searchValue))
        return false;
      if (Array.isArray(searchValue)) return false;
      let search = searchValue.toString().toLowerCase();
      if (!Array.isArray(lotValue)) {
        let value = lotValue.toString().toLowerCase();
        return value == search;
      } else {
        return lotValue.find((el) => {
          if (typeof el === 'object') {
            // ! This is a customization for "state" filter
            return el.label.toString().toLowerCase() == search;
          } else {
            return el.toString().toLowerCase() == search;
          }
        });
      }
    },
  },
  // * Not Equal
  {
    label: '!=',
    src: 'not equals.js',
    values: 'single',
    handler: function (lotValue, searchValue) {
      if (!lotValue) return true;
      if (!searchValue) return false;
      if (Array.isArray(searchValue)) return false;
      let search = searchValue.toString().toLowerCase();
      if (!Array.isArray(lotValue)) {
        let value = lotValue.toString().toLowerCase();
        return value != search;
      } else {
        return !lotValue.find((el) => {
          if (typeof el === 'object') {
            // ! This is a customization for "state" filter
            return el.label.toString().toLowerCase() == search;
          } else {
            return el.toString().toLowerCase() == search;
          }
        });
      }
    },
  },
  // * Is NULL
  {
    label: 'is null',
    src: 'is null.js',
    values: 'none',
    handler: function (lotValue, searchValue) {
      return lotValue == null || lotValue.length == 0;
    },
  },
  // * Is not NULL
  {
    label: 'is not null',
    src: 'is not null',
    values: 'none',
    handler: function (lotValue, searchValue) {
      return lotValue != null;
    },
  },
  // * Like
  {
    label: 'like',
    src: 'like.js',
    values: 'single',
    handler: function (lotValue, searchValue) {
      if (!lotValue || !searchValue) return false;
      if (Array.isArray(searchValue)) return false;
      let search = searchValue.toString().toLowerCase();
      if (!Array.isArray(lotValue)) {
        let value = lotValue.toString().toLowerCase();
        return value.includes(search);
      } else {
        return lotValue.find((el) => {
          if (typeof el === 'object') {
            // ! This is a customization for "state" filter
            return el.label.toString().toLowerCase().includes(search);
          } else {
            return el.toString().toLowerCase().includes(search);
          }
        });
      }
    },
  },
  // * Not Like
  {
    label: 'not like',
    src: 'not like.js',
    values: 'single',
    handler: function (lotValue, searchValue) {
      if (!lotValue) return true;
      if (!searchValue) return false;
      if (Array.isArray(searchValue)) return false;
      let search = searchValue.toString().toLowerCase();
      if (!Array.isArray(lotValue)) {
        let value = lotValue.toString().toLowerCase();
        return !value.includes(search);
      } else {
        return !lotValue.find((el) => {
          if (typeof el === 'object') {
            // ! This is a customization for "state" filter
            return el.label.toString().toLowerCase().includes(search);
          } else {
            return el.toString().toLowerCase().includes(search);
          }
        });
      }
    },
  },
  // * Less than
  {
    label: '<',
    src: 'less.js',
    values: 'single',
    handler: function (lotValue, searchValue) {
      if (!lotValue || !searchValue) return false;
      if (Array.isArray(searchValue)) return false;
      if (!Array.isArray(lotValue)) {
        return lotValue < searchValue;
      } else {
        return lotValue.find((el) => {
          {
            if (typeof el === 'object') {
              // ! This is a customization for "state" filter
              return el.label < searchValue;
            } else {
              return el < searchValue;
            }
          }
        });
      }
    },
  },
  // * Less or Equals than
  {
    label: '<=',
    src: 'less or equals.js',
    values: 'single',
    handler: function (lotValue, searchValue) {
      if (!lotValue || !searchValue) return false;
      if (Array.isArray(searchValue)) return false;
      if (!Array.isArray(lotValue)) {
        return lotValue <= searchValue;
      } else {
        return lotValue.find((el) => {
          {
            if (typeof el === 'object') {
              // ! This is a customization for "state" filter
              return el.label <= searchValue;
            } else {
              return el <= searchValue;
            }
          }
        });
      }
    },
  },
  // * More than
  {
    label: '>',
    src: 'more.js',
    values: 'single',
    handler: function (lotValue, searchValue) {
      if (!lotValue || !searchValue) return false;
      if (Array.isArray(searchValue)) return false;
      if (!Array.isArray(lotValue)) {
        return lotValue > searchValue;
      } else {
        return lotValue.find((el) => {
          {
            if (typeof el === 'object') {
              // ! This is a customization for "state" filter
              return el.label > searchValue;
            } else {
              return el > searchValue;
            }
          }
        });
      }
    },
  },
  // * More or Equals than
  {
    label: '>=',
    src: 'more or equals.js',
    values: 'single',
    handler: function (lotValue, searchValue) {
      if (!lotValue || !searchValue) return false;
      if (Array.isArray(searchValue)) return false;
      if (!Array.isArray(lotValue)) {
        return lotValue >= searchValue;
      } else {
        return lotValue.find((el) => {
          {
            if (typeof el === 'object') {
              // ! This is a customization for "state" filter
              return el.label >= searchValue;
            } else {
              return el >= searchValue;
            }
          }
        });
      }
    },
  },
  // * In
  {
    label: 'in',
    src: 'in.js',
    values: 'multiple',
    handler: function (lotValue, searchValue) {
      if (!rutils.hasValue(lotValue) || !rutils.hasValue(searchValue))
        return false;
      if (!Array.isArray(searchValue)) return false;
      if (!Array.isArray(lotValue)) {
        let value = lotValue.toString().toLowerCase();
        return searchValue.find((el) => el.toString().toLowerCase() == value);
      } else {
        return lotValue.find((lValue) => {
          if (typeof lValue !== 'object') {
            searchValue.find(
              (el) =>
                el.toString().toLowerCase() == lValue.toString().toLowerCase()
            );
          } else {
            return searchValue.includes(lValue.label);
          }
        });
      }
    },
  },
  // * Not In
  {
    label: 'not in',
    src: 'not in.js',
    values: 'multiple',
    handler: function (lotValue, searchValue) {
      if (!lotValue) return true;
      if (!searchValue) return false;
      if (!Array.isArray(searchValue)) return false;
      if (!Array.isArray(lotValue)) {
        let value = lotValue.toString().toLowerCase();
        return !searchValue.find((el) => el.toString().toLowerCase() == value);
      } else {
        return !lotValue.find((lValue) => {
          if (typeof lValue !== 'object') {
            searchValue.find(
              (el) =>
                el.toString().toLowerCase() == lValue.toString().toLowerCase()
            );
          } else {
            return searchValue.includes(lValue.label);
          }
        });
      }
    },
  },
];

deepFreeze(operators);

export default operators;
