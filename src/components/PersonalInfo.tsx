import React, { useState, useRef, useContext } from "react";

import { PaymentContext } from "../store/PaymentContext";

import styles from "./PersonalInfo.module.css";

type PersonalInfoProps = {
  children?: React.ReactNode;
};

const PersonalInfo: React.FC<PersonalInfoProps> = (props) => {
  const paymentCtx = useContext(PaymentContext);
  const [inputHasError, setInputHasError] = useState<boolean>(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const address1InputRef = useRef<HTMLInputElement>(null);
  const address2InputRef = useRef<HTMLInputElement>(null);
  const lgaInputRef = useRef<HTMLInputElement>(null);

  const nextHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (
      nameInputRef.current!.value.trim() !== "" &&
      emailInputRef.current!.value.includes("@") &&
      address1InputRef.current!.value.trim() !== "" &&
      address2InputRef.current!.value.trim() !== "" &&
      lgaInputRef.current!.value.trim() !== ""
    ) {
      paymentCtx.personalInfonextBtnHandler();
    }

    setInputHasError(true);
    setTimeout(() => {
      setInputHasError(false);
    }, 3000);
  };

  return (
    <>
      <form className={styles.personalInfo__form}>
        <label className={styles.personalInfo__inputLabelsnText} htmlFor="name">
          Name
        </label>
        <br />
        <input
          className={styles.personalInfo__nameInput}
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name.."
          ref={nameInputRef}
        />
        <br />
        <br />

        <label className={styles.personalInfo__inputLabelsnText} htmlFor="email">
          Email Address
        </label>
        <br />
        <p style={{ fontSize: "14px" }}>The purhcase receipt would be sent to this email address</p>
        <input
          className={styles.personalInfo__emailInput}
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email.."
          ref={emailInputRef}
        />
        <br />
        <br />

        <label className={styles.personalInfo__inputLabelsnText} htmlFor="address-1">
          Address 1
        </label>
        <br />
        <input
          className={styles.personalInfo__address1Input}
          id="address-1"
          type="text"
          name="address-1"
          placeholder="The address of the user goes here.."
          ref={address1InputRef}
        />
        <br />
        <br />

        <label className={styles.personalInfo__inputLabelsnText} htmlFor="address-2">
          Address 2
        </label>
        <br />
        <input
          className={styles.personalInfo__address2Input}
          id="address-2"
          type="text"
          name="address-2"
          placeholder="and here.."
          ref={address2InputRef}
        />
        <br />
        <br />

        <div className={styles.lgaxstateContainer}>
          <div>
            <label className={styles.personalInfo__inputLabelsnText} htmlFor="local-government">
              Local Government
            </label>
            <br />
            <input
              className={styles.personalInfo__lgaInput}
              type="text"
              name="local-government"
              id="local-government"
              placeholder="e.g Surulere"
              ref={lgaInputRef}
            />
            <br />
          </div>

          <div>
            <label className={styles.personalInfo__inputLabelsnText} htmlFor="state">
              State
            </label>
            <br />
            <select className={styles.personalInfo__stateInput} name="state" id="state">
              <option value="lagos">Lagos</option>
              <option value="ondo">Ondo</option>
              <option value="abuja">Abuja</option>
              <option value="oyo">Oyo</option>
              <option value="cross-river">Cross-River</option>
            </select>
          </div>
        </div>
        <br />

        {inputHasError && <p className={styles.personalInfo__errorMsg}>Please fill in all fields!</p>}

        <div>
          <button onClick={nextHandler} className={styles.personalInfo__btnNext}>
            Next
          </button>
          <button onClick={(e: React.MouseEvent) => e.preventDefault()} className={styles.personalInfo__btnCancel}>
            Cancel Payment
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
