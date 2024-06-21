import Select from "react-select";
import { makes } from "../utils/constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Button = ({ designs }: { designs?: string }) => {
  return (
    <button className={`ml-3 ${designs}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

const SearchBar = () => {
  const [params, setParams] = useSearchParams();

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const options = useMemo(
    () => makes.map((make) => ({ label: make, value: make })),
    []
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    make && !model
      ? setParams({ make })
      : model && !make
      ? setParams({ model })
      : make && model && setParams({ make, model });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <Select
          defaultValue={{
            label: params.get("make") || "",
            value: params.get("make") || "",
          }}
          onChange={(selected) => selected && setMake(selected.value)}
          options={options}
          className="w-full text-black"
        />

        <Button designs="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <img className="absolute ml-4" src="/model-icon.png" width={25} />
        <input
          defaultValue={params.get("model") || ""}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="örn:Civic"
        />
        <Button designs="sm:hidden" />
      </div>

      <Button designs="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
