import allProducts from "../../data/products";

let wishlistPage = 0;
let orderlistPage = 0;
const wishlist = [...allProducts];
const orderlist = [];
const cart = [];
let userDetail = { name: "Piyush" };
wishlist.page = wishlistPage;
orderlist.page = orderlistPage;

const getFilledArray = (arr) => {
  const array = [];
  console.log("Filling", arr);
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
    case "ADD_TO_CART":
      if (action.value) {
        cart.push(action.value);
      }
      userDetail = { ...userDetail, cart: getFilledArray(cart) };
      return {
        ...state,
        userDetail,
      };
    case "ADDRESSES":
      userDetail.addresses = [
        {
          line1: "Line11",
          line2: "Line21",
          city: "City",
          country: "India",
          zipCode: "11001",
        },
        {
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
      userDetail.addresses.add(action.value);
      return {
        ...state,
        userDetail,
      };

    case "REMOVE_ADDRESSES":
      var index = userDetail.addresses.indexOf(action.value);
      if (index !== -1) {
        userDetail.addresses.splice(index, 1);
      }
      return {
        ...state,
        userDetail,
      };

    case "Payment_CARD":
      userDetail.payments = [
        { name: "Visa", cardNumber: "1207", expiry: "01/21" },
        { name: "Master", cardNumber: "2917", expiry: "04/22" },
      ];
      return {
        ...state,
        userDetail,
      };

    case "ADD_Payment_CARD":
      userDetail.payments.add(action.value);
      return {
        ...state,
        userDetail,
      };

    case "REMOVE_Payment_CARD":
      var index = userDetail.payments.indexOf(action.value);
      if (index !== -1) {
        userDetail.payments.splice(index, 1);
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
