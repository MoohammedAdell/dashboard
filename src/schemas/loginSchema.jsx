import z from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter valid email"),
  password: z
    .string()
    .min(8, "password must be at least 8 chars")
    .regex(/[A-Z]/, "password must be at least one capital character")
    .regex(/[0-9]/, "password must be at least one number "),
});

export default loginSchema;
