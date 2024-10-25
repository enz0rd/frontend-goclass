// Aluno
import DashboardLayout from "@/components/app/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import DashboardResponsavel from "@/pages/app/responsavel/DashboardResponsavel";
import ComingSoon from "@/pages/app/ComingSoon";
import NotFound from "@/pages/NotFound";

const ResponsavelRoutes = () => {
  return (
    <Routes>
      {/* Rotas de Pais */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardResponsavel />
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

export default ResponsavelRoutes;
