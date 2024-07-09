import { useSearchParams } from "react-router-dom";
import Color from "./Color";
import Gender from "./Gender";
import Price from "./Price";
import Size from "./Size";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const Filter = ({ isOpen, close }: Props) => {
  const [params, setParams] = useSearchParams();

  const [size, setSize] = useState<string[]>(
    params.get("size")?.split(",") || []
  );

  const [color, setColor] = useState<string[]>(
    params.get("color")?.split(",") || []
  );

  const [gender, setGender] = useState<string[]>(
    params.get("gender")?.split(",") || []
  );

  const [value, setValue] = useState<string>(params.get("price") || "0");

  const handleReset = () => {
    setParams({});
    setSize([]);
    setColor([]);
    setGender([]);
    setValue("0");
  };

  return (
    <div
      className={`${
        isOpen
          ? "max-lg:fixed max-lg:inset-0 max-lg:grid max-lg:place-items-center max-lg:bg-zinc-900 max-lg:bg-opacity-60 z-10"
          : "max-lg:hidden"
      }  col-span-1 `}
    >
      <div className="max-lg:max-w-lg max-lg:mx-auto max-lg:h-[80vh] ">
        <h2 className="text-xl font-semibold max-lg:bg-white max-lg:flex max-lg:justify-between max-lg:p-4 rounded-t-md">
          Filteler
          <button className="lg:hidden" onClick={close}>
            X
          </button>
        </h2>

        <form className="max-lg:p-5  bg-gray h-full flex flex-col gap-[24px] rounded-b-md">
          <Size selected={size} setSelected={setSize} />
          <Color selected={color} setSelected={setColor} />
          <Gender selected={gender} setSelected={setGender} />
          <Price value={value} setValue={setValue} />

          <button
            className="border p-2 rounded-lg hover:bg-dark hover:text-white transition"
            type="reset"
            onClick={handleReset}
          >
            Sıfırla
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
