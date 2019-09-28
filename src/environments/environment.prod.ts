import { env } from 'process';

export const environment = {
  production: true,
  version: env.npm_package_version,
  baseUrl: 'https://ergast.com/api/f1/'
};
