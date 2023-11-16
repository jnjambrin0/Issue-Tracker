"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { IssueSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";
import SimpleMDE from "react-simplemde-editor";

type IssueFormData = z.infer<typeof IssueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IssueFormData>({
    resolver: zodResolver(IssueSchema),
  });
  const [error, setError] = useState("");
  const [isLoading, SetLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      SetLoading(true);
      if (issue) await axios.patch("/api/issues" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      SetLoading(false);
      setError("An unexpected error occurred.");
    }
  });

  return (
    <>
      <div className="max-w-xl p-5">
        {error && (
          <Callout.Root color="red" className="mb-5">
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        <form className="  space-y-3" onSubmit={onSubmit}>
          <TextField.Root>
            <TextField.Input
              defaultValue={issue?.title}
              placeholder="Tittle"
              {...register("title")}
            />
          </TextField.Root>
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
          <Controller
            name="description"
            control={control}
            defaultValue={issue?.description}
            render={({ field }) => (
              <SimpleMDE placeholder="Description" {...field} />
            )}
          />

          <ErrorMessage>{errors.description?.message}</ErrorMessage>

          <Button disabled={isLoading}>
            {issue ? "Update Issue" : "Submit New Issue"}{" "}
            {isLoading && <Spinner />}
          </Button>
        </form>
      </div>
    </>
  );
};

export default IssueForm;
