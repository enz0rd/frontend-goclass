// Aluno
import DashboardLayout from "@/components/app/DashboardLayout";
import { Route, Routes } from "react-router-dom";
// import DashboardAdmin from "@/pages/app/admin/DashboardAdmin";
import ComingSoon from "@/pages/app/ComingSoon";
import NotFound from "@/pages/NotFound";
import UsersPage from "@/pages/app/admin/UsersPage";

const InstituicaoRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <ComingSoon />
            {/* <DashboardAdmin /> */}
          </DashboardLayout>
        }
      />
      <Route
        path="/perfil"
        element={
          <DashboardLayout>
            <ComingSoon />
          </DashboardLayout>
        } 
      />
      <Route
        path="/usuarios"
        element={
          <DashboardLayout>
            <UsersPage />
          </DashboardLayout>
        } 
      />
      <Route
        path="/cursos"
        element={
          <DashboardLayout>
            <ComingSoon />
          </DashboardLayout>
        } 
      />
      <Route
        path="/usuarios"
        element={
          <DashboardLayout>
            <ComingSoon />
          </DashboardLayout>
        } 
      />
      <Route
        path="/mensagens"
        element={
          <DashboardLayout>
            <ComingSoon />
          </DashboardLayout>
        }
      />
      <Route
        path="*"
        element={
          <DashboardLayout>
            <NotFound />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default InstituicaoRoutes;
