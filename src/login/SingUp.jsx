
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'


export const SingUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (username.trim() === '') {
      errors.username = 'Por favor, ingresa un nombre de usuario.';
    }
    if (!isValidEmail(email)) {
      errors.email = 'Por favor, ingresa un correo electrónico válido.';
    }
    if (password.trim() === '') {
      errors.password = 'Por favor, ingresa una contraseña.';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      Swal.fire({
        title: "Registrado exitosamente!",
        icon: "success"
      });
      navigate("/");
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="container mt-12">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Registro de Usuario</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Usuario</label>
                  <input
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
