// import React from "react";

// const Venue = () => {
//   const phoneNumber = "0317030116";
//   const handleCallClick = () => {
//     window.location.href = `tel:${phoneNumber}`;
//   };

//   return (
//     <>
//       <h1>오시는길</h1>
//       <div>
//         경기도 성남시 분당구 판교역로 226번길 16(삼평동) 더블유스퀘어
//         <div>주소 복사</div>
//       </div>
//       <div>
//         031-703-0116
//         <button onClick={handleCallClick}>&#128222;</button>
//       </div>

//       <ul>
//         <li>
//           <div>
//             지하철
//             <div>신분당선</div>
//           </div>
//           <p>
//             판교역 1번 출구 직도보 6분 소요
//             <br />
//             셔틀버스 10분간격 운행
//           </p>
//         </li>
//         <li>
//           <div>버스</div>
//           <p>
//             390번 : 동안교 하차
//             <br />
//             4000번 : 테크노육교 하차
//             <br />
//             101, 330, 350, 390, 4000번 : 차그룹컨소시엄 하차
//           </p>
//         </li>
//         <li>
//           <div>자가용</div>
//           <p>경부고속도로 판교IC(톨게이트) 차출 후 좌회전, 약 700m 직진하여 사거리에서 우회전 (SK 주유소 뒤)</p>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default Venue;

// Venue.js
import React from "react";
import "./Venue.css";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaTrainSubway } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";

const Venue = () => {
  const phoneNumber = "0317030116";
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="venue-container">
      <h1>오시는길</h1>

      <div className="address">
        경기도 성남시 분당구 판교역로 226번길 16(삼평동)
        <br />
        {/* <button>주소 복사</button> */}
        <div className="contact">
          031-703-0116
          <button onClick={handleCallClick}>
            <VscCallOutgoing />
          </button>
        </div>
        <button>주소 복사</button>
      </div>

      <div className="directions">
        <ul>
          <li>
            <div>
            <FaTrainSubway />
              지하철
              <span>신분당선</span>
            </div>
            <p>
              판교역 1번 출구 직도보 6분 소요
              <br />
              셔틀버스 10분 간격 운행
            </p>
          </li>

          <li>
            <div><FaBusAlt />버스</div>
            <p>
              390번: 동안교 하차
              <br />
              4000번: 테크노육교 하차
              <br />
              101, 330, 350, 390, 4000번: 차그룹컨소시엄 하차
            </p>
          </li>

          <li>
            <div><FaCar />자가용</div>
            <p>
              경부고속도로 판교IC(톨게이트) 차출 후 좌회전, 약 700m 직진하여
              사거리에서 우회전 (SK 주유소 뒤)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Venue;
