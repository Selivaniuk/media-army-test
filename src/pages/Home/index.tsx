import {
  Abstracts,
  MainAdvantage,
  MainScreen,
  Services,
  OurDirection,
  Promotions,
  Reviews,
  CarServiceMap,
  Consultation,
  MobileApp,
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
      <Consultation />
      <MobileApp />
    </div>
  );
};
export default Home;
