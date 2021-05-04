import React, { Component } from 'react';

import PostMenu from '../assets/png_icons/Post menu icon@2x.png';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import LeftBack from '../assets/png_icons/Green back arrow.png';
import ReplyComment from '../assets/svg/reply_comment.svg';
import FullHeartComment from '../assets/svg/full-heart-comment.svg'
import EmptyHeartComment from '../assets/svg/Empty Comment like.svg'
import AddComment from '../assets/svg/Send btn.svg'
import Sticker from '../assets/svg/Sticker btn.svg'

import $ from 'jquery';

export default class Comments extends Component {

  constructor(props) {
    super(props);
    this.token = this.props.token;
    this.user_id = this.props.user_id;
    this.showTime = this.showTime.bind(this);
    this.makeTimer = this.makeTimer.bind(this);
    this.like_unlike_Comment = this.like_unlike_Comment.bind(this);
    this.add_comment = this.add_comment.bind(this);
    this.backToParent = this.backToParent.bind(this);
    this.state = {
      comments: this.props.comments
    }
    this.makeTimer();
    this.ratingChanged = (newRating) => {
      document.querySelector('.each_service .primary-details .rattings .given_rattings').innerHTML = newRating;
    };

    this.active = (e) => {
      var element = e.target.id;
      $(".sec").hide();
      $("#" + element + "-sec").show();
      $('.nav-active').removeClass('nav-active');
      e.target.classList.add('nav-active');
    }

  }

  makeTimer() {
    setInterval(() => {
      console.log("from srt interval comemnts");
    }, 60000)
  }

  showTime(datetime) {
    var date1 = new Date(datetime);
    var date2 = new Date();
    var diffInMs = Math.abs(date2 - date1);
    if ((diffInMs / 1000) < 60) {
      return (diffInMs / 1000).toFixed(0) + " seconds ago ";
    } else if ((diffInMs / (1000 * 60)) < 60) {
      return (diffInMs / (1000 * 60)).toFixed(0) + " mins ago";
    } else if ((diffInMs / (1000 * 60 * 60)) < 24) {
      return (diffInMs / (1000 * 60 * 60)).toFixed(0) + " hours ago";
    } else {
      return (diffInMs / (1000 * 60 * 60 * 24)).toFixed(0) + " days ago";
    }
  }

  // componentDidMount() {
  //   console.log(this.props.comments, "from componenets did mount updating comments state");
  //   this.setState({
  //     comments: this.props.comments
  //   })
  // }

  async add_comment(e) {
    var comment = $('.comment-content')[0].value;
    if (comment.length > 0){
      let result = await this.props.addCommentToPost(e.target.id, this.user_id, comment, this.token);
      if (result.status && result.status == false) {
        console.log(result.message);
      } else {
        let comments = await this.props.getCommentsByPostID(e.target.id, this.user_id, this.token);
        if (comments.status && comments.status == false) {
          console.log(comments.message);
        } else {
          comments.map((item) => {
            item.createdAt = this.showTime(item.createdAt);
          })
          this.setState({
            comments: comments
          })
          $('.comment-content')[0].value = null;
        }
      }
    } else{
      NotificationManager.error('Empty comments are not allowed.', 'ERROR', 3000);
    }
  }

  async like_unlike_Comment(e) {
    console.log(e, "from like and unlike comment");
    if (e.target.className == "false") {
      let result = await this.props.addLikeToComment(this.user_id, e.target.id, this.token);
      if (result.status && result.status == false) {
        console.log(result.message);
      } else {
        let comments = [...this.state.comments];
        comments.map((comment) => {
          if (comment._id == e.target.id) {
            comment.likes = comment.likes + 1;
            comment.is_like = true;
          }
        })
        this.setState({
          comments: comments
        })
      }
    } else {
      let result = await this.props.removeLikeToComment(this.user_id, e.target.id, this.token);
      if (result.status && result.status == false) {
        console.log(result.message);
      } else {
        let comments = [...this.state.comments];
        comments.map((comment) => {
          if (comment._id == e.target.id) {
            comment.likes = comment.likes - 1;
            comment.is_like = false;
          }
        })
        this.setState({
          comments: comments
        })
      }
    }
  }

  backToParent() {
    $('#' + this.props.comment_parent_section).css("display", "block");
    $('.home-content .switch-content').css("display", "flex");
    $('#outer-comment-sec').css("display", "none");
  }

  componentWillReceiveProps(nextProp){
    this.setState({
      comments: nextProp.comments
    })
  }

  render() {
    return (
      <div className="comment sec" id="comment-sec">
        {console.log(this, "from comment sec")}
        <div className="switch-content">
          <div>
            <img src={LeftBack} onClick={() => this.backToParent()}></img>
          </div>
          <div>
            <h2>COMMENTS</h2>
          </div>
        </div>
        <div className="feed" id={this.props.comment._id}>
          <div className="primary-details">
            <div className="l-div">
              <div className="profile-img-container">
                <img src={this.props.comment.chef && this.props.comment.chef.profile_image}></img>
              </div>
              <div className="user-detail-container">
                <h3>{this.props.comment.chef && this.props.comment.chef.user_name}</h3>
                <h5>{this.props.comment.chef && this.props.comment.chef.chef_details.position}</h5>
              </div>
            </div>
            <div style={{ paddingRight: "4px" }}>
              <div className="post-option" style={{ textAlignLast: "right" }}><img src={PostMenu}></img></div>
              <div style={{ display: "flex" }}>
                {/* <div className="feed_rattings">{item.rate}</div>
                <ReactStars
                  count={5}
                  value={item.rate}
                  onChange={null}
                  isHalf={true}
                  edit={false}
                  activeColor="#ffd700"
                /> */}
              </div>
            </div>
          </div>
          <div className="post-image">
            <img className="userpost" src={this.props.comment.post_content && this.props.comment.post_content}></img>
          </div>
          <div className="comments-on-post">
            {this.state.comments.length > 0 && this.state.comments.map((item) => {
              return (
                <div className="comments">
                  <div className="user-details">
                    <div className="user-detail-container">
                      <h5>{item.commenter_name}</h5>
                    </div>
                    <div className="profile-img-container">
                      <img src={item.commenter_profile}></img>
                    </div>
                  </div>
                  <div className="actual-comment">
                    {item.comment}
                  </div>
                  <div className="comment-details">
                    <div>{item.createdAt}</div>
                    <div className="reply-comment">
                      <div>
                        <span>{item.likes} {item.likes == "1" ? "like" : "likes"}</span>
                      </div>
                      <div className="comment-symbols">
                        <div>
                          <img src={ReplyComment}></img>
                        </div>
                        <div>
                          <img className={item.is_like.toString()} src={item.is_like ? FullHeartComment : EmptyHeartComment} id={item._id} onClick={this.like_unlike_Comment}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="add-comment">
            <div className="write-comment">
              <input className="comment-content" type="text" placeholder="Enter comment"></input>
              <img src={Sticker}></img>
            </div>
            <img src={AddComment} id={this.props.comment._id} onClick={this.add_comment}></img>
          </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}