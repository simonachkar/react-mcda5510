import React, { Component } from "react"

class Covid19 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastestDate: '',
            totalCases: '',
            totalDeaths: '',
            totalVaccinated: '',
            changeCases: '',
            changeDeaths: ''
        }
    }
    render() {
        const fetchData = () => {
            fetch("https://api.covid19tracker.ca/summary")
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    // console.log(response);
                    this.setState({
                        lastestDate: response.data[0].latest_date,
                        totalCases: response.data[0].total_cases,
                        totalDeaths: response.data[0].total_fatalities,
                        totalVaccinated: response.data[0].total_vaccinated,
                        changeCases: response.data[0].change_cases,
                        changeDeaths: response.data[0].change_fatalities
                    })
                });
        }

        return (
            <div className="covid19-container">

                <p><b>Lastest Date: </b>{this.state.lastestDate}</p>
                <p><b>Total Cases: </b>{this.state.totalCases}</p>
                <p><b>Total Deaths: </b>{this.state.totalDeaths}</p>
                <p><b>Total Vaccinated: </b>{this.state.totalVaccinated}</p>
                <p><b>Change Cases: </b>{this.state.changeCases}</p>
                <p><b>Change Deaths: </b>{this.state.changeDeaths}</p>
                <button onClick={() => fetchData()}>Fetch Data</button>

            </div>
        )
    }
}

export default Covid19;