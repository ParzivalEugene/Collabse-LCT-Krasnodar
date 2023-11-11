import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  ProgressBar,
} from "@tremor/react";
import { Calendar, ClockCircle } from "solar-icon-set/time";

const page = () => {
  return (
    <div className="flex w-full px-6 py-10 gap-6">
      <div className="w-full">
        <h1>Знакомство с компнией</h1>
      </div>
      <div className="min-w-[400px]">
        <h2 className="text-h1 font-medium">Персональный план</h2>
        <AccordionList className="p-6 bg-white">
          <h3>Прогресс: 80%</h3>
          <ProgressBar value={80} color="violet" />
          <Accordion className="border-none">
            <AccordionHeader>
              <div>
                <p className="text-black">Первые шаги (2/2)</p>
                <div className="flex gap-1 text-light-text">
                  <ClockCircle size={16} />
                  <p className="text-sm">Около 3 минут</p>
                </div>
                <div className="flex gap-1 text-light-text mt-1">
                  <Calendar size={16} />
                  <p className="text-sm">до 15.11.2023</p>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-black">1. Все про офис (и немного больше)</p>
              <p>Около 2 минут</p>
            </AccordionBody>
          </Accordion>
        </AccordionList>
      </div>
    </div>
  );
};

export default page;
