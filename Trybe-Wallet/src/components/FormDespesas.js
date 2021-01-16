import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrences, saveExpenses } from '../actions/index';


class FormDespesas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            value: 0,
            description: '',
            currency: 'USD',
            method: 'Dinheiro',
            tag: 'Alimentação',
            exchangeRates: {},
            edit: false,
        };
        this.handlerChange = this.handlerChange.bind(this);
        this.expenseSaved = this.expenseSaved.bind(this);
    }

    componentDidMount() {
        const { requestCurrence } = this.props;
        requestCurrence()
    }
    expenseSaved() {
        const { expensesSave, sigleCurrence, expenses ,requestCurrence } = this.props
        requestCurrence()
        this.setState({
            id: expenses.length,
            exchangeRates: { ...sigleCurrence }
        }, () => expensesSave(this.state))

    }

    handlerChange({ target }) {
        const { value, name } = target
        this.setState({ [name]: value })
    }

    render() {
        const { sigleCurrence } = this.props
        const currenceFilter = Object.values(sigleCurrence).filter((item) => item.name !== 'Dólar Turismo')
        return (
            
            <form className="form" >
                
                <label htmlFor="valor" >Valor:
              <input  type="number" min="0" onChange={this.handlerChange} name="value" id="valor" data-testid="value-input" />
                </label>
                <label htmlFor="descricao" >Descrição:
              <input type="text" onChange={this.handlerChange} name="description" id="descricao" data-testid="description-input" />
                </label>
                <label htmlFor="moeda" >Moeda:
              <select onChange={this.handlerChange} name="currency" id="moeda" data-testid="currency-input" >
                        {currenceFilter.map((currence) => {
                            return (
                                < option key={currence.code} data-testid={currence.code} >
                                    {currence.code}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <label>Método de pagamento:
                    <select onChange={this.handlerChange} name="method" data-testid="method-input" >
                        <option value="Dinheiro<" >Dinheiro</option>
                        <option value="Cartão de crédito" >Cartão de crédito</option>
                        <option value="Cartão de débito" >Cartão de débito</option>
                    </select>
                </label>
                <label>Categoria:
                    <select onChange={this.handlerChange} name="tag" data-testid="tag-input"  >
                        <option value="Alimentação" >Alimentação</option>
                        <option value="Lazer" >Lazer</option>
                        <option value="Trabalho" >Trabalho</option>
                        <option value="Transporte" >Transporte</option>
                        <option value="Saúde" >Saúde</option>
                    </select>
                </label>
                <button className="button is-primary add" type="button" onClick={this.expenseSaved} >Adicionar</button>
            </form>
            
            
        )
    }
}

const mapStateToProps = (state) => ({
    sigleCurrence: state.wallet.currencies,
    expenses: state.wallet.expenses

})

const mapDispatchToProps = (dispatch) => ({
    requestCurrence: () => dispatch(fetchCurrences()),
    expensesSave: (expense) => dispatch(saveExpenses(expense))
})


export default connect(mapStateToProps, mapDispatchToProps)(FormDespesas);