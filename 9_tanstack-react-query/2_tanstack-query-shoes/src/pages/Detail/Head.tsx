import { Shoe } from "../../types";
import calcDiscount from "../../utils/calcDiscount";

const Head = ({ data }: { data: Shoe }) => {
  // indirim oranı geldiyse indirimli fiyatı hesapla yoksa normal fiyatı al
  const price = calcDiscount(data.price, data.discount);

  return (
    <div className="flex flex-col gap-4">
      <span
        className={`px-4 py-3 ${
          data.discount ? "bg-orange-400" : "bg-blue-500"
        } text-white rounded-[12px] w-fit`}
      >
        {data.discount ? `%${data.discount} İndirim` : "New Release"}
      </span>

      <h1 className="text-3xl font-semibold">{data.name}</h1>

      <p className="text-[24px]">
        <span className="text-blue font-semibold pe-3">${price}</span>
        <span className="line-through">(${data.price})</span>
      </p>
    </div>
  );
};

export default Head;
