import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'

function Login() {
  return (
    <div>
      <div className="container">
        <form>
          <h1>Acesso de usuario</h1>
          <div className="input-field">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              required
              value="#"
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              required
              value="#"
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Login</button>
          <div className="signup-link">
            <p>
              Cadastre-se <a href="#">aqui</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export { Login }
