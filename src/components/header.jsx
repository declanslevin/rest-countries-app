import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-regular-svg-icons";

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="container">
                    <h1 className="App-header__heading">Where in the world?</h1>
                    <div className="App-header--dark">
                        <FontAwesomeIcon className="App-header--dark__icon" icon={faMoon} />
                        <p className="App-header--dark__label">Dark Mode</p>
                    </div>
                </div>
            </header>
        );
    }
};

export default Header;