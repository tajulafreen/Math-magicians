import React, { useEffect, useState } from 'react';
import './Quotes.css';

const Quote = () => {
  const apiKey = '5Q5vI03n243M8kUJIYzrRg==RCROTX89QSNe2tFp';
  const [data, setData] = useState({
    isLoading: false,
    isError: false,
    isData: [],
  });
  useEffect(() => {
    const Quotes = async () => {
      try {
        setData((prevState) => ({ ...prevState, isLoading: true }));
        const url = 'https://api.api-ninjas.com/v1/facts?limit=4';
        const res = await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json',
        });
        const result = await res.json();
        const { error } = result;
        if (!res.ok) throw new Error(`OPPs Something went wrong ${error} `);
        setData((prevState) => ({ ...prevState, isData: result }));
        setData((prevState) => ({ ...prevState, isLoading: false }));
      } catch (err) {
        setData((prevState) => ({ ...prevState, isError: true }));
      }
    };
    Quotes();
  }, []);
  let content = '';
  if (data.isLoading) content = 'Loading for quote...';
  if (data.isError) content = 'Oops something went wrong';

  return (
    <>
      {data.isError ? (
        <p className="error">{content}</p>
      ) : (
        <div className="quote-Container">
          <h2 className="quote-Header">Facts</h2>
          <p className="loading">{content}</p>
          {data.isData.map((quo, i) => (
            <p className="quote-Text" key={quo.fact.slice(1, 8)}>
              {`${i + 1}.   ${quo.fact}`}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Quote;
