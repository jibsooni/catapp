import { useAppDispatch, useAppSelector } from "./hooks";
import { resetAllCats } from "./features/catSlice";
import { logoutUser } from "./features/authSlice";

const Header = () => {
    const dispatch = useAppDispatch();
    const catState = useAppSelector(state => state.cats)
    const starsTotal = catState.cats.reduce((acc, catItem) => acc + catItem.upvotes, 0)
    return <header>
        <h1>Catcat</h1>
        <div>
            <div>Total upvotes {starsTotal}</div>
            <div onClick={() => dispatch(resetAllCats())}>🔁 reset all</div>
        </div>
        <div>
            <h4 onClick={() => dispatch(logoutUser())}>Logout</h4>
        </div>
    </header>
}

export default Header;