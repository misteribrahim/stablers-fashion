import React from 'react';
import classes from './index.module.scss';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

const Heading = ({ title, subtitle, heading, btnText, button, service, href, mainText, white, brown, black, btnWhite, btnBlack, subtext, text, subHeading,handCrafted }) => {
    return (
        <div className={`${classes.heading} ${heading ? classes.bannerText : ''} ${service && classes.service}`}>
            <h6 className={`${classes.mainTitle} ${mainText ? classes.whiteText : ''}`}>
                {text}
            </h6>
            <p className={classes.subHeading} >{subHeading}</p>
            <h2 className={`${mainText ? classes.white : ''} ${!mainText && white ? classes.white : ''} ${brown ? classes.brown : ''} ${black ? classes.black : ''}`}>
                {title}
            </h2>
            <p className={`${classes.subtitle} ${subtext ? classes.textWhite : ''}  ${handCrafted ? classes.handCrafted : ''}`}>{subtitle}</p>
            {button && href && (
                <Link href={href}>
                    <Button className={`btn-primary ${btnWhite ? 'white' : ''} ${btnBlack ? 'black' : ''}`}>
                        {btnText}
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default Heading;
