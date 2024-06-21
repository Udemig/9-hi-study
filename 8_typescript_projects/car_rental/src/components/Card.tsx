import { useState } from "react";
import { CarType } from "../types";
import Button from "./Button";
import Modal from "./Modal";
import generateImage from "../utils/generateImage";

interface Props {
  car: CarType;
}

const Card = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="car-card group">
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* araba fiyatı */}
      <div className="flex mt-6 text-[32px]">
        <span className="font-semibold text-[19px]">₺</span>
        {Math.round(Math.random() * 7000) + 1500}
        <span className="font-semibold text-[19px] self-end">/gün</span>
      </div>

      {/* resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img
          className="w-full h-full object-contain"
          src={generateImage(car)}
        />
      </div>

      {/* alt kısım */}
      <div className="w-full">
        {/* bilgiler */}
        <div className="flex w-full justify-between group-hover:hidden">
          <div className="flex-center flex-col">
            <img width={25} src="/steering-wheel.svg" />
            <p>{car.transmission === "a" ? "Otomatik" : "Manuel"}</p>
          </div>
          <div className="flex-center flex-col">
            <img width={25} src="/tire.svg" />
            <p>{car.drive}</p>
          </div>
          <div className="flex-center flex-col">
            <img width={25} src="/gas.svg" />
            <p>{car.fuel_type}</p>
          </div>
        </div>

        {/* buton */}
        <div className="hidden group-hover:flex">
          <Button
            title="Daha Fazla"
            designs="w-full py-[25px]"
            icon="right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <Modal car={car} isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Card;
