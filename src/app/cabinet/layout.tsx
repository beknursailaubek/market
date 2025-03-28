import React from "react";
import Sidebar from "@/app/cabinet/widgets/sidebar/Sidebar";
import Header from "@/app/cabinet/widgets/header/Header";

export default function CabinetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh w-full bg-cabinet text-darkText">
      <Sidebar />
      <div className="w-full overflow-y-auto">
        <Header />
        <div className="h-[calc(100%-70px)]">{children}</div>
      </div>
    </div>
  );
}
