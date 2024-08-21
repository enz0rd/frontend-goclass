// theme-context.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the types for the context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    JSON.parse(localStorage.getItem("darkmode") || "false")
  );

  useEffect(() => {
    document.getElementById("bg-page")?.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkmode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
