import { useAuthStore } from '../../hooks/useAuthStore';

export const Navbar = () => {
  const { startLogout, user } = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <div className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        <span> {user.name}</span>
      </div>
      <button onClick={startLogout} className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};
