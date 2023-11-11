"use client";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    href: "/employees",
  },
  {
    name: "Планы адаптации",
    icon: <ClipboardCheck iconStyle="Outline" size={20} />,
    href: "/plans",
  },
  {
    name: "Шаблоны",
    icon: <Document iconStyle="Linear" size={20} />,
    href: "/templates",
  },
  {
    name: "Материалы",
    icon: <Folder iconStyle="Linear" size={20} />,
    href: "/docs",
  },
  {
    name: "Чат",
    icon: <Dialog2 iconStyle="Linear" size={20} />,
    href: "/chat",
  },
  {
    name: "Отчёты",
    icon: <CalculatorMinimalistic iconStyle="Linear" size={20} />,
    href: "/reports",
  },
  {
    name: "Справка",
    icon: <QuestionCircle iconStyle="Linear" size={20} />,
    href: "/help",
  },
  {
    name: "Настройки",
    icon: <Settings iconStyle="Linear" size={20} />,
    href: "/settings",
  },
];

const activeItem = (item: string) => {
  if (items.map((item) => item.href).includes(item)) {
    return item;
  } else return items[0].href;
};

export const Sidebar = () => {
  const selected = activeItem("/" + usePathname().split("/")[1]);

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 flex flex-col px-8 py-6 border-r border-ligth-stroke ">
      <h2 className="font-medium text-center">ProBoard</h2>
      <nav className="mt-10">
        <RadioGroup value={selected}>
          {items.map((item) => (
            <RadioGroup.Option
              key={item.name}
              value={item.href}
              className={({ checked }) =>
                `${
                  checked
                    ? "bg-blue-500 bg-opacity-20 text-blue-500"
                    : "bg-white"
                }
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
    </aside>
  );
};
