import OrdersCard from "@/widgets/dashboard/OrdersCard";
import ProductsCard from "@/widgets/dashboard/ProductsCard";
// import IncomeCard from "@/app/cabinet/widgets/dashboard/IncomeCard";
// import RatingCard from "@/app/cabinet/widgets/dashboard/RatingCard";
import AnalyticsChart from "@/widgets/dashboard/AnalyticsChart";

const CabinetPage = () => {
  return (
    <div className="p-[30px]">
      <h1 className="text-2xl font-bold">Главная</h1>

      <div className="grid grid-cols-4 gap-[30px] mt-[30px]">
        <OrdersCard />
        <ProductsCard />
        {/* <IncomeCard />
        <RatingCard /> */}
      </div>
      <div className="mt-[35px]">
        <AnalyticsChart />
      </div>
      <div className="mt-[70px]">
        <h3>Заказы</h3>
      </div>
    </div>
  );
};

export default CabinetPage;
