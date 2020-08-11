import React from "react";

const Bar = (props)=>{
    return (
        <div className="html">
            <div className="tag">
                <p>{props.name}</p>
            </div>
            <div className="progressbar">
                <div className="bar" style={{["--percentage"]: props.percentage}}></div>
            </div>
        </div>
    )
}
export default Bar;