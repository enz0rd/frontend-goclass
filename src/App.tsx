import { useLocation, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/PreLoader";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SelectAccountPage from "@/pages/SelectAccountPage";
import RegisterPage from "@/pages/RegisterPage";
import SuccessPage from "@/pages/SuccessPage";
import CancelPage from "@/pages/CancelPage";
import AlunosRoutes from "@/routes/AlunosRoutes";
import ProfessorRoutes from "@/routes/ProfessorRoutes";
import InstituicaoRoutes from "@/routes/InstituicaoRoutes";
import RoutesResponsavel from "@/routes/ResponsavelRoutes";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <Suspense
          fallback={
            <div>
              <Preloader />
            </div>
          }
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/selectAccount" element={<SelectAccountPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/register/success" element={<SuccessPage />} />
              <Route path="/register/cancel" element={<CancelPage />} />

              {/* Agrupando rotas específicas para diferentes usuários */}
              <Route path="/aluno/*" element={<AlunosRoutes />} />
              <Route path="/professor/*" element={<ProfessorRoutes />} />
              <Route path="/instituicao/*" element={<InstituicaoRoutes />} />
              <Route path="/pais/*" element={<RoutesResponsavel />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </Suspense>
      )}
    </AnimatePresence>
  );
}

export default App;
