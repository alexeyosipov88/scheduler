import React from "react";

import classnames from 'classnames';

import "components/DayListItem.scss";



export default function DayListItem(props) {
  const formatSpots = () => {
    if (props.spots === 0) {
      return "no spots remaining";
    }
    if (props.spots === 1) {
      return '1 spot remaining'
    }
    if (props.spots === 2) {
      return '2 spots remaining';
    }
    return props.spots
  }

  const isFull = props.spots === 0 ? true : false;

  const dayClass = classnames(
    'day-list__item',
    {'day-list__item--selected' : props.selected,
    'day-list__item--full': isFull 
  })

  return (
    <li data-testid="day" className={dayClass} onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()} </h3>
    </li>
  );
}