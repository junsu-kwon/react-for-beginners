import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(0);
  const [coins, setCoins] = useState([]);
  const [coinCost, setCoinCost] = useState(0);

  const moneyInput = (event) => {
    setMoney(+event.target.value);
  };

  const coinSelect = (event) => {
    setCoinCost(+event.target.value);
  };

  // 최초 데이터 로딩
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((resopnse) => resopnse.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {!loading ? `(${coins.length})` : null}</h1>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <select onChange={coinSelect}>
          <option>coin select</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <h1>
        My money
        <input
          type="text"
          id="money"
          value={money}
          onChange={moneyInput}
        ></input>
        $
      </h1>
      <h1>you can buy {money ? coinCost / money : null}</h1>
    </div>
  );
}

export default App;
