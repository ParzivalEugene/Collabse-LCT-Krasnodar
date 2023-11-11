"use client";
import { useUser } from "@/store/hooks";
import { TextInput } from "@tremor/react";
import { Bell } from "solar-icon-set";
import { Avatar } from "./dashboard";

export const Navbar = () => {
  const user = useUser();
  const name = user?.user?.username || "Имя сотрудника";

  return (
    <div className="flex sticky top-0 left-0 px-6 py-5 w-full justify-between items-center border-b border-ligth-stroke bg-tremor-brand-inverted z-50">
      <TextInput placeholder="Поиск" className="w-[400px] h-10" />
      <div className="flex gap-3">
        <div className="flex items-center justify-center rounded-full border border-ligth-stroke w-[40px] h-[40px] text-light-text">
          <Bell iconStyle="Outline" size={24} />
        </div>
        <div className="flex gap-3">
          <Avatar name={name} size="40" round={true} />
          <div>
            <h2 className="text-base">{name}</h2>
            <h2 className="text-base text-light-text">
              {user?.user?.role === "hr_lead" ? "HR-лид" : "Сотрудник"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
