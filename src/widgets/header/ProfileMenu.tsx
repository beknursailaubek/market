"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";

const ProfileMenu = () => {
  const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!user) {
    return <Link href="/auth/login">Войти</Link>;
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-[60px]">
        {/* <div className="text-sm font-semibold text-[#646464]">Баланс: 10 648 Т</div> */}

        <div className="flex items-center">
          <div className="relative mr-[20px]">
            <svg width={24} height={26}>
              <use xlinkHref="/images/icons/notification.svg#notification"></use>
            </svg>

            <div className="absolute top-[-6px] right-[-6px] w-[16px] h-[16px] flex items-center justify-center box-content text-xs font-bold text-white bg-[#F93C65] border-[1px] border-[#f93c658c] rounded-[50%] ">
              6
            </div>
          </div>

          {user ? (
            <div>
              <div className="mb-[5px] text-sm font-bold text-[#404040]">{user.name || "Гость"}</div>
              <div className="text-xs font-semibold text-[#565656]">Ваш ID: {user.id || "Неизвестно"}</div>
            </div>
          ) : (
            <div>
              <div className="mb-[5px] text-sm font-bold text-[#404040]">Гость</div>
              <div className="text-xs font-semibold text-[#565656]">Ваш ID:</div>
            </div>
          )}

          <div
            onClick={handleToggle}
            className="flex items-center justify-center ml-[8px] border-[0.2px] border-[#5C5C5C] rounded-[50%] cursor-pointer"
          >
            <svg width={18} height={18}>
              <use xlinkHref="/images/icons/chevron-down.svg#chevron-down"></use>
            </svg>
          </div>
        </div>
      </div>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute top-[56px] right-0 bg-white rounded-[14px] shadow-md z-50" ref={menuRef}>
          <Link
            href="/profile/settings"
            className="flex gap-[10px] items-center w-full py-[12px] px-[20px] border-b-[0.5px] border-[rgba(151, 151, 151, 0.25)]"
          >
            <svg width={18} height={16} className="w-[18px] h-[16px] text-blue-500">
              <use xlinkHref="/images/icons/profile-settings.svg#profile-settings"></use>
            </svg>
            <span className="text-[14px] text-[#404040] font-semibold whitespace-nowrap">Настройка аккаунта</span>
          </Link>

          <Link
            href="/profile/change-password"
            className="flex gap-[10px] items-center w-full py-[12px] px-[20px] border-b-[0.5px] border-[rgba(151, 151, 151, 0.25)]"
          >
            <svg width={14} height={16} className="w-[16px] h-[16px] text-pink-500">
              <use xlinkHref="/images/icons/change-password.svg#change-password"></use>
            </svg>
            <span className="text-[14px] text-[#404040] font-semibold whitespace-nowrap">Изменить пароль</span>
          </Link>

          <button onClick={() => logout()} className="flex gap-[10px] items-center w-full py-[12px] px-[20px]">
            <svg width={14} height={16} className="w-[16px] h-[16px] text-red-500">
              <use xlinkHref="/images/icons/profile-logout.svg#profile-logout"></use>
            </svg>
            <span className="text-[14px] text-[#404040] font-semibold whitespace-nowrap">Выйти</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
