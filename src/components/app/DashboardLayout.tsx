import { ReactNode } from "react";
import NavbarApp from "./NavbarApp";
import Sidepanel from "./Sidepanel";
import { getPropsBasedOnRole, getRole, RotaProps } from "./utils";
import NotFound from "@/pages/NotFound";

interface DashboardLayoutProps {
  children: ReactNode;
}


const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const auth = localStorage.getItem("authToken");
  if (!auth) window.location.href = "/login?msg='not-authorized'";

  var role = getRole();
  switch (role) {
    case "professor":
      var rotas: RotaProps[] = getPropsBasedOnRole("professor") || [];
      break;
    case "aluno":
      var rotas: RotaProps[] = getPropsBasedOnRole("aluno") || [];
      break;
    case "admin":
      var rotas: RotaProps[] = getPropsBasedOnRole("admin") || [];
      break;
    case "colaborador":
      var rotas: RotaProps[] = getPropsBasedOnRole("admin") || [];
      break;
    default:
      var rotas: RotaProps[] = getPropsBasedOnRole("responsavel") || [];
      break;
  }

  var routePrefix = window.location.pathname.split("/")[1];

  role === "admin" ? role = "instituicao" : role === "colaborador" ? role = "instituicao" : role = role;

  return (
    <>
      {auth ? (
        routePrefix === role ? (
          <>
            <NavbarApp rotas={rotas}/>
            <div className="flex flex-row dark:bg-zinc-900">
              <Sidepanel rotas={rotas}/>
              <div className="mt-[4rem] w-full">{children}</div>
            </div>
          </>
        ) : (
          <NotFound />
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default DashboardLayout;
