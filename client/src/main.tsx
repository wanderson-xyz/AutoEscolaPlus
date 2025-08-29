import { createRoot } from "react-dom/client";
import "./index.css";

// PASSO 1: Teste básico com TailwindCSS
function Step1App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        AutoEscola Plus - PASSO 1
      </h1>
      <p className="text-gray-700 mb-4">
        ✅ React funcionando<br/>
        ✅ TailwindCSS funcionando
      </p>
      <div className="bg-green-100 p-4 rounded-lg">
        <p className="text-green-800">
          Se você vê este styling, TailwindCSS está OK. 
          Próximo: adicionar React Query...
        </p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<Step1App />);
