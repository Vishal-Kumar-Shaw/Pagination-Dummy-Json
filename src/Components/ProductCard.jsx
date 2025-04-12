export const ProductCard = ({ title, image, id }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h6>
        {id}. {title}
      </h6>
    </div>
  );
};
