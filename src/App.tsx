import "./App.css";
import { Counter } from "./components/Counter";
import { LoginPage } from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Counter />

      <LoginPage />
    </AuthProvider>
  );
}

export default App;
