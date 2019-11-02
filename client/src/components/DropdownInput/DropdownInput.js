import React from "react";

export const DropdownInput = props => (
    <div className="form-group">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">{props.label}</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" onChange={props.onChange} type={props.type} name={props.name}>
                <option selected value="User">User</option>
                <option value="Photographer">Photographer</option>
            </select>
        </div>
    </div>
)