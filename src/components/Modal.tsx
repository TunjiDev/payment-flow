import React from "react";
import ReactDOM from "react-dom";

import styles from "./ModalOverlay.module.css";

const Backdrop: React.FC = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay: React.FC = () => {
  return (
    <>
      <div className={styles.ModalOverlay__container}>
        <div className={styles.ModalOverlay__svgBox}>
          <svg
            className={styles.ModalOverlay__svg}
            width="48"
            height="35"
            viewBox="0 0 48 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.5037 6.7984L19.3597 33.7552C17.9677 35.1376 15.7637 35.1376 14.3717 33.7552L1.49566 20.968C0.10366 19.5856 0.10366 17.3968 1.49566 16.0144C2.88766 14.632 5.09166 14.632 6.48366 16.0144L16.8657 26.3248L41.5157 1.8448C42.9077 0.462399 45.1117 0.462399 46.5037 1.8448C47.8957 3.2272 47.8957 5.416 46.5037 6.7984Z"
              fill="#6FCF97"
            />
          </svg>
        </div>

        <h2 className={styles.ModalOverlay__headerText}>Purchase Completed</h2>
        <p className={styles.ModalOverlay__message}>Please check your email for details concerning this transaction</p>
      </div>
    </>
  );
}

function Modal() {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root") as Element)}
      {ReactDOM.createPortal(<ModalOverlay />, document.getElementById("overlay-root") as Element)}
    </>
  );
}

export default Modal;