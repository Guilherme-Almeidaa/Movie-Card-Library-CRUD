import React from 'react';
import { connect } from 'react-redux';
import { sumExpense } from '../actions/index'


class TableInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            deleted: false,
        }

        this.deleteExpense = this.deleteExpense.bind(this);
    }



    deleteExpense(index) {
        const { expenses, sigleCurrence, sumExpenses } = this.props
        expenses.splice(index, 1)
        this.setState({
            deleted: true
        })
        const filterCurrence = Object.values(sigleCurrence).filter((item) => item.name !== 'Dólar Turismo')
        const sum = expenses.map((item) => {
            return parseFloat(filterCurrence.find((currence) => currence.code === item.currency).ask) * parseFloat(item.value)
        }).reduce((acc, reduce) => acc + reduce, 0)
        sumExpenses(sum)
        return sum

    }

    isSelected(e) {

        if (e.target.className === 'is-selected') {
            e.target.className = ''
        } else {
            e.target.className = 'is-selected'
        }
    }

    render() {
        const { expenses } = this.props

        return (

            <table className="table is-bordered" >
                <thead>
                    <tr>
                        <td>Descrição</td>
                        <td>Tag</td>
                        <td>Método de pagamento</td>
                        <td>Valor</td>
                        <td>Moeda</td>
                        <td>Câmbio utilizado</td>
                        <td>Valor convertido</td>
                        <td>Moeda de conversão</td>
                        <td>Editar/Excluir</td>
                    </tr>
                </thead>
                {expenses.map((item, index) => {
                    const { currency, exchangeRates } = item
                    const convert = (exchangeRates[currency].ask * item.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                    return (
                        <tbody key={index} >
                            <tr onClick={this.isSelected} >
                                <td>{item.description}</td>
                                <td>{item.tag}</td>
                                <td>{item.method}</td>
                                <td>{item.value}</td>
                                <td>{exchangeRates[currency].name}</td>
                                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                                <td>{convert}</td>
                                <td>Real</td>
                                <td>
                                    <button class="delete is-small" type="button" onClick={() => this.deleteExpense(index)} ></button>
                                    <button type="button">Editar</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}


            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses: state.wallet.expenses,
    sigleCurrence: state.wallet.currencies,
})

const mapDispatchToProps = (dispatch) => ({
    sumExpenses: sum => dispatch(sumExpense(sum)),

})

export default connect(mapStateToProps, mapDispatchToProps)(TableInfo);