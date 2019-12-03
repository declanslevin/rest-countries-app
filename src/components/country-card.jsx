import React from 'react';

class CountryCard extends React.Component {
    render () {
        return (
            <div className="country-card">
                <img className="country-card__img"
                    src={this.props.flag}
                    alt=""
                    />
                <div className="country-card--info">
                    <h2 className="country-card--info__header">{this.props.countryName}</h2>
                    <p className="country-card--info__pop">
                        <span className="bold">Population: </span>
                        {this.props.population}
                    </p>
                    <p className="country-card--info__reg">
                        <span className="bold">Region: </span>
                        {this.props.region}
                    </p>
                    <p className="country-card--info__cap">
                        <span className="bold">Capital: </span>
                        {this.props.capital}
                    </p>
                </div>
            </div>
        )
    }
}

export default CountryCard;