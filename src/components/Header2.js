import iconps from './images/playstation-brands 1.png';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Header2 = () => {
    return (
        <div className="NavBar">
            <div className="divnav">
                <img className="iconps" src={iconps} alt="" />
                <nav className="navsec">
                    <ul className="navUl">
                        <li>Games</li>
                        <span>
                            <KeyboardArrowDownRoundedIcon
                                style={{ width: '10px' }}
                            />
                        </span>
                        <li>Hardware</li>
                        <span>
                            <KeyboardArrowDownRoundedIcon
                                style={{ width: '10px' }}
                            />
                        </span>
                        <li>Services</li>
                        <span>
                            <KeyboardArrowDownRoundedIcon
                                style={{ width: '10px' }}
                            />
                        </span>
                        <li>News</li>
                        <span>
                            <KeyboardArrowDownRoundedIcon
                                style={{ width: '10px' }}
                            />
                        </span>
                        <li>Shop</li>
                        <span>
                            <KeyboardArrowDownRoundedIcon
                                style={{ width: '10px', alignItems: 'center' }}
                            />
                        </span>
                        <li>Supports</li>
                        <span>
                            <KeyboardArrowDownRoundedIcon
                                style={{ width: '10px' }}
                            />
                        </span>
                    </ul>
                </nav>
            </div>
            <div className="signsea">
                <div className="signIn">Sign In</div>
                <div className="search">
                    <SearchRoundedIcon />
                </div>
            </div>
        </div>
    );
};

export default Header2;
