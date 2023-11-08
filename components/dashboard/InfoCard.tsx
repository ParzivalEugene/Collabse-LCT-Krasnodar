import { Card, Metric, Text } from "@tremor/react";
import Link from "next/link";
import React from "react";
import { AltArrowRight } from "solar-icon-set/arrows";

interface InfoCardProps {
  name: string;
  text: string;
  href?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  name,
  text,
  href = "/",
}) => {
  return (
    <Card className="flex flex-col justify-between gap-2">
      <Text>{name}</Text>
      <div className="flex w-full justify-between">
        <Metric>{text}</Metric>
        <Link href={href}>
          <AltArrowRight iconStyle="Outline" size={32} />
        </Link>
      </div>
    </Card>
  );
};
