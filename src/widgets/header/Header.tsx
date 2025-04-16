import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    <div className="relative z-100 flex items-center justify-between h-[70px] w-full py-[15px] px-[30px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center">
        <svg width={24} height={24} className="mr-[25px]">
          <use xlinkHref="/images/icons/bars.svg#bars"></use>
        </svg>

        <div className="relative">
          <svg width={24} height={24} className="absolute left-[16.5px] top-[50%] translate-y-[-50%] opacity-50">
            <use xlinkHref="/images/icons/search.svg#search"></use>
          </svg>
          <input
            type="text"
            placeholder="Поиск по разделам"
            className="w-[387px] pl-[46px] py-[7.5px] pr-[20px] text-[14px] placeholder:text-darkText placeholder:opacity-50 bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[19px] outline-none"
          ></input>
        </div>
      </div>

      <ProfileMenu />
    </div>
  );
};

export default Header;
