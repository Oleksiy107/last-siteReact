import React, { Component } from "react";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      имя: "",
      фамилия: "",
      email: "",
      телефон: "",
      адрес: "",
      продукт: "продукт1",
      количество: 1,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно отправить данные на сервер или выполнить другие необходимые действия
  };

  render() {
    return (
      <div className="order-form">
        <form onSubmit={this.handleSubmit} className="order-form__form">
          <h1>Подтверждение заказа</h1>
          <div className="order-form__date-block date-block">
            <div className="date-block__inner-wrap">
              <div className="date-block__wrapper1">
                <div>
                  <label className="order-form__label" htmlFor="имя">
                    Имя:
                  </label>
                  <input
                    type="text"
                    id="имя"
                    name="имя"
                    value={this.state.имя}
                    onChange={this.handleInputChange}
                    placeholder={"Name"}
                    required
                  />
                </div>
                <div>
                  <label className="order-form__label" htmlFor="фамилия">
                    Фамилия:
                  </label>
                  <input
                    type="text"
                    placeholder={"Last Name:"}
                    id="фамилия"
                    name="фамилия"
                    value={this.state.фамилия}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="date-block__wrapper2">
                <div>
                  <label className="order-form__label" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="order-form__email-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder={"Email:"}
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="order-form__label" htmlFor="телефон">
                    Телефон:
                  </label>
                  <input
                    className="order-form__tel-input"
                    type="tel"
                    id="телефон"
                    placeholder={"Phone:"}
                    name="телефон"
                    value={this.state.телефон}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <br />
          </div>
          <label className="order-form__label" htmlFor="адрес">
            Адрес доставки:
          </label>
          <textarea
            id="адрес"
            name="адрес"
            placeholder={"Place"}
            value={this.state.адрес}
            onChange={this.handleInputChange}
            required
          ></textarea>
          <br />

          <label className="order-form__label" htmlFor="продукт">
            Выберите продукт:
          </label>
          <select
            id="продукт"
            name="продукт"
            value={this.state.продукт}
            onChange={this.handleInputChange}
            required
          >
            <option value="продукт1">Продукт 1</option>
            <option value="продукт2">Продукт 2</option>
            <option value="продукт3">Продукт 3</option>
          </select>
          <br />

          <label className="order-form__label" htmlFor="количество">
            Количество:
          </label>
          <input
            type="number"
            id="количество"
            name="количество"
            min="1"
            value={this.state.количество}
            onChange={this.handleInputChange}
            required
          />
          <br />

          <input type="submit" value="Подтвердить заказ" />
        </form>
        <div className="order-form__block-info block-basket">
          <h2 className="block-basket">Full price:</h2>
          <div>
            <p>Стоимость доставки</p>
            <p>по тарифам перевозчик</p>
          </div>
          <p className="by price:"></p>
        </div>
      </div>
    );
  }
}

export default OrderForm;
