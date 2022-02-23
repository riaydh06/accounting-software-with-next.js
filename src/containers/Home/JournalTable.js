import React from 'react';

const JournalTable = () => {
  return (
    <table
      align="center"
      border="1 solid black"
      width="1100"
      height="100"
      color="black"
      className="mb-5"
    >
      <thead>
        <tr>
          <th height="50" colSpan="5" align="center" bgcolor="#00FF7F">
            <h1 align="center"> Journal Table</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr bgcolor="#FFCC66">
          <th height="10px" width="90">
            Date
          </th>
          <th height="10px" width="487">
            Particular
          </th>
          <th width="12">=</th>
          <th height="10px">Debit</th>
          <th height="10px">Credit</th>
        </tr>
      </tbody>
    </table>
  );
};

export default JournalTable;
