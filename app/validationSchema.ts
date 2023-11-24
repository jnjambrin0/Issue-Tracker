import { z } from "zod";

export const IssueSchema = z.object({
  title: z.string().min(1, "Title is requered").max(255),
  description: z.string().min(1, "Description is requered").max(65535),
});

export const pathcIssueSchema = z.object({
  title: z.string().min(1, "Title is requered").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is requered")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "Assigned to is requered")
    .max(255)
    .optional()
    .nullable(),
});
