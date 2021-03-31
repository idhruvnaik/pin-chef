import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../../assets/images/photo2.png';
import UserPost from '../../assets/images/bannerFeed2.png';
import PostMenu from '../../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../../assets/png_icons/Comment icon@2x.png';
import EmptyHeart from '../../assets/png_icons/Empty heart@2x.png';
import PostShare from '../../assets/png_icons/Post Share count@2x.png';
import Time from '../../assets/png_icons/time recipe@2x.png';
import Recipe_time from '../../assets/png_icons/time recipe.png';
import LeftBack from '../../assets/png_icons/Green back arrow.png'
import FullStar from '../../assets/svg/Star clicked on.svg'
import { getRattingsChefID } from '../../services/apiOperations';

import $ from 'jquery';

export default class home extends Component {

    constructor(props) {
        super(props);

        this.token = this.props.token;
        this.user_id = this.props.user_id;
        this.initialize_rattings = this.initialize_rattings.bind(this);

        this.state = {
            rattings: {}
        }
        this.ratingChanged = (newRating) => {
            document.querySelector('.each_service .primary-details .rattings .given_rattings').innerHTML = newRating;
        };

    }

    async initialize_rattings(){
        let ratting_result = await getRattingsChefID(this.user_id, this.token);
        if(ratting_result.status && ratting_result.status == false){
            this.setState({
                rattings: {}});
        } else{
            this.setState({
                rattings: ratting_result});
        }
    }

    componentDidMount() {
        this.initialize_rattings();
    }

    render() {
        return (
            <div className="star-content">
                <div className="switch-content">
                    <div>
                        <h2>Ratings & Reviews</h2>
                    </div>
                </div>
                <div className="chef-rattings">
                    <h5>Ratings and Reviews left for you.</h5>
                    <div className="each_ratting">
                        <b>Service</b>
                        <div className="ratting-xqn">
                            <ReactStars
                                count={5}
                                value={4.5}
                                size={24}
                                onChange={null}
                                isHalf={true}
                                edit={false}
                                activeColor="#ffd700"
                                // fullIcon={<i className="fa fa-star" style={{backgroundColor: "green"}}><img src={FullStar}></img></i>}
                                // renderStarIcon={() => <span></span>}
                                // filledIcon={FullStar}
                                // halfIcon={FullStar}
                            />
                            <span className="ratting-in-written">{this.state.rattings.avgServiceRate}</span>
                        </div>
                    </div>
                    <div className="each_ratting">
                        <b>Food</b>
                        <div className="ratting-xqn">
                            <ReactStars
                                count={5}
                                value={this.state.rattings.avgFoodRate}
                                size={24}
                                onChange={null}
                                isHalf={true}
                                edit={false}
                                activeColor="#ffd700"
                                // filledIcon={FullStar}
                                // halfIcon={FullStar}
                            />
                            <span className="ratting-in-written">{this.state.rattings.avgFoodRate}</span>
                        </div>
                    </div>
                    <div className="each_ratting">
                        <b>Personality</b>
                        <div className="ratting-xqn">
                            <ReactStars
                                count={5}
                                value={this.state.rattings.avgPersonalityRate}
                                size={24}
                                onChange={null}
                                isHalf={true}
                                edit={false}
                                activeColor="#ffd700"
                                // filledIcon={FullStar}
                                // halfIcon={FullStar}
                            />
                            <span className="ratting-in-written">{this.state.rattings.avgPersonalityRate}</span>
                        </div>
                    </div>
                    <div className="each_ratting">
                        <b>Presentation</b>
                        <div className="ratting-xqn">
                            <ReactStars
                                count={5}
                                value={this.state.rattings.avgPresentationRate}
                                size={24}
                                onChange={null}
                                isHalf={true}
                                edit={false}
                                activeColor="#ffd700"
                                // filledIcon={FullStar}
                                // halfIcon={FullStar}
                            />
                            <span className="ratting-in-written">{this.state.rattings.avgPresentationRate}</span>
                        </div>
                    </div>
                    <div className="each_ratting">
                        <b>Rating Average  </b>
                        <span className="ratting-in-written">{this.state.rattings.avgRate}</span>
                    </div>
                </div>
            </div>
        );
    }
}