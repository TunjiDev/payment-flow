import React, { createContext, useState } from "react";

type childrenProps = {
  children?: React.ReactNode;
};

type PaymentContextObj = {
  personalInfo: boolean;
  billingInfo: boolean;
  confirmPayment: boolean;
  modal: boolean;
  personalInfoHandler: () => void;
  billingInfoHandler: () => void;
  confirmPaymentHandler: () => void;
  personalInfonextBtnHandler: () => void;
  billingInfonextBtnHandler: () => void;
  confirmPaymentPayBtnHandler: () => void;
};

export const PaymentContext = createContext<PaymentContextObj>({
  personalInfo: true,
  billingInfo: false,
  confirmPayment: false,
  modal: false,
  personalInfoHandler: () => {},
  billingInfoHandler: () => {},
  confirmPaymentHandler: () => {},
  personalInfonextBtnHandler: () => {},
  billingInfonextBtnHandler: () => {},
  confirmPaymentPayBtnHandler: () => {},
});

const PaymentContextProvider: React.FC<childrenProps> = (props) => {
  const [personalInfo, setPersonalInfo] = useState<boolean>(true);
  const [billingInfo, setBillingInfo] = useState<boolean>(false);
  const [confirmPayment, setConfirmPayment] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const personalInfoHandler = () => {
    setPersonalInfo(true);
    setBillingInfo(false);
    setConfirmPayment(false);
  };

  const billingInfoHandler = () => {
    setPersonalInfo(false);
    setBillingInfo(true);
    setConfirmPayment(false);
  };

  const confirmPaymentHandler = () => {
    setPersonalInfo(false);
    setBillingInfo(false);
    setConfirmPayment(true);
  };

  const personalInfonextBtnHandler = () => {
    setPersonalInfo(false);
    setBillingInfo(true);
    setConfirmPayment(false);
  };

  const billingInfonextBtnHandler = () => {
    setBillingInfo(false);
    setPersonalInfo(false);
    setConfirmPayment(true);
  };

  const confirmPaymentPayBtnHandler = () => {
    setPersonalInfo(false);
    setBillingInfo(false);
    setConfirmPayment(false);
    setModal(true);

    setTimeout(() => {
      setModal(false);

      personalInfoHandler();
    }, 5000);
  };

  const contextValue: PaymentContextObj = {
    personalInfo,
    billingInfo,
    confirmPayment,
    modal,
    personalInfoHandler,
    billingInfoHandler,
    confirmPaymentHandler,
    personalInfonextBtnHandler,
    billingInfonextBtnHandler,
    confirmPaymentPayBtnHandler,
  };

  return <PaymentContext.Provider value={contextValue}>{props.children}</PaymentContext.Provider>;
};

export default PaymentContextProvider;
