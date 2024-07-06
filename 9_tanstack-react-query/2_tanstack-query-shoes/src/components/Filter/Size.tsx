import { useState } from "react";

const Size = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const numbers = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  // numara state'de varsa çıkartır yoksa ekler
  const toggle = (num: number) => {
    const found = selected.find((i) => i === num);

    if (found) {
      setSelected(selected.filter((i) => i !== num));
    } else {
      setSelected([...selected, num]);
    }
  };

  return (
    <div className="lg:mt-[20px]">
      <h2 className="font-semibold mb-[16px]">Numara</h2>

      <div className="grid grid-cols-5 gap-[16px]">
        {numbers.map((num) => {
          const found = selected.find((i) => i === num);

          return (
            <p
              key={num}
              onClick={() => toggle(num)}
              className={`py-[8px] px-[16px] lg:px-[0px] text-center rounded-md  cursor-pointer transition hover:bg-zinc-400 ${
                found ? "bg-black text-white" : "bg-white text-dark"
              }`}
            >
              <span>{num}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
