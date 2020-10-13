import React from "react";
import './description.css';
import { formatDistance, subMinutes } from 'date-fns';

const Description = ({ label }) => {
    return (
        <label>
            <span className="description">{ label }</span>
            <span className="created">created { formatDistance(subMinutes(new Date(), 5), new Date()) } ago</span>
        </label>
    )
};
export default Description;