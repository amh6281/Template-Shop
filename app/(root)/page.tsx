import { Banner } from "@/components/atom";
import { CategoryList } from "@/components/molecule";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Banner />
      <CategoryList />
    </div>
  );
};

export default Home;
