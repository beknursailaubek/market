import OverviewCard from "@/app/cabinet/shared/ui/OverviewCard/OverviewCard";

const ProductsCard = () => {
  return (
    <OverviewCard
      title="Товары"
      value="10 293"
      icon={{
        path: "/images/dashboard/overview-products.png",
        color: "rgba(254, 196, 61, 0.21)",
      }}
    />
  );
};

export default ProductsCard;
