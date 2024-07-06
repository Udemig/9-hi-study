import Hero from "./Hero";
import Container from "../../components/Container";
import List from "./List";
import Filter from "./Filter";

const Home = () => {
  return (
    <Container designs="my-5">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-4 max-lg:mt-10 lg:gap-5">
        <Filter />
        <div className="col-span-3">
          <List />
        </div>
      </div>
    </Container>
  );
};

export default Home;
