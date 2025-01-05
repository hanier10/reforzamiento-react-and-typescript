import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailPassword, user, logOut } =
    useAuthContext();

  if (isChecking) {
    return <h1>Verificando Usuario</h1>;
  }
  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>

          <button
            onClick={() => logOut()}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar a la app</h3>

          <button
            onClick={() => loginWithEmailPassword("hsmp16@gmail.com", "123")}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};
