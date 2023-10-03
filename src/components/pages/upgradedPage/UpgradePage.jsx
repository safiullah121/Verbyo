import React, { useContext, useState } from "react";
import Layout from "../../common/Layout";
import CustomButton from "../../common/CustomButton";
import DisabledPlan from "../../common/Plan";
import Payment from "../../common/Payment";
import MyContext from "../../../Context";
import EnabledPlan from "../../common/EnabledPlan";
import PremiumDetails from "./PremiumDetails";
import VerificationDetails from "./VerificationDetails";

const UpgradePage = () => {
  const [inputVal, setinputVal] = useState("");
  const [buttonText, setbuttonText] = useState(false);
  const {
    plansToggle,
    setplansToggle,
    accountFindingToggle,
    setaccountFindingToggle,
    accountUpgraded,
    setaccountUpgraded,
    premiumDetails,
    setpremiumDetails,
    verificationDetails,
    setverificationDetails,
  } = useContext(MyContext);
  return (
    <>
      <Layout>
        <div
          className={`max-w-[900px] w-full ${
            premiumDetails == true
              ? " xsm:pt-[38px] sm:pt-[44px]"
              : "lg:pt-[30px] xsm:pt-[64px]"
          }  rounded-[10px] dropShadow`}
        >
          <img src="/img/sparrow.svg" alt="" className="mx-auto " />
          {accountUpgraded == true ? (
            <div className="max-w-[563px] w-full mx-auto">
              <h1 className="Montserrat700 sm:text-[20px] xsm:text-[18px] text-[#262F61] font-[700] leading-normal text-center sm:mt-[56px] xsm:mt-[36px]">
                ACCOUNT UPGRADED
              </h1>
              <p className="Montserrat400 text-[16px] text-[#262F61] font-[500] leading-normal text-center mt-[25px] sm:h-[95px] sm:mb-[15px] xsm:mb-[44px]">
                Thank you for your patience. Your account{" "}
                <br className="xsm:block sm:hidden" /> has been successfully{" "}
                <br className="sm:block xsm:hidden" />
                upgraded. Please <br className="xsm:block sm:hidden" /> allow a
                few minutes for the changes to{" "}
                <br className="xsm:block sm:hidden" /> take effect.
                <br className="sm:block xsm:hidden" /> You can now log out and
                log <br className="xsm:block sm:hidden" /> back into your Verbyo
                Account.
              </p>
              <CustomButton text="Open App" background="bg-[#3490EC]" />
              <p className="Montserrat500 text-[#A3A3A3] text-[16px] leading-normal font-[500] text-center mt-[38px] pb-[52px]">
                If you have any problems, please contact us :{" "}
                <br className="xsm:block sm:hidden" /> support@verbyo.com
              </p>
            </div>
          ) : (
            <>
              {premiumDetails == true ? (
                <PremiumDetails />
              ) : verificationDetails == true ? (
                <VerificationDetails />
              ) : (
                <>
                  {" "}
                  <h1 className="Montserrat700 sm:text-[20px] xsm:text-[18px] font-[700] leading-normal text-[#262F61] text-center sm:mt-[30px] xsm:mt-[21px]">
                    UPGRADE YOUR VERBYO <br className="xsm:block sm:hidden" />{" "}
                    ACCOUNT
                  </h1>
                  <p className="Montserrat400 sm:text-[16px] xsm:text-[14px] font-[400] leading-normal text-[#474747] text-center sm:mt-[20px] xsm:mt-[27px]">
                    Use the discounted packages below to{" "}
                    <br className="xsm:block sm:hidden" /> upgrade your account.
                    <br />
                    <span className="Montserrat700 sm:text-[16px] xsm:text-[14px] font-[600] leading-normal text-[#000] text-center">
                      15% discount applied to all plans.
                    </span>
                  </p>
                  <h1 className="Montserrat700 sm:text-[20px] xsm:text-[18px] font-[700] leading-normal text-[#262F61] text-center sm:mt-[68px] xsm:mt-[83px]">
                    3. SEARCH YOUR VERBYO <br className="xsm:block sm:hidden" />{" "}
                    ACCOUNT
                  </h1>
                  <p className="Montserrat500 text-[16px] font-[500] leading-normal text-[#070707] mt-[15px] text-center sm:block xsm:hidden">
                    Enter your email address that you used to create your Verbyo
                    account.
                  </p>
                  <div className="relative mx-auto sm:max-w-[511px] xsm:max-w-[318px] w-full sm:mt-[37px] xsm:mt-[47px]">
                    {" "}
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => {
                        setinputVal(e.target.value);
                      }}
                      placeholder="enter your email"
                      className="Montserrat400 w-full h-[50px] pl-[18px] outline-none border-[1px] border-solid border-[#D3D4D9] rounded-[5px] placeholder:text-[#121212] "
                    />
                    {accountFindingToggle == true && (
                      <div className="absolute w-[27px] h-[27px] rounded-full bg-[#057C1F] right-[13px] top-[11px]">
                        <img
                          src="/img/verifiedCheck.svg"
                          alt=""
                          className=" mx-auto mt-[8px]"
                        />
                      </div>
                    )}
                  </div>
                  {accountFindingToggle == false ? (
                    <div className="mx-auto max-w-[199px] w-full pb-[17px] sm:pt-[15px] xsm:pt-[29px]">
                      <button className="Montserrat400 w-full text-[16px] py-[14.5px] pr-[7px]  font-[400] leading-normal text-[#121212] bg-[#D9D9D9]">
                        GOOGLE VERIFICATION
                      </button>
                    </div>
                  ) : (
                    <p className="Montserrat500 text-[14px] leading-normal font-[500] text-[#10874E] sm:max-w-[511px] xsm:max-w-[315px] w-full mx-auto mt-[15px] mb-[31px] ">
                      We found the account.
                    </p>
                  )}
                  <CustomButton
                    background="bg-[#3490EC]"
                    text={buttonText == true ? "Continue" : "Look for account"}
                    onClick={
                      accountFindingToggle == false
                        ? () => {
                            if (inputVal !== "") {
                              setaccountFindingToggle(true);
                              setbuttonText(true);
                            }
                          }
                        : () => {
                            if (inputVal !== "") {
                              setplansToggle(true);
                            }
                          }
                    }
                  />
                  {plansToggle == false ? <DisabledPlan /> : <EnabledPlan />}
                  <Payment />
                </>
              )}
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default UpgradePage;
