import { cleanEnv, port } from "envalid";
import dotenv from "dotenv";
dotenv.config();

const env = cleanEnv(process.env, {
  // DATABASE_URL: url(),
  PORT: port({ default: 4000 }),
});
export default env;
