import Color from "./Color";
import Gender from "./Gender";
import Price from "./Price";
import Size from "./Size";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const Filter = ({ isOpen, close }: Props) => {
  return (
    <div
      className={`${
        isOpen
          ? "max-lg:fixed max-lg:inset-0 max-lg:grid max-lg:place-items-center max-lg:bg-zinc-400 max-lg:bg-opacity-40"
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

        <div className="max-lg:p-5  bg-gray h-full flex flex-col gap-[24px] rounded-b-md">
          <Size />
          <Color />
          <Gender />
          <Price />
        </div>
      </div>
    </div>
  );
};

export default Filter;
