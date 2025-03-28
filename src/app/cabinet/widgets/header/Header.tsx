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

          <div>
            <div className="mb-[5px] text-sm font-bold text-[#404040]">Gulbanu</div>
            <div className="text-xs font-semibold text-[#565656]">Ваш ID: 165287</div>
          </div>

          <div className="flex items-center justify-center ml-[8px] border-[0.2px] border-[#5C5C5C] rounded-[50%]">
            <svg width={18} height={18}>
              <use xlinkHref="/images/icons/chevron-down.svg#chevron-down"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
