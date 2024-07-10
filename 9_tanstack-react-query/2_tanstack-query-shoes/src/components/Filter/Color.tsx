import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectedProps } from "./Size";
import { colors } from "../../utils/constants";

const Color = ({ selected, setSelected }: SelectedProps) => {
  const [params, setParams] = useSearchParams();

  // numara state'de varsa çıkartır yoksa ekler
  const toggle = (num: string) => {
    const found = selected.find((i) => i === num);

    if (found) {
      setSelected(selected.filter((i) => i !== num));
    } else {
      setSelected([...selected, num]);
    }
  };

  useEffect(() => {
    if (selected.length > 0) {
      // seçili renk varsa aralarına , koyup urle ekle
      params.set("color", selected.join(","));
      setParams(params);
    } else {
      // seçili renk yoksa urlde parametreyi kaldır
      params.delete("color");
      setParams(params);
    }
  }, [selected]);

  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Renk</h2>

      <div className="grid grid-cols-5 gap-[16px]">
        {colors.map((i) => {
          const found = selected.find((itm) => itm === i.id);

          return (
            <p
              style={{ background: i.code }}
              key={i.id}
              onClick={() => toggle(i.id)}
              className={`py-[8px] px-[16px] text-center rounded-md  cursor-pointer transition hover:bg-zinc-400 text-transparent select-none ${
                found ? "ring-[4px]" : ""
              }`}
            >
              .
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
