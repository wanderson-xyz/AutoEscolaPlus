import { createRoot } from "react-dom/client";
import "./index.css";

// App simplificada para debug por etapas
function SimpleApp() {
  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      <h1>AutoEscola Plus - Versão Simplificada</h1>
      <p>Esta é uma versão simplificada para identificar o problema.</p>
      <p>Se você vê isso, o React está funcionando no Vercel.</p>
      <div style={{ marginTop: "20px", padding: "15px", background: "#f0f0f0" }}>
        <h2>Próximo passo:</h2>
        <p>Adicionar componentes um por um para identificar qual está causando a tela branca.</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<SimpleApp />);
