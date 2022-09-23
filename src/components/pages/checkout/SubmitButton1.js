import { Link } from 'react-router-dom';
import styles from "./SubmitButton.module1.css";

function SubmitButton1({ text }) {
  return (
    <div>
      <Link to="/notification">
        <button className={styles.btn1}>{text}</button>
        </Link>
    </div>
  );
}
export default SubmitButton1;
