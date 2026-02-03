export const logSuccess = (msg, addons) => {
  console.log(
    '%c' + msg,
    'color: white; font-weight: bold; background-color: green; padding: 2px;',
    addons
  );
};

export const logError = (msg, addons) => {
  console.log(
    '%c' + msg,
    'color: white; font-weight: bold; background-color: red; padding: 2px;',
    addons
  );
};

export const logWarning = (msg, addons) => {
  console.log(
    '%c' + msg,
    'color: white; font-weight: bold; background-color: #b5a023; padding: 2px;',
    addons
  );
};

export const logInfo = (msg, addons) => {
  console.log(
    '%c' + msg,
    'color: white; font-weight: bold; background-color: #2e95d3; padding: 2px;',
    addons
  );
};
