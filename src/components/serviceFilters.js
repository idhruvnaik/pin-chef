import React, { Component } from 'react';

import Masterdate from '../assets/svg/master-dates.svg';
import { Calendar, DateRangePicker, DateRange } from 'react-date-range';
import Popup from 'reactjs-popup';
import InputRange from 'react-input-range';
import Cusines from './cusines';
import MoreCusine from '../assets/svg/more-cusines.svg';

import './form.scss';
import 'react-input-range/lib/css/index.css';
import $ from "jquery";

export default class ServiceFilter extends Component {

    constructor(props) {
        super(props);
        this.update_feed_ranges = this.update_feed_ranges.bind(this);
        this.state = {
            value: { min: 8, max: 65 },
            selectionRange: [{
                startDate: null,
                endDate: null,
                key: 'selection',
            }],
            start_date: null,
            end_date: null
        }
    }

    show_diets(){
        if($('.more-diets span')[0].innerHTML == "more..."){
            $('.all-diet ul').css("max-height", "fit-content");
            $('.more-diets span')[0].innerHTML = "less";
        } else{
            $('.all-diet ul').css("max-height", "145px");
            $('.more-diets span')[0].innerHTML = "more...";
        }
    }

    update_feed_ranges(ranges) {
        var temp = [];
        temp.push(ranges.selection);
        console.log(ranges.selection.startDate, "start_date");
        console.log(ranges.selection.endDate, "end date");
        console.log(typeof (ranges.selection.startDate), "start_date");
        console.log(typeof (ranges.selection.endDate), "end date");
        this.setState({ start_date: ranges.selection.startDate.toLocaleDateString() });
        this.setState({ end_date: ranges.selection.endDate.toLocaleDateString() });
        this.setState({ selectionRange: temp });
    }

    render() {
        return (
            <div className="filter-page services-filter">
                <h4 className="reset-btn">RESET</h4>
                <div className="radio-list-container">
                    <div className="radio-group">
                        <label>Sort by</label>
                        <ul>
                            <li><input type="radio" name="sortBy" />
                                <span>Top Rated Chefs</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>VIP Chefs</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Delivery</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Pick up/Takeaway</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Shipping Available</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Invite Chef to your location</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Chef hosts at chefs location</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Cook live with Chef</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Available Now</span>
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
                            <li><input type="radio" name="cookingTime" />
                                <span>Vegetarian</span>
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
                        <div className="more-diets" onClick={this.show_diets}>
                            <img src={MoreCusine}></img>
                            <div style={{ opacity: "0.6" }}>
                                <span>more...</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-container">
                        <Popup
                            trigger={<div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <div>
                                <label style={{ cursor: "pointer" }}>Dates&nbsp;&nbsp; </label>
                            </div>
                            <img src={Masterdate}></img>
                            </div>}
                            position="top left"
                            closeOnDocumentClick
                        >
                            {close => (
                                <div className="filter">
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => this.update_feed_ranges(item)}
                                        ranges={this.state.selectionRange}
                                        rangeColors={["#FFD54F"]}
                                    // dayDisplayFormat="d"
                                    // weekdayDisplayFormat="E"
                                    />
                                </div>
                            )}
                        </Popup>
                    </div>
                    <ul>
                        <li>{this.state.start_date} - {this.state.end_date}</li>
                    </ul>
                    <div className="radio-group">
                        <label>Price</label>
                        <InputRange
                            formatLabel={value => `$ ${value}`}
                            maxValue={100}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value })}
                        />
                    </div>
                </div>
            </div>
        );
    }
}