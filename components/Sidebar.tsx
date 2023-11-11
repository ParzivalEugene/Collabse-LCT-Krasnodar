"use client";
import { useUser } from "@/store/hooks";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalculatorMinimalistic,
  ClipboardCheck,
  Dialog2,
  Document,
  Folder,
  MedalRibbonStar,
  PieChart,
  QuestionCircle,
  Settings,
  UserId,
} from "solar-icon-set";

const itemsWorker = [
  {
    name: "Дашборд",
    icon: <PieChart iconStyle="Outline" size={20} />,
    href: "/platform/lk",
  },
  {
    name: "Планы адаптации",
    icon: <ClipboardCheck iconStyle="Outline" size={20} />,
    href: "/platform/plans",
  },
  {
    name: "Достижения",
    icon: <MedalRibbonStar iconStyle="Linear" size={20} />,
  },
  {
    name: "Материалы",
    icon: <Folder iconStyle="Linear" size={20} />,
  },
  {
    name: "Чат",
    icon: <Dialog2 iconStyle="Linear" size={20} />,
  },
  {
    name: "Справка",
    icon: <QuestionCircle iconStyle="Linear" size={20} />,
  },
  {
    name: "Настройки",
    icon: <Settings iconStyle="Linear" size={20} />,
  },
];

const itemsHR = [
  {
    name: "Дашборд",
    icon: <PieChart iconStyle="Outline" size={20} />,
    href: "/platform/dashboard",
  },
  {
    name: "Сотрудники",
    icon: <UserId iconStyle="Outline" size={20} />,
    href: "/platform/employees",
  },
  {
    name: "Планы адаптации",
    icon: <ClipboardCheck iconStyle="Outline" size={20} />,
    href: "/platform/plans",
  },
  {
    name: "Шаблоны",
    icon: <Document iconStyle="Linear" size={20} />,
  },
  {
    name: "Материалы",
    icon: <Folder iconStyle="Linear" size={20} />,
  },
  {
    name: "Чат",
    icon: <Dialog2 iconStyle="Linear" size={20} />,
  },
  {
    name: "Отчёты",
    icon: <CalculatorMinimalistic iconStyle="Linear" size={20} />,
  },
  {
    name: "Справка",
    icon: <QuestionCircle iconStyle="Linear" size={20} />,
  },
  {
    name: "Настройки",
    icon: <Settings iconStyle="Linear" size={20} />,
  },
];

const activeItem = (item: string, role: string) => {
  const items = role === "hr_lead" ? itemsHR : itemsWorker;
  if (items.map((item) => item.href).includes(item)) return item;
  else return items[0].href;
};

export const Sidebar = () => {
  const user = useUser();
  const selected = activeItem(
    "/" + usePathname().split("/").slice(1, 3).join("/"),
    user.user?.role || "worker"
  );
  const items = user.user?.role === "hr_lead" ? itemsHR : itemsWorker;

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 flex flex-col px-8 py-6 border-r border-ligth-stroke ">
      <h2 className="font-medium text-center">ProBoard</h2>
      <nav className="mt-10">
        <RadioGroup value={selected}>
          {items.map((item) => (
            <RadioGroup.Option
              disabled={item.href === undefined}
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
                <Link href={item.href || ""}>
                  <div className="flex w-full items-center gap-2">
                    <span
                      className={`h-[20px] w-[20px] ${
                        checked
                          ? "text-blue"
                          : item.href
                          ? "text-gray-900"
                          : "text-light-text"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div className="text-base">
                      <RadioGroup.Label
                        as="p"
                        className={`font-medium  ${
                          checked
                            ? "text-blue"
                            : item.href
                            ? "text-gray-900"
                            : "text-light-text"
                        }`}
                      >
                        {item.name}
                      </RadioGroup.Label>
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
