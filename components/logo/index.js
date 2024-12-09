
import Link from "next/link";
import classes from "./index.module.scss"
import { Container } from "react-bootstrap";

const Logo = () => {
    return (
            <div className={classes.logo}>
                <Link href={"/"}>
                <img src="/images/footer-logo.png" alt="logo" />
                </Link>
            </div>
    );
}
export default Logo;