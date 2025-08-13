import dotenv from 'dotenv';
import path from 'path';

export default async () => {
  const envFile = process.env.ENV || '.env.test';
  dotenv.config({ path: path.resolve(__dirname, '../../config', envFile) });
};
