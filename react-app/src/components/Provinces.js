import React, { Component } from "react"
import Province from "./Province"

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

/**
 * Topics you might also like:
 *      - Array.map() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */