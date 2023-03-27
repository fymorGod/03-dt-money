import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHightLight, TransactionContainer, TransactionsTable } from "./styles";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
             return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td><PriceHightLight variant={transaction.type}>R${transaction.price}</PriceHightLight></td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
             )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}