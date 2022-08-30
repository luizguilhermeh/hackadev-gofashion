import React from "react";
import styles from './Registration.module.css'
import Formulario from "../../Formulario/Formulario";

function registration() {
  return (
  <div className={styles.registration_container}>
    <h1>Crie seu cadastro</h1>
    <Formulario btnText="Cadastrar" />
  </div>
  );
}

export default registration;
