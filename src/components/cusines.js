import React, { Component } from 'react';

import './form.scss';
import './cusines.scss';

const cusines = [
    {
        username: 'Afghani'
    },
    {
        username: 'African'
    },
    {
        username: 'Albanian'
    },
    {
        username: 'American'
    },
    {
        username: 'Apulian'
    },
    {
        username: 'Arabic'
    },
    {
        username: 'Argentinean'
    },
    {
        username: 'Armenian'
    },
    {
        username: 'Asian'
    },
    {
        username: 'Assyrian'
    },
    {
        username: 'Australian'
    },
    {
        username: 'Austrian'
    },
    {
        username: 'Bahamian'
    },
    {
        username: 'Bangladeshi'
    },
    {
        username: 'Basque'
    },
    {
        username: 'Beijing cuisine'
    },
    {
        username: 'Belgian'
    },
    {
        username: 'Brazilian'
    },
    {
        username: 'British'
    },
    {
        username: 'Bulgarian'
    },
    {
        username: 'Burmese'
    },
    {
        username: 'Cajun & Creole'
    },
    {
        username: 'Cambodian'
    },
    {
        username: 'Campania'
    },
    {
        username: 'Canadian'
    },
    {
        username: 'Cantonese'
    },
    {
        username: 'Caribbean'
    },
    {
        username: 'Catalan'
    },
    {
        username: 'Central American'
    },
    {
        username: 'Central Asian'
    },
    {
        username: 'Central European'
    },
    {
        username: 'Central-Italian'
    },
    {
        username: 'Chilean'
    },
    {
        username: 'Chinese'
    },
    {
        username: 'Colombian'
    },
    {
        username: 'Contemporary'
    },
    {
        username: 'Croatian'
    },
    {
        username: 'Cuban'
    },
    {
        username: 'Czech'
    },
    {
        username: 'Danish'
    },
    {
        username: 'Deli'
    },
    {
        username: 'Eastern European'
    },
    {
        username: 'Ecuadorean'
    },
    {
        username: 'Egyptian'
    },

    {
        username: 'Emilian'
    },
    {
        username: 'Ethiopian'
    },
    {
        username: 'European'
    },
    {
        username: 'Filipino'
    },
    {
        username: 'French'
    },
    {
        username: 'Fusion'
    },
    {
        username: 'Georgian'
    },
    {
        username: 'German'
    },
    {
        username: 'Greek'
    },
    {
        username: 'Hawaiian'
    },
    {
        username: 'Healthy'
    },
    {
        username: 'Hong Kong'
    },
    {
        username: 'Hungarian'
    },
    {
        username: 'Indian'
    },
    {
        username: 'Indonesian'
    },
    {
        username: 'International'
    },
    {
        username: 'Irish'
    },
    {
        username: 'Israeli'
    },
    {
        username: 'Italian'
    },
    {
        username: 'Jamaican'
    },
    {
        username: 'Japanese'
    },
    {
        username: 'Japanese Fusion'
    },
    {
        username: 'Kaiseki'
    },
    {
        username: 'Korean'
    },
    {
        username: 'Latin'
    },
    {
        username: 'Lazio'
    },
    {
        username: 'Lebanese'
    },
    {
        username: 'Malaysian'
    },
    {
        username: 'Mediterranean'
    },
    {
        username: 'Mexican'
    },
    {
        username: 'Middle Eastern'
    },
    {
        username: 'Moroccan'
    },
    {
        username: 'Native American'
    },
    {
        username: 'Neapolitan'
    },
    {
        username: 'Nepali'
    },
    {
        username: 'New Zealand'
    },
    {
        username: 'Nigerian'
    },
    {
        username: 'Nonya'
    },
    {
        username: 'Northern-Italian'
    },
    {
        username: 'NorthWestern Chinese'
    },
    {
        username: 'Norwegian'
    },
    {
        username: 'Pakistani'
    },
    {
        username: 'Persian'
    },
    {
        username: 'Peruvian'
    },
    {
        username: 'Pizza'
    },
    {
        username: 'Polish'
    },
    {
        username: 'Polynesian'
    },
    {
        username: 'Portuguese'
    },
    {
        username: 'Puerto Rican'
    },
    {
        username: 'Romagna'
    },
    {
        username: 'Romana'
    },
    {
        username: 'Romanian'
    },
    {
        username: 'Russian'
    },
    {
        username: 'Salvadoran'
    },
    {
        username: 'Sardinian'
    },
    {
        username: 'Scandinavian'
    },
    {
        username: 'Scottish'
    },
    {
        username: 'Shanghai'
    },
    {
        username: 'Sicilian'
    },
    {
        username: 'Singaporean'
    },
    {
        username: 'South American'
    },
    {
        username: 'Southern-Italian'
    },
    {
        username: 'Southwestern'
    },
    {
        username: 'Spanish'
    },
    {
        username: 'Sri Lankan'
    },
    {
        username: 'Sushi'
    },
    {
        username: 'Swedish'
    },
    {
        username: 'Swiss'
    },
    {
        username: 'Szechuan'
    },
    {
        username: 'Taiwanese'
    },
    {
        username: 'Thai'
    },
    {
        username: 'Tibetan'
    },
    {
        username: 'Tunisian'
    },
    {
        username: 'Turkish'
    },
    {
        username: 'Turkmen'
    },
    {
        username: 'Tuscan'
    },
    {
        username: 'Ukrainian'
    },
    {
        username: 'Uzbek'
    },
    {
        username: 'Venezuelan'
    },
    {
        username: 'Vietusernamese'
    },
    {
        username: 'Xinjiang'
    },
    {
        username: 'Yunnan'
    },

]

export default class Cusines extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cusines: cusines
        }

    }

    render() {
        return (
            <div className="all_cusines" style={{ boxShadow: "0 1px 3px rgb(0 0 0 / 50%)" }}>
                <ul>
                    {this.state.cusines.map((item) => {
                        return (
                            <li><input type="checkbox" name="cusines" />
                                <span>{item.username}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}