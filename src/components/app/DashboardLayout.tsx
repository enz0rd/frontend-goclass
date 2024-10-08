import { ReactNode } from "react";
import NavbarApp from "./NavbarApp";
import Sidepanel from "./Sidepanel";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const auth = localStorage.getItem("authToken");
  if (!auth) window.location.href = "/login?msg='not-authorized'";

  return (
    <>
      {auth ? (
        <>
          <NavbarApp />
          <div className="flex flex-row dark:bg-zinc-900">
            <Sidepanel />
            <div className="mt-[4rem] w-full">{children}</div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DashboardLayout;
