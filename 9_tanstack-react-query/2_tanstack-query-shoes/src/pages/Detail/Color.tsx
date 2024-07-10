import { colors } from "../../utils/constants";

const Color = ({ data }: { data: string }) => {
  const arr = data.split(",");

  return (
    <div>
      <h2 className="mb-3 font-semibold">Renkler</h2>

      <div className="flex gap-4">
        {arr.map((item) => {
          // id'si bileenen elemanın renk koduna eirşmek için colors dizisnde elemanı aradık
          const color = colors.find((i) => i.id === item);

          return (
            <div
              style={{ background: color?.code || "gray" }}
              className="h-8 w-8 rounded-full cursor-pointer"
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
