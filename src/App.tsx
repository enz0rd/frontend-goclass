import { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/PreLoader";

// Importação dinâmica dos componentes
const HomePage = lazy(() => import("@/pages/HomePage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const SuccessPage = lazy(() => import("@/pages/SuccessPage"));
const CancelPage = lazy(() => import("@/pages/CancelPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

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
        <></>
        // <Preloader key="preloader" />
      ) : (
        <Suspense fallback={<div><Preloader /></div>}>
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
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/register/success" element={<SuccessPage />} />
              <Route path="/register/cancel" element={<CancelPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </motion.div>
        </Suspense>
      )}
    </AnimatePresence>
  );
}

export default App;
