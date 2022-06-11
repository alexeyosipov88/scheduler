import React from "react";

import classnames from 'classnames';

import "components/DayListItem.scss";

const DayListItem = ({name, spots, setDay, selected}) => {

  const classObject = {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  }
  const dayClass = classnames("day-list__item", classObject);
  const formatSpots = (spots) => {
    let result = "remaining";
    if(spots === 0) {
      result = "no spots " + result;
      return result;
    }
    if(spots === 1) {
      result = "1 spot " + result;
      return result;
    }
    return `${spots} spots ` + result;
  }

  
  return (
    <li className={dayClass} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}

export default DayListItem;

// export default function DayListItem(props) {
//   const formatSpots = () => {
//     if (props.spots === 0) {
//       return "no spots remaining";
//     }
//     if (props.spots === 1) {
//       return '1 spot remaining'
//     }
//     if (props.spots === 2) {
//       return '2 spots remaining';
//     }
//     return props.spots
//   }

//   const isFull = props.spots === 0 ? true : false;

//   const dayClass = classnames(
//     'day-list__item',
//     {'day-list__item--selected' : props.selected,
//     'day-list__item--full': isFull 
//   })

//   return (
//     <li data-testid="day" className={dayClass} onClick={props.setDay}>
//       <h2 className="text--regular">{props.name}</h2>
//       <h3 className="text--light">{formatSpots()} </h3>
//     </li>
//   );
// }