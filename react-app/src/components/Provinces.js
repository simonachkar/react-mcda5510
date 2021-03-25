import React, { Component } from "react"
import Province from "./Province"

import './styles.css';

import provinces from '../data/provinces-data'

class Provinces extends Component {
    render() {
        return (
            <div>
                {provinces.map(province => {
                    return <Province name={province.name} capital={province.capital} flagUrl={province.flagUrl} />
                })}
            </div>
        )
    }
}

export default Provinces;