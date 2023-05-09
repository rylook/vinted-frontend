import userEmpty from "../assets/user-empty.svg";
import itemImage from "../assets/item-img.jpeg";
import { Link } from "react-router-dom";

const OfferCard = ({ offerData }) => {
  const { owner, product_image, product_price, product_details } = offerData;

  return (
    <Link to={`/offer/${offerData._id}`}>
      <article className="item-card">
        <div className="item-seller">
          <img
            src={
              owner.account.avatar ? owner.account.avatar.secure_url : userEmpty
            }
            alt={owner.account.username}
          />
          <span>{owner.account.username}</span>
        </div>

        <div className="item-details">
          <img
            src={product_image ? product_image.secure_url : itemImage}
            alt="Jeans taille S"
          />
          <div>
            {product_details.reverse().map((detail, index) => {
              console.log(detail);
              <span>{product_price}</span>;
              if (detail.MARQUE) {
                return <span key={index}>{detail.MARQUE}</span>;
              } else if (detail.TAILLE) {
                return <span key={index}>{detail.TAILLE}</span>;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default OfferCard;
