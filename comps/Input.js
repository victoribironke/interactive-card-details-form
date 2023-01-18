import { useEffect, useRef, useState } from "react";
import styles from "../styles/Input.module.css";

const Input = (props) => {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const cardName = useRef(null);
  const cardNumber = useRef(null);
  const month = useRef(null);
  const year = useRef(null);
  const cvc = useRef(null);
  const wrapper = useRef(null);
  const [numberError, setNumberError] = useState("");

  useEffect(() => {
    props.show ? (wrapper.current.id = "hide") : (wrapper.current.id = "");
  }, [props.show]);

  const checkInputs = () => {
    let goodtoGo = true;
    [(one, two, three, four)].forEach(
      (on) => (on.current.style.display = "none")
    );
    [cardName, cardNumber, month, year, cvc].forEach((on) =>
      on.current.classList.remove(styles.red)
    );
    if (cardName.current.value == "") {
      one.current.style.display = "block";
      cardName.current.classList.add(styles.red);
      goodtoGo = false;
    }
    if (cardNumber.current.value == "") {
      setNumberError("Cannot be empty");
      two.current.style.display = "block";
      cardNumber.current.classList.add(styles.red);
      goodtoGo = false;
    } else if (!parseInt(cardNumber.current.value)) {
      setNumberError("Wrong format, numbers only");
      two.current.style.display = "block";
      cardNumber.current.classList.add(styles.red);
      goodtoGo = false;
    } else if (cardNumber.current.value.length < 19) {
      setNumberError("Enter a valid number");
      two.current.style.display = "block";
      cardNumber.current.classList.add(styles.red);
      goodtoGo = false;
    }
    if (month.current.value == "" || year.current.value == "") {
      three.current.style.display = "block";
      month.current.value == ""
        ? month.current.classList.add(styles.red)
        : null;
      year.current.value == "" ? year.current.classList.add(styles.red) : null;
      goodtoGo = false;
    }
    if (cvc.current.value == "") {
      four.current.style.display = "block";
      cvc.current.classList.add(styles.red);
      goodtoGo = false;
    }

    if (goodtoGo) {
      props.confirm();
    }
  };

  const formatNumber = (e) => {
    if (e.keyCode !== 8) {
      if (
        cardNumber.current.value.length == 4 ||
        cardNumber.current.value.length == 9 ||
        cardNumber.current.value.length == 14
      ) {
        cardNumber.current.value += " ";
      }
    }
    props.changeNumber(cardNumber.current.value);
  };

  return (
    <div ref={wrapper} className={styles.wrapper}>
      <p className={styles.label}>Cardholder Name</p>
      <input
        type="text"
        className={styles.input}
        ref={cardName}
        onChange={() => props.changeName(cardName.current.value)}
        placeholder="e.g. Jane Appleseed"
      />
      <p ref={one} className={styles.error}>
        Cannot be empty
      </p>
      <p className={styles.label}>Card Number</p>
      <input
        type="text"
        className={styles.input}
        ref={cardNumber}
        maxLength="19"
        onKeyDown={(e) => formatNumber(e)}
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <p ref={two} className={styles.error}>
        {numberError}
      </p>
      <div className={styles.titles}>
        <p className={styles.label}>exp. date (mm/yy)</p>
        <p className={styles.label}>CVC</p>
      </div>
      <div className={styles.inputs}>
        <input
          type="number"
          ref={month}
          placeholder="MM"
          onChange={() => props.changeMonth(month.current.value)}
          maxLength="2"
          className={styles.input}
        />
        <input
          type="number"
          ref={year}
          placeholder="YY"
          onChange={() => props.changeYear(year.current.value)}
          maxLength="2"
          className={styles.input}
        />
        <input
          type="number"
          placeholder="e.g. 123"
          maxLength="3"
          onChange={() => props.changeCVC(cvc.current.value)}
          ref={cvc}
          className={`${styles.input} ${styles.cvc}`}
        />
      </div>
      <div className={styles.errors}>
        <p ref={three} className={styles.error}>
          Can't be blank
        </p>
        <p ref={four} className={styles.error}>
          Can't be blank
        </p>
      </div>
      <button onClick={checkInputs} className={styles.button}>
        Confirm
      </button>
    </div>
  );
};

export default Input;
