import React from 'react';

export default function Filter() {

    return (
        <div className="filter-div">
            <h4 className="reset-btn">RESET</h4>
            <div className="radio-list-container">
                <div className="radio-group">
                    <label>Dates</label>
                    <ul>
                        <li><input type="radio" name="date" /> Today</li>
                        <li><input type="radio" name="date" /> Yesterday</li>
                        <li><input type="radio" name="date" /> This week</li>
                        <li><input type="radio" name="date" /> Custom</li>
                    </ul>
                </div>
                <div className="radio-group">
                    <label>Dietary</label>
                    <ul>
                        <li><input type="radio" name="dietary" /> Vegan</li>
                        <li><input type="radio" name="dietary" /> Vegetarian</li>
                        <li><input type="radio" name="dietary" /> Halal</li>
                        <li><input type="radio" name="dietary" /> Kosher</li>
                    </ul>
                </div>
                <div className="radio-group">
                    <label>Cusines</label>
                    <ul>
                        <li><input type="radio" name="cusines" /> European</li>
                        <li><input type="radio" name="cusines" /> Cuban</li>
                        <li><input type="radio" name="cusines" /> Russian</li>
                        <li><input type="radio" name="cusines" /> Turkish</li>
                        <li><input type="radio" name="cusines" /> Vegan</li>
                        <li><input type="radio" name="cusines" /> Vegetarian</li>
                    </ul>
                </div>
                <div className="radio-group">
                    <label>Price</label>
                    <input className="slider" type="range" min="0" max="1" step="0.01" value="0.5"></input>
                </div>
            </div>
        </div>
    );
}