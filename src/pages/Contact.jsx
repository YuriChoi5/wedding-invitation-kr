import { useState } from "react";
import "./Contact.css";

const Contact = () => {
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
          <h2>신부측 혼주</h2>

            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className='contact-box'>
              <div>부</div>
              <div>최선우</div>
              <div>연락하기</div>
            </div>
            <div className='contact-box'>
              <div>모</div>
              <div>김신영</div>
              <div>연락하기</div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
