import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import "./Footer.css"
/* import logo from "../../img/logo.png"; */
import visa from "../../img/iconsPagamento/ico-cartao-visa.svg"
import master from "../../img/iconsPagamento/ico-cartao-master.svg"
import elo from "../../img/iconsPagamento/ico-cartao-elo.svg"
import pix from "../../img/iconsPagamento/ico-pix.svg"
import atendimento from "../../img/iconsContato/ico-atendimento.svg"
import trabalheConosco from "../../img/iconsContato/ico-trabalhe-conosco.svg"
import faturaExtrato from "../../img/iconsContato/ico-fatura-extrato.svg"

function Footer() {

  return (
    <div className='footer'>
      <footer className="footer1">
        <div className="footer-content">
          {/* <img src={logo} className="logoFooter" alt="" /> */}

          <ul className="footer-menu footer-atendimento">
            <li>
              <img src={atendimento} title='Atendimento' alt='' className='footer-img'/>
              <p className='footer-text'>Atendimento</p>
            </li>

            <li className="footer-menu-item footer-imagem">
              <img src={faturaExtrato} title='Fatura e Extrato' alt='' className='footer-img'/>
              <p className='footer-text'>Fatura e Extrato</p>
            </li>

            <li className="footer-menu-item footer-imagem">
            <img src={trabalheConosco} title='Trabalhe Conosco' alt='' className='footer-img'/>
            <p className='footer-text'>Trabalhe Conosco</p>
            </li>
          </ul>

          <ul className="footer-menu footer-cliente" >
            <p>CARTÃO GOFASHION</p>
            <li className="footer-menu-item">
              Saiba como adquirir
            </li>
            <li className="footer-menu-item">
              Veja sua fatura e extrato
            </li>
            <li className="footer-menu-item">
              Buscando quitar suas dívidas?
            </li>
          </ul>

          <ul className="footer-menu footer-sobre">
            <p>SOBRE A GOFASHION</p>
            <li className="footer-menu-item">
              Empresa
            </li>
            <li className="footer-menu-item">
              Publicidade
            </li>
            <li class="footer-menu-item">
              Fornecedores
            </li>
            <li className="footer-menu-item">
              Trabalhe Conosco
            </li>
          </ul>

          <ul className="footer-menu footer-ajuda">
            <p>AJUDA</p>
            <li className="footer-menu-item">
              Nossas Lojas
            </li>
            <li className="footer-menu-item">
              Atendimento
            </li>
            <li className="footer-menu-item">
              Trocas e Devoluções
            </li>
          </ul>

          <div className='footer-menu footer-redesociais'>
            <span className="socials-siga">ACOMPANHE GOFASHION</span>

            <div className="socials">
              <i><AiFillInstagram /></i>
              <i><AiOutlineTwitter /></i>
              <i><FaFacebookF /></i>
            </div>
          </div>
        </div>

        <div  className='element element-2'> <i><FaFacebookF /></i></div>

        <div className="footer-info footer-cartao">
          <ul className="footer-info-items">
            <p className="footer-pagamento">FORMAS DE PAGAMENTO</p>
          </ul>
        </div>

        <div className="footer-info footer-cartao">
          <ul className="footer-info-items">
            <li className="footer-info-item"><img src={visa} title='Cartão Visa' alt='' /></li>
            <li className="footer-info-item"><img src={master} title='Cartão Master Card' alt='' /></li>
            <li className="footer-info-item"><img src={elo} title='Cartão Elo' alt='' /></li>
            <li className="footer-info-item"><img src={pix} title='PIX' alt='' /></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;