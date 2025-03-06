import TouchOfHappiness from "./components/ touchoOfhappiness";
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
    </div>
  );
};

export default Home;
