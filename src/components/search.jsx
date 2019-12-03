import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

class Search extends React.Component {
    render() {
        return (
            <div className="Search">
                <FontAwesomeIcon className="Search__icon" icon={faSearch} />
                <input className="Search__input" placeholder="Search for a country..." />
            </div>
        );
    }
};

export default Search;