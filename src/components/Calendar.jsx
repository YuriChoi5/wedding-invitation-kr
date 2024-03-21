import React from "react";
import "./Calendar.css";

const Calendar = () => {
  const year = 2024;
  const month = 5; // June (zero-based index)

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const totalDays = getDaysInMonth(year, month);
  const startingDayIndex = new Date(year, month, 1).getDay();

  return (
    <div className="calendar">
      <h1>6월</h1>
      <table>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5].map((row) => (
            <tr key={row}>
              {[0, 1, 2, 3, 4, 5, 6].map((col) => {
                const dayNumber = row * 7 + col + 1 - startingDayIndex;
                const isCurrentMonth = dayNumber >= 1 && dayNumber <= totalDays;

                return (
                  <td
                    key={col}
                    className={isCurrentMonth ? "current-month" : "other-month"}
                  >
                    {isCurrentMonth && (
                      <div
                        className={`day ${dayNumber === 1 ? "first-day" : ""}`}
                      >
                        {dayNumber}
                        {/* {dayNumber === 1 && (
                          <div className="time-text">5:30pm</div>
                        )} */}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>2024년 6월 1일 토요일, 오후 5시 30분</h2>
    </div>
  );
};

export default Calendar;
