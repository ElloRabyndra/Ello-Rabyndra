import { z } from "zod";

// Contact Schema
export const ContactSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .min(5, "Email must be at least 5 characters")
    .email("Email must be a valid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
      "Email must be a valid Gmail address"
    ),
  from_name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});
