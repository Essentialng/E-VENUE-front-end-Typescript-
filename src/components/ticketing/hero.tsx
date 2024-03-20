import { Link } from "react-router-dom";
import styles from "./styles/heroWZ5.module.css";
export const Hero = () => {
  return (
    <div className={styles.containerWZ5}>
      <div className={styles.imgBox}>
        <div>
          <h1>EVENT TICKETS</h1>
          <p>Start a party</p>
          <p>Start a party</p>
        </div>
      </div>
      <div className={styles.contentBox}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Integer augue at vitae sed
          integer porttitor sed ultrices ornare.
        </p>
        <hr />
        <hr />
        <Link to="/create-event">
          <h4>Get Started</h4>
        </Link>{" "}
        <hr />
      </div>
    </div>
  );
};
