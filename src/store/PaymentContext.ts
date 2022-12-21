import { createContext } from "react";

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

const PaymentContext = createContext<PaymentContextObj>({
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

export default PaymentContext

