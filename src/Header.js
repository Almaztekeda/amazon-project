import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (
        <div className="Header">
            <Link to="/">
                <img
                    className="Header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="Header__Search">
                <input className="Header__SearchInput" type="text" />
                <SearchIcon className="Header__SearchIcon" />
            </div>

            <div className="Header__nav">
                <Link to={!user && "/login"} className="header__clearlink">
                    <div onClick={handleAuthenticaton} className="Header__option">
                        <span className="header__optionLineOne">
                            Hello {!user ? "Guest" : user.email}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <Link to="/Orders" className="header__clearlink">
                    <div className="Header__option">
                        <span className="Header__optionLineOne">Returns</span>
                        <span className="Header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="Header__option">
                    <span className="Header__optionLineOne">Your</span>
                    <span className="Header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout" className="header__clearlink">
                    <div className="Header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="Header__optionLineTwo Header__basketCount">
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
