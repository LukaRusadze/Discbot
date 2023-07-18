import { z } from "zod";
import { envVariables } from "../utils/envValidation.ts";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
