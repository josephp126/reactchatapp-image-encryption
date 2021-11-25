import React from "react";
import { useEffect } from "react";
import moment from 'moment';

function DateDivider({date}) {
  return (
    <div
      className="date-divider"
      role="separator"
      aria-label={moment(date).format('MMMM DD, YYYY')}
    >
      <span className="date-divider-content">{moment(date).format('MMMM DD, YYYY')}</span>
    </div>
  );
}

export default DateDivider;
