// Assuming environment variables are being imported from an environment-like file
import { environment } from './environments/environment.prod.js';

window.process = {
  env: {
    REGION: environment.REGION,
    TABLE_NAME: environment.TABLE_NAME,
    API_GATEWAY_ENDPOINT: environment.API_GATEWAY_ENDPOINT,
  }
};
