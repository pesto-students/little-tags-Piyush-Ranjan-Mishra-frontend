import  allProducts  from "../../data/products";

export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        product: allProducts.find(
          (product) => product.ProductID === action.value
        ),
      };
    default:
      return state;
  }
}

const initialState = {
  allProducts,
};
