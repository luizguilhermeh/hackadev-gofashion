
import React from "react";
import { useEffect } from "react";
import api from "../../../api";
import "./notification.css"


const Notification = () => {
    useEffect(() => {
        api.get(`notification`).then(res=>{
          console.log(res)
        })
      })
    return ( 
        <div className="container1">
        <div className="container-notification">
        <div id='card' className="animated fadeIn">
  <div className="upper-side">
  <i className="fa fa-check"></i>
  <h3 id='status'>
      Successo
    </h3>
  </div>
  <div id='lower-side'>
    <p id='message'>
      O seu pedido foi realizado e uma mensagem de confirmação será enviada no Whatsapp de cadastro.
    </p>
    <a href="/home" id="contBtn">Continuar</a>
        </div>
        </div>
        </div>
        </div>
        
     );
}
 
export default Notification;