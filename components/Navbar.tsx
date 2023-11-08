import { TextInput } from "@tremor/react";
import Image from "next/image";
import { Bell } from "solar-icon-set";

export const Navbar = () => {
  return (
    <div className="flex sticky top-0 left-0 px-6 py-5 w-full justify-between items-center border-b border-ligth-stroke bg-tremor-brand-inverted">
      <TextInput placeholder="Поиск" className="w-[400px] h-10" />
      <div className="flex gap-3">
        <div className="flex items-center justify-center rounded-full border border-ligth-stroke w-[40px] h-[40px] text-light-text">
          <Bell iconStyle="Outline" size={24} />
        </div>
        <div className="flex gap-3">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.wired.com%2Fphotos%2F5926c126af95806129f50868%2Fmaster%2Fw_2560%252Cc_limit%2FSuperMarioRunTA.jpg&f=1&nofb=1&ipt=361481b257129969bcb7192c65286c3d2455a158337b1ba6f4d36f6f644d7b8f&ipo=images"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
            objectFit="cover"
          />
          <div>
            <h2 className="text-base">Виктор Еблоломов</h2>
            <h2 className="text-base text-light-text">
              Руководитель ML отдела
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
