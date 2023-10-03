import React, { useContext } from "react";
import CustomButton from "../../common/CustomButton";
import MyContext from "../../../Context";

const VerificationDetails = () => {
  const { setverificationDetails } = useContext(MyContext);
  return (
    <>
      <h1 className="Montserrat700 sm:text-[20px] xsm:text-[18px] font-[700] leading-normal text-[#262F61] text-center sm:mt-[42px] xsm:mt-[27px]">
        VERBYO VERIFIED ACCOUNT
      </h1>
      <p className="Montserrat400 sm:text-[16px] xsm:text-[14px] font-[400] leading-normal text-[#474747] text-center sm:mt-[20px] xsm:mt-[21px]">
        Verify your account with Verbyo and{" "}
        <br className="xsm:block sm:hidden" /> demonstrate that you are a real
        person.
      </p>
      <div className="sm:max-w-[400px] xsm:max-w-[332px] w-full mx-auto sm:mt-[42px] xsm:mt-[27px] sm:pt-[15px] xsm:pt-[24px] sm:pb-[50px] xsm:pb-[31px] sm:pl-[36px] xsm:pl-[21px] sm:pr-[27px] xsm:pr-[25px] border-[1px] border-solid border-[#EEE] sm:mb-[62px] xsm:mb-[51px]">
        <div className="mx-auto w-fit">
          <img src="/img/EnabledVerified.svg" alt="" />
        </div>
        <h1 className="Montserrat700 text-[14px] text-center text-[#262F61] font-[700] leading-normal sm:mt-[14px] xsm:mt-[13px]">
          GET VERIFIED
        </h1>
        <p className="Montserrat400 text-[14px] text-center text-[#474747] font-[400] leading-normal sm:max-w-[337px] w-full sm:mt-[25px] xsm:mt-[13px]">
          Verbyo is a community comprised of real individuals. This not only
          leads to higher-paid offers from advertisers but also assists us in
          countering misinformation and preventing bot{" "}
          <br className="sm:block xsm:hidden" /> registrations.
          <br className="sm:block xsm:hidden" /> Once your profile is verified,
          its quality improves, resulting in more opportunities for promotion.
        </p>
      </div>
      <div className="xsm:pb-[80px] sm:pb-[76px]">
        {" "}
        <CustomButton
          text="Close"
          background="bg-[#3490EC]"
          onClick={() => {
            setverificationDetails(false);
          }}
        />
      </div>
    </>
  );
};

export default VerificationDetails;
