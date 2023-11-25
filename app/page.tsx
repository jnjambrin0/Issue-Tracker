import prisma from "@/prisma/client";
import IssueSumary from "./IssueSumary";
import LatestIssues from "./LatestIssues";
import Pagination from "./components/Pagination";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return <IssueSumary open={open} inProgress={inProgress} closed={closed} />;
}
