import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/ThemeProvider";
import lightLogo from "@/assets/Logos/GoclassLogo-hat-dark.png";
import darkLogo from "@/assets/Logos/GoclassLogo-hat-light.png";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import image from "/images/cancel-classroom.jpg";

const CancelPage = () => {
  const { isDarkMode } = useTheme();
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get("sessionId");

  if (sessionId === null) {
    // console.log(sessionId);
    window.location.href = "/";
  }
  return (
    <>
      {sessionId != null ? (
        <>
          <Navbar />
          <section className="w-full h-[90vh] flex align-middle justify-center m-auto">
            <img
              src={image}
              className="w-full absolute z-[-1] h-screen object-cover object-"
            />
            <div className="w-full m-auto">
              <div className="mx-auto flex align-middle justify-center">
                <div className="z-3 group dark:bg-zinc-900 bg-zinc-50 dark:text-zinc-50 flex flex-col text-center p-10 rounded-3xl">
                  <div className="flex flex-row justify-center lg:mt-0 md:mt-0 mt-4 mx-auto h-full w-full">
                    <img
                      className="w-[10rem] object-contain"
                      src={isDarkMode ? darkLogo : lightLogo}
                      alt="Logo Goclass"
                    />
                  </div>
                  <h1 className="text-5xl font-bold">Inscrição cancelada :(</h1>
                  <h3>Volte sempre que quiser!</h3>
                  <NavLink to="/" className="mt-2">
                    <Button className="dark:text-zinc-50 dark:hover:text-primary dark:hover:bg-zinc-50 p-3 rounded-lg">
                      Voltar à página inicial
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default CancelPage;
