import React from "react";
import UpgradePage from "./components/pages/upgradedPage/UpgradePage";
import { MyProvider } from "./Context";
import PremiumDetails from "./components/pages/upgradedPage/PremiumDetails";
import VerificationDetails from "./components/pages/upgradedPage/VerificationDetails";

const App = () => {
  return (
    <MyProvider>
      <UpgradePage />
    </MyProvider>
  );
};

export default App;
