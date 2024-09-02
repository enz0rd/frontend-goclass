import IndicatorsGroup from "@/components/app/dashboard/indicatorsGroup";
import NavbarApp from "@/components/app/NavbarApp";
import darkLogo from "@/assets/Logos/GoclassLogo-hat-light.png";
import lightLogo from "@/assets/Logos/GoclassLogo-hat-dark.png";
import { useTheme } from "@/ThemeProvider";
import FunctionsGroup from "@/components/app/dashboard/FunctionsGroup";
import ActivitiesGroup from "@/components/app/dashboard/ActivitiesGroup";

const DashboardPage = () => {
    const { isDarkMode } = useTheme(); // Access the theme context
    const auth = localStorage.getItem('authToken')
    if (!auth) window.location.href = '/login'
    const data = {
        data: "data",
        user_name: "Enzo"
    }

    return (
        <>
            {auth ? (
                <div className="w-full bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 from-zinc-200 to-40% to-zinc-50 justify-center">
                    <NavbarApp data={data} />
                    <img className="h-[10rem] w-full object-none" src="/images/success-classroom.jpg" alt="" />
                    <div className="h-full justify-center space-y-6 lg:px-[15rem] lg:w-[1400px] md:px-[6rem] px-4 mx-auto">
                        <div className="pt-6 lg:w-[1000px]group dark:text-zinc-50 mx-auto flex justify-between align-middle">
                            <div className="w-[40%]">
                                <h1 className="text-2xl lg:text-4xl md:text-4xl">Bem vindo, {data.user_name}</h1>
                                <span className="text-sm lg:text-md md:text-md my-auto">O que faremos hoje?</span>
                            </div>
                            <img src={isDarkMode ? darkLogo : lightLogo} alt="Logo Goclass" className="w-[7%] object-contain" />
                        </div>
                        <IndicatorsGroup />
                        <FunctionsGroup />
                        <ActivitiesGroup />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default DashboardPage;