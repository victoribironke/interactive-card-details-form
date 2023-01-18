import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src="/bg-main-mobile.png" alt="bg" className={styles.bg1} />
      <img src="/bg-main-desktop.png" alt="bg" className={styles.bg2} />
      <div className={styles.cont}>
        <div className={styles.front}>
          <img src="/card-logo.svg" alt="logo" className={styles.logo} />
          <p className={styles.number}>{props.number}</p>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.date}>{props.date}</p>
        </div>
        <div className={styles.back}>
          <p className={styles.cvc}>{props.cvc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
