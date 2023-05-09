import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import OfferCard from "../components/OfferCard";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <p>Loading ...</p>
        <Hero />
        <div className="container popular-items">
          <h2>Articles populaires</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Hero />
        <div className="container popular-items">
          <h2>Articles populaires : {data.count}</h2>
          <div className="items">
            {data.offers.map((offer) => {
              return <OfferCard key={offer._id} offerData={offer} />;
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Home;
