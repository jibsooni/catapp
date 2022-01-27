import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setCats } from "./catSlice";
import Cat from "./Cat";

const CatList = () => {
    const dispatch = useAppDispatch();
    const catState = useAppSelector(state => state.cats.cats)
    
    useEffect(() => {
        (async () => {
            const catData = await fetch('https://cataas.com/api/cats?tags=cute&limit=20')
                .then(response => response.json());
            dispatch(setCats(catData.map((cat: any) => ({id: cat.id, upvotes: 0}))));
       })();
    }, []);

    return <div>
        {catState && <ul>
            {catState.map(catItem => <li key={catItem.id}><Cat cat={catItem}/></li>)}
        </ul>}
    </div>
};

export default CatList;