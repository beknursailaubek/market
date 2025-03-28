"use client";

import { useState, useEffect } from "react";
import { ProductsTable } from "@/app/cabinet/widgets/products/ProductTable";
import { Product } from "@/app/cabinet/entities/product/types";
import { getStaticProducts } from "@/app/cabinet/entities/product/model";
import Link from "next/link";

const ProductsManagePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getStaticProducts());
  }, []);

  return (
    <div className="p-[30px] h-full flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Управление товарами</h1>

        <div className="flex gap-[13px]">
          <button className="w-[145px] h-[32px] flex items-center justify-center text-white text-[13px] font-bold tracking-[-0.05px] bg-[#4880FF] rounded-[8px]">
            Загрузить Excel/XML
          </button>
          <Link
            href="/cabinet/products/manage/add"
            className="w-[145px] h-[32px] flex items-center justify-center text-white text-[13px] font-bold tracking-[-0.05px] bg-[#4880FF] rounded-[8px]"
          >
            Добавить товар
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[31px] bg-[#F9F9FB] border-[0.6px] border-[#D5D5D5] rounded-[8px]">
        <div className="flex text-sm font-bold">
          <div className="w-[145px] h-[40px] flex items-center justify-center gap-[20px] border-r-[0.3px] border-[#979797]">
            <svg width={24} height={24} className="">
              <use xlinkHref="/images/icons/filter.svg#filter"></use>
            </svg>
            Фильтр
          </div>
          <div className="w-[180px] h-[40px] flex items-center justify-center gap-[30px] border-r-[0.3px] border-[#979797]">
            Категория
            <svg width={24} height={24} className="">
              <use xlinkHref="/images/icons/arrow-down.svg#arrow-down"></use>
            </svg>
          </div>
          <div className="w-[206px] h-[40px] flex items-center justify-center gap-[47px] text-[#848484] font-semibold border-r-[0.3px] border-[#979797]">
            Действия
            <svg width={24} height={24} className="opacity-[50%]">
              <use xlinkHref="/images/icons/arrow-down.svg#arrow-down"></use>
            </svg>
          </div>
        </div>
        <div className="mr-[22.5px] text-sm opacity-[50%]">
          <svg width={24} height={24} className="absolute left-[16.5px] top-[50%] translate-y-[-50%] opacity-50">
            <use xlinkHref="/images/icons/search.svg#search"></use>
          </svg>
          Поиск по названию товара
        </div>
      </div>

      <ProductsTable products={products} />

      <div className="flex items-center justify-between mt-[16px]">
        <div className="text-[14px] font-semibold opacity-[0.6]">Показ 1-20 из 78 позиций</div>

        <div className="flex items-center justify-center h-[30px] border-[0.6px] border-[#D5D5D5] bg-white rounded-[8px]">
          <div className="px-[8px] border-r-[0.4px] border-[#D5D5D5]">
            <svg width={24} height={24}>
              <use xlinkHref="/images/icons/arrow-left.svg#arrow-left"></use>
            </svg>
          </div>

          <div className="px-[8px]">
            <svg width={24} height={24} className="">
              <use xlinkHref="/images/icons/arrow-right.svg#arrow-right"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsManagePage;
