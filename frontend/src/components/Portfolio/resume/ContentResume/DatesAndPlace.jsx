import React from 'react';
import {extractMonthYear} from "@/helper/convertDate";

const DatesAndPlace = ({dateInit, city, country, date_end}) => {
  const formattedDateRange = () => {
    if (dateInit && date_end) {
      return `${extractMonthYear(dateInit)} - ${extractMonthYear(date_end)}`;
    }
    return '';
  };

    return (
      <div className={'my-2'}>
          <span className={'text-resume-style'}>
            {formattedDateRange()}
            {country !== '' ? ` | ${city ? `${city}, ` : ''}${country}` : ''}
          </span>


      </div>
    );
};

export default DatesAndPlace;
