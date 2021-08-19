import React from 'react';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero' : 'home__hero darkBg'} style={lightBg ? {backgroundImage: 'url(/images/blue-stars2.jpg)', backgroundSize: 'cover'} : {backgroundImage: 'none'}} >
                <div className="container">
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <Link to="/observatory-map">
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        {buttonLabel}
                                    </Button>
                                </Link>

                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
