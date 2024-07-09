import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectedProps } from "./Size";

const Gender = ({ selected, setSelected }: SelectedProps) => {
  const [params, setParams] = useSearchParams();

  const toggle = (gender: string) => {
    const found = selected.find((i) => i === gender);

    if (found) {
      setSelected(selected.filter((i) => i !== gender));
    } else {
      setSelected([...selected, gender]);
    }
  };

  useEffect(() => {
    if (selected.length > 0) {
      // seçili cinsiyet varsa aralarına , koyup urle ekle
      params.set("gender", selected.join(","));
      setParams(params);
    } else {
      // seçili cinsiyet yoksa urlde parametreyi kaldır
      params.delete("gender");
      setParams(params);
    }
  }, [selected]);

  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Cinsiyet</h2>

      <div className="flex items-center gap-4">
        <input
          checked={selected.includes("men")}
          onChange={() => {
            toggle("men");
          }}
          id="men"
          type="checkbox"
        />
        <label htmlFor="men" className="font-semibold select-none">
          Erkek
        </label>
      </div>

      <div className="flex items-center gap-4 ">
        <input
          checked={selected.includes("women")}
          onChange={() => {
            toggle("women");
          }}
          id="women"
          type="checkbox"
        />
        <label htmlFor="women" className="font-semibold select-none">
          Kadın
        </label>
      </div>
    </div>
  );
};

export default Gender;
