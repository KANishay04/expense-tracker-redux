import React, { Component } from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import { addTransaction, deleteTransaction, editTransaction } from "../redux/actions";
import TransactionsList from "../components/TransactionsList";
import IncomeExpense from "../components/IncomeExpense";
import EditTransactionForm from "../components/EditTransactionForm";


export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTransaction: null
    };
  }

  handleEditTransaction = (transaction) => {
    this.setState({ editTransaction: transaction });
  };

  render() {
    const { transactions, addTransaction, deleteTransaction, editTransactionAction } = this.props;
    const { editTransaction } = this.state;

    return (
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <TransactionsList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          editTransaction={this.handleEditTransaction}
        />
        <AddTransactions addTransaction={addTransaction} />
        {editTransaction && (
          <EditTransactionForm
            transaction={editTransaction}
            editTransactionAction={editTransactionAction}
            cancelEdit={() => this.setState({ editTransaction: null })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  editTransactionAction: (transaction) => dispatch(editTransaction(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
