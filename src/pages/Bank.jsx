import React from 'react';
import Dropdown from '../components/Dropdown';
import './Bank.css';

const Bank = () => {
  return (
    <Dropdown title="마음 전하실 곳" children='erererr'>
        <div className="account">
          <div>신부 최유리</div>
          <div>국민은행 123456-78-901234</div>
        </div>

        <div className="account">
          <div>아버지 최선우</div>
          <div>국민은행 123456-78-901234</div>
        </div>

        <div className="account">
          <div>어머니 김신영</div>
          <div>국민은행 123456-78-901234</div>
        </div>
    </Dropdown>
  );
};

export default Bank;

