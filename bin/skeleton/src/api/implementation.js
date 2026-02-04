import { API_BASE_URL, API_VERSION, API_MODULE } from './config';
import { getUser } from './modules';
import rutils from '00ricardo-utils';
// ! Whenever we handle Files, axios is very limited and raises a lot of errors whether some conditions are not followed
// ! For simplicity, we chose to use Fetch Vanilla API to handle file submissions
const baseURL = `${API_BASE_URL.development}/${API_MODULE}/v${API_VERSION}/`;

// ! Example of Axios Callback
export const exampleAxiosCallback = async (payload) => {
  const { name, age } = payload;
  const uri = getUser;
  if (rutils.hasValue(name) && rutils.hasValue(age)) {
    const response = await axios.get(`${baseURL}${uri}`, {
      params: { name: name, age: age },
    });
    return response.data;
  }
};
