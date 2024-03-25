import React from "react";
import "./Greeting.css";
import Contact from "../pages/Contact";


const Greeting = () => {
  return (
    <div className="greeting">
      &#10022;
      <h1>저희의 결혼식에 초대합니다</h1>
      <p>
        다가오는 6월의 첫날,
        <br />
        <br />
        고마운 분들을 모시고 기쁨을 함께 나누고 싶습니다.
        <br />
        <br />
        서로에 대한 믿음, 이해, 사랑으로 평생 서로를 아끼며 살겠습니다.
        <br />
        <br />
        귀한 시간 내주시어 자리를 빛내주시면 감사하겠습니다.
      </p>
      <Contact />
    </div>
  );
};

export default Greeting;
