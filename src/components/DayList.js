import React from "react";
import DayListItem from "components/DayListItem"

const DayList = ({days, setDay, value}) => {
  
  days = days.map((elem) => <DayListItem selected={value === elem.name} setDay={() => setDay(elem.name)}  key={elem.id} {... elem}/>);

  return (
    <ul>
      {days}  
    </ul> 
  )

}

export default DayList;



// export default function DayList(props) {
//   const days = props.days;
//   return (
//     <ul> 

//       {
//       days.map((day) =>  <DayListItem 
//       key={day.id}
//       name={day.name} 
//       spots= {day.spots}
//       selected={day.name === props.day}
//       setDay={(event) => props.setDay(day.name)}/>)
//       }
//     </ul> 
  
//   )}
  
