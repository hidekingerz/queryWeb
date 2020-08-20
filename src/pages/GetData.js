import React from "react";
import {useParams} from "react-router";

const GedData = () => {
    let { id } = useParams();
    return (
        <div>
            <h1>GedData</h1>
            <div>
                <span>ID: {id} Information</span>
            </div>
            <div>
                <span>Show Data</span>
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

export default GedData