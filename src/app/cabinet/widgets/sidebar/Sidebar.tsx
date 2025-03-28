"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  type: "link" | "submenu";
  title: string;
  href?: string;
  icon: string;
  baseHref?: string;
  submenu?: {
    title: string;
    href: string;
  }[];
}

const sidebarItems: SidebarItem[] = [
  {
    type: "link",
    title: "Главная",
    href: "/cabinet",
    icon: "/images/icons/main.svg#main",
  },
  {
    type: "submenu",
    title: "Товары",
    baseHref: "/cabinet/products",
    icon: "/images/icons/products.svg#products",
    submenu: [
      {
        title: "Управление товарами",
        href: "/cabinet/products/manage",
      },
      {
        title: "Загрузить Excel/XML",
        href: "/cabinet/products/upload",
      },
      {
        title: "История загрузок",
        href: "/cabinet/products/upload-history",
      },
    ],
  },
  {
    type: "submenu",
    title: "Заявки",
    baseHref: "/cabinet/requests",
    icon: "/images/icons/requests.svg#requests",
    submenu: [
      {
        title: "Список заявок",
        href: "/cabinet/requests/list",
      },
      {
        title: "Ожидающие",
        href: "/cabinet/requests/pending",
      },
      {
        title: "Завершенные",
        href: "/cabinet/requests/completed",
      },
    ],
  },
  {
    type: "link",
    title: "Сообщения",
    href: "/cabinet/overview",
    icon: "/images/icons/messages.svg#messages",
  },
  {
    type: "link",
    title: "Клиенты",
    href: "/cabinet/overview",
    icon: "/images/icons/clients.svg#clients",
  },
  {
    type: "link",
    title: "Отзывы",
    href: "/cabinet/overview",
    icon: "/images/icons/reviews.svg#reviews",
  },
  // {
  //   type: "link",
  //   title: "Финансы",
  //   href: "/cabinet/overview",
  //   icon: "/images/icons/finance.svg#finance",
  // },
  // {
  //   type: "link",
  //   title: "Аналитка",
  //   href: "/cabinet/overview",
  //   icon: "/images/icons/analytics.svg#analytics",
  // },
  {
    type: "link",
    title: "Настройка",
    href: "/cabinet/overview",
    icon: "/images/icons/settings.svg#settings",
  },
  {
    type: "link",
    title: "Выход",
    href: "/cabinet/overview",
    icon: "/images/icons/logout.svg#logout",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const newOpenMenus: { [key: string]: boolean } = {};
    sidebarItems.forEach((item) => {
      if (item.type === "submenu" && item.submenu) {
        newOpenMenus[item.title] = item.submenu.some((subItem) => pathname === subItem.href);
      }
    });
    setOpenMenus(newOpenMenus);
  }, [pathname]);

  const getLinkClasses = (href: string) => {
    const baseClasses = "text-xs hover:text-brand";
    return pathname === href ? `${baseClasses} font-bold` : `${baseClasses} text-mediumText`;
  };

  return (
    <div className="h-full max-w-[240px] w-full bg-white pl-[25px] pr-[7px]">
      <div className="flex items-center justify-center h-[70px] mb-[11px] text-xl font-extrabold text-brand">
        <span>IDIA Market</span>
      </div>

      <div>
        {sidebarItems.map((item, index) => {
          if (item.type === "link" && item.href) {
            return (
              <div key={index}>
                <Link
                  className={`flex items-center w-full py-[12.5px] leading-[25px] text-sm ${
                    pathname === item.href ? "font-bold" : "text-mediumText"
                  }`}
                  href={item.href}
                >
                  <svg width={22} height={25} className="">
                    <use xlinkHref={item.icon}></use>
                  </svg>
                  <span className="ml-[16px]">{item.title}</span>
                </Link>
              </div>
            );
          } else if (item.type === "submenu" && item.baseHref && item.submenu) {
            const isActive = item.submenu.some((subItem) => pathname === subItem.href);
            return (
              <div key={index}>
                <button
                  className={`flex items-center w-full py-[12.5px] text-sm ${
                    isActive ? "font-bold" : "text-mediumText"
                  }`}
                  onClick={() =>
                    setOpenMenus((prev) => ({
                      ...prev,
                      [item.title]: !prev[item.title],
                    }))
                  }
                >
                  <svg width={22} height={25}>
                    <use xlinkHref={item.icon}></use>
                  </svg>
                  <span className="ml-[16px] mr-auto">{item.title}</span>
                  <svg width={25} height={25}>
                    <use
                      xlinkHref={`/images/icons/arrow-${openMenus[item.title] ? "up" : "down"}.svg#arrow-${
                        openMenus[item.title] ? "up" : "down"
                      }`}
                    ></use>
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openMenus[item.title] ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-y-[10px] ml-[38px]">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link key={subIndex} className={getLinkClasses(subItem.href)} href={subItem.href}>
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
