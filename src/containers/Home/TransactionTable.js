import React from 'react';
import { ELEMENT, TRANSACTION } from '@constants';
import {} from '@constants';

const TransactionTable = () => {
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
              {ELEMENT.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select name="trn1">
              {TRANSACTION.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
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
    </div>
  );
};

export default TransactionTable;
