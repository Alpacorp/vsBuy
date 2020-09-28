import React from "react";
import logo from "../assets/logo-bg-dark.png";
import "../assets/styles/register.css";

class Register extends React.Component {
  render() {
    return (
      <div>
        <section className="container">
          <div className="container__img">
            <figure className="img__logo">
              <img src={logo} alt="logo" />
            </figure>
          </div>
          <hr className="separator" />
          <div className="container__form">
            <div className="form__title">
              <h4>
                Regístrate para disfrutar los beneficios de
                <strong>VsBuy</strong>
              </h4>
            </div>
            <div className="form__register">
              <form
                action="/"
                className="form__register-form"
                method="POST"
                required=""
                autocapitalize="off"
              >
                <input
                  type="text"
                  name="nickname"
                  id="nickname"
                  placeholder="Ingresa tu alias de usuario"
                  required=""
                />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Nombres"
                  required=""
                />
                <input
                  type="text"
                  name="userlastname"
                  id="userlastname"
                  placeholder="Apellidos"
                  required=""
                />
                <input
                  type="number"
                  name="userphone"
                  id="userphone"
                  placeholder="Número Celular"
                  required=""
                />
                <input
                  type="email"
                  name="usermail"
                  id="usermail"
                  placeholder="Correo Electrónico"
                  required=""
                />
                <input
                  type="password"
                  name="userpass"
                  id="userpass"
                  placeholder="Contraseña ***"
                  required=""
                />
                <input
                  type="password"
                  name="passconfirm"
                  id="passconfirm"
                  placeholder="Digita Nuevamente la Contraseña ***"
                  required=""
                />
                <input type="checkbox" required="" className="checkbox" />
                <p className="form-register-text">
                  Acepta nuestra política de tratamiento de información
                </p>
                <button type="submit" className="sub-button">
                  Registrar Información
                </button>
              </form>
              <p className="form-register-text">
                ¿Estás registrado? Ingresa <a href="/">aquí</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
