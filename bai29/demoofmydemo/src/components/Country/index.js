import React from 'react';
import { country } from "../Data/country"
import "./Country.scss"

function Country(props) {
    console.log(country)
    return (
        <div className='country'>
            <ul>
                {country.map((itemCountry) => {
                    return (
                        <li key={itemCountry.id}>
                            <span className='country--name'>{itemCountry.name}</span>
                            <ul>
                                {(itemCountry.city || []).map((itemCity) => {
                                    return (
                                        <li key={itemCity.id}>
                                            <span>{itemCity.name}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Country;