import "./App.css";
import { Counter } from "./components/Counter";
import { LoginPage } from "./components/LoginPage";
import { UsersPage } from "./components/UsersPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      {/* <Counter />

      <LoginPage /> */}
      <UsersPage />
    </AuthProvider>
  );
}

export default App;
