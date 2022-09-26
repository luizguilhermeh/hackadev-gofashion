import { Link } from 'react-router-dom';
import styles from "./SubmitButton.module.css";

function SubmitButton({ text }) {
  return (
    <div>
      <Link to="/notification" >
        <button className={styles.btn}>{text}</button>
        </Link>
    </div>
  );
}
export default SubmitButton;
