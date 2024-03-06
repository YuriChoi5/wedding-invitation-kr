// import React from "react";

// const Venue = () => {
//   return (
//     <>
//       <h1>오시는길</h1>
//       <div>경기도 성남시 분당구 판교역로 226번길 16(삼평동) 더블유스퀘어</div>
//       <div>031-703-0116</div>
//     </>
//   );
// };

// export default Venue;

import React from "react";

const Venue = () => {
  const phoneNumber = "0317030116";
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <h1>오시는길</h1>
      <div>경기도 성남시 분당구 판교역로 226번길 16(삼평동) 더블유스퀘어</div>
      <div>
        031-703-0116
        <button onClick={handleCallClick}>&#128222;</button>
      </div>
    </>
  );
};

export default Venue;
