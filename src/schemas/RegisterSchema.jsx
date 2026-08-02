import z from "zod";

const RegitserSchema = z
  .object({
    email: z.string().email("Please enter valid email"),
    password: z
      .string()
      .min(8, "password must be at least 8 chars")
      .regex(/[A-Z]/, "password must be at least one capital character")
      .regex(/[a-z]/, "password must be at least one small character")
      .regex(/[0-9]/, "password must be at least one number "),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default RegitserSchema;
