import React from "react";
import {connect} from 'react-redux';

const Counter = ({counter, dec, inc, rnd}) => {
    return (
        <div id="root" className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={dec}
                    className="btn btn-primary btn-large"
            >
                DEC
            </button>
            <button onClick={inc}
                    className="btn btn-primary btn-large"
            >
                INC
            </button>
            <button onClick={rnd}
                    className="btn btn-primary btn-large"
            >
                RND
            </button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
};

export default connect(mapStateToProps)(Counter);