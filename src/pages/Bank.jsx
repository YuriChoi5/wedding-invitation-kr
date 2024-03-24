import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import "./Bank.css";

const Bank = () => {
  const BankBride = process.env.REACT_APP_BANK_BRIDE;
  const BankMom = process.env.REACT_APP_BANK_MOM;
  const BankDad = process.env.REACT_APP_BANK_DAD;

  // const [copied, setCopied] = useState(false);

  // const handleCopyClick = (bank) => {
  //   navigator.clipboard.writeText(bank);
  //   setCopied(true);
  //       setTimeout(() => {
  //         setCopied(false);
  //       }, 1000); 
    
  // };


  const [tooltipBride, setTooltipBride] = useState(false);
  const [tooltipMom, setTooltipMom] = useState(false);
  const [tooltipDad, setTooltipDad] = useState(false);

  const handleCopyClick = (bank, setTooltip) => {
    navigator.clipboard.writeText(bank);
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 1000);
  };

  return (
    <div className="bank">
      <Dropdown title="마음 전하실 곳" children="erererr">
        <div className="account">
          <div>
            <span>신부</span>
            <span>최유리</span>
          </div>
          <div>{`국민은행 ${BankBride}`}</div>
          {/* <button onClick={() => handleCopyClick(BankBride)}>
            계좌번호 복사
          </button> */}
          <button onClick={() => handleCopyClick(BankBride, setTooltipBride)}>
            계좌번호 복사
          </button>
          <span className={`tooltip-bank ${tooltipBride ? 'show' : ''}`}>계좌번호가 복사되었습니다.</span>

        </div>

        <div className="account">
          <div>
            <span>혼주</span>
            <span>최선우</span>
          </div>
          <div>{`신한은행 ${BankDad}`}</div>
          {/* <button onClick={() => handleCopyClick(BankDad)}>
            계좌번호 복사
          </button> */}

          <button onClick={() => handleCopyClick(BankDad, setTooltipDad)}>
            계좌번호 복사
          </button>
          <span className={`tooltip-bank ${tooltipDad ? 'show' : ''}`}>계좌번호가 복사되었습니다.</span>

        </div>

        <div className="account">
          <div>
            <span>혼주</span>
            <span>김신영</span>
          </div>

          <div>{`국민은행 ${BankMom}`}</div>
          {/* <button onClick={() => handleCopyClick(BankMom)}>
            계좌번호 복사
          </button> */}
          <button onClick={() => handleCopyClick(BankMom, setTooltipMom)}>
            계좌번호 복사
          </button>
          <span className={`tooltip-bank ${tooltipMom ? 'show' : ''}`}>계좌번호가 복사되었습니다.</span>



        </div>
      </Dropdown>
    </div>
  );
};

export default Bank;
