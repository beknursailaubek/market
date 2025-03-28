import RegisterForm from "@/features/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[630px] w-full px-[60px] pt-[60px] pb-[30px] bg-white rounded-[24px]">
        <h2 className="text-[32px] font-bold text-center text-[#202224] mb-[24px]">Регистрация</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
