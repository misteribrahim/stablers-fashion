import Link from 'next/link';
import classes from "./index.module.scss";
import { Container } from 'react-bootstrap';

function TopHeader() {
    return (
        <div className={classes.topHeader}>
            <Container>  
                <div className={`d-flex align-items-center justify-content-between flex-wrap ${classes.headContant}`}>
                    <span>Shipping to:
                        <img src="/images/pk.png" alt="Pakistan flag" width={25} height={25} className='ms-1'/>
                    </span>
                    <div>
                        <Link href="/" aria-label="Free UK Delivery and Returns">
                            <a>FREE UK DELIVERY &amp; FREE UK RETURNS! <u>READ MORE</u></a>
                        </Link>
                    </div>
                    <ul className={`d-flex align-items-center gap-3 ${classes.link}`} role="navigation" aria-label="Header Navigation">
                        <li><Link href="/Store Locator" aria-label="Store Locator">Store Locator</Link></li>
                        <li><Link href="/Factory Outlet" aria-label="Factory Outlet">Factory Outlet</Link></li>
                        <li><Link href="/Our Journal" aria-label="Our Journal">Our Journal</Link></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default TopHeader;
