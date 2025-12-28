import { useState } from "react";
import { SCalendarBlock, SCalendarCell, SCalendarCells, SCalendarContent, SCalendarDateControl, SCalendarDateEnd, SCalendarDaysName, SCalendarDaysNames, SCalendarMonth, SCalendarNav, SCalendarNavAction, SCalendarNavActions, SCalendarNavActionSvg, SCalendarPeriod } from "./Calendar.styled";

const Calendar = ({ date, onChange }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(() => {
    const initialDate = date ? new Date(date) : new Date();
    return initialDate.getMonth();
  });
  const [currentYear, setCurrentYear] = useState(() => {
    const initialDate = date ? new Date(date) : new Date();
    return initialDate.getFullYear();
  });
  const [activeDay, setActiveDay] = useState(() => {
    const initialDate = date ? new Date(date) : new Date();
    return initialDate.getDate();
  });

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayWeekday = new Date(currentYear, currentMonth, 1).getDay();
  const startOffset = (firstDayWeekday + 6) % 7; // Понедельник = 0

  const generateCalendarDays = () => {
    const days = [];

    // Пустые ячейки для начала месяца
    for (let i = 0; i < startOffset; i++) {
      days.push(null);
    }

    // Дни текущего месяца
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(d);
    }

    return days;
  };

  const daysArray = generateCalendarDays();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleDayClick = (day) => {
    if (day !== null) {
      setActiveDay(day);
      if (onChange) {
        const selectedDate = new Date(currentYear, currentMonth, day);
        onChange(selectedDate.toISOString());
      }
    }
  };

  const displayMonthYear = new Date(currentYear, currentMonth).toLocaleString('ru-RU', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <SCalendarBlock>
      <SCalendarNav>
        <SCalendarMonth>{displayMonthYear}</SCalendarMonth>
        <SCalendarNavActions>
          <SCalendarNavAction data-action="prev" onClick={handlePrevMonth}>
            <SCalendarNavActionSvg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
            </SCalendarNavActionSvg>
          </SCalendarNavAction>
          <SCalendarNavAction data-action="next" onClick={handleNextMonth}>
            <SCalendarNavActionSvg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
            </SCalendarNavActionSvg>
          </SCalendarNavAction>
        </SCalendarNavActions>
      </SCalendarNav>
      <SCalendarContent>
        <SCalendarDaysNames>
          <SCalendarDaysName>пн</SCalendarDaysName>
          <SCalendarDaysName>вт</SCalendarDaysName>
          <SCalendarDaysName>ср</SCalendarDaysName>
          <SCalendarDaysName>чт</SCalendarDaysName>
          <SCalendarDaysName>пт</SCalendarDaysName>
          <SCalendarDaysName className="-weekend-">сб</SCalendarDaysName>
          <SCalendarDaysName className="-weekend-">вс</SCalendarDaysName>
        </SCalendarDaysNames>
        <SCalendarCells>
          {daysArray.map((day, index) => (
            <SCalendarCell
              key={index}
              className={
                "_cell-day" +
                (day === activeDay ? " _active" : "") +
                (!day ? " _other-month" : "") +
                (day === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
                  ? " _current"
                  : "")
              }
              onClick={() => handleDayClick(day)}
            >
              {day || ""}
            </SCalendarCell>
          ))}
        </SCalendarCells>
      </SCalendarContent>
      <input
        type="hidden"
        id="datepick_value"
        value={`${String(activeDay).padStart(2, "0")}.${String(currentMonth + 1).padStart(2, "0")}.${currentYear}`}
      />
      <SCalendarPeriod>
        <SCalendarDateEnd>
          Срок исполнения:{" "}
          <SCalendarDateControl>
            {`${String(activeDay).padStart(2, "0")}.${String(currentMonth + 1).padStart(2, "0")}.${currentYear}`}
          </SCalendarDateControl>
        </SCalendarDateEnd>
      </SCalendarPeriod>
    </SCalendarBlock>
  );
};

export default Calendar;