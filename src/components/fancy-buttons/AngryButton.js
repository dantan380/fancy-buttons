import { useReducer } from "react";

const AngryButton = () => {

  const [anger, dispatch] = useReducer((anger, action) => {
    if (anger < 1) {
      return anger > 1 ? 0 : anger + action;
    } 
  }, 0)

  return (
    <button className="AngryButton" style={{backgroundColor: `rgba(255,0,0,${anger})`}} onClick={() => {dispatch(0.1)}}>
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
};

export default AngryButton;
