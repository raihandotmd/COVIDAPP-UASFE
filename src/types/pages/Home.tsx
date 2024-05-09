import Form from "../../components/Form/Form";
import Hero from "../../components/Hero/Hero";
import StatsProvinces from "../../components/Stats/Province/StatsProvinces";
import StatsTotal from "../../components/Stats/Total/StatsTotal";

const Home = () => {
  return (
    <>
      <Hero />
      <StatsTotal />
      <StatsProvinces />
      <Form />
    </>
  );
};

export default Home;
