import { parseEnv } from "znv";
import { z } from "zod";

export const Environment = parseEnv(process.env, {
  AWS_ACCOUNT_ID: z.string(),
  AWS_REGION: z.string().default("us-west-1"),
});
