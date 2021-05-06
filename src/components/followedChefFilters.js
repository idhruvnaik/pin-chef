import React from 'react';
import DateRangePicker from 'react-daterange-picker';
import moment from 'moment-range';

import InputRange from 'react-input-range';
import Cusines from './cusines';
import MoreCusine from '../assets/svg/more-cusines.svg';
import Popup from 'reactjs-popup';
import './form.scss';
import $ from "jquery";

export default function FollowedChefFilter() {

    function show_diets(){
        if($('.more-diets span')[0].innerHTML == "more..."){
            $('.all-diet ul').css("max-height", "fit-content");
            $('.more-diets span')[0].innerHTML = "less";
        } else{
            $('.all-diet ul').css("max-height", "145px");
            $('.more-diets span')[0].innerHTML = "more...";
        }
    }

    return (
        <div className="filter-page followed-chefs-filter">
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
                <div className="filter-container">
                    <label>Chef Ratings</label>
                    <div className="filter">

                    </div>
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
                                <div className="filter">
                                    <Cusines close_pop_up={close}/>
                                </div>
                            )}
                        </Popup>
                    </ul>
                </div>
                <div className="radio-group all-diet">
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
                    <div className="more-diets" onClick={show_diets}>
                        <img src={MoreCusine}></img>
                        <div style={{ opacity: "0.6" }}>
                            <span>more...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}