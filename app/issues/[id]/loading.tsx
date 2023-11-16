import { Flex, Card } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";

const LoadingIssueDetailPage = () => {
  return (
    <div className="m-5 max-w-xl">
      <Skeleton />
      <Flex className="space-x3" my={"2"}>
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt={"4"}>
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailPage;
