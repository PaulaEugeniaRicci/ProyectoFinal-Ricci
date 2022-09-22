import logo from '../assets/brand_logo.png';
import CartWidget from "./CartWidget";

const styles = {
    highlight: "text-light text-uppercase my-0 small align-text-bottom",
}

const NavBar = () => {
    return (
        <>
            <div className="bg-dark">
                <div className="mx-auto">
                    <div className="d-flex justify-content-between py-4 px-4">
                        <nav className="navbar navbar-expand-sm py-0">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <p className={(styles.highlight) + " pe-3 fw-bold"}>Home</p>
                                </li>
                                <li className="nav-item">
                                    <p className={styles.highlight}>Fragancias</p>
                                </li>
                            </ul>
                        </nav>
                        <img className="py-2" src={logo} alt="Logo de marca Mugler"/>
                        <div className="d-flex justify-content-end ps-5 ms-5 py-2">
                            <CartWidget/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar