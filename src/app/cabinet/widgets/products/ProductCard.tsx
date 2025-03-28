import Image from "next/image";
import { Product } from "@/app/cabinet/entities/product/types";

interface ProductCardProps {
  product: Product;
  selected: boolean;
  onSelect: (checked: boolean) => void;
}

const ProductCard = ({ product, selected, onSelect }: ProductCardProps) => {
  return (
    <div
      className={`flex items-center py-[24px] text-[13px] font-semibold border-b-[0.4px] border-[#D8D8D8] ${
        selected ? "bg-gray-100" : ""
      }`}
    >
      <div className="w-[60px]">
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => onSelect(e.target.checked)}
          className="w-[16px] h-[16px] ml-[16px] border-[1.2px] rounded-[3px] border-[#B3B3B3] cursor-pointer"
        />
      </div>
      <div className="h-[60px] w-[87px]">
        <Image
          src={product.image}
          width={60}
          height={60}
          alt={product.name}
          className="w-[60px] h-[60px] bg-[#D8D8D8] rounded-[8px] object-contain"
        />
      </div>
      <div className="w-[43%]">
        <div>{product.name}</div>
        <div className="text-[#D8D8D8]">{product.category}</div>
      </div>
      <div className="flex items-center w-[50%]">
        <div className="flex-[25%]">{product.price.toLocaleString()} тг</div>
        <div className="flex-[25%]">{product.status}</div>
        <div className="flex-[25%]">{product.date}</div>
        <div className="flex-[25%]">
          <div className="flex items-center justify-center h-[32px] w-[96px] border-[0.6px] border-[#D5D5D5] rounded-[8px]">
            <div className="pr-[8px] border-r-[0.6px] border-[#D5D5D5]">
              <svg width={24} height={24} className="cursor-pointer">
                <use xlinkHref="/images/icons/edit.svg#edit" />
              </svg>
            </div>
            <div className="pl-[8px]">
              <svg width={24} height={24} className="cursor-pointer">
                <use xlinkHref="/images/icons/delete.svg#delete" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
