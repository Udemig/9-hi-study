import { Shoe } from "../../types";

type Props = {
  item: Shoe;
};

const Card = ({ item }: Props) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="bg-white rounded-[16px] lg:rounded-[28px] p-[8px]">
          <div className="relative rounded-[12px] lg:rounded-[24px]">
            <span className="absolute rounded-tl-[24px]  rounded-br-[24px] bg-red-500 px-4 py-3 font-semibold text-white text-sm">
              New
            </span>
            <img src="/shoe.png" />
          </div>
        </div>

        <h2 className="font-bold line-clamp-2 mt-5 mb-4 lg:text-[20px]">
          {item.name}
        </h2>
      </div>

      <button className="bg-dark text-white font-medium px-4 py-2 rounded-[8px] transition hover:bg-black ">
        Ürünü Görüntüle - ${item.price}
      </button>
    </div>
  );
};

export default Card;
