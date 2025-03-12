import TouchOfHappiness from "./components/ touchoOfhappiness";
import Banner from "./components/banner";
import Faqs from "./components/faqs";
import FeedBack from "./components/feedback";
import Footer from "./components/footer";
import ForYou from "./components/foryou ";
import Header from "./components/header";
import MoreShoped from "./components/moreshopped";
import Toadopt from "./components/toadopt ";
import style from "./style.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <MoreShoped />
      <div className={style.foryou}>
        <ForYou />
      </div>
      <div className={style.touchOfHappiness}>
        <TouchOfHappiness />
      </div>
      <div className={style.toadopt}>
        <Toadopt />
      </div>
      <Faqs />
      <div className={style.banner}>
        <Banner />
      </div>

      <FeedBack />
      <Footer />
    </div>
  );
};

export default Home;
