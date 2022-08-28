import React from 'react';
import './SizeButton.css';

class SizeButton extends React.Component {
  render() {
    return (
      <div className="group123">
        <div className="select">
          <div className="product-descricao-tamanho">Escolha o tamanho</div>
          <div className="size-choice">
            <div className="btn-group">
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option1"
                autocomplete="off"
                checked
              />
              <label className="btn btn-secondary" for="option1">
                P
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option2"
                autocomplete="off"
              />
              <label className="btn btn-secondary" for="option2">
                M
              </label>

              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option3"
                autocomplete="off"
              />
              <label className="btn btn-secondary" for="option3">
                G
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SizeButton;
