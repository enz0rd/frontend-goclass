import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { NavLink } from "react-router-dom";
import loginStudents from "/images/login-students.jpg";
import LoginForm from "@/components/loginpage/LoginForm";

const LoginPage = () => {
    return (
        <div className="w-full dark:bg-zinc-900">
            <Navbar />
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:grid-rows-1 md:grid-rows-1 grid-rows-3 w-full h-screen dark:bg-zinc-900">
                <img src={loginStudents} className="object-cover w-[100%] lg:h-[100vh] md:h-[100vh] sm:row-span-1 h-[10rem]"/>
                <div className="w-[100%] row-span-1 lg:row-span-1 md:row-span-1 align-middle justify-center flex m-auto">
                    <LoginForm />
                </div>
            </div>
            <div className="mt-5 lg:mt-0 md:mt-0">
                <Footer />
            </div>
        </div>
    );
}

export default LoginPage;