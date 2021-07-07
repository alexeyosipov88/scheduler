import React from "react";
import classnames from 'classnames';
import 'components/InterviewerListItem.scss'

export default function InterviewerListItem(props) {
  const interviewerClass = classnames("interviewers__item",
    { 'interviewers__item--selected': props.selected }
  )
  const interviewerImage = classnames("interviewers__item-image", 
  {'interviewers__item-imgae--selected': props.selected })



  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className={interviewerImage}
        src={props.avatar}
        alt={props.name}  
      />
      {props.selected && props.name}
    </li>
    
  );
}