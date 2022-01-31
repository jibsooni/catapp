import { useAppDispatch, useAppSelector } from "./hooks";
import { resetAllCats } from "./features/catSlice";
import { logoutUser } from "./features/authSlice";

const Header = () => {
    const dispatch = useAppDispatch();
    const catState = useAppSelector(state => state.cats)
    const starsTotal = catState.cats.reduce((acc, catItem) => acc + catItem.upvotes, 0)
    return (

        <header>
             <div className="menu-btn">
      <span className="menu-btn__burger"></span>
    </div>

    <nav className="nav">
      <ul className="menu-nav">
        <li className="menu-nav__item active">
          <a href="index.html" className="menu-nav__link">
            Home
          </a>
        </li>
        <li className="menu-nav__item">
          <a href="about.html" className="menu-nav__link">
            About Me
          </a>
        </li>
        <li className="menu-nav__item">
          <a href="projects.html" className="menu-nav__link">
            My Projects
          </a>
        </li>
        <li className="menu-nav__item">
          <a href="contact.html" className="menu-nav__link">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
        <h1>Catcat</h1>
        <div className="header">
        <div>
            <div>Total upvotes {starsTotal}</div>
            
                <button onClick={() => dispatch(resetAllCats())}>🔁 </button>
                <div onClick={() => dispatch(resetAllCats())}>reset all</div>
        </div>
        
            <h4 onClick={() => dispatch(logoutUser())}>Logout</h4>
        </div>
    </header>
    )
}

export default Header;