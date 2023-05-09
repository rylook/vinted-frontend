import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import itemImage from "../assets/item-img.jpeg";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="offer-container">
      <div className="container offer-page">
        <div className="product">
          <img
            src={data.product_image ? data.product_image.secure_url : itemImage}
            alt="product title"
          />
        </div>
        <div className="infos">
          <div>
            <span className="price">{data.product_price} &euro;</span>
            <ul>
              {data.product_details.map((detail, index) => {
                console.log(detail);
                // Je récupère le nomde la clef de detail
                const keyName = Object.keys(detail)[0];
                return (
                  <li key={index}>
                    {/* J'affiche le nom dela clef  */}
                    <span>{keyName} : </span>
                    {/* et son contenu */}
                    <span>{detail[keyName]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p>{data.product_name}</p>
            <p>{data.product_description}</p>
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
