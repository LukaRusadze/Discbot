import { ZodError, z } from "zod";

export const envVariables = z.object({
  DISCORD_API_KEY: z.string().nonempty(),
});

export function validateEnvVariables() {
  try {
    envVariables.parse(process.env);
  } catch (error) {
    if (error instanceof ZodError) {
      throw error.issues;
    }
  }
}
