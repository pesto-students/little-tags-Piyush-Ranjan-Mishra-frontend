let wishlistPage = 0;
let orderlistPage = 0;
const wishlist = [1, 2, 3];
const orderlist = [1, 2, 3];
const cart = [];
let userDetail = { name: "Piyush" };
wishlist.page = wishlistPage;
orderlist.page = orderlistPage;

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
      userDetail = { ...userDetail, wishlist };
      return {
        ...state,
        userDetail,
      };

    case "ADD_WISHLIST":
      wishlist.add(action.value);
      userDetail = { ...userDetail, wishlist };
      return {
        ...state,
        userDetail,
      };
    case "REMOVE_WISHLIST":
      var index = wishlist.indexOf(action.value);
      if (index !== -1) {
        wishlist.splice(index, 1);
      }
      userDetail = { ...userDetail, wishlist };
      return {
        ...state,
        userDetail,
      };

    case "ORDER":
      orderlist.page = action.value ?? wishlistPage++;
      userDetail = { ...userDetail, orderlist };
      return {
        ...state,
        userDetail,
      };
    case "ADD_ORDER":
      orderlist.add(action.value);
      userDetail = { ...userDetail, orderlist };
      return {
        ...state,
        userDetail,
      };
    case "ADD_TO_CART":
      if (action.value) {
        cart.add(action.value);
      }
      userDetail = { ...userDetail, cart };
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
