import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginCall } from "../utils/request";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [hide, setHide] = useState(false);

  const handleNavigate = () => {
    if (email == null) {
      toast.info("Enter email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (password == null) {
      toast.info("Enter password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      loginCall(email, password)
        .then((res) => {
          if (res.status == "success") {
            notify();
          } else {
            toast.warning("Inavlid Credentails !", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })

        .catch((err) => {
          toast.warning("Inavlid Credentails !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }

    // navigate("/sign-up");
  };

  const notify = () =>
    toast.success("Successfully logged!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <form>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type={hide ? "text" : "password"}
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            onClick={() => setHide(!hide)}
          />
          <label
            className="custom-control-label"
            htmlFor="customCheck1"
            style={{ paddingLeft: 10 }}
          >
            Show password
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleNavigate}
        >
          Submit
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <p className="forgot-password text-right" onClick={handleNavigate}>
        Not <a href="#">Register ?</a>
      </p>
    </form>
  );
};

export default Login;
