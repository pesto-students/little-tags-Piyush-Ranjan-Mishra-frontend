import allProducts from "../../data/products";

let wishlistPage = 0;
let orderlistPage = 0;
let cartlistPage = 0;
const wishlist = [...allProducts];
const orderlist = [...allProducts];
const cart = [...allProducts];
let userDetail = { name: "Piyush" };
wishlist.page = wishlistPage;
orderlist.page = orderlistPage;
cart.page = cartlistPage;

const getFilledArray = (arr) => {
  const array = [];
  array.page = arr.page;
  let startIndex = arr.page * 3 - 3;
  startIndex = startIndex > 0 ? startIndex : 0;

  for (let index = startIndex; index < startIndex + 3; index++) {
    if (arr.length > 3) {
      array.push(arr[index % arr.length]);
    } else if (index < arr.length) {
      array.push(arr[index]);
    }
  }
  return array;
};

export default function user(state = userDetail, action) {
  switch (action.type) {
    case "LOGIN":
      userDetail = {
        name: "Piyush",
      };
      return { ...state, name: "Piyush" };
    case "LOGOUT":
      userDetail = {};
      return {};
    case "WISHLIST":
      wishlist.page = action.value ?? wishlistPage++;
      userDetail = { ...userDetail, wishlist: getFilledArray(wishlist) };
      return {
        ...state,
        userDetail,
      };

    case "ADD_WISHLIST":
      wishlist.push(action.value);
      userDetail = { ...userDetail, wishlist: getFilledArray(wishlist) };
      return {
        ...state,
        userDetail,
      };

    case "REMOVE_WISHLIST":
      var index = wishlist.indexOf(action.value);
      if (index !== -1) {
        wishlist.splice(index, 1);
      }
      userDetail = { ...userDetail, wishlist: getFilledArray(wishlist) };
      return {
        ...state,
        userDetail,
      };

    case "ORDER":
      orderlist.page = action.value ?? wishlistPage++;
      userDetail = { ...userDetail, orderlist: getFilledArray(orderlist) };
      return {
        ...state,
        userDetail,
      };
    case "ADD_ORDER":
      orderlist.push(action.value);
      userDetail = { ...userDetail, orderlist: getFilledArray(orderlist) };
      return {
        ...state,
        userDetail,
      };
    case "CART":
      cart.page = action.value ?? wishlistPage++;
      userDetail = { ...userDetail, cart: getFilledArray(cart) };
      return {
        ...state,
        userDetail,
      };
    case "ADD_TO_CART":
      if (action.value) {
        cart.push(action.value);
      }
      userDetail = { ...userDetail, cart: getFilledArray(cart) };
      return {
        ...state,
        userDetail,
      };
    case "MODIFY_ADD_TO_CART":
      cart[action.index] = action.value;
      userDetail = { ...userDetail, cart: getFilledArray(cart) };

      return { ...state, userDetail };
    case "REMOVE_ADD_TO_CART":
      const cartIndex = cart.indexOf(action.value);
      if (cartIndex !== -1) {
        cart.splice(cartIndex, 1);
      }
      userDetail = { ...userDetail, cart: getFilledArray(cart) };

      return { ...state, userDetail };
    case "ADDRESSES":
      userDetail.addresses = [
        {
          firstName: "John",
          lastName: "Doe",
          mobile: "987329323",
          line1: "Line11",
          line2: "Line21",
          city: "City",
          country: "India",
          zipCode: "11001",
        },
        {
          firstName: "Joe",
          lastName: "Den",
          mobile: "732938723",
          line1: "Line12",
          line2: "Line22",
          city: "City",
          country: "India",
          zipCode: "21001",
        },
      ];
      return {
        ...state,
        userDetail,
      };

    case "ADD_ADDRESSES":
      userDetail.addresses.push(action.value);

      return {
        ...state,
        userDetail,
      };
    case "REMOVE_ADDRESSES":
      const addressIndex = userDetail.addresses.indexOf(action.value);
      if (addressIndex !== -1) {
        userDetail.addresses.splice(addressIndex, 1);
      }

      return {
        ...state,
        userDetail,
      };
    case "Payment_CARD":
      userDetail.payments = [
        { name: "visa", cardNumber: "1207", expiry: "01/21" },
        { name: "master", cardNumber: "2917", expiry: "04/22" }
      ];

      return {
        ...state,
        userDetail,
      };
    case "ADD_Payment_CARD":
      userDetail.payments.push(action.value);    
      return {
        ...state,
        userDetail,
      };
    case "REMOVE_Payment_CARD":
      const cardIndex = userDetail.payments.indexOf(action.value);
      if (cardIndex !== -1) {
        userDetail.payments.splice(cardIndex, 1);
      }

      return {
        ...state,
        userDetail,
      };
    default:
      return {
        state,
      };
  }
}
