import React, { Component } from 'react';

import Cusines from './cusines';
import Popup from 'reactjs-popup';
import MoreCusine from '../assets/svg/more-cusines.svg';
import InputRange from 'react-input-range';


import './form.scss'
import 'react-input-range/lib/css/index.css';
import $ from "jquery";

export default class RecipeFilter extends Component {

    constructor(props) {
        super(props);
        this.apply_filters = this.apply_filters.bind(this);
        this.show_diets = this.show_diets.bind(this);
        this.state = {
            value: { min: 2, max: 10 },
        }
    }

    apply_filters(selected_cusines) {
        this.props.get_cusines(selected_cusines);
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

    render() {
        return (
            <div className="filter-page recipes-filter">
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
                    <div className="radio-group">
                        <label>Difficulty Level</label>
                        <ul>
                            <li><input type="radio" name="difficultyLevel" />
                                <span>Easy</span>
                            </li>
                            <li><input type="radio" name="difficultyLevel" />
                                <span>Medium</span>
                            </li>
                            <li><input type="radio" name="difficultyLevel" />
                                <span>Advanced</span>
                            </li>
                        </ul>
                    </div>
                    <div className="radio-group">
                        <label>Cooking Time</label>
                        <ul>
                            <li><input type="radio" name="cookingTime" />
                                <span>1 min - 30 min</span>
                            </li>
                            <li><input type="radio" name="cookingTime" />
                                <span>30 min - 60 min</span>
                            </li>
                            <li><input type="radio" name="cookingTime" />
                                <span>60 min - 120 min</span>
                            </li>
                            <li><input type="radio" name="cookingTime" />
                                <span>120 min &  more</span>
                            </li>
                        </ul>
                    </div>
                    <div className="radio-group">
                        <label>Cusines</label>
                        <ul>
                            <li><input type="radio" name="cusines" value="European" />
                                <span>European</span>
                            </li>
                            <li><input type="radio" name="cusines" />
                                <span>Cuban</span>
                            </li>
                            <li><input type="radio" name="cusines" />
                                <span>Russian</span>
                            </li>
                            <li><input type="radio" name="cusines" />
                                <span>Turkish</span>
                            </li>
                            <li><input type="radio" name="cusines" />
                                <span>Vegan</span>
                            </li>
                            <li><input type="radio" name="cusines" />
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
                                        <Cusines close_pop_up={close} onCusineChange={this.apply_filters} />
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
                    <div className="radio-group">
                        <label>Serving Size</label>
                        <InputRange
                            maxValue={20}
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