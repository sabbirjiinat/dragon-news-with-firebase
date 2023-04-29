import logo from "../../../src/assets/logo.png";
import moment from "moment/moment";
import { Button,} from "react-bootstrap";
import Marquee from "react-fast-marquee";


const NavigationBar = () => {

  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="m-0">
          <small>Dragon-news-Created-By-Sabbir</small>
        </p>
        <p>{moment().format("MM-D-YYYY")}</p>
      </div>
      <div className="d-flex container bg-dark rounded">
        <Button variant="danger">Danger</Button>
        <Marquee speed={70} className="text-danger">
          I can be a React component, multiple React components, or just some
          text....
        </Marquee>
      </div>
    
    </div>
  );
};

export default NavigationBar;
