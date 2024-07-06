import { useState } from "react";

const Price = () => {
  const [value, setValue] = useState<string>("0");

  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Fiyat</h2>

      <input
        onChange={(e) => setValue(e.target.value)}
        className="w-full"
        type="range"
        min={0}
        max={1000}
      />
      <div className="text-xs flex justify-between">
        <span>${value}</span>
        <span>$1000</span>
      </div>
    </div>
  );
};

export default Price;
