import "./style.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function InicialPage({ setColor }) {
  const history = useHistory();

  useEffect(() => {
    setColor("#282c34");
  }, []);

  return (
    <div className="inicial-page">
      <div className="inicial-page-header">
        <div className="box-01">
          <p className="logo"></p>
          <h1>
            Centralize o <br /> controle das suas finanças
          </h1>
          <span>de forma rápida e segura </span>
          <div>
            <button
              onClick={() => {
                history.push("/mainPage");
              }}
            >
              Iniciar
            </button>
          </div>
        </div>
        <div className="circle-01">
          <div className="circle-02">
            <div className="circle-03">
              <div className="card">
                <div className="gray-rectangle"></div>
                <div className="gray-rectangle"></div>
                <div className="gray-rectangle"></div>
                <div className="gray-rectangle"></div>
                <div className="gray-rectangle"></div>
                <div className="gray-rectangle"></div>

                <div className="white-rectangle-02">
                  <div className="white-rectangle-01">
                    <div className="pink-box">
                      <div className="pink-box-draw">
                        <div></div>
                      </div>
                    </div>
                    <div className="pink-rectangle-01"></div>
                    <div className="pink-rectangle-02"></div>
                  </div>
                  <div className="green-box">
                    <div className="green-box-draw">
                      <div></div>
                    </div>
                  </div>
                  <div className="green-rectangle-01"></div>
                  <div className="green-rectangle-02"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicialPage;
