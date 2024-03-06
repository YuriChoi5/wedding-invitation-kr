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
        곁에 있을 때 가장 나다울 수 있는 사람과
        부부의 언약을 맺고자 합니다.
        <br />
        <br />

        이 약속의 자리를 빛내주시면 더없이
        감사하겠습니다.
      </p>
      <Contact />
    </div>
  );
};

export default Greeting;
