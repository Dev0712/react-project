import React from 'react'

export default function Worker(Props) {
  return (
    <div className="worker" style={{border:" 1px solid black"}}>
    <h5>{Props.fName}</h5>
      Contact Number  - {Props.mobNo}
    </div>
  )
}
