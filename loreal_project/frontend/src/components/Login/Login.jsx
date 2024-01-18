import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Login.scss";

function FormRegister({ isLogin, modal }) {
  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    address: "",
    password: "",
    confirm: "",
    profil: "",
    birthdate: "",
    hair_type: "",
    hair_color: "",
    skin_type: "",
    skin_color: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  console.info(user);

  return (
    <div className="field">
      <div>
        <div className="modal-overlay">
          <form className="form">
            <button className="closeLogin" type="button" onClick={modal}>
              <p> X </p>
            </button>
            <p className="heading">Subscribe</p>
            <p className="question">What kind of customer are you ?</p>
            <div className="globalradio">
              <ul className="ulradio">
                <li className="radio-1">
                  <input id="r1" type="radio" name="radio" value="1"></input>
                  <label for="radio1">Company</label>
                </li>
              </ul>
              <ul className="ulradio">
                <li className="radio-2">
                  <input id="r1" type="radio" name="radio" value="1"></input>
                  <label for="radio1">Private</label>
                </li>
              </ul>
            </div>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Firstname"
                className="input-field"
                type="text"
                onChange={handleChange}
                id="firstname"
                name="firstname"
                value={user.firstname}
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="LASTNAME"
                className="input-field"
                type="text"
                onChange={handleChange}
                id="lastname"
                name="lastname"
                value={user.lastname}
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Email"
                className="input-field"
                type="email"
                onChange={handleChange}
                id="email"
                name="email"
                value={user.email}
              />
            </div>
            <div className="field">
              <input
                placeholder="Password"
                className="input-field"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={user.password}
              />
            </div>
            <div className="field">
              <input
                placeholder="Confirm Password"
                className="input-field"
                type="password"
                name="confirm"
                id="confirm"
                onChange={handleChange}
                value={user.confirm}
              />
            </div>
            <select
              placeholder="Profil"
              className="field"
              name="profil"
              id="profil"
              onChange={handleChange}
              value={user.profil}
            >
              <option value="">select a profile</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Address"
                className="input-field"
                type="text"
                name="address"
                id="address"
                onChange={handleChange}
                value={user.address}
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                className="input-field"
                type="date"
                name="birthdate"
                id="birthdate"
                onChange={handleChange}
                value={user.birthdate}
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Hair type"
                className="input-field"
                type="text"
                name="hair_type"
                id="hair_type"
                onChange={handleChange}
                value={user.hair_type}
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Hair color"
                className="input-field"
                type="text"
                name="hair_color"
                id="hair_color"
                onChange={handleChange}
                value={user.hair_color}
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Skin type"
                className="input-field"
                type="text"
                name="skin_type"
                id="skin_type"
                onChange={handleChange}
                value={user.skin_type}
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Skin color"
                className="input-field"
                type="text"
                name="skin_color"
                id="skin_color"
                onChange={handleChange}
                value={user.skin_color}
              />
            </div>
            <div className="btn2">
              <button
                type="button"
                className="button1"
                onClick={() => isLogin(true)}
              >
                Connection
              </button>
              <button
                type="button"
                className="button2"
                onClick={() => isLogin(false)}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function FormLogin({ isLogin, modal }) {
  return (
    <div className="field">
      <div className="modal-overlay">
        <form className="form">
          <button className="closeLogin" type="button" onClick={modal}>
            <p> X </p>
          </button>
          <p className="heading">Connection</p>
          <div className="field">
            <svg
              className="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
                {" "}
              </path>
            </svg>
            <input
              autoComplete="off"
              placeholder="Identifier"
              className="input-field"
              type="text"
            />
          </div>
          <div className="field">
            <svg
              className="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
                {" "}
              </path>
            </svg>
            <input
              placeholder="Password"
              className="input-field"
              type="password"
            />
          </div>

          <div className="btn2">
            <button
              type="button"
              className="button1"
              onClick={() => isLogin(true)}
            >
              Connection
            </button>
            <button
              type="button"
              className="button2"
              onClick={() => isLogin(false)}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Login({ closeLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleClickRegister = (switchLogin) => {
    setIsLogin(switchLogin);
  };

  const closeSignUpModal = () => {
    closeLogin(false);
  };

  return (
    <div>
      <div className="modal-overlay">
        {isLogin ? (
          <FormLogin isLogin={handleClickRegister} modal={closeSignUpModal} />
        ) : (
          <FormRegister
            isLogin={handleClickRegister}
            modal={closeSignUpModal}
          />
        )}
      </div>
    </div>
  );
}

FormRegister.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  modal: PropTypes.func.isRequired,
};

FormLogin.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  modal: PropTypes.func.isRequired,
};

Login.propTypes = {
  closeLogin: PropTypes.func.isRequired,
};

export default Login;
