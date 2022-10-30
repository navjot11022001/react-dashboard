import FeaturedCharts from "../../components/FeaturedCharts/FeaturedCharts";
import Navbar from "../../components/Navbar/Navbar";
import NormalCharts from "../../components/NormalCharts/NormalCharts";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type={"user"} />
          <Widgets type={"order"} />
          <Widgets type={"earnings"} />
          <Widgets type={"balance"} />
        </div>
        <div className="charts">
          <FeaturedCharts />
          <NormalCharts />
        </div>
      </div>
    </div>
  );
};

export default Home;
