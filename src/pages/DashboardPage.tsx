import IndicatorsGroup from "@/components/app/dashboard/indicatorsGroup";
import NavbarApp from "@/components/app/NavbarApp";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import darkLogo from "@/assets/Logos/GoclassLogo-hat-light.png";
import lightLogo from "@/assets/Logos/GoclassLogo-hat-dark.png";
import { useTheme } from "@/ThemeProvider";

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
                <div className="w-full">
                    <NavbarApp data={data} />
                    <img className="h-[25vh] w-full object-none" src="/images/success-classroom.jpg" alt="" />
                    <div className="h-screen space-y-6 lg:px-[15rem] md:px-[6rem] px-4 bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 from-zinc-200 to-40% to-zinc-50">
                        <div className="pt-6 group dark:text-zinc-50 mx-4 flex justify-between align-middle">
                            <div className="w-[40%]">
                                <h1 className="text-2xl lg:text-4xl md:text-4xl">Bem vindo, {data.user_name}</h1>
                                <span className="text-sm lg:text-md md:text-md my-auto">O que faremos hoje?</span>
                            </div>
                            <img src={isDarkMode ? darkLogo : lightLogo} alt="Logo Goclass" className="w-[10%] object-contain" />
                        </div>
                        <div className="w-[100%] flex justify-center mx-auto align-middle">
                            <ScrollArea className="p-4 overflow-x-auto whitespace-nowrap group dark:text-zinc-50">
                                <IndicatorsGroup />
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default DashboardPage;