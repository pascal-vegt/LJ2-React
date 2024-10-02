import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  function goToDetail() {
    navigate(`/products/${product.id}`);
  }

    product.img = `../${product.name}.png`

  return (
    <>
      <section className="product-box" onClick={goToDetail}>
        <div className="product-box-container">
            <img className="image" src={product.img} alt="" />
          <h2 className="text">{product.name}</h2>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
