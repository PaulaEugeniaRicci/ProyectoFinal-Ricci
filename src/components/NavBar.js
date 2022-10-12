import logo from '../assets/img/brand_logo.png';
import CartWidget from "./CartWidget";
import "../assets/css/Styles.css";

const NavBar = () => {
  return (
    <>
    <nav className="bg-black">
      <div className="mx-auto relative">
        <div className="py-4 mx-6">
          <div className="flex items-center justify-between py-4 px-4">
            <ul className="flex ml-auto lg:ml-0 items-center space-x-7 text-white lg:w-60">
              <li class="nav-item p-2">
                <p className="text text-sm">Home</p>
              </li>
              <li className="nav-item p-2">
                <p className="text text-sm">Fragancias</p>
              </li>
            </ul>
            <img src={logo} alt="Logo de marca Mugler" className="h-5" />
            <div className="flex ml-auto lg:ml-0 items-center justify-end space-x-5 lg:w-60">
              <CartWidget/>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;