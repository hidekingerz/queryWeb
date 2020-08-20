import React from "react";
import PropTypes from "prop-types";
import MenuAppBar from "../component/MenuAppBar";

const GedQueryData = (props) => {
    return (
        <div>
            <h1>GedData</h1>
            <div>
                <span>Query: {props.token}</span>
            </div>
            <div>
                <span>Show Query</span>
            </div>
            <div>
                <span>body</span>
            </div>
            <div>
                <span>footer</span>
            </div>
        </div>
    )
}

MenuAppBar.prototype = {
    token: PropTypes.string
}

export default GedQueryData