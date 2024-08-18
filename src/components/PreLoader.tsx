import { motion } from "framer-motion";
import "./css/preloader.css";

const Preloader = () => {
  const isDarkTheme = JSON.parse(localStorage.getItem("darkmode") || "false");
  return (
    <motion.div
      className={`${isDarkTheme ? "loaderdark" : "loader"}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="spinner"></div>
    </motion.div>
  );
};

export default Preloader;
