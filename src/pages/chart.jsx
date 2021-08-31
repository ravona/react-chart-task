// third parties:
import axios from "axios";

// react:
import { useState, useEffect } from "react";

// components:
import Button from "../components/button/button";
import Chart from "../components/chart/chart";
import List from "../components/list/list";

// utils
import { getRandomChartData } from "../utils/utils";

// style:
import "./chart.scss";

const DELAY = 5;
const ITEMS = 3;
const TYPE = "pie";

const ChartPage = () => {
  const [shouldShowComponent, setShouldShowComponent] = useState(false);
  const [data, setData] = useState([]);
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    if (shouldShowComponent) {
      let actionTimeOut = setTimeout(
        () => setShouldShowComponent(false),
        DELAY * 1000
      );

      return () => {
        clearTimeout(actionTimeOut);
        setShouldShowComponent(false);
      };
    }
  }, [shouldShowComponent]);

  const handleClick = async () => {
    try {
      const exchangeRates = await axios.get(
        "https://api.coingecko.com/api/v3/exchange_rates"
      );

      setApiData(exchangeRates.data.rates.ils);
    } catch (error) {
      console.error("There was an error fetching the data: ", error);
    }

    setShouldShowComponent(true);
    const randomData = getRandomChartData(ITEMS);
    setData(randomData);
  };

  const listItems = Object.values(apiData);

  return (
    <>
      <Button text="Click Here" cbFunc={handleClick} />

      {Object.keys(apiData).length > 0 && <List listItems={listItems} />}

      {shouldShowComponent && <Chart type={TYPE} data={data} />}
    </>
  );
};

export default ChartPage;
