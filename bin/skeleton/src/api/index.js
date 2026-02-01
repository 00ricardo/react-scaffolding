// ! API Base URL (Eg. https://oracleapex.com/ords/xyz_owner)
export const API_BASE_URL = {
  development: 'YOUR_DEV_ORDS_BASE_URL',
  quality: 'YOUR_Q_ORDS_BASE_URL',
  production: 'YOUR_PROD_ORDS_BASE_URL',
};
// ! API Version in-use (Eg. 1.0)
export const API_VERSION = '1.0';
// ! API Module defined in ORDS (Eg. /api/)
export const API_MODULE = 'YOUR_ORDS_MODULE';
// ! API Throttle (in seconds) in order to not overload ORDS pool
// ! Eg. Throttle: 1 - 1 second between each call
export const API_THROTTLE = 0;
