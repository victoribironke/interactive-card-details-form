import { useEffect, useRef } from "react";
import styles from "../styles/Thanks.module.css";

const Thanks = (props) => {
  const wrapper = useRef(null);
  useEffect(() => {
    !props.show ? (wrapper.current.id = "hide") : (wrapper.current.id = "");
  }, [props.show]);

  return (
    <div ref={wrapper} className={styles.wrapper}>
      <img className={styles.img} src="/icon-complete.svg" alt="done" />
      <p className={styles.up}>Thank you!</p>
      <p className={styles.down}>We've added your card details</p>
      <button onClick={() => props.continue()} className={styles.button}>
        Continue
      </button>
    </div>
  );
};

export default Thanks;
