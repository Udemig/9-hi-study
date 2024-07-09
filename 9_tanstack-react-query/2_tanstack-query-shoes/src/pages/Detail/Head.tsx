import { Shoe } from "../../types";

const Head = ({ data }: { data: Shoe }) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="px-4 py-3 bg-blue text-white rounded-[12px] w-fit">
        New Release
      </span>
      <h1 className="text-3xl font-semibold">{data.name}</h1>
      <p>${data.price}</p>
    </div>
  );
};

export default Head;
