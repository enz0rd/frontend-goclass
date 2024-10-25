// Aluno
import DashboardLayout from "@/components/app/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import DashboardProfessor from "@/pages/app/professor/DashboardProfessor";
import ComingSoon from "@/pages/app/ComingSoon";
import NotFound from "@/pages/NotFound";

const ProfessorRoutes = () => {
  return (
    <Routes>
      {/* Rotas de Professor */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardProfessor />
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

export default ProfessorRoutes;
