import React, { useState } from 'react';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <table className="calendar">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className={`calendar-day ${selectedDate === 'Sun 1' ? 'selected' : ''}`}
              onClick={() => setSelectedDate('Sun 1')}
            >
              1
            </td>
            <td
              className={`calendar-day ${selectedDate === 'Mon 2' ? 'selected' : ''}`}
              onClick={() => setSelectedDate('Mon 2')}
            >
              2
            </td>
            <td
              className={`calendar-day ${selectedDate === 'Tue 3' ? 'selected' : ''}`}
              onClick={() => setSelectedDate('Tue 3')}
            >
              3
            </td>
            <td
              className={`calendar-day ${selectedDate === 'Wed 4' ? 'selected' : ''}`}
              onClick={() => setSelectedDate('Wed 4')}
            >
              4
            </td>
            <td
              className={`calendar-day ${selectedDate === 'Thu 5' ? 'selected' : ''}`}
              onClick={() => setSelectedDate('Thu 5')}
            >
              5
            </td>
            <td
              className={`calendar-day ${selectedDate === 'Fri 6' ? 'selected' : ''}`}
              onClick={() => setSelectedDate('Fri 6')}
            >
              6
            </td>
            <td
              className={`calendar-day ${selectedDate === 'Sat 7' ? 'selected' : ''}`}
              onClick={() => setSelectedDate('Sat 7')}
            >
              7
            </td>
          </tr>
        </tbody>
      </table>
      {selectedDate ? (
        <div className="selected-date-container">
          <h3>Selected Date: {selectedDate}</h3>
          <p>Lydianise is available on this day.</p>
        </div>
      ) : (
        <p>Select a day to see availability.</p>
      )}
    </div>
  );
}

export default Calendar;
