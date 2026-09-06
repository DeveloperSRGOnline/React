import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
// यहां पर हम क्या कर रहे हैं? Instead of returning data or setting data, हम क्या कर रहे हैं? जो पूरी method हमने बनाई है, useCurrencyInfo नाम से वो पूरी method ही export कर रहे हैं। तो हमें उसके अंदर जो हम return करेंगे, उसका भी access रहेगा और सारी चीजों का access रहेगा, अगर हम पूरी method को ही export कर रहे हैं। That's the reason we are exporting here.
