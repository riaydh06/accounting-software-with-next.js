import React from 'react';

const Home = () => {
  return (
    <div>
      <div class="mar fix">
        <marquee> Accounting </marquee>
      </div>
      <h1 class="t11" align="center">
        Transaction Table
      </h1>

      <table
        align="center"
        border="1px solid black"
        width="900"
        height="100"
        color="black"
      >
        <tr bgColor="#FFCC66">
          <th width="100">Date</th>
          <th width="50">Quantity</th>
          <th>Element</th>
          <th>Transaction</th>
          <th>Price</th>
          <th>Submit</th>
        </tr>
        <tr>
          <td>
            <input name="date" type="date" />
          </td>
          <td>
            <input name="qun" type="number" />
          </td>
          <td>
            <select name="trn">
              <option value="0"></option>
              <option value="1">Supply</option>
              <option value="2">Office equipment</option>
              <option value="3">Expence </option>
            </select>
          </td>
          <td>
            <select name="trn1">
              <option value="1">Paid on cash</option>
              <option value="2">Borrow</option>
              <option value="3">Service on cash</option>
              <option value="4">Service on due</option>
              <option value="5">Buy on cash</option>
              <option value="6">Buy on due</option>
              <option value="7">Cash withdrew</option>
              <option value="8">Notes payable</option>
              <option value="9">Cash repay borrowed</option>
              <option value="10">Expence on cash</option>
              <option value="11">Expence on due</option>
              <option value="12">Invest</option>
              <option value="13">Repay Notespayable</option>
              <option value="14">Sell on due</option>
              <option value="15">Get receivable </option>
              <option value="16">Sell on cash</option>
            </select>
          </td>
          <td>
            <input name="price" type="number" />
          </td>
          <td>
            <input name="submit" type="submit" value="Submit" />
          </td>
        </tr>
      </table>

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
              {' '}
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
    </div>
  );
};

export default Home;
