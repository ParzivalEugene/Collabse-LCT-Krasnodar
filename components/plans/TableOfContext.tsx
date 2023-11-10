import { Card, ProgressBar } from "@tremor/react";
import React from "react";
import { Calendar, ClockCircle } from "solar-icon-set/time";

interface MainBlockProps {
  title: string;
  time: string;
  deadline: string;
}

interface SecondaryBlockProps {
  title: string;
  time: string;
}

const MainBlock: React.FC<MainBlockProps> = ({ title, time, deadline }) => {
  return (
    <div className="flex flex-col w-full mb-5">
      <p>{title}</p>
      <div className="flex gap-1 items-center text-light-text">
        <ClockCircle size={16} />
        <p className="text-sm">Около {time} минут</p>
      </div>
      <div className="flex gap-1 items-center text-light-text mt-1">
        <Calendar size={16} />
        <p className="text-sm">До {deadline}</p>
      </div>
    </div>
  );
};

const SecondaryBlock: React.FC<SecondaryBlockProps> = ({ title, time }) => {
  return (
    <div className="flex flex-col w-full mb-5 ml-10">
      <p>{title}</p>
      <div className="flex gap-1 items-center text-light-text">
        <ClockCircle size={16} />
        <p className="text-sm">Около {time} минут</p>
      </div>
    </div>
  );
};

export const TableOfContext = () => {
  return (
    <Card className="max-w-[400px] ml-12 h-fit sticky top-[105px]">
      <h2>Прогресс: 80%</h2>
      <ProgressBar value={80} color="violet" className="mt-4 mb-5" />
      <MainBlock title="Первые шаги" time="10" deadline="20.10.2021" />
      <MainBlock title="Первый день" time="10" deadline="20.10.2021" />
      <SecondaryBlock title="1. Все про офис (и немного больше)" time="2" />
      <SecondaryBlock title="2. Знакомство" time="3" />
      <SecondaryBlock title="3. Дуем травку (тимбилдинг)" time="5" />
      <MainBlock title="Команда" time="10" deadline="20.10.2021" />
    </Card>
  );
};
