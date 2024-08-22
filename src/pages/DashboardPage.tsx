import NavbarApp from "@/components/app/NavbarApp";

const DashboardPage = () => {
    const auth = localStorage.getItem('authToken')
    if(!auth) window.location.href = '/login'
    const data = {
        data: "data",
        user_name: "Enzo"
    }

    return (
        <>
            {auth ? (
                <div className="w-full h-fit">
                    <NavbarApp data={data} />
                    <img className="h-[25vh] w-full object-none" src="/images/success-classroom.jpg" alt="" />
                    <div className="h-[70vh] bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 from-zinc-100 to-zinc-200">
                        <div className="pt-6 group dark:text-zinc-50 m-auto flex justify-around align-middle">
                            <h1 className="text-4xl">Bem vindo {data.user_name}</h1>
                            <h1 className="my-auto">O que faremos hoje?</h1>
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