import React from 'react';
import DateRangePicker from 'react-daterange-picker';
import moment from 'moment-range';

import InputRange from 'react-input-range';
import Cusines from './cusines';
import MoreCusine from '../assets/svg/more-cusines.svg';
import Popup from 'reactjs-popup';

import './form.scss'

export default function AllChefFilter() {

    return (
        <div className="filter-page all-chefs-filter">
            <h4 className="reset-btn">RESET</h4>
            <div className="radio-list-container">
                <div className="radio-group">
                    <label>Sort by</label>
                    <ul>
                        <li><input type="radio" name="sortBy" />
                            <span>VIP Chefs</span>
                        </li>
                        <li><input type="radio" name="sortBy" />
                            <span>Top Rated Chefs</span>
                        </li>
                    </ul>
                </div>
                <div className="radio-group">
                    <label>Cusines</label>
                    <ul>
                        <li><input type="radio" name="cookingTime" />
                            <span>European</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Cuban</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Russian</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Turkish</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Vegan</span>
                        </li>
                        <Popup
                            trigger={<li style={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                                <img src={MoreCusine}></img>
                                <div style={{ opacity: "0.6" }}>
                                    <span>more...</span>
                                </div>
                            </li>}
                            position="center center"
                            closeOnDocumentClick
                            modal
                            nested
                        >
                            {close => (
                                <div className="filter" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Cusines />
                                </div>
                            )}
                        </Popup>
                    </ul>
                </div>
                <div className="radio-group">
                    <label>Diets</label>
                    <ul>
                        <li><input type="radio" name="cookingTime" />
                            <span>Vegan</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Vegetarian</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Gluten Free</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Halal</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Kosher</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Nut Free</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Shellfish Free</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Dairy Free</span>
                        </li>
                        <li><input type="radio" name="cookingTime" />
                            <span>Organic</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}