import React from 'react';
/* eslint-disable react/prop-types */
const Buttons = ({ backgroundcolor, symbol, onClick }) => {
  const spclbtn = `span-2 ${backgroundcolor}`;
  const btn = ` ${backgroundcolor}`;

  return (
    <>
      {symbol === 0 ? (<button type="button" className={spclbtn} onClick={onClick}>{ symbol}</button>)
        : <button type="button" className={btn} onClick={onClick}>{symbol }</button>}
    </>

  );
};

export default Buttons;
