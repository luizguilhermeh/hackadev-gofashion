import React from "react";
import styles from './Registration.module.css'

function registration() {
  return (
  <div className={styles.registration_container}>
    <h1>Crie seu cadastro</h1>
    <p id="p-registro">*preenchimento obrigatório</p>
  </div>
  );
}

export default registration;
