"use client";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import {
  CalculatorMinimalistic,
  ClipboardCheck,
  Dialog2,
  Document,
  Folder,
  PieChart,
  QuestionCircle,
  Settings,
  UserId,
} from "solar-icon-set";

const items = [
  {
    name: "Дашборд",
    icon: <PieChart iconStyle="Outline" size={20} />,
    href: "/dashboard",
  },
  {
    name: "Сотрудники",
    icon: <UserId iconStyle="Outline" size={20} />,
    href: "/settings",
  },
  {
    name: "Планы адаптации",
    icon: <ClipboardCheck iconStyle="Outline" size={20} />,
    href: "/c",
  },
  {
    name: "Шаблоны",
    icon: <Document iconStyle="Linear" size={20} />,
    href: "/d",
  },
  {
    name: "Материалы",
    icon: <Folder iconStyle="Linear" size={20} />,
    href: "/e",
  },
  {
    name: "Чат",
    icon: <Dialog2 iconStyle="Linear" size={20} />,
    href: "/f",
  },
  {
    name: "Отчёты",
    icon: <CalculatorMinimalistic iconStyle="Linear" size={20} />,
    href: "/g",
  },
  {
    name: "Справка",
    icon: <QuestionCircle iconStyle="Linear" size={20} />,
    href: "/h",
  },
  {
    name: "Настройки",
    icon: <Settings iconStyle="Linear" size={20} />,
    href: "/i",
  },
];

export const Sidebar = () => {
  const [selected, setSelected] = useState(items[0]);
  return (
    <div className="fixed top-0 left-0 h-screen w-60 flex flex-col px-8 py-6 border-r border-ligth-stroke ">
      <h2 className="font-medium text-center">ProBoard</h2>
      <nav className="mt-10">
        <RadioGroup value={selected} onChange={setSelected}>
          {items.map((item) => (
            <RadioGroup.Option
              key={item.name}
              value={item}
              className={({ checked }) =>
                `${checked ? "bg-blue bg-opacity-20 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-full p-3 focus:outline-none `
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center gap-2">
                    <span
                      className={`h-[20px] w-[20px] ${
                        checked ? "text-blue" : "text-gray-900"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div className="text-base">
                      <RadioGroup.Label
                        as="p"
                        className={`font-medium  ${
                          checked ? "text-blue" : "text-gray-900"
                        }`}
                      >
                        {item.name}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className={`inline ${
                          checked ? "text-sky-100" : "text-gray-500"
                        }`}
                      ></RadioGroup.Description>
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </nav>
    </div>
  );
};
