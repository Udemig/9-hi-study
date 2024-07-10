import { useState } from "react";

const Size = ({ data }: { data: string }) => {
  const [selected, setSelected] = useState<string>("");

  const arr = data.split(",");

  const numbers = ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];

  const toggle = (num: string) => {
    if (selected === num) {
      // seçli numaraya tekrar tıklarsa seçimi kaldır
      setSelected("");
    } else {
      // farklı bir numaraya tıklarsa onu seç
      setSelected(num);
    }
  };

  return (
    <div>
      <h2 className="mb-3 font-semibold">Numara</h2>

      <div className="grid grid-cols-5 gap-[16px]">
        {numbers.map((num) => {
          const found = selected === num;

          return (
            <button
              disabled={!arr.includes(num)}
              key={num}
              onClick={() => toggle(num)}
              className={`py-[8px] px-[16px] lg:px-[0px] text-center rounded-md  cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#D2D1D3] disabled:text-[#8F8C91] ${
                found ? "bg-black text-white" : "bg-white text-dark"
              }`}
            >
              <span>{num}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
