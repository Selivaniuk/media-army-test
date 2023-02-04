import {
  Abstracts,
  MainAdvantage,
  MainScreen,
  Services,
  OurDirection,
  Promotions,
  Reviews,
  CarServiceMap,
} from "components";

const Home = () => {
  return (
    <div>
      <MainScreen />
      <MainAdvantage />
      <Services />
      <Abstracts />
      <OurDirection />
      <Promotions />
      <Reviews />
      <CarServiceMap />
    </div>
  );
};
export default Home;
