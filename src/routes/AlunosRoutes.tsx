import ActivitiesPage from "@/pages/app/aluno/ActivitiesPage";
import DashboardLayout from "@/components/app/DashboardLayout";
import SingleActivityPage from "@/pages/app/aluno/SingleActivityPage";
import SendPage from "@/pages/app/aluno/SendPage";
import GradesPage from "@/pages/app/aluno/GradesPage";
import DashboardPage from "@/pages/app/aluno/DashboardPage";
import { Routes, Route } from "react-router-dom";
import ComingSoon from "@/pages/app/ComingSoon";
import NotFound from "@/pages/NotFound";

const AlunosRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/atividades"
        element={
          <DashboardLayout>
            <ActivitiesPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/atividades/:id"
        element={
          <DashboardLayout>
            <SingleActivityPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/notas"
        element={
          <DashboardLayout>
            <GradesPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/entregar"
        element={
          <DashboardLayout>
            <SendPage />
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

export default AlunosRoutes;
