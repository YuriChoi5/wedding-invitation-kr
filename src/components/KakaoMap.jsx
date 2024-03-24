// import React, { useEffect } from "react";

// const MapComponent = () => {
//   useEffect(() => {
//     // Load the Kakao Maps SDK script dynamically
//     const script = document.createElement("script");
//     script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=f6c92aba5e8085d2dcb6f43333b9892d";
//     script.async = true;
//     document.body.appendChild(script);

//     // Initialize the map after the script has been loaded
//     script.onload = () => {
//       var container = document.getElementById('map');
//       var options = {
//         center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//         level: 3
//       };

//       var map = new window.kakao.maps.Map(container, options);
//     };

//     // Clean up the dynamically added script when the component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once after initial render

//   return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
// };

// export default MapComponent;

// import { useEffect, useRef } from "react";
// import "./KakaoMap.css";

// const KakaoMap = () => {
//   const mapContainer = useRef(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
//     script.async = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         const position = new window.kakao.maps.LatLng(
//           37.40057128161953,
//           127.11147744566445
//         );

//         const options = {
//           center: position,
//           level: 3,
//         };

//         const marker = new window.kakao.maps.Marker({
//           position,
//         });

//         const map = new window.kakao.maps.Map(mapContainer.current, options);
//         marker.setMap(map);
//       });
//     };

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="wrap-map">
//       ooo
//       <div className="map" ref={mapContainer}></div>
//       {/* <a
//         className={'btn-find-way'}
//         href={location.link}
//         target="_blank"
//         rel="noreferrer"
//       >
//         길찾기
//       </a> */}
//     </div>
//   );
// };

// export default KakaoMap;

import { useEffect } from "react";
import "./KakaoMap.css";

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
        카카오 길찾기&#10095;&#10095;
      </a>
    </div>
  );
};

export default KakaoMap;
