import Toast from 'react-native-toast-message';
import { ResponseModel } from '../models';

export const handleApiResponse = (statusCode: number, response: ResponseModel) => {
  switch (statusCode) {
    case 200:
      return response;
    case 201:
      return response;
    case 400:
      console.warn('Bad Request');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Bad Request',
      });
      break;
    case 401:
      console.warn('Unauthorized');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Unauthorized access. Please log in.',
      });
      break;
    case 403:
      console.warn('Forbidden');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'You do not have permission to access this resource.',
      });
      break;
    case 404:
      console.warn('Not Found');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Resource not found.',
      });
      break;
    case 500:
      console.error('Internal Server Error');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Internal server error. Please try again later.',
      });
      break;
    default:
      console.warn('Unhandled status code:', statusCode);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Unhandled status code: ${statusCode}`,
      });
      break;
  }
};
