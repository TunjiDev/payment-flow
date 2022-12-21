import React, { useReducer /*useState */ } from "react";
import PaymentContext from "./PaymentContext";

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

type initialStateObj = {
  personalInfo: boolean;
  billingInfo: boolean;
  confirmPayment: boolean;
  modal: boolean;
};

type actionObj = {
  type: string;
};

const initialState: initialStateObj = {
  personalInfo: true,
  billingInfo: false,
  confirmPayment: false,
  modal: false,
};

const paymentReducer = (state: initialStateObj, action: actionObj) => {
  switch (action.type) {
    case "PERSONAL_INFO_TAB":
      return {
        personalInfo: true,
        billingInfo: false,
        confirmPayment: false,
        modal: false,
      };

    case "BILLING_INFO_TAB":
      return {
        personalInfo: false,
        billingInfo: true,
        confirmPayment: false,
        modal: false,
      };

    case "CONFIRM_PAYMENT_TAB":
      return {
        personalInfo: false,
        billingInfo: false,
        confirmPayment: true,
        modal: false,
      };

    case "PERSONAL_INFO_NEXT_HANDLER":
      return {
        personalInfo: false,
        billingInfo: true,
        confirmPayment: false,
        modal: false,
      };

    case "BILLING_INFO_NEXT_HANDLER":
      return {
        billingInfo: false,
        personalInfo: false,
        confirmPayment: true,
        modal: false,
      };

    case "CONFIRM_PAYMENT_BTN_HANDLER":
      return {
        personalInfo: false,
        billingInfo: false,
        confirmPayment: false,
        modal: true,
      };

    default:
      return initialState;
  }
};

const PaymentContextProvider: React.FC<childrenProps> = (props) => {
  const [paymentState, dispatch] = useReducer(paymentReducer, initialState);
  //   const [personalInfo, setPersonalInfo] = useState<boolean>(true);
  //   const [billingInfo, setBillingInfo] = useState<boolean>(false);
  //   const [confirmPayment, setConfirmPayment] = useState<boolean>(false);
  //   const [modal, setModal] = useState<boolean>(false);

  const personalInfoHandler = () => {
    dispatch({
      type: "PERSONAL_INFO_TAB",
    });
    //  setPersonalInfo(true);
    //  setBillingInfo(false);
    //  setConfirmPayment(false);
  };

  const billingInfoHandler = () => {
    dispatch({
      type: "BILLING_INFO_TAB",
    });
    //  setPersonalInfo(false);
    //  setBillingInfo(true);
    //  setConfirmPayment(false);
  };

  const confirmPaymentHandler = () => {
    dispatch({
      type: "CONFIRM_PAYMENT_TAB",
    });
    //  setPersonalInfo(false);
    //  setBillingInfo(false);
    //  setConfirmPayment(true);
  };

  const personalInfonextBtnHandler = () => {
    dispatch({
      type: "PERSONAL_INFO_NEXT_HANDLER",
    });
    //  setPersonalInfo(false);
    //  setBillingInfo(true);
    //  setConfirmPayment(false);
  };

  const billingInfonextBtnHandler = () => {
    dispatch({
      type: "BILLING_INFO_NEXT_HANDLER",
    });
    //  setBillingInfo(false);
    //  setPersonalInfo(false);
    //  setConfirmPayment(true);
  };

  const confirmPaymentPayBtnHandler = () => {
    dispatch({
      type: "CONFIRM_PAYMENT_BTN_HANDLER",
    });

    setTimeout(() => {
      //  setModal(false);

      personalInfoHandler();
    }, 5000);

    //  setPersonalInfo(false);
    //  setBillingInfo(false);
    //  setConfirmPayment(false);
    //  setModal(true);

    //  setTimeout(() => {
    //    setModal(false);

    //    personalInfoHandler();
    //  }, 5000);
  };

  const contextValue: PaymentContextObj = {
    personalInfo: paymentState.personalInfo,
    billingInfo: paymentState.billingInfo,
    confirmPayment: paymentState.confirmPayment,
    modal: paymentState.modal,
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
