import React from "react";
import classnames from "classnames";
import 'components/InterviewerListItem.scss'

const InterviewerListItem = ({
  id,
  name,
  avatar,
  selected,
  setInterviewer,
}) => {
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": selected
  })  
  return (
    <li onClick={() => setInterviewer(id)} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
    {selected && name}
    </li>
  );
};

export default InterviewerListItem;

// export default function InterviewerListItem(props) {
//   const interviewerClass = classnames("interviewers__item",
//     { 'interviewers__item--selected': props.selected }
//   )
//   const interviewerImage = classnames("interviewers__item-image",
//   {'interviewers__item-imgae--selected': props.selected })

//   return (
//     <li className={interviewerClass} onClick={props.setInterviewer}>
//       <img
//         className={interviewerImage}
//         src={props.avatar}
//         alt={props.name}
//       />
//       {props.selected && props.name}
//     </li>

//   );
// }
