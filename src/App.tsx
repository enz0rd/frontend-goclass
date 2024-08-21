import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/PreLoader";
import SuccessPage from "@/pages/SuccessPage";
import CancelPage from "@/pages/CancelPage";

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
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
