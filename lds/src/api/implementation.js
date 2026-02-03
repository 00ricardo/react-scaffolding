import endpoints from './endpoints';
import rutils from '00ricardo-utils';
// ! Whenever we handle Files, axios is very limited and raises a lot of errors whether some conditions are not followed
// ! For simplicity, we chose to use Fetch Vanilla API to handle file submissions

/* Simple example how to use it*/
export const chooseYourFunctionName = async (baseURL, context) => {
  const { channelViewURL } = endpoints;
  if (rutils.hasValue(context)) {
    const response = await axios.get(`${baseURL}${channelViewURL}`, {
      headers: { SOURCE_SYSTEM: context },
    });
    return response.data;
  }
};
