import React from "react";
import "components/Button.scss";
import classnames from 'classnames';



const Button = ({children, confirm, danger, onClick, disabled}) => {
  const classObject = {
    "button--confirm": confirm,
    "button--danger": danger
  }
 const buttonClass = classnames("button", classObject)
 
  return(
    <button disabled={disabled} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  )

}

export default Button;



// export default function Button(props) {
//   const buttonClass = classnames("button", {
//     "button--confirm": props.confirm,
//     "button--danger": props.danger
//   });

//   return (
//     <button
//       className={buttonClass}
//       onClick={props.onClick}
//       disabled={props.disabled}
//     >
//       {props.children}
//     </button>
//   );
// }