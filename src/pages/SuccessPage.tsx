import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/ThemeProvider";
import lightLogo from "@/assets/Logos/GoclassLogo-hat-dark.png";
import darkLogo from "@/assets/Logos/GoclassLogo-hat-light.png";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import image from "/images/success-classroom.jpg";
import { useEffect, useState } from "react";
import api from "@/axiosconfig";
import ErrorDialog from "@/components/errorDialog";

const SuccessPage = () => {
  const { isDarkMode } = useTheme();
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get("sessionId");
  const userId = urlParams.get("userId");
  const institutionId = urlParams.get("institutionId");

  if (sessionId === null) {
    // console.log(sessionId);
    window.location.href = "/";
  }

  const [error, setError] = useState<{errorMessage: string, title: string} | null>(null);
  const [isUpdated, updateSubscription] = useState(false);

  useEffect(() => {
    const updateSubscriptionAsync = async () => {
      if(!isUpdated) {
        await api.post(`/subscription/updatesubscription?sessionId=${sessionId}&userId=${userId}&institutionId=${institutionId}`)
        .catch((error) => {
          if(error.response.status === 409) {
            setError({errorMessage: 'Assinatura já presente na base de dados, prossiga para o login', title: 'Duplicidade de evento'})
          } else {
            setError({errorMessage: 'Não foi possível atualizar a assinatura', title: 'Atualização falhou'})
          }
        });
      }
    };

    updateSubscriptionAsync().then(() => updateSubscription(true));
  }, [sessionId, userId, institutionId, isUpdated]);
  
  const handleCloseError = () => {
    setError(null);
  };
    
  return(  
    <>
      {sessionId != null ? (
        <>
          <Navbar />
          {error ? (
                <ErrorDialog title={error.title} error={error.errorMessage} onClose={handleCloseError} />
            ) : null}
          {isUpdated ? (
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
                    <h1 className="text-5xl font-bold">Sucesso!</h1>
                    <h3>Sua inscrição foi realizada com sucesso!</h3>
                    <NavLink to="/login" className="mt-2">
                      <Button className="dark:text-zinc-50 dark:hover:text-primary dark:hover:bg-zinc-50 p-3 rounded-lg">
                        Faça login clicando aqui
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <div className="w-full h-[100vh] flex justify-center items-center">
              <div role="status" className="m-auto">
                <svg aria-hidden="true" className="w-[5rem] h-[5rem] text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Carregando planos...</span>
              </div>
            </div>
          )}
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default SuccessPage;
