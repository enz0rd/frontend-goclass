import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="w-50 bg-zinc-600">
                <NavLink to='/login' className="bg-slate-800 w-[20rem]">a</NavLink>
            </div>
            <Button>Teste</Button>
        </>
    );
}

export default HomePage;