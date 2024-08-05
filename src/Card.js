import React from "react"; 
import './card.css';


function Card(Props)
{
  return(
    <div className="card"><img src={Props.imgsrc}  alt="work Image"/>
    <h5>{Props.wName}</h5>
      Price  - {Props.price}
    </div>
  )
}

export default Card;