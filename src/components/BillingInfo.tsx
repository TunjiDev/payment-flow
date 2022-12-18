import React, { useState, useRef } from "react";

import styles from "./BillingInfo.module.css";

const BillingInfo: React.FC<{ onClick: () => void}> = (props) => {
  const [inputHasError, setInputHasError] = useState<boolean>(false);
  const cardOwnerRef = useRef<HTMLInputElement>(null);
  const cardTypeRef = useRef<HTMLSelectElement>(null);
  const cardDetailsRef = useRef<HTMLInputElement>(null);
  const expiryDateRef = useRef<HTMLInputElement>(null);
  const cvvRef = useRef<HTMLInputElement>(null);

  const nextHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (
      cardOwnerRef.current!.value.trim() !== "" &&
      cardTypeRef.current!.value.trim() !== "" &&
      cardDetailsRef.current!.value.trim() !== "" &&
      expiryDateRef.current!.value.trim() !== "" &&
      cvvRef.current!.value.trim() !== ""
    ) {
      props.onClick();
    }
    setInputHasError(true);
    setTimeout(() => {
      setInputHasError(false);
    }, 3000);
  };

  return (
    <>
      <form className={styles.billingInfo__form}>
        <label className={styles.billingInfo__inputLabels} htmlFor="card-owner-name">
          Name on Card <span className={styles.billingInfo__asterisk}>*</span>
        </label>
        <br />
        <input
          className={styles.billingInfo__cardOwnerNameInput}
          id="card-owner-name"
          type="text"
          name="card-owner-name"
          placeholder="Card Owner's Name.."
          ref={cardOwnerRef}
        />
        <br />
        <br />

        <label className={styles.billingInfo__inputLabels} htmlFor="card-type">
          Card Type <span className={styles.billingInfo__asterisk}>*</span>
        </label>
        <br />
        <select className={styles.billingInfo__cardTypeInput} name="card-type" id="card-type" ref={cardTypeRef}>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="verve">Verve</option>
        </select>
        <br />
        <br />

        <div className={styles.billingInfo__DetailsExpiryCvvBox}>
          <div>
            <label className={styles.billingInfo__inputLabels} htmlFor="card-details">
              Card details <span className={styles.billingInfo__asterisk}>*</span>
            </label>
            <br />
            <input
              className={styles.billingInfo__cardDetails}
              id="card-details"
              type="text"
              name="card-details"
              placeholder=".... .... .... ...."
              ref={cardDetailsRef}
            />
          </div>
          <div>
            <label className={styles.billingInfo__inputLabels} htmlFor="expiry-date">
              Expiry date <span className={styles.billingInfo__asterisk}>*</span>
            </label>
            <br />
            <input
              className={styles.billingInfo__cardExpiry}
              id="expiry-date"
              type="text"
              name="expiry-date"
              placeholder="e.g 01 / 20"
              ref={expiryDateRef}
            />
          </div>
          <div>
            <label className={styles.billingInfo__inputLabels} htmlFor="cvv">
              CVV <span className={styles.billingInfo__asterisk}>*</span>
            </label>
            <br />
            <input
              className={styles.billingInfo__cvv}
              id="cvv"
              type="text"
              name="cvv"
              placeholder="e.g 123"
              ref={cvvRef}
            />
          </div>
        </div>

        <br />
        <br />

        {inputHasError && <p className={styles.billingInfo__errorMsg}>Please fill in all fields!</p>}

        <div>
          <button onClick={nextHandler} className={styles.billingInfo__btnNext}>
            Next
          </button>
          <button onClick={(e: React.MouseEvent) => e.preventDefault()} className={styles.billingInfo__btnCancel}>
            Cancel Payment
          </button>
        </div>
      </form>
    </>
  );
}

export default BillingInfo;