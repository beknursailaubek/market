import Link from "next/link";

const LoginForm = () => {
  return (
    <form>
      <div className="mb-[24px]">
        <label className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]" htmlFor="email">
          Введите Email:
        </label>
        <input
          className="w-full text-[18px] p-[13.5px] bg-[#F1F4F9] border-[1px] border-[#D8D8D8] rounded-[8px] outline-none"
          name="email"
          type="text"
        />
      </div>

      <div className="mb-[24px]">
        <label className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]" htmlFor="password">
          Введите пароль:
        </label>
        <input
          className="w-full text-[18px] p-[13.5px] bg-[#F1F4F9] border-[1px] border-[#D8D8D8] rounded-[8px] outline-none"
          name="password"
          type="password"
        />
      </div>

      <div className="flex justify-between mb-[56px]">
        <div className="flex items-center">
          <input className="w-[24px] h-[24px] mr-[12px] border-[0.6px] rounded-[6px]" id="remember" type="checkbox" />
          <label className="text-[18px] text-[#202224] font-semibold" htmlFor="remember">
            Запомнить
          </label>
        </div>

        <Link href="" className="text-[18px] text-[#5A8CFF] font-bold">
          Забыли пароль?
        </Link>
      </div>

      <button className="mb-[24px] h-[56px] w-full text-[20px] font-bold text-white bg-[#4880FF] rounded-[8px] opacity-[0.9]">
        Войти
      </button>

      <div>
        <span className="text-[18px] text-[#202224] font-semibold opacity-[0.8]">Войти с помощью:</span>
      </div>

      <div>
        <span className="block text-[18px] font-semibold text-center opacity-[0.65]">Нет профиля?</span>
        <Link href="/auth/register" className="block text-[18px] text-[#5A8CFF] font-bold text-center underline">
          Зарегистрироваться
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
