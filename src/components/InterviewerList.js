import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "../components/InterviewerList.scss";
import PropTypes from "prop-types";

const InterviewerList = ({value, interviewers, onChange}) => {

  interviewers = interviewers.map(elem => <InterviewerListItem selected={value === elem.id} setInterviewer={() => onChange(elem.id)} key={elem.id} {... elem}/>)

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
};

export default InterviewerList;

// export default function InterviewerList(props) {
//   const interviewers = props.interviewers;
//   interviewers.map((interviewer) => <InterviewerListItem interviewer={interviewer} />)
//   return (
//     <section className="interviewers">
//       <h4 className="interviewers__header text--light">Interviewer</h4>
//       <ul className="interviewers__list">
//         {interviewers.map((interviewer) => <InterviewerListItem
//           key={interviewer.id}
//           id={interviewer.id}
//           avatar={interviewer.avatar}
//           name={interviewer.name}
//           selected={interviewer.id === props.value}
//           setInterviewer={(event) => props.onChange(interviewer.id)}
//         />)}
//       </ul>
//     </section>
//   )
// }

// InterviewerList.propTypes = {
//   interviewers: PropTypes.array.isRequired
// };
