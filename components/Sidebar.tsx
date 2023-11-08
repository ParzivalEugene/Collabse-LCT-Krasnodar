"use client";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const activeItem = (item: string) => {
  if (items.map((item) => item.name).includes(item)) {
    return item;
  } else return items[0].name;
};

export const Sidebar = () => {
  const pathname = usePathname().slice(1).split("/")[0];
  const [selected, setSelected] = useState(activeItem(pathname));

  return (
    <div className="fixed top-0 left-0 h-screen w-60 flex flex-col px-8 py-6 border-r border-ligth-stroke ">
      <h2 className="font-medium text-center">ProBoard</h2>
      <nav className="mt-10">
        <RadioGroup value={selected} onChange={setSelected}>
          {items.map((item) => (
            <RadioGroup.Option
              key={item.name}
              value={item.name}
              className={({ checked }) =>
                `${checked ? "bg-blue bg-opacity-20 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-full p-3 focus:outline-none `
              }
            >
              {({ checked }) => (
                <Link href={item.href}>
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
                </Link>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </nav>
    </div>
  );
};
