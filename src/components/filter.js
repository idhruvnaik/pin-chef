import React from 'react';
import DateRangePicker from 'react-daterange-picker';
import moment from 'moment-range';

import InputRange from 'react-input-range';


import './form.scss'

export default function Filter() {

    return (
        // <div className="filter-div filter-page">
        //     <h4 className="reset-btn">RESET</h4>
        //     <div className="radio-list-container">
        //         <div className="radio-group">
        //             <label>Sort by</label>
        //             <ul>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Most Commented Posts</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Most Liked Posts</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>VIP Chefs</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Top Rated Chefs</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="filter-container">
        //             <label>Dates</label>
        //             <div className="filter">
        //                 {/* <DateRangePicker
        //                     firstOfWeek={1}
        //                     numberOfCalendars={2}
        //                     selectionType='range'
        //                     defaultState="available"
        //                     showLegend={true}
        //                 /> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className="filter-div">
        //     <h4 className="reset-btn">RESET</h4>
        //     <div className="radio-list-container">
        //         <div className="radio-group">
        //             <label>Sort by</label>
        //             <ul>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Most Commented Posts</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Most Liked Posts</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>VIP Chefs</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Top Rated Chefs</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Difficulty Level</label>
        //             <ul>
        //                 <li><input type="radio" name="difficultyLevel" />
        //                     <span>Easy</span>
        //                 </li>
        //                 <li><input type="radio" name="difficultyLevel" />
        //                     <span>Medium</span>
        //                 </li>
        //                 <li><input type="radio" name="difficultyLevel" />
        //                     <span>Advanced</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Cooking Time</label>
        //             <ul>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>1 min - 30 min</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>30 min - 60 min</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>60 min - 120 min</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>120 min &  more</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Cusines</label>
        //             <ul>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>European</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Cuban</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Russian</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Turkish</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegan</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Diets</label>
        //             <ul>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegan</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegetarian</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Gluten Free</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Halal</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Kosher</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Price</label>
        //             <InputRange
        //                 maxValue={20}
        //                 minValue={0}
        //             />
        //         </div>
        //     </div>
        // </div>

        // <div className="filter-div filter-page">
        //     <h4 className="reset-btn">RESET</h4>
        //     <div className="radio-list-container">
        //         <div className="radio-group">
        //             <label>Sort by</label>
        //             <ul>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Live Streaming</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Pre-recorded classes</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>VIP Chefs</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Top Rated Chefs</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="filter-container">
        //             <label>Dates</label>
        //             <div className="filter">
        //                 {/* <DateRangePicker
        // //                     firstOfWeek={1}
        // //                     numberOfCalendars={2}
        // //                     selectionType='range'
        // //                     defaultState="available"
        // //                     showLegend={true}
        // //                 /> */}
        //             </div>
        //         </div>
        //         <div className="radio-group">
        //             <label>Cusines</label>
        //             <ul>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>European</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Cuban</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Russian</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Turkish</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegan</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Diets</label>
        //             <ul>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegan</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegetarian</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Gluten Free</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Halal</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Kosher</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Price</label>
        //             <InputRange
        //                 maxValue={20}
        //                 minValue={0}
        //             />
        //         </div>
        //     </div>
        // </div>

        // <div className="filter-div filter-page">
        //     <h4 className="reset-btn">RESET</h4>
        //     <div className="radio-list-container">
        //         <div className="radio-group">
        //             <label>Sort by</label>
        //             <ul>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>VIP Chefs</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Top Rated Chefs</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="filter-container">
        //             <label>Chef Ratings</label>
        //             <div className="filter">

        //             </div>
        //         </div>
        //         <div className="radio-group">
        //             <label>Cusines</label>
        //             <ul>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>European</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Cuban</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Russian</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Turkish</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegan</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Diets</label>
        //             <ul>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegan</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegetarian</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Gluten Free</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Halal</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Kosher</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Nut Free</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Shellfish Free</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Dairy Free</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Organic</span>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>

        // <div className="filter-div filter-page">
        //     <h4 className="reset-btn">RESET</h4>
        //     <div className="radio-list-container">
        //         <div className="radio-group">
        //             <label>Sort by</label>
        //             <ul>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Top Rated Chefs</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>VIP Chefs</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Delivery</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Pick up/Takeaway</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Shipping Available</span>
        //                 </li>
        //                 <li><input type="radio" name="sortBy" />
        //                     <span>Available Now</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Cusines</label>
        //             <ul>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>European</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Cuban</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Russian</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Turkish</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegan</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegetarian</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="radio-group">
        //             <label>Diets</label>
        //             <ul>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegan</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Vegetarian</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Gluten Free</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Halal</span>
        //                 </li>
        //                 <li><input type="radio" name="cookingTime" />
        //                     <span>Kosher</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="filter-container">
        //             <label>Dates</label>
        //             <div className="filter">
        //                 {/* <DateRangePicker
        // //                     firstOfWeek={1}
        // //                     numberOfCalendars={2}
        // //                     selectionType='range'
        // //                     defaultState="available"
        // //                     showLegend={true}
        // //                 /> */}
        //             </div>
        //         </div>
        //         <div className="radio-group">
        //             <label>Price</label>
        //             <InputRange
        //                 maxValue={20}
        //                 minValue={0}
        //             />
        //         </div>
        //     </div>
        // </div>

        <div className="filter-div filter-page">
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
                    </ul>
                </div>
                <div className="filter-container">
                    <label>Dates</label>
                    <div className="filter">
                        {/* <DateRangePicker
        //                     firstOfWeek={1}
        //                     numberOfCalendars={2}
        //                     selectionType='range'
        //                     defaultState="available"
        //                     showLegend={true}
        //                 /> */}
                    </div>
                </div>
                <div className="radio-group">
                    <label>Price</label>
                    <InputRange
                        maxValue={20}
                        minValue={0}
                    />
                </div>
            </div>
        </div>
    );
}