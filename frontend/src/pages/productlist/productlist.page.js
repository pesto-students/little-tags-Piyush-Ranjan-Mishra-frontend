const ProductListPage = ({ match }) => {
  return (
    <>
      <h5>{match.params.productType}</h5>
    </>
  );
};

export default ProductListPage;
