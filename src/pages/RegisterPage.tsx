import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/registerpage/RegistrationForm";

const RegisterPage = () => {
    return (
        <div className="dark:bg-zinc-900">
            <Navbar />
            <RegistrationForm />
            <Footer />
        </div>
    );
}

export default RegisterPage;