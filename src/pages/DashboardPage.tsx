import IndicatorsGroup from "@/components/app/dashboard/indicatorsGroup";
import NavbarApp from "@/components/app/NavbarApp";

const DashboardPage = () => {
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
                    <div className="h-fit space-y-6 lg:px-[15rem] md:px-[6rem] px-4 bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 from-zinc-100 to-zinc-200">
                        <div className="pt-6 group dark:text-zinc-50 mx-4 flex justify-between align-middle">
                            <h1 className="text-2xl lg:text-4xl md:text-4xl w-[40%]">Bem vindo, {data.user_name}</h1>
                            <h1 className="text-sm lg:text-md md:text-md my-auto">O que faremos hoje?</h1>
                        </div>
                        <div className="w-[100%] flex md:flex-row lg:flex-col gap-4 group dark:text-zinc-50">
                            <IndicatorsGroup />
                            <div className="hidden md:flex lg:flex flex-col">
                                <h1 className="text-2xl">Indicadores</h1>
                                <span className="text-sm">Utilize esses indicadores</span>
                            </div>
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