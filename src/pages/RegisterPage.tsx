import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <NavLink to="/" className="bg-zinc-800 w-[20rem]">b</NavLink>
            <input type="text" className="w-20" placeholder="teste"></input>
        </>
    );
}

export default HomePage;