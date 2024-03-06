import "./ProductsGroup.css";

const ProductsGroup = ({ howDoICreateAnAccountOnOr }) => {
  return (
    <div className="products-group">
      <div className="overview-frame">
        <h3 className="how-do-i">{howDoICreateAnAccountOnOr}</h3>
        <div className="text6">
          <div className="frame4" />
          <img className="address-text-icon" alt="" src="/vector-33.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProductsGroup;
