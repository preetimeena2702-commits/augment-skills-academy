import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  ADMIN_PASSWORD: z.string().min(1).optional(),
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_FROM_EMAIL: z.string().email().optional(),
  SUPPORT_EMAIL: z.string().email().optional(),
  GOOGLE_CLIENT_ID: z.string().min(1).optional(),
  GOOGLE_CLIENT_SECRET: z.string().min(1).optional(),
});

type Env = z.infer<typeof envSchema>;
type EnvKey = keyof Env;
const schemaShape = envSchema.shape as Record<EnvKey, z.ZodTypeAny>;

function getEnvValue(key: EnvKey) {
  const result = schemaShape[key].safeParse(process.env[key]);
  if (!result.success) {
    throw new Error(`Invalid environment variable "${key}": ${result.error.issues[0]?.message ?? "unknown error"}`);
  }

  return result.data;
}

export const env = new Proxy({} as Env, {
  get(_target, prop: string | symbol) {
    if (typeof prop !== "string") {
      return undefined;
    }

    if (!(prop in schemaShape)) {
      return undefined;
    }

    return getEnvValue(prop as EnvKey);
  },
});

export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}
