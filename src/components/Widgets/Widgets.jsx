import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./widgets.scss";

const Widgets = ({ type }) => {
  const getDataAccToProps = (type) => {
    switch (type) {
      case "user":
        return {
          title: "USERS",
          isMoney: false,
          link: "see All Users",
          icon: (
            <PersonOutlined
              className="icon"
              style={{ color: "crimson", backgroundColor: "rgb(255,0,0,0.2)" }}
            />
          ),
        };
      case "order":
        return {
          title: "ORDERS",
          isMoney: false,
          link: "View All Users",
          icon: (
            <ShoppingCartOutlined
              className="icon"
              style={{ color: "green", backgroundColor: "rgb(0,128,0,0.2)" }}
            />
          ),
        };
      case "earnings":
        return {
          title: "EARNINGS",
          isMoney: true,
          link: "view net earnings",
          icon: (
            <MonetizationOnOutlined
              className="icon"
              style={{
                color: "purple",
                backgroundColor: "rgb(2128,0,128,0.2)",
              }}
            />
          ),
        };
      case "balance":
        return {
          title: "Balance",
          isMoney: true,
          link: "see details",
          icon: (
            <AccountBalanceWalletOutlined
              className="icon"
              style={{ color: "goldenrod", backgroundColor: "rgb(218,165,32,0.2)" }}
            />
          ),
        };
      default:
        break;
    }
    return {};
  };
  let data = getDataAccToProps(type);
  const temporaryAmount = 100;
  const diff = 100;

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{`${
          data.isMoney ? "$" : ""
        }${temporaryAmount}`}</span>
        <span className="link">Seeall users</span>
      </div>
      <div className="right">
        <div className="persentage positive">
          {diff} % <KeyboardArrowUp />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
