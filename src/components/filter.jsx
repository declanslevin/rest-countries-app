import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

class Filter extends React.Component {
    // handleEvent() {
    //     alert("The click worked")
    //     document.getElementByClassName("Filter--dropdown").classList.toggle('hide')
    // }
    // getInitialState() {
    //     return {
    //         condition: false
    //     }
    // }
    // handleClick() {
    //     this.setState({ condition: !this.state.condition })
    // }


    render() {
        return (
            <div className="Filter">
                <div 
                    // onClick={ this.handleEvent }
                    className="Filter--menu" 
                    // className={ this.state.condition ? "hide" : "show"}
                    >
                    <h3 className="Filter--menu__label">Filter by Region</h3>
                    <FontAwesomeIcon className="Filter--menu__icon" icon={faChevronDown} />
                </div> 
                <div className="Filter--dropdown hide">
                    <ul className="Filter--dropdown--list">
                        <li className="Filter--dropdown--list__item"><p>Africa</p></li>
                        <li className="Filter--dropdown--list__item"><p>America</p></li>
                        <li className="Filter--dropdown--list__item"><p>Asia</p></li>
                        <li className="Filter--dropdown--list__item"><p>Europe</p></li>
                        <li className="Filter--dropdown--list__item"><p>Oceania</p></li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Filter;