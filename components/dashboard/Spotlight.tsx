import { Card, Metric } from "@tremor/react";
import Link from "next/link";
import React from "react";

interface SpotlightProps {
  states: {
    red: number;
    orange: number;
    green: number;
  };
  description: {
    red: string;
    orange: string;
    green: string;
  };
  legend: {
    red: string;
    orange: string;
    green: string;
  };
}

interface SpotlightCardProps {
  color: string;
  metric: number;
  text: string;
}

interface SpotlightLegendProps {
  legend: {
    red: string;
    orange: string;
    green: string;
  };
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  color,
  metric,
  text,
}) => {
  return (
    <div className="flex gap-3 w-full">
      <div className={`w-[6px] h-20 bg-${color} rounded-full`} />
      <div>
        <Metric>{metric}</Metric>
        <p className="text-sm">{text}</p>
        <Link href="/">
          <span className="text-sm text-light-text">Подбронее</span>
        </Link>
      </div>
    </div>
  );
};

const SpotlightLegend: React.FC<SpotlightLegendProps> = ({ legend }) => {
  const data = [
    {
      color: "red",
      text: legend.red,
    },
    {
      color: "orange",
      text: legend.orange,
    },
    {
      color: "green",
      text: legend.green,
    },
  ];
  return (
    <div className="flex flex-wrap gap-6">
      {data.map((item, key) => (
        <div key={key} className="flex gap-2 items-center">
          <div className={`w-2 h-2 rounded-full bg-${item.color}`} />
          <p className="text-sm">{legend.red}</p>
        </div>
      ))}
    </div>
  );
};

export const Spotlight: React.FC<SpotlightProps> = ({
  states,
  description,
  legend,
}) => {
  return (
    <Card className="w-full flex flex-col justify-between">
      <div>
        <h2 className="font-medium">Светофор скиллов</h2>
        <p className="text-sm text-light-text">Расшифровка метрики</p>
      </div>
      <div className="flex">
        <SpotlightCard color="red" metric={states.red} text={description.red} />
        <SpotlightCard
          color="orange"
          metric={states.orange}
          text={description.orange}
        />
        <SpotlightCard
          color="green"
          metric={states.green}
          text={description.green}
        />
      </div>
      <SpotlightLegend legend={legend} />
    </Card>
  );
};
