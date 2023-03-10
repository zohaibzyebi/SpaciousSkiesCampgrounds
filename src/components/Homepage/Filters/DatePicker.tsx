import React, { useState } from 'react';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';

const DatePicker: React.FC = () => {
  // Date handling for date picker
  const [dates, setDates] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  //Custom Label for Date Picker
  const DatePickerLabel = () => (
    <div className="w-full flex justify-between items-center gap-3">
      <p className="text-black text-base font-visby">Reservation Dates</p>
      <p className="text-black text-base font-visby">(26 Nights)</p>
    </div>
  );

  return (
    <>
      {/* Desktop Screen  */}
      <div className="w-full hidden lg:flex justify-start items-center flex-col border-solid border-0 border-r border-iron px-2">
        <DateRangePicker
          amountOfMonths={2}
          clearable
          label={<DatePickerLabel />}
          placeholder="Check in - Check out &nbsp;"
          onChange={setDates}
          classNames={{
            root: 'w-full  font-visby px-2',
            label: 'w-full ',
            input:
              'border-0 placeholder:text-sapphire text-base px-0 py-[2px] font-visby placeholder:font-visby',
            calendarHeaderLevel: 'uppercase text-pineGreen font-visby font-bold',
          }}
        />
      </div>

      {/* Mobile Screen  */}
      <div className="w-full lg:hidden flex justify-start items-center flex-col ">
        <DateRangePicker
          amountOfMonths={1}
          clearable
          label={<DatePickerLabel />}
          placeholder="Check in - Check out &nbsp;"
          onChange={setDates}
          classNames={{
            root: 'w-full  font-visby',
            label: 'w-full ',
            input:
              'border-[1px] border-iron  text-base text-[17px] px-3 h-[43px] mt-[2px]  font-visby placeholder:font-visby rounded-md focus:border-saphhire',
            calendarHeaderLevel: 'uppercase text-pineGreen font-visby font-bold',
          }}
        />
      </div>
    </>
  );
};

export default DatePicker;
