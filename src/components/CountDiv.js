import React from "react";
import Card from "./Card";

const CountDiv = (props) => {
    return (
       <div className="home">
        <Card number={props.hours[0]} />
        <Card number={props.hours[1]} />
        <Card number={props.minutes[0]} />
        <Card number={props.minutes[1]} />
        <Card number={props.seconds[0]} />
        <Card number={props.seconds[1]} />
       </div>
    )
}

export default CountDiv;