import React, { Fragment, useState } from 'react';
import { ELEMENT, TRANSACTION_TYPE } from '@constants';
import {} from '@constants';
import { useDispatch } from 'react-redux';
import { addTransactionAction } from '@actions/transactionAction';

const TransactionTable = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const [quality, setQuality] = useState(0);
  const [trn, setTrn] = useState('');
  const [trn1, setTrn1] = useState('');
  const [price, setPrice] = useState(0);

  const addTransaction = () => {
    if (date && trn1 && price) {
      dispatch(addTransactionAction({ date, trn, trn1, price, quality }));
    }
  };

  const formView = () => (
    <tr>
      <td>
        <input
          name="data"
          value={date}
          type="date"
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </td>
      <td>
        <input
          name="quality"
          value={quality}
          type="number"
          onChange={(e) => setQuality(e.target.value)}
        />
      </td>
      <td>
        <select value={trn} name="trn" onChange={(e) => setTrn(e.target.value)}>
          {ELEMENT.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select value={trn1} required onChange={(e) => setTrn1(e.target.value)}>
          {TRANSACTION_TYPE.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          name="price"
          type="number"
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />
      </td>
      <td>
        <button onClick={addTransaction}>Submit</button>
      </td>
    </tr>
  );
  return (
    <div>
      <div className="mar fix">
        <marquee> Accounting </marquee>
      </div>
      <h1 className="t11" align="center">
        Transaction Table
      </h1>

      <table
        align="center"
        border="1px solid black"
        width="900"
        height="100"
        color="black"
      >
        <thead bgcolor="#FFCC66">
          <tr align="center">
            <th width="100">Date</th>
            <th width="50">Quantity</th>
            <th>Element</th>
            <th>Transaction</th>
            <th>Price</th>
            <th>Submit</th>
          </tr>
        </thead>
        <tbody>{formView()}</tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
