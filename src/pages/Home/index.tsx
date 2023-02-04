import {
  Abstracts,
  MainAdvantage,
  MainScreen,
  Services,
  OurDirection,
  Promotions,
  Reviews,
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
    </div>
  );
};
export default Home;
