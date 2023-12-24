import React, { useState } from 'react';
import { Datepicker, DatepickerEvent} from "@meinefinsternis/react-horizontal-date-picker";
import { ru } from "date-fns/locale";
import styles from './datepicker.module.css';

const DatepickerClasses = {
  selectedDay: styles?.selectedDay,
  rangeDays: styles?.rangeDays,
  dayItem: styles?.dayItem,
  dayLabel: styles?.dayLabel,
  monthLabel: styles?.monthLabel,
  dateLabel: styles?.dateLabel,
  weekendItem: styles?.weekendItem,
};

const DatePickerComponent: React.FC = () => {
  const [date, setDate] = useState<{
    endValue: Date | null;
    startValue: Date | null;
    rangeDates: Date[] | null;
  }>({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  return (
    <div className={styles.container}>
      <Datepicker
        onChange={handleChange}
        locale={ru}
        startValue={date.startValue}
        endValue={date.endValue}
        classNames={DatepickerClasses}
      />
    </div>
  )
}

export default DatePickerComponent;
