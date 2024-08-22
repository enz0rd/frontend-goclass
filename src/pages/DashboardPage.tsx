import NavbarApp from "@/components/app/NavbarApp";

const DashboardPage = () => {
    const auth = localStorage.getItem('authToken')
    if(!auth) window.location.href = '/login'
    const data = {data: "data"}

    return (
        <div>
            <NavbarApp data={data} />
        </div>
    );
}

export default DashboardPage;