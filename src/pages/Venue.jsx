import React, { useState } from "react";
import "./Venue.css";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaTrainSubway } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import KakaoMap from "../components/KakaoMap";

const Venue = () => {
  const phoneNumber = "0317030116";
  const [copied, setCopied] = useState(false);

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // const handleCopyClick = () => {
  //   navigator.clipboard.writeText("경기도 성남시 분당구 판교역로 226번길 16");
  //   setCopied(true);
  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 3000); // Hide notification after 3 seconds
  // };

  const handleCopyClick = () => {
    navigator.clipboard.writeText("경기도 성남시 분당구 판교역로 226번길 16");

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="venue-container">
      <h1>오시는길</h1>


      <div className="address">
        경기도 성남시 분당구 판교역로 226번길 16
        <div className="contact">
          031-703-0116
          <button onClick={handleCallClick}>
            <VscCallOutgoing />
          </button>
        </div>
        <button className="address-button" onClick={handleCopyClick}>
          주소 복사
        </button>
        {/* {copied && <span className="copied-notification">주소가 복사되었습니다.</span>} */}
        <span className={`tooltip ${copied ? "show" : ""}`}>
          주소가 복사되었습니다.
        </span>
      </div>


      <KakaoMap />

      {/* Directions section */}
      <div className="directions">
        <ul>
          <li>
            <div>
              <span className="trans-icon">
                <FaTrainSubway />
              </span>
              <span>지하철</span>
              <span className="train-line">신분당선</span>
            </div>
            <p>
              판교역 1번 출구 직도보 6분 소요
              <br />
              셔틀버스 10분 간격 운행
            </p>
          </li>

          <li>
            <div>
              <span className="trans-icon">
                <FaBusAlt />
              </span>
              <span>버스</span>
            </div>
            <p>
              390번: 동안교 하차
              <br />
              4000번: 테크노육교 하차
              <br />
              101, 330, 350, 390, 4000번: 차그룹컨소시엄 하차
            </p>
          </li>

          <li>
            <div>
              <span className="trans-icon">
                <FaCar />
              </span>
              <span>자가용</span>
            </div>
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
