import React, { Component } from 'react';
import moment from 'moment-range';

import { Calendar, DateRangePicker, DateRange } from 'react-date-range';
import Popup from 'reactjs-popup';
import InputRange from 'react-input-range';
import Masterdate from '../../assets/svg/master-dates.svg';
import '../form.scss';
import 'react-input-range/lib/css/index.css';

export default class ChefMasterClassFilter extends Component {

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
            <div className="filter-page masterclass-filters">
                <h4 className="reset-btn">RESET</h4>
                <div className="radio-list-container">
                    <div className="radio-group">
                        <label>Sort by</label>
                        <ul>
                            <li><input type="radio" name="sortBy" />
                                <span>Delivery</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Pick up/Takeaway</span>
                            </li>
                            <li><input type="radio" name="sortBy" />
                                <span>Shipping Available</span>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-container">
                        <Popup
                            trigger={<div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <div>
                                    <label style={{ cursor: "pointer" }}>Dates&nbsp;&nbsp; </label>
                                </div>
                                <img src={Masterdate}></img>
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