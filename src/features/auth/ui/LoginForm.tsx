"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/features/auth/api/authApi";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.push("/cabinet");
    } catch (err: any) {
      setError(err.message || "Не удалось авторизоваться");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email field */}
      <div className="mb-[24px]">
        <label className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]" htmlFor="email">
          Введите Email:
        </label>
        <input
          className="w-full text-[18px] p-[13.5px] bg-[#F1F4F9] border-[1px] border-[#D8D8D8] rounded-[8px] outline-none"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password field */}
      <div className="mb-[24px]">
        <label className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]" htmlFor="password">
          Введите пароль:
        </label>
        <input
          className="w-full text-[18px] p-[13.5px] bg-[#F1F4F9] border-[1px] border-[#D8D8D8] rounded-[8px] outline-none"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* Remember me & Forgot password */}
      <div className="flex justify-between mb-[56px]">
        <div className="flex items-center">
          <input
            className="w-[24px] h-[24px] mr-[12px] border-[0.6px] rounded-[6px] accent-[#4880FF]"
            id="remember"
            type="checkbox"
          />
          <label className="text-[18px] text-[#202224] font-semibold" htmlFor="remember">
            Запомнить
          </label>
        </div>

        <Link href="/auth/forgot-password" className="text-[18px] text-[#5A8CFF] font-bold">
          Забыли пароль?
        </Link>
      </div>

      {/* Error message */}
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      {/* Submit button */}
      <button
        type="submit"
        className="mb-[24px] h-[56px] w-full text-[20px] font-bold text-white bg-[#4880FF] rounded-[8px] hover:opacity-[0.9] transition-opacity"
      >
        Войти
      </button>

      {/* Social auth & Registration link */}
      <div className="text-center">
        <span className="text-[18px] text-[#202224] font-semibold opacity-[0.8]">Войти с помощью:</span>
        {/* Social buttons here */}
      </div>

      <div className="mt-6">
        <span className="block text-[18px] font-semibold text-center opacity-[0.65] mb-2">Нет профиля?</span>
        <Link
          href="/auth/register"
          className="block text-[18px] text-[#5A8CFF] font-bold text-center underline hover:no-underline"
        >
          Зарегистрироваться
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
