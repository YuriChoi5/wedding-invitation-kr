import { useState } from "react";
import "./Contact.css";
import { VscCallOutgoing } from "react-icons/vsc";

const Contact = () => {
  const phoneNumberMom = process.env.REACT_APP_PHONE_NUMBER_MOM;
  const phoneNumberDad = process.env.REACT_APP_PHONE_NUMBER_DAD;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleContactClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      handleCloseModal();
    }
  };

  const handleCallClick = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <>
      {/* <div>신랑 디미트리 세르듀크</div>
      <div>신부 최유리</div>

      <div>신랑측 혼주</div>
      <div>신부측 혼주</div> */}

      <div className="contact-name-box">
        <div className="grooms-name">
          <span className="contact-name">제아 &bull; 라나</span>
          <span className="concat"> 의 아들 </span>
          <span className="contact-name">디미트리</span>
        </div>
        <div className="brides-name">
          <span className="contact-name">최선우 &bull; 김신영</span>
          <span className="concat"> 의 딸 </span>
          <span className="contact-name">&nbsp; 유리</span>
        </div>
      </div>
      <button className="contact-button" onClick={handleContactClick}>
        연락하기
      </button>

      {isModalVisible && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <div>
            <h2>신부측 혼주</h2>

            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            </div>
            <div className="contact-box">
              <span>부</span>
              <span>최선우</span>
              <span>
              <button onClick={() => handleCallClick(phoneNumberDad)}>
                <VscCallOutgoing />
              </button>
              </span>
            </div>
            <div className="contact-box">
              <span>모</span>
              <span>김신영</span>
              <span>
              <button onClick={() => handleCallClick(phoneNumberMom)}>
                <VscCallOutgoing />
              </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
