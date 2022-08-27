import React from "react";
import './registration.css'

function registration(){
    return(
      <div>
        <section>
          <h1 id="form-titulo-cadastro">Criar seu cadastro</h1>
          <p id="form-subtitle-cadastro">*preenchimento obrigatórios</p>
        </section>
        <section>
          <div className="formulario-cadastro">
      <form action="">
        <div className="formulario-tabelas-botao">
          <div className="formulario-tabelas">
            <div className="formulario-dados-pessoais">
              <div className="formulario-titulo-dados-pessoais">
                <i className="fa-solid fa-list"></i> Dados Pessoais
              </div>
              <div className="field">
                <div className="form-dados-label">
                  <label>
                    <b>* Nome do responsável </b>
                  </label>
                </div>
                <div className="form-end-field">
                  <input
                    type="text"
                    className="form-input"
                    name="nome"
                    required=""
                  />
                </div>
              </div>
              <div className="field">
                <div className="form-dados-label">
                  <label>
                    <b>* CNPJ </b>
                  </label>
                </div>
                <div className="form-end-field">
                  <input
                    type="text"
                    className="form-input"
                    maxlength="14"
                    name="cnpj"
                    required=""
                    mask="99.999.999/9999-99"
                  />
                </div>
              </div>
              <div className="field">
                <div className="form-dados-label">
                  <label>
                    <b>* Razão Social</b>
                  </label>
                </div>
                <div className="form-end-field">
                  <input
                    type="text"
                    className="form-input"
                    name="razao-social"
                    required=""
                  />
                </div>
              </div>
              <div className="field">
                <div className="form-dados-label">
                  <label>Inscrição Estadual</label>
                </div>
                <div className="form-end-field">
                  <input
                    type="number"
                    className="form-input"
                    name="inscricao-estadual"
                  />
                </div>
              </div>
              <div className="field">
                <div className="form-dados-label">
                  <label>Celular</label>
                </div>
                <div className="form-end-field">
                  <input
                    type="text"
                    className="form-input"
                    minlength="11"
                    maxlength="11"
                    name="celular"
                    mask="(99) 9 9999-9999"
                  />
                </div>
              </div>
              <div className="field">
                <div className="form-dados-label">
                  <label>Telefone Fixo</label>
                </div>
                <div className="form-end-field">
                  <input
                    type="text"
                    className="form-input"
                    minlength="10"
                    maxlength="10"
                    mask="9999999999"
                    name="telefone-fixo"
                  />
                </div>
              </div>
              <div className="field">
                <div className="form-dados-label">
                  <label>Nome do Vendedor</label>
                </div>
                <div className="form-end-field">
                  <input
                    type="text"
                    className="form-input"
                    name="nome-vendedor"
                  />
                </div>
              </div>
              <div className="field">
                <div className="form-dados-label">
                  <label>Senha</label>
                </div>
                <div className="form-end-field">
                  <input
                    type="password"
                    placeholder="Senha"
                    className="form-input"
                    name="senha"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
        </section>      
        
        {/* <section>
        <div class="formulario-endereco">
              <div class="formulario-titulo-endereco">
                <i class="fa-solid fa-location-dot"></i> Endereço
              </div>
              <div class="field">
                <div class="form-end-label"><label><b>* CEP</b></label></div>
                <div class="form-end-field"><input type="text" class="form-input-cep" minlength="8" maxlength="8"
                    mask="99999999" name="cep" required="" />
                  <i class="fa-solid fa-circle-question fa-xs"></i><span id="formulario-cep"> Não sei meu cep</span>
                </div>
              </div>
              <div class="field">
                <div class="form-end-label"><label><b>* Endereço</b></label></div>
                <div class="form-end-field"><input type="text" class="form-input" name="endereco" required="" /></div>
              </div>
              <div class="field">
                <div class="form-end-label"><label><b>* Número</b></label></div>
                <div class="form-end-field"><input id="formulario-numero" type="text" class="form-input"
                    name="numero-endereco" required="" />
                </div>
              </div>
              <div class="field">
                <div class="form-end-label"><label>Complemento</label></div>
                <div class="form-end-field"><input type="text" class="form-input" name="complemento-endereco" />
                </div>
              </div>
              <div class="field">
                <div class="form-end-label"><label>Referência</label></div>
                <div class="form-end-field"><input type="text" class="form-input" name="referencia-endereco" />
                </div>
              </div>
              <div class="field">
                <div class="form-end-label"><label><b>* Bairro</b></label></div>
                <div class="form-end-field"><input type="text" class="form-input" name="bairro-endereco" required="" />
                </div>
              </div>
              <div class="field">
                <div class="form-end-label"><label><b>* Cidade</b></label></div>
                <div class="form-end-field"><input type="text" class="form-input" name="cidade-endereco" required="" />
                </div>
              </div>
              <div class="field">
                <div class="form-end-label"><b>* Estado</b></div>
                <select class="form-input" id="form-estado" name="estado" required="">
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </select>
              </div>
            </div>
            
        </section> */}
        <div class="registration-botao">
            <input class="formulario-button-criar-conta" type="submit" name="enviar" value="Criar Conta" />
          </div>
      </div>
    );
  };
  
  export default registration;