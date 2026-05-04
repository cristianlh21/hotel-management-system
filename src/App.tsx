import { JSX } from "react";
import { AppRouter } from "./routes/AppRouter";

/**
 * Punto de entrada de la interfaz de usuario.
 * @returns {JSX.Element} La aplicación con el sistema de rutas activo.
 */
function App(): JSX.Element {
  return <AppRouter />;
}

export default App;