import OverviewCard from "@/app/cabinet/shared/ui/OverviewCard/OverviewCard";

const IncomeCard = () => {
  return (
    <OverviewCard
      title="Рейтинг продавца"
      value="82%"
      icon={{
        path: "/images/dashboard/overview-products.png",
        color: "rgba(255, 144, 102, 0.21)",
      }}
    />
  );
};

export default IncomeCard;
