import React, { Component } from 'react';
// import DateRangePicker from 'react-daterange-picker';
import moment from 'moment-range';
import { Calendar, DateRangePicker, DateRange } from 'react-date-range';
import Popup from 'reactjs-popup';
import FilterDates from '../assets/svg/filter-dates.svg'
import InputRange from 'react-input-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


import './form.scss'

export default class FeedFilter extends Component {

    constructor(props) {
        super(props);
        this.update_feed_ranges = this.update_feed_ranges.bind(this);
        this.state = {
            selectionRange: [{
                startDate: null,
                endDate: null,
                key: 'selection',
            }],
            start_date: null,
            end_date: null
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
            <div className="filter-page feeds-filter">
                <h4 className="reset-btn">RESET</h4>
                <div className="radio-list-container">
                    <div className="radio-group">
                        <label>Sort by</label>
                        <ul>
                            <li><input type="radio" name="sortBy" />
                                <span>Most Commented Posts</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Most Liked Posts</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>VIP Chefs</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Top Rated Chefs</span>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-container" >
                        <Popup
                            trigger={<div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <div>
                                    <label style={{ cursor: "pointer" }}>Dates&nbsp;&nbsp; </label>
                                </div>
                                <img src={FilterDates}></img>
                            </div>}
                            position="center left"
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
                </div>
            </div>

        );
    }
}