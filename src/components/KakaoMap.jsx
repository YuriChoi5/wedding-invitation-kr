
import { useEffect } from "react";
import "./KakaoMap.css";
import { MdDoubleArrow } from "react-icons/md";

const KakaoMap = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          37.40057128161953,
          127.11147744566445
        );

        const options = {
          center: position,
          level: 3,
        };

        const marker = new window.kakao.maps.Marker({
          position,
        });

        const map = new window.kakao.maps.Map(
          document.getElementById("map"),
          options
        );
        marker.setMap(map);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="wrap-map">
      <div id="map" className="map"></div>
      <a
        className="navi-link"
        href="https://map.kakao.com/link/to/W스퀘어컨벤션,37.40057128161953,127.11147744566445"
        target="_blank"
        rel="noreferrer"
      >
        <span>카카오 길찾기</span><span><MdDoubleArrow /></span>
      </a>
    </div>
  );
};

export default KakaoMap;
