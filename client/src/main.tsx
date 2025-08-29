import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// APLICAÇÃO COMPLETA RESTAURADA
// Baseado nos testes, o problema estava no bundle size excessivo (>500KB)
// Agora com as otimizações de build deve funcionar
createRoot(document.getElementById("root")!).render(<App />);
