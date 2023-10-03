import React, { useContext, useState } from "react";
import CustomButton from "./CustomButton";
import MyContext from "../../Context";

const Payment = () => {
  const {
    enabledPaymentSection,
    setenabledPaymentSection,
    accountUpgraded,
    setaccountUpgraded,
  } = useContext(MyContext);
  const [userPaymentData, setuserPaymentData] = useState({
    CardNumber: "",
    date: "",
    CVV: "",
    Zip: "",
  });
  const inputs = [
    {
      placeholder: "12 / 34",
      className: `Montserrat400 sm:max-w-[163px] xsm:max-w-[135px] w-full h-[50px] pl-[18px] outline-none border-[1px] border-solid border-[#D3D4D9] rounded-[5px] placeholder:${
        enabledPaymentSection == true ? "text-[#121212]" : "text-[#D3D4D9]"
      }`,
      inputName: "date",
    },
    {
      placeholder: "CVV",
      className: `Montserrat400 sm:max-w-[163px] xsm:max-w-[135px] w-full h-[50px] pl-[18px] outline-none border-[1px] border-solid border-[#D3D4D9] rounded-[5px] placeholder:${
        enabledPaymentSection == true ? "text-[#121212]" : "text-[#D3D4D9]"
      }`,
      inputName: "CVV",
    },
    {
      placeholder: "ZIP CODE",
      className: `Montserrat400 sm:max-w-[163px] xsm:max-w-[300px] w-full h-[50px] pl-[18px] outline-none border-[1px] border-solid border-[#D3D4D9] rounded-[5px] placeholder:${
        enabledPaymentSection == true ? "text-[#121212]" : "text-[#D3D4D9]"
      }`,
      inputName: "Zip",
    },
  ];
  const handleInputChange = (e) => {
    setuserPaymentData((previousData) => {
      return {
        ...previousData,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(userPaymentData);
  return (
    <>
      <div className="sm:max-w-[511px] xsm:max-w-[301px] w-full  mx-auto mt-[88px]">
        <h1
          className={`Montserrat700 text-center text-[20px] font-[700] leading-normal ${
            enabledPaymentSection == true ? "text-[#262F61]" : "text-[#D3D4D9]"
          } mb-[39px]`}
        >
          3. ENTER YOUR PAYMENT DETAILS
        </h1>
        <input
          disabled={enabledPaymentSection == true ? "" : "disabled"}
          type="number"
          placeholder="Card number"
          className={`Montserrat400 w-full h-[50px] pl-[18px] outline-none border-[1px] border-solid border-[#D3D4D9] rounded-[5px] placeholder:${
            enabledPaymentSection == true ? "text-[#121212]" : "text-[#D3D4D9]"
          }`}
          onChange={handleInputChange}
          name="CardNumber"
        />
        <div className="flex xsm:flex-wrap sm:flex-nowrap  xsm:gap-x-[30px] xsm:gap-y-[16px]  sm:justify-between sm:pt-[14px] xsm:pt-[15px] pb-[34px]">
          {inputs.map((item, index) => (
            <input
              type="number"
              disabled={enabledPaymentSection == true ? "" : "disabled"}
              className={item.className}
              placeholder={item.placeholder}
              onChange={handleInputChange}
              name={item.inputName}
            />
          ))}
        </div>
        <div className="pb-[12px]">
          <CustomButton
            text="Upgrade account"
            background={
              enabledPaymentSection == true ? "bg-[#3490EC]" : "bg-[#D3D4D9]"
            }
            onClick={() => {
              setaccountUpgraded(true);
            }}
          />
        </div>
        <div className="flex items-center justify-center  sm:pb-[74px] xsm:pb-[71px]">
          <p className="Montserrat400 text-[12px] font-[400] leading-normal pb-[2px] text-[#D3D4D9]">
            powered by
          </p>
          <img src="/img/stripe.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Payment;
