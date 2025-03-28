"use client";
import { useState } from "react";

const ProductsManageAddPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    article: "010000",
    availability: "in_stock",
    condition: "new",
    price: "",
    description: "",
    purpose: "",
    shelfType: "",
    brand: "",
    height: "",
    length: "",
    width: "",
    colors: "",
    shelves: "",
    images: [],
  });

  const [errors, setErrors] = useState({
    name: false,
    category: false,
    price: false,
    description: false,
    purpose: false,
    shelfType: false,
    brand: false,
    height: false,
    length: false,
    width: false,
    colors: false,
    shelves: false,
  });

  const validateStep1 = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = true;
      valid = false;
    }

    if (!formData.category) {
      newErrors.category = true;
      valid = false;
    }

    if (!formData.price.match(/^\d+$/)) {
      newErrors.price = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const validateStep2 = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.purpose) {
      newErrors.purpose = true;
      valid = false;
    }

    if (!formData.shelfType) {
      newErrors.shelfType = true;
      valid = false;
    }

    if (!formData.brand) {
      newErrors.brand = true;
      valid = false;
    }

    if (!formData.height) {
      newErrors.height = true;
      valid = false;
    }

    if (!formData.length) {
      newErrors.length = true;
      valid = false;
    }

    if (!formData.width) {
      newErrors.width = true;
      valid = false;
    }

    if (!formData.colors) {
      newErrors.colors = true;
      valid = false;
    }

    if (!formData.shelves) {
      newErrors.shelves = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSave = () => {
    if (validateStep2()) {
      // Логика сохранения
      console.log("Saving product:", formData);
    }
  };

  return (
    <div className="p-[30px] h-full flex flex-col overflow-y-auto">
      {step === 1 && (
        <>
          <div className="mb-[25px]">
            <h1 className="text-2xl font-bold">Добавить товар</h1>
            <p>
              Максимально подробно заполните представленные ниже поля. <span className="font-bold">Важно!</span>{" "}
              Уникальное и детальное описание товара поможет вашему магазину занять более высокие позиции в маркетплейсе
              и привлечь больше покупателей.
            </p>
          </div>

          <div className="py-[27px] pl-[45px] bg-white rounded-[14px]">
            <p className="mb-[16px] text-[16px] text-[#606060] font-semibold">Загрузите изображение 0/10</p>

            <div className="flex items-center justify-center w-[80px] h-[80px] mb-[5px] bg-[#ECECEE] rounded-[50%]">
              <svg width={26} height={21} className="">
                <use xlinkHref="/images/icons/camera.svg#camera"></use>
              </svg>
            </div>

            <p className="mb-[18px] text-[12px] text-[#4379EE] font-semibold">Требование к изображениям</p>

            {/* Название товара */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="name">
                Название товара <span className="text-[#EF3826]">*</span>
              </label>
              <input
                className={`w-[50%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Например, Торговый стеллаж островной"
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setErrors({ ...errors, name: false });
                }}
              />
            </div>

            {/* Категория */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="category">
                Категория <span className="text-[#EF3826]">*</span>
              </label>
              <input
                className={`w-[25%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                  errors.category ? "border-red-500" : ""
                }`}
                placeholder="Выберите категорию"
                id="category"
                type="text"
                value={formData.category}
                onChange={(e) => {
                  setFormData({ ...formData, category: e.target.value });
                  setErrors({ ...errors, category: false });
                }}
              />
            </div>

            {/* Артикул */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="article">
                Артикул
              </label>
              <input
                className="w-[20%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none"
                value={formData.article}
                onChange={(e) => setFormData({ ...formData, article: e.target.value })}
                id="article"
                type="text"
              />
            </div>

            {/* Дополнительные рубрики */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="additional">
                Дополнительные рубрики
              </label>
              <input
                className="w-[25%] mb-[5px] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none"
                placeholder="Выберите рубрику"
                id="additional"
                type="text"
              />
              <p className="mb-[18px] text-[12px] text-[#4379EE] font-semibold">Для чего добавлять рубрику?</p>
            </div>

            {/* Наличие */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="availability">
                Наличие <span className="text-[#EF3826]">*</span>
              </label>
              <select
                className="w-[20%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none"
                id="availability"
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              >
                <option value="in_stock">В наличии</option>
                <option value="on_order">Под заказ</option>
                <option value="out_of_stock">Нет в наличии</option>
              </select>
            </div>

            {/* Состояние */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="condition">
                Состояние <span className="text-[#EF3826]">*</span>
              </label>
              <select
                className="w-[20%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none"
                id="condition"
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              >
                <option value="new">Новый</option>
                <option value="used">Б/у</option>
              </select>
            </div>

            {/* Цена */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="price">
                Цена <span className="text-[#EF3826]">*</span>
              </label>
              <input
                className={`w-[20%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none placeholder:text-right ${
                  errors.price ? "border-red-500" : ""
                }`}
                placeholder="тг."
                id="price"
                type="text"
                value={formData.price}
                onChange={(e) => {
                  setFormData({ ...formData, price: e.target.value.replace(/[^0-9]/g, "") });
                  setErrors({ ...errors, price: false });
                }}
              />
            </div>

            <div className="mt-[28px]">
              <button
                className={`w-[20%] px-[90px] py-[14px] rounded-[12px] text-[18px] text-white transition-colors ${
                  !formData.name || !formData.category || !formData.price
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#487fffe7] hover:bg-blue-600"
                }`}
                onClick={handleNext}
                disabled={!formData.name || !formData.category || !formData.price}
              >
                Далее
              </button>
            </div>
          </div>
        </>
      )}

      {/* Второй шаг */}
      {step === 2 && (
        <div>
          <div className="mb-[25px]">
            <h1 className="text-2xl font-bold">Добавить товар</h1>
          </div>
          <div className="py-[27px] pl-[45px] bg-white rounded-[14px]">
            {/* Описание товара */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="description">
                Описание товара
              </label>
              <textarea
                className={`w-[50%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                  errors.description ? "border-red-500" : ""
                }`}
                placeholder="Описание не должно включать сведения о вашем магазине..."
                id="description"
                value={formData.description || ""}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                  setErrors({ ...errors, description: false });
                }}
              />
            </div>

            {/* Назначение */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="purpose">
                Назначение <span className="text-[#EF3826]">*</span>
              </label>
              <select
                className={`w-[25%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] ${
                  errors.purpose ? "border-red-500" : ""
                }`}
                id="purpose"
                value={formData.purpose || ""}
                onChange={(e) => {
                  setFormData({ ...formData, purpose: e.target.value });
                  setErrors({ ...errors, purpose: false });
                }}
              >
                <option value="">Выберите</option>
                <option value="trade">Торговое оборудование</option>
                <option value="storage">Складское оборудование</option>
              </select>
            </div>

            {/* Тип стеллажа */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="shelfType">
                Тип стеллажа <span className="text-[#EF3826]">*</span>
              </label>
              <select
                className={`w-[25%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                  errors.shelfType ? "border-red-500" : ""
                }`}
                id="shelfType"
                value={formData.shelfType || ""}
                onChange={(e) => {
                  setFormData({ ...formData, shelfType: e.target.value });
                  setErrors({ ...errors, shelfType: false });
                }}
              >
                <option value="">Выберите</option>
                <option value="metal">Металлический</option>
                <option value="wood">Деревянный</option>
              </select>
            </div>

            {/* Бренд */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="brand">
                Бренд <span className="text-[#EF3826]">*</span>
              </label>
              <input
                className={`w-[25%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                  errors.brand ? "border-red-500" : ""
                }`}
                placeholder="Выберите"
                id="brand"
                type="text"
                value={formData.brand || ""}
                onChange={(e) => {
                  setFormData({ ...formData, brand: e.target.value });
                  setErrors({ ...errors, brand: false });
                }}
              />
            </div>

            {/* Габаритные размеры */}
            <div className="flex gap-[20px] mb-[18px]">
              <div className="w-[30%]">
                <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="height">
                  Высота, см <span className="text-[#EF3826]">*</span>
                </label>
                <input
                  className={`w-full p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                    errors.height ? "border-red-500" : ""
                  }`}
                  type="number"
                  id="height"
                  value={formData.height || ""}
                  onChange={(e) => {
                    setFormData({ ...formData, height: e.target.value });
                    setErrors({ ...errors, height: false });
                  }}
                />
              </div>
              <div className="w-[30%]">
                <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="length">
                  Длина, см <span className="text-[#EF3826]">*</span>
                </label>
                <input
                  className={`w-full p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                    errors.length ? "border-red-500" : ""
                  }`}
                  type="number"
                  id="length"
                  value={formData.length || ""}
                  onChange={(e) => {
                    setFormData({ ...formData, length: e.target.value });
                    setErrors({ ...errors, length: false });
                  }}
                />
              </div>
              <div className="w-[30%]">
                <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="width">
                  Ширина / Глубина, см <span className="text-[#EF3826]">*</span>
                </label>
                <input
                  className={`w-full p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                    errors.width ? "border-red-500" : ""
                  }`}
                  type="number"
                  id="width"
                  value={formData.width || ""}
                  onChange={(e) => {
                    setFormData({ ...formData, width: e.target.value });
                    setErrors({ ...errors, width: false });
                  }}
                />
              </div>
            </div>

            {/* Цвета */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="colors">
                Цвета <span className="text-[#EF3826]">*</span>
              </label>
              <select
                className={`w-[25%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                  errors.colors ? "border-red-500" : ""
                }`}
                id="colors"
                value={formData.colors || ""}
                onChange={(e) => {
                  setFormData({ ...formData, colors: e.target.value });
                  setErrors({ ...errors, colors: false });
                }}
              >
                <option value="">Выберите</option>
                <option value="gray">Серый</option>
                <option value="black">Черный</option>
              </select>
            </div>

            {/* Полки */}
            <div className="mb-[18px]">
              <label className="block mb-[5px] text-[14px] text-[#606060] font-extrabold" htmlFor="shelves">
                Полки <span className="text-[#EF3826]">*</span>
              </label>
              <select
                className={`w-[25%] p-[16px] bg-[#F5F6FA] border-[0.6px] border-[#D5D5D5] rounded-[4px] outline-none ${
                  errors.shelves ? "border-red-500" : ""
                }`}
                id="shelves"
                value={formData.shelves || ""}
                onChange={(e) => {
                  setFormData({ ...formData, shelves: e.target.value });
                  setErrors({ ...errors, shelves: false });
                }}
              >
                <option value="">Выберите</option>
                <option value="fixed">Фиксированные</option>
                <option value="adjustable">Регулируемые</option>
              </select>
            </div>

            {/* Кнопка сохранения */}
            <button
              className={`w-[20%] px-[90px] py-[14px] mt-[28px] rounded-[12px] text-[18px] text-white transition-colors ${
                Object.values(formData).every(Boolean)
                  ? "bg-[#487fffe7] hover:bg-blue-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={handleSave}
              disabled={!Object.values(formData).every(Boolean)}
            >
              Сохранить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsManageAddPage;
