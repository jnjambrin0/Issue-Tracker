import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarckdown from "react-markdown";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <div className="m-5">
      <Heading>{issue.title}</Heading>
      <Flex className="space-x3" my={"2"}>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt={"4"}>
        <ReactMarckdown>{issue.description}</ReactMarckdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
