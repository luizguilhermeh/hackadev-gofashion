
import React from "react";
import { useEffect } from "react";
import api from "../../../api";

const Notification = () => {
    useEffect(() => {
        api.get(`notification`).then(res=>{
          console.log(res)
        })
      })
    return ( 
        <div className="container-notification">
        <h1>Pedido Finalizado Com Sucesso!</h1>
        <span>Em breve você será notificado no whatsapp de cadastro</span>
        </div>
     );
}
 
export default Notification;