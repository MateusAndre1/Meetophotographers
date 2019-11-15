import React from "react";

export const InputElement2 = props => (
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">{props.label}</label>
        <textarea className="form-control" onChange={props.onChange} type={props.type} name={props.name} placeholder={props.placeholder} id="exampleFormControlTextarea1" rows="6"></textarea>
    </div>
)