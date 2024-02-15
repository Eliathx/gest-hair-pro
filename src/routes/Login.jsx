function Login({ setIsLoggedIn }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>Bienvenido</h1>
      <input
        type="text"
        placeholder="Usuario"
      ></input>
      <input
        type="password"
        placeholder="Contraseña"
      ></input>

      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
    </div>
  );
}
export default Login;
