import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    SERVER_PORT: port(),
    CLIENT_ORIGIN_URL: str(),
    AUTH0_AUDIENCE: str(),
    AUTH0_DOMAIN: str(),
    POKEMON_BASE_URL: str(),
  });
};

export default validateEnv;
