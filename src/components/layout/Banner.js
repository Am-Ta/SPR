import React from "react";
import { Link } from "react-router-dom";

function Banner() {
    const bannerComp = (
        <div className="banner">
            <nav>
                <ul className="nav">
                    <li className="nav__item">
                        <Link className="nav__link" to="/signup">
                            Sign up
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="signin">
                            Sign in
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

    return bannerComp;
}

export default Banner;
