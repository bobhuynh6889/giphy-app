// Please find the .env file in the zip file I sent.
import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      API_KEY: process.env.API_KEY,
      BASE_URL: process.env.BASE_URL,
    },
  };
};
