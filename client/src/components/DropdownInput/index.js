import React from "react";

export const DropdownInput = props => (
    <div className="form-group">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">{props.label}</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" onChange={props.onChange} type={props.type} name={props.name}>
                <option value="Customer">Customer</option>
                <option value="Photographer">Photographer</option>
            </select>
        </div>
    </div>
)

export const DropdownInputSpecialty = props => (
    <div className="form-group">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">{props.label}</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" onChange={props.onChange} type={props.type} name={props.name}>
                <option value="Weddings">Weddings</option>
                <option value="Portrait">Portrait</option>
                <option value="Black and White/Monochromatic">Black and White/Monochromatic</option>
                <option value="Landscape">Landscape</option>
                <option value="Special Events">Special Events</option>
                <option value="Abstract">Abstract</option>
                <option value="Nature">Nature</option>
                <option value="Baby Showers">Baby Showers</option>
                <option value="Photoshoots">Photoshoots</option>
                <option value="Combination">Combination</option>
            </select>
        </div>
    </div>
)