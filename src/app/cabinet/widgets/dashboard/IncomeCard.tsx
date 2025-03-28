import OverviewCard from "@/app/cabinet/shared/ui/OverviewCard/OverviewCard";

const IncomeCard = () => {
  return (
    <OverviewCard
      title="Доход"
      value="1 067 867 тг"
      icon={{
        path: "/images/dashboard/overview-income.png",
        color: "rgba(74, 217, 145, 0.21)",
      }}
    />
  );
};

export default IncomeCard;
