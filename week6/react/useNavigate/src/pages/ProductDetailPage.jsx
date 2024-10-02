import { useNavigate, useParams } from "react-router-dom";
import products from "../products.js";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((prod) => prod.id == Number(id));

  if (!product) {
    <h2>Error 404: Not Found!</h2>;
  }

  product.img = `/${product.name}.png`;

  return (
    <section className="detail-box">
      <img className="detail-image" src={product.img} alt="" />
        <h1 className="detail-text-h1">{product.name}</h1>
        <p className="detail-text-h2">Habitat: {product.habitat}</p>
        <p className="detail-text-h2">Diet: {product.diet}</p>
        <p className="detail-text-p">Description: {product.description}</p>
      <butto className="button" onClick={() => navigate(-1)}>Terug</butto>
    </section>
  );
};

export default ProductDetailPage;
