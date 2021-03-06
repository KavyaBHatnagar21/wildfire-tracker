import React from 'react'
import spinner from "./spinner.jpg";

function Loader() {
    return (
        <div className="loader">
            <img src={spinner} alt="loader" />
            <h1>Fetching data</h1>
        </div>
    )
}

export default Loader
