import React, { createContext, useState } from "react";
const MyContext = createContext();
export function MyProvider({ children }) {
  const [plansToggle, setplansToggle] = useState(false);
  const [accountFindingToggle, setaccountFindingToggle] = useState(false);
  const [planSelection, setplanSelection] = useState(0);
  const [enabledPaymentSection, setenabledPaymentSection] = useState(false);
  const [accountUpgraded, setaccountUpgraded] = useState(false);
  const [premiumDetails, setpremiumDetails] = useState(false);
  const [verificationDetails, setverificationDetails] = useState(false);
  return (
    <MyContext.Provider
      value={{
        plansToggle,
        setplansToggle,
        accountFindingToggle,
        setaccountFindingToggle,
        planSelection,
        setplanSelection,
        enabledPaymentSection,
        setenabledPaymentSection,
        accountUpgraded,
        setaccountUpgraded,
        premiumDetails,
        setpremiumDetails,
        verificationDetails,
        setverificationDetails,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
