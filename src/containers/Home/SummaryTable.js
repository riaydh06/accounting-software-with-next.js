import React from 'react';

const SummaryTable = () => {
  return (
    <div class="main">
      <table
        align="center"
        border="1 solid black"
        width="1100"
        height="150"
        color="black"
      >
        <tr>
          <th height="50" colSpan="9" align="center" bgColor="#00FF7F">
            <h1> Summary Of Transaction</h1>
          </th>
        </tr>
        <tr bgColor="#FFCC66">
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
        <tr class="balancerow" bgColor="#FFE0B1" align="center">
          <td width="100"> Cash </td>
          <td width="100"> Account Receivable </td>
          <td width="100"> Supplies </td>
          <td width="100"> Office equipment </td>
          <td width="10"> = </td>
          <td width="150"> Notes payable </td>
          <td width="150"> Account payable </td>
        </tr>
      </table>
    </div>
  );
};

export default SummaryTable;
