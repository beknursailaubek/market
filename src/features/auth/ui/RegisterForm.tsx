"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register } from "@/features/auth/api/authApi";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agreement) {
      return setError("Необходимо согласие с политикой");
    }

    try {
      await register(email, password);
      router.push("/cabinet");
    } catch (err: any) {
      setError(err.message || "Ошибка регистрации");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[24px]">
        <label className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]" htmlFor="email">
          Email:
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

      <div className="mb-[24px]">
        <label className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]" htmlFor="password">
          Пароль:
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

      <div className="mb-[24px]">
        <label
          className="block mb-[2px] text-[#202224] text-[18px] font-semibold opacity-[0.8]"
          htmlFor="confirmPassword"
        >
          Подтвердите пароль:
        </label>
        <input
          className="w-full text-[18px] p-[13.5px] bg-[#F1F4F9] border-[1px] border-[#D8D8D8] rounded-[8px] outline-none"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-[56px]">
        <div className="flex items-center">
          <input
            className="w-[24px] h-[24px] mr-[12px] border-[0.6px] rounded-[6px]"
            id="agreement"
            type="checkbox"
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <label className="text-[16px] text-[#202224] opacity-[0.8]" htmlFor="agreement">
            Я согласен с <span className="italic">соглашением</span> и
            <span className="italic">политикой конфиденциальности</span>
          </label>
        </div>
      </div>

      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

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

export default RegisterForm;
