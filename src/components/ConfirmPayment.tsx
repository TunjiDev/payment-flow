import React from "react";

import styles from "./ConfirmPayment.module.css";

const ConfirmPayment: React.FC<{onClick: () => void}> = (props) => {
  const payHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    props.onClick();
  };

  return (
    <>
      <div className={styles.confirmPayment__container}>
        <div className={styles.confirmPayment__headerBox}>
          <div>Item Name</div>
          <div>₦ Price</div>
        </div>

        <div>
          <div className={styles.confirmPayment__body}>
            <div>Data science and usability</div>
            <div>50,000.00</div>
          </div>

          <div className={styles.confirmPayment__body}>
            <div>Shipping</div>
            <div>
              <span>0.00</span>
            </div>
          </div>

          <hr />
          <div className={styles.confirmPayment__total}>
            <div>Total</div>
            <div>50,000.00</div>
          </div>
        </div>

        <br />
        <br />

        <div>
          <button className={styles.billingInfo__btnPay} onClick={payHandler}>
            Pay
          </button>
          <button onClick={(e: React.MouseEvent) => e.preventDefault()} className={styles.billingInfo__btnCancel}>
            Cancel Payment
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmPayment;