"use client";

import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Skeleton } from "@/app/components";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 3, // retry 3 times before failing
  });

  if (isLoading) return <Skeleton />;

  if (error) return null;

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "unassigned"}
        onValueChange={async (userId) => {
          try {
            await axios.patch(`/api/issues/${issue.id}`, {
              assignedToUserId: userId === "unassigned" ? null : userId,
            });
          } catch (error) {
            toast.error("Changes could not be saved.");
          }
        }}
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster></Toaster>
    </>
  );
};

export default AssigneeSelect;
