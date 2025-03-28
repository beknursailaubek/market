import { useState } from "react";
import ProductCard from "@/app/cabinet/widgets/products/ProductCard";
import { Product } from "@/app/cabinet/entities/product/types";

interface ProductsTableProps {
  products: Product[];
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [allSelected, setAllSelected] = useState(false);

  const handleSelectAll = () => {
    const newSelected = products.reduce(
      (acc, product) => ({
        ...acc,
        [product.id.toString()]: !allSelected,
      }),
      {} as Record<string, boolean>
    );
    setSelected(newSelected);
    setAllSelected(!allSelected);
  };

  const handleSelectItem = (id: string, checked: boolean) => {
    setSelected((prev) => {
      const newSelected = { ...prev, [id]: checked };
      const allChecked = products.every((p) => newSelected[p.id.toString()]);
      setAllSelected(allChecked);
      return newSelected;
    });
  };

  return (
    <div className="h-full mt-[23px] bg-white border-[0.3px] border-[#B9B9B9] rounded-[8px]">
      <div className="flex items-center py-[11px] text-sm font-bold border-b-[0.6px] border-[#D5D5D5]">
        <div className="w-[60px] ">
          <input
            type="checkbox"
            className="w-[16px] h-[16px] ml-[16px] border-[1.2px] rounded-[3px] border-[#B3B3B3] cursor-pointer"
            onClick={handleSelectAll}
          />
        </div>
        <div className="w-[87px]" />
        <div className="w-[43%]">Название</div>
        <div className="flex w-[50%]">
          <div className="w-[25%]">Цена</div>
          <div className="w-[25%]">Наличие</div>
          <div className="w-[25%]">Дата</div>
          <div className="w-[25%]">Действия</div>
        </div>
      </div>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selected={!!selected[product.id.toString()]}
            onSelect={(checked) => handleSelectItem(product.id.toString(), checked)}
          />
        ))}
      </div>
    </div>
  );
};
