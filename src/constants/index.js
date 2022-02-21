export { FIELDS } from './fields';
export const MAIN_CONTENT_ID = 'main-content';

export const FORM_NAMES = {
  SIGN_UP: 'SignUp',
};

export const INPUT_FIELD_DEFAULT_VALUES = {
  DEFAULT_MAX_LENGTH: 300,
  DEFAULT_ROWS: 6,
  DEFAULT_HEIGHT: 38,
};

// (`no`, `t1`, `tt1`, `t2`, `tt2`)
export const tran = [
  { no: 1, t1: 1, tt1: -1, t2: 3, tt2: 1 },
  { no: 2, t1: 1, tt1: 1, t2: 6, tt2: 1 },
  { no: 3, t1: 1, tt1: 1, t2: 7, tt2: 1 },
  { no: 4, t1: 2, tt1: 1, t2: 7, tt2: 1 },
  { no: 5, t1: 1, tt1: -1, t2: 3, tt2: 1 },
  { no: 6, t1: 3, tt1: 1, t2: 6, tt2: 1 },
  { no: 7, t1: 1, tt1: -1, t2: 7, tt2: -1 },
  { no: 8, t1: 1, tt1: 1, t2: 5, tt2: 1 },
  { no: 9, t1: 1, tt1: -1, t2: 6, tt2: -1 },
  { no: 10, t1: 1, tt1: -1, t2: 7, tt2: -11 },
  { no: 11, t1: 6, tt1: 1, t2: 7, tt2: -1 },
  { no: 12, t1: 1, tt1: 1, t2: 7, tt2: 1 },
  { no: 13, t1: 1, tt1: -1, t2: 5, tt2: -1 },
  { no: 14, t1: 2, tt1: 1, t2: 7, tt2: 1 },
  { no: 15, t1: 2, tt1: -1, t2: 1, tt2: 1 },
  { no: 16, t1: 1, tt1: 1, t2: 7, tt2: 1 },
];

export const ELEMENT = [
  { id: 0, name: '' },
  { id: 1, name: 'Supply' },
  { id: 2, name: 'Office equipment' },
  { id: 3, name: 'Expence' },
];

export const TRANSACTION = [
  { id: 1, name: 'Paid on cash' },
  { id: 2, name: 'Borrow' },
  { id: 3, name: 'Service on cash' },
  { id: 4, name: 'Service on due' },
  { id: 5, name: 'Buy on cash' },
  { id: 6, name: 'Buy on due' },
  { id: 7, name: 'Cash withdrew' },
  { id: 8, name: 'Notes payable' },
  { id: 9, name: 'Cash repay borrowed' },
  { id: 10, name: 'Expence on cash' },
  { id: 11, name: 'Expence on due' },
  { id: 12, name: 'Invest' },
  { id: 13, name: 'Repay Notespayable' },
  { id: 14, name: 'Sell on due' },
  { id: 15, name: 'Get receivable' },
  { id: 16, name: 'Sell on cash' },
];
export const VARIABLE = [
  { id: 1, name: 'Cash' },
  { id: 2, name: 'Account Receivable' },
  { id: 3, name: 'Supplies' },
  { id: 4, name: 'Office Equipment' },
  { id: 5, name: 'Notes Payable' },
  { id: 6, name: 'Account Payable' },
  { id: 7, name: 'Revenue/Owner equity/expence' },
];
