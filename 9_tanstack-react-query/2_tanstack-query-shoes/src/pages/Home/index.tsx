import { useState } from "react";
import Filter from "../../components/Filter";
import Buttons from "./Buttons";
import Hero from "./Hero";
import List from "./List";

const Home = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div>
      <Hero />

      <Buttons open={() => setIsFiltersOpen(true)} />

      <h1 className="text-[20px] md:text-[36px] font-semibold my-[32px]">
        Sana Uygun Seçenekler
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <Filter isOpen={isFiltersOpen} close={() => setIsFiltersOpen(false)} />
        <List />
      </div>
    </div>
  );
};

export default Home;
