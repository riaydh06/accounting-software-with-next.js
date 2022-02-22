import React from 'react';
import { useSelector } from 'react-redux';

const SummaryTable = () => {
  const transaction = useSelector((state) => state.transaction.transactionList);
  console.log(transaction);
  return (
    <div className="main">
      <table
        align="center"
        border="1 solid black"
        width="1100"
        height="150"
        color="black"
        className="mb-5"
      >
        <thead>
          <tr>
            <th height="50" colSpan="9" align="center" bgcolor="#00FF7F">
              <h1 align="center"> Summary Of Transaction</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr bgcolor="#FFCC66">
            <th rowSpan="2" width="70">
              Date
            </th>
            <th colSpan="4">Assets</th>
            <th>=</th>
            <th colSpan="2">Liability</th>
            <th rowSpan="2" width="100">
              Revenue & Expence & Owner Equity
            </th>
          </tr>

          <tr className="balancerow" bgcolor="#FFE0B1" align="center">
            <td width="100"> Cash </td>
            <td width="100"> Account Receivable </td>
            <td width="100"> Supplies </td>
            <td width="100"> Office equipment </td>
            <td width="10"> = </td>
            <td width="150"> Notes payable </td>
            <td width="150"> Account payable </td>
          </tr>

          {transaction?.map((item) => (
            <tr className="balancerow" bgcolor="#FFE0B1" align="center">
              <td width="100"> {item.date} </td>
              <td width="100"> Cash </td>
              <td width="100"> Account Receivable </td>
              <td width="100"> Supplies </td>
              <td width="100"> Office equipment </td>
              <td width="10"> = </td>
              <td width="150"> Notes payable </td>
              <td width="150"> Account payable </td>
              <td width="150"> Revenue </td>
            </tr>
          ))}
          <tr>
            <td>
              <h4>Grand Total</h4>
            </td>
            <td> </td>
            <td>
              <h4> 100 TK</h4>
            </td>
            <td> </td>
            <td> </td>
            <td>=</td>
            <td> </td>
            <td>
              <h4>100 TK</h4>
            </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
