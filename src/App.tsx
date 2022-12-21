import React, { useContext } from "react";
import PersonalInfo from "./components/PersonalInfo";
import BillingInfo from "./components/BillingInfo";
import ConfirmPayment from "./components/ConfirmPayment";
import Modal from "./components/Modal";
import PaymentContext from "./store/PaymentContext";
import styles from "./App.module.css";

function App() {
  const paymentCtx = useContext(PaymentContext);

  return (
    <>
      <div className={styles.app__background}></div>
      <div className={styles.app__container}>
        <h1 className={styles.app__headerText}>Complete your Purchase</h1>
        <section>
          <div className={styles.app__compSections}>
            <div
              className={paymentCtx.personalInfo ? `${styles.app__comps} ${styles.app__active}` : styles.app__comps}
              onClick={paymentCtx.personalInfoHandler}
            >
              Personal Info
            </div>
            <div
              className={paymentCtx.billingInfo ? `${styles.app__comps} ${styles.app__active}` : styles.app__comps}
              onClick={paymentCtx.billingInfoHandler}
            >
              Billing Info
            </div>
            <div
              className={paymentCtx.confirmPayment ? `${styles.app__comps} ${styles.app__active}` : styles.app__comps}
              onClick={paymentCtx.confirmPaymentHandler}
            >
              Confirm Payment
            </div>
          </div>
          {paymentCtx.personalInfo && <PersonalInfo />}
          {paymentCtx.billingInfo && <BillingInfo onClick={paymentCtx.billingInfonextBtnHandler} />}
          {paymentCtx.confirmPayment && <ConfirmPayment onClick={paymentCtx.confirmPaymentPayBtnHandler} />}
          {paymentCtx.modal && <Modal />}
        </section>
      </div>
    </>
  );
}

export default App;
