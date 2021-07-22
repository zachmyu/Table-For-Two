import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <div className="footer-container">
            <h4>Created By: </h4>
            <div className="footer-element">
                <a href="https://github.com/amberbancroft"><i className="fab fa-github"></i> Amber Bancroft</a>
            </div>
            <div className="footer-element">
                <a href="https://github.com/JeffersonGarcia15"><i className="fab fa-github"></i> Jefferson Garcia</a>
            </div>
            <div className="footer-element">
                <a href="https://github.com/zachmyu"><i className="fab fa-github"></i> Zach Yu</a>
            </div>
        </div>
    );
}

export default Footer;
