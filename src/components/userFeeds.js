import React from 'react';
import ReactDOM from 'react-dom';
import CommonComponents from './commonComponents'
import User from '../assets/svg/User';
import GlobalStyles from '../styles/GlobalStyles';
import './commonComponents.css'
import './userFeeds.css'
import FinalLogo from '../assets/images/Logo-small.png'
import Filter from '../assets/images/filter.png'
import LocationIcon from '../assets/png_icons/Login_Sign up, Splash/Location icon black.png'
import SearchIcon from '../assets/png_icons/Login_Sign up, Splash/search icon.png'
import Home from '../assets/png_icons/Home.png'
import Home_selected from '../assets/png_icons/Home_selected.png'
import Chef from '../assets/png_icons/Chef.png'
import Chef_selected from '../assets/png_icons/Chef_selected.png'
import Shop from '../assets/png_icons/Shop.png'
import Shop_selected from '../assets/png_icons/Shop_selected.png'
import Star from '../assets/png_icons/Star.png'
import Star_selected from '../assets/png_icons/Star_selected.png'
import Settings from '../assets/png_icons/Settings.png'
import Settings_selected from '../assets/png_icons/Settings_selected.png'

const bar_icons = {
    "Home": Home,
    "Home_selected": Home_selected,
    "Chef": Chef,
    "Chef_selected": Chef_selected,
    "Shop": Shop,
    "Shop_selected": Shop_selected,
    "Star": Star,
    "Star_selected": Star_selected,
    "Settings": Settings,
    "Settings_selected": Settings_selected
}

export default function UserFeeds() {
  function _renderSkipButton() {
    return (
      <text
        style={{
          marginTop: 10,
          fontFamily: GlobalStyles.font.fontFamilyBold,
          fontSize: 18,
          color: GlobalStyles.color.white,
          fontWeight: '100',
        }}>
        Skip
      </text>
    );
  };

  function mark_active(e) {
    console.log(window.innerWidth);
    var current_class = document.getElementsByClassName('current');
    if (current_class.length > 0){
        var current_id = current_class[0].id;
        current_class[0].src = bar_icons[current_id];
        current_class[0].classList.remove("current");
    }
    var element_id = e.target.id;
    var selected_element = element_id + "_selected";
    var current_element = document.getElementById(element_id);
    current_element.src = bar_icons[selected_element];
    current_element.classList.add("current");
  };
  
  return (
    <div className="outer-layout">
        <div className="upper-bar">
            <img src={FinalLogo}></img>
            <img src={Filter}></img>
            <img src={LocationIcon}></img>
            <span><b>All</b></span>
            <img src={SearchIcon}></img>
            <div className="top-r">
                <select className="form-control">
                    <option>EN</option>
                </select>
            <User />
            </div>
        </div>
        <div className="user-pallet">
            <div className="filters">
                <table>
                    <tr>
                        <td></td>
                        <td><b>RESET</b></td>
                    </tr>
                    <tr>
                        <td>
                            <b>Dates</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Today"></input>
                            <span>Today</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Yesterday"></input>
                            <span>Yesterday</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="This week"></input>
                            <span>This week</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Custom"></input>
                            <span>Custom</span>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>
                            <b>Dietary</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Vegan"></input>
                            <span>Vegan</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Vegetarian"></input>
                            <span>Vegetarian</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Halal"></input>
                            <span>Halal</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Kosher"></input>
                            <span>Kosher</span>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>
                            <b>Cusines</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="European"></input>
                            <span>European</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Cuban"></input>
                            <span>Cuban</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Russian"></input>
                            <span>Russian</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Turkish"></input>
                            <span>Turkish</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Vegan"></input>
                            <span>Vegan</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" onchange="mark_active_question_on_section3(this)" name="question-21" value="Vegeterian"></input>
                            <span>Vegeterian</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="user-content"></div>
            <div className="pinchef-content"></div>
        </div>
        <div className="bottom-bar">
            <div>
                <img src={Home} id="Home" height="28" onClick={mark_active}></img>
            </div>
            <div>
                <img src={Chef} id="Chef" height="28" onClick={mark_active}></img>
            </div>
            <div>
                <img src={Shop} id="Shop" height="28" onClick={mark_active}></img>
            </div>
            <div>
                <img src={Star} id="Star" height="28" onClick={mark_active}></img>
            </div>
            <div>
                <img src={Settings} id="Settings" height="28" onClick={mark_active}></img>
            </div>
        </div>
    </div>
  );
}