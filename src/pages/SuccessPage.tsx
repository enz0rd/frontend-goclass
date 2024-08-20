import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const SuccessPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('sessionId');

    if (sessionId === null) {
        // console.log(sessionId);
        window.location.href = '/';
    }
    return (
        <>
            {sessionId != null ? (
                <>
                    <Navbar />
                    <section className="w-full h-[90vh] flex align-middle justify-center m-auto">
                        <div className="w-full m-auto">
                            <div className="mx-auto flex align-middle justify-center">
                                <div className="flex flex-col text-center">
                                    <h1 className="text-5xl font-bold">Sucesso!</h1>
                                    <h3>Sua inscrição foi realizada com sucesso!</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </>
            ) : null}
        </>
    )
}

export default SuccessPage;