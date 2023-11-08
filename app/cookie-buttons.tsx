"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function DismissButton() {
  const router = useRouter();

  return (
    <button
      className="contents underline text-blue-600"
      onClick={() => {
        Cookies.set("template-banner-hidden", "true");
        router.refresh();
      }}
    >
      reject them
    </button>
  );
}

export function AcceptButton() {
  const router = useRouter();
  
  return (
    <button
      className="text-white text-[13px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[220px] h-10 flex items-center justify-center whitespace-nowrap"
      onClick={() => {
        Cookies.set("template-banner-hidden", "true");
        router.refresh();
      }}
    >
      Accept cookies
    </button>
  );
}
