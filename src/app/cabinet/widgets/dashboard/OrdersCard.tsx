import OverviewCard from "@/app/cabinet/shared/ui/OverviewCard/OverviewCard";

const OrdersCard = () => {
  return (
    <OverviewCard
      title="Заказы"
      value="1 034"
      icon={{
        path: "/images/dashboard/overview-products.png",
        color: "rgba(130, 128, 255, 0.21)",
      }}
    />
  );
};

export default OrdersCard;
