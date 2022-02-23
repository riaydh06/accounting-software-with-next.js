import React from 'react';

const BalanceTable = () => {
  return (
    <table
      align="center"
      border="1 solid black"
      width="1100"
      height="100"
      color="black"
    >
      <thead>
        <tr>
          <th height="50" colSpan="9" align="center" bgcolor="#00FF7F">
            <h1 align="center"> Balance Sheet</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr bgcolor="#FFCC66">
          <th>Assets</th>
          <th width="300">Amount</th>
        </tr>
        <tr>
          <td>
            Cash
            <br />
            Account Receivable
            <br />
            Supplies
            <br />
            Office Equipment
          </td>
          <td>
            $arr[0]
            <br />
            $arr[1]
            <br />
            $arr[2]
            <br />
            $arr[3]
            <br />
          </td>
        </tr>
        <tr>
          <td>Total Assets</td>
          <td>$grand_total1 </td>
        </tr>
        <tr>
          <td>
            Notes Payable
            <br />
            Account Payable
            <br />
            Owner Equity
          </td>
          <td>
            $arr[4]
            <br />
            $arr[5]
            <br />
            $arr[6]
            <br />
          </td>
        </tr>
        <tr>
          <td>Total Liability & Owner Equity</td>
          <td>$grand_total2 </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BalanceTable;
