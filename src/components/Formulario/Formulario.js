import React from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from "./Formulario.module.css"

function Formulario({btnText}){
  return(
    <form className={styles.form}>
        <Input type="text" text="Nome" name="name" placeholder="Nome Completo" />
        <Input type="text" text="E-mail" name="email" placeholder="email@dominio.com" />
        <Input type="text" text="Data de Nascimento" name="birth" placeholder="    /     /    " />
        <Input type="text" text="Telefone" name="phone" placeholder="(    )"/>
        <Input type="text" text="Celular" name="cellphone" placeholder="(    )" />
        <Input type="text" text="CPF" name="cpf" placeholder="000.000.000-00" />
        <Input type="text" text="CEP" name="cep" placeholder="74.000-000" />
        <Input type="text" text="Endereço" name="address" placeholder="Avenida, Rua, Alameda..." />
        <Input type="text" text="Número" name="number" placeholder="0" />
        <Input type="text" text="Complemento" name="complement" placeholder="Apto, Casa" />
        <Input type="text" text="Bairro" name="district" placeholder="" />
        <Input type="text" text="Cidade" name="city" placeholder="" /> 
        <Select name="category_id" text="Estado" />
        <SubmitButton text={btnText} />
    </form>
  );
};

export default Formulario;