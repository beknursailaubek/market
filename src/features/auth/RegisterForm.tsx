import Link from "next/link";

const LoginForm = () => {
  return (
    <form>
      <div className="mb-[24px]">
        <label className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]" htmlFor="email">
          Email:
        </label>
        <input
          className="w-full text-[18px] p-[13.5px] bg-[#F1F4F9] border-[1px] border-[#D8D8D8] rounded-[8px] outline-none"
          name="email"
          type="text"
        />
      </div>

      <div className="mb-[24px]">
        <label className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]" htmlFor="password">
          Пароль:
        </label>
        <input
          className="w-full text-[18px] p-[13.5px] bg-[#F1F4F9] border-[1px] border-[#D8D8D8] rounded-[8px] outline-none"
          name="password"
          type="password"
        />
      </div>

      <div className="mb-[24px]">
        <label className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]" htmlFor="password">
          Подтвердите пароль:
        </label>
        <input
          className="w-full text-[18px] p-[13.5px] bg-[#F1F4F9] border-[1px] border-[#D8D8D8] rounded-[8px] outline-none"
          name="password"
          type="password"
        />
      </div>

      <div className="mb-[56px]">
        <div className="flex items-center">
          <input className="w-[24px] h-[24px] mr-[12px] border-[0.6px] rounded-[6px]" id="remember" type="checkbox" />
          <label className="text-[16px] text-[#202224] opacity-[0.8]" htmlFor="remember">
            Я согласен с соглашением и политикой конфиденциальности
          </label>
        </div>
      </div>

      <button className="mb-[24px] h-[56px] w-full text-[20px] font-bold text-white bg-[#4880FF] rounded-[8px] opacity-[0.9]">
        Зарегистрироваться
      </button>

      <div>
        <span className="text-[18px] text-[#202224] font-semibold opacity-[0.8]">Войти с помощью:</span>
      </div>

      <div>
        <span className="block text-[18px] font-semibold text-center opacity-[0.65]">Уже есть аккаунт?</span>
        <Link href="/auth/login" className="block text-[18px] text-[#5A8CFF] font-bold text-center underline">
          Войти
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
