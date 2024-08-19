import darkLogo from "@/assets/Logos/GoclassLogo-hat-light.png";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  const linktree = '';
  return (
    <footer className="fixed-bottom h-fit pt-[2rem] pb-[4rem] bg-zinc-200 dark:bg-zinc-800">
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:space-x-9 md:space-x-9 sm:space-x-0 lg:space-y-0 md:space-y-0 sm:space-y-2 h-[90%] sm:grid-rows-3 md:grid-rows-1 lg:grid-rows-1">
        <div className="col-span-1">
          <h2 className="text-3xl font-bold dark:text-zinc-50 pb-2 border-b-2 dark:border-zinc-50 border-zinc-900">
            Links
          </h2>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <a href="#top" className="font-medium dark:text-zinc-50">
                Topo
              </a>
            </li>
            <li>
              <a href={window.location.pathname === '/' ? '#plans' : '/#plans'} className="font-medium dark:text-zinc-50">
                  Planos
              </a>
            </li>
            <li>
              <NavLink to="/partners" className="font-medium dark:text-zinc-50">
                Parceiros
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="font-medium dark:text-zinc-50">
                Sobre Nós
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-3xl font-bold dark:text-zinc-50 pb-2 border-b-2 dark:border-zinc-50 border-zinc-900">
            Redes
          </h2>
          <p className="flex flex-col gap-2 mt-2 dark:text-zinc-50">
            A GoClass é uma plataforma feita por uma equipe de 5 pessoas,
            visamos a satisfação total dos nossos clientes e agradecemos a
            preferência!
          </p>
          <p className="dark:text-zinc-50">
            Nos siga em nossas redes sociais para acompanhar o desenvolvimento
            desse projeto.
          </p>
          <ul className="mt-2 text-muted-foreground flex-row flex gap-5">
            <li>
              <a
                className="m-auto w-full"
                href="https://www.instagram.com/goclass.oficial/"
              >
                <FaInstagram className="w-[2rem] h-[2rem] text-primary hover:scale-[125%] transition-[.5s] ease-in-out" />
              </a>
            </li>
            <li>
              <a
                className="m-auto w-full"
                href={linktree}
              >
                <SiLinktree className="w-[2rem] h-[2rem] text-primary hover:scale-[125%] transition-[.5s] ease-in-out" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 bg-zinc-800 rounded-2xl ">
          <div className="flex flex-row justify-center lg:mt-0 md:mt-0 mt-4 mx-auto h-full w-full">
            <img className="w-[15rem] object-contain" src={darkLogo} alt="Logo Goclass" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
