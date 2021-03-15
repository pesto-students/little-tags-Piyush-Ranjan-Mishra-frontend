import { defineMessages } from "react-intl";

const navbar = {
  home: {
    id: "nav.home",
    defaultMessage: "Home",
  },
  navBarSearch: {
    id: "nav.search-product",
    defaultMessage: "Search Product ..",
  },
  navLang: {
    id: "nav.lang",
    defaultMessage: "Language",
  },
  all: {
    id: "nav.all",
    defaultMessage: "All",
  },

  men: {
    id: "nav.men",
    defaultMessage: "Mens",
  },
  kids: {
    id: "nav.kids",
    defaultMessage: "Kids",
  },

  homeLiving: {
    id: "nav.home-living",
    defaultMessage: "Home & Living",
  },
  women: {
    id: "nav.women",
    defaultMessage: "Women",
  },
};

export const navbarMessage = defineMessages(navbar);

const myAccount = {
  welcome: {
    id: "account.welcome",
    defaultMessage: "Welcome, {username}",
  },
  login: {
    id: "nav.login",
    defaultMessage: "Login",
  },
  myProfile: {
    id: "account.profile",
    defaultMessage: "My Profile",
  },
  myAccount: {
    id: "account.account",
    defaultMessage: "My Account",
  },
  myCart: {
    id: "account.cart",
    defaultMessage: "Shopping Cart",
  },
  myCartItems: {
    id: "account.cart-item",
    defaultMessage: `You have {itemCount, plural,
       =0 {no items}
      one {one item}
      other {# items} }`,
  },
  myOrder: {
    id: "account.orders",
    defaultMessage: "My Orders",
  },
  myWishlist: {
    id: "account.wishlist",
    defaultMessage: "My Wishlist",
  },
  myAddress: {
    id: "account.addresses",
    defaultMessage: "My Addresses",
  },
  myPayments: {
    id: "accoutn.payments",
    defaultMessage: "Payments",
  },
  logout: {
    id: "account.logout",
    defaultMessage: "Logout",
  },
};

export const myAccountMessage = defineMessages(myAccount);

const footer = {
  contactUs: {
    id: "footer.contact-us",
    defaultMessage: "Contact us",
  },
  phone: {
    id: "footer.phone",
    defaultMessage: "Phone {phone}",
  },
  address: {
    id: "footer.address",
    defaultMessage: "Address {address}",
  },
  paymentOption: {
    id: "footer.payment-option",
    defaultMessage: "We accept",
  },
  subscribeTitle: {
    id: "footer.subscribe-title",
    defaultMessage: "Subscribe to our newsletter",
  },
  subscribeInput: {
    id: "footer.subscribe-input",
    defaultMessage: "Enter your E-mail Address Here",
  },
  socialMedia: {
    id: "footer.social-media",
    defaultMessage: "Join Us On",
  },
  links: {
    id: "footer.links",
    defaultMessage: "Categories",
  },
  tnc: {
    id: "footer.tnc",
    defaultMessage: "Terms & Condition",
  },
  credit: {
    id: "footer.credit",
    defaultMessage: " © 2021 VuyIt Enterprise All Right Reserved",
  },
};

const categories = {
  header: {
    id: "categories.header",
    defaultMessage: "Categories",
  },
};

export const categoriesMessage = defineMessages(categories);

const product = {
  header: {
    id: "product.header",
    defaultMessage: "Product Detail",
  },
  color: {
    id: "product.color",
    defaultMessage: "COLOR",
  },
  size: {
    id: "product.size",
    defaultMessage: "SIZE",
  },
  quantity: {
    id: "product.quantity",
    defaultMessage: "QUANTITY",
  },
  shoppingNow: {
    id: "product.shoppingNow",
    defaultMessage: "SHOPPING NOW",
  },
  likeHeader: {
    id: "product.likeHeader",
    defaultMessage: "You Might also Like",
  },
};

export const productMessage = defineMessages(product);

const products = {
  header: {
    id: "products.header",
    defaultMessage: "product list",
  },
  brand: {
    id: "products.brand",
    defaultMessage: "Brand",
  },
  priceRange: {
    id: "products.priceRange",
    defaultMessage: "Price Range",
  },
};

export const productsMessage = defineMessages(products);


export const footerMessage = defineMessages(footer);

const login = {
  signinMessage: {
    id: "login.signin",
    defaultMessage: "Sign in with",
  },
  or: {
    id: "login.or",
    defaultMessage: "Or",
  },
  fullName: { id: "login.name", defaultMessage: "Full name" },
  mobile: {
    id: "login.mobile",
    defaultMessage: "Mobile Number",
  },
  password: {
    id: "login.password",
    defaultMessage: "Password",
  },
  register: {
    id: "login.register",
    defaultMessage: "Create your account",
  },
  terms: {
    id: "login.tnc",
    defaultMessage:
      "By signing up you are agreeing to our Terms, Data Policy and Cookies Policy",
  },
};

export const loginMessage = defineMessages(login);


const action = {
  buyNow: { id: "action.buyNow", defaultMessage: "Buy Now" },
  remove: {
    id: "action.remove",
    defaultMessage: "Remove {item}",
  },
  addToCart: {
    id: "action.addToCart",
    defaultMessage: "Add to Cart",
  },
  reorder: {
    id: "action.reorder",
    defaultMessage: "Reorder",
  },
  invoice: {
    id: "action.invoice",
    defaultMessage: "Get Bill",
  },
  boughtOn: {
    id: "action.bougth",
    defaultMessage: "Bought on {date}",
  },
  discount: {
    id: "action.discount",
    defaultMessage: "You saved {price}",
  },
  next: { id: "action.next", defaultMessage: "Next" },
  pay: { id: "action.pay", defaultMessage: "Pay" },
  cancel: { id: "action.cancel", defaultMessage: "Cancel" },
};

export const actionMessage = defineMessages(action);

const checkout = {
  cartDetail: { id: "checkout.cartDetail", defaultMessage: "Shopping Cart" },
  shippingDetail: {
    id: "checkout.shippingDetail",
    defaultMessage: "Shipping Detail",
  },
  paymentDetail: { id: "checkout.paymentDetail", defaultMessage: "Payments" },
  summaryTitle: { id: "checkout.summaryTitle", defaultMessage: "Summary" },
  subtotal: { id: "checkout.summarySubTotal", defaultMessage: "Subtotal" },
  shipping: {
    id: "checkout.summaryShipping",
    defaultMessage: "Shipping",
  },
  taxes: {
    id: "checkout.summaryTaxes",
    defaultMessage: "Taxes",
  },
  total: {
    id: "checkout.summaryTotal",
    defaultMessage: "Total",
  },
};

export const checkoutMessage = defineMessages(checkout);

const shipping = {
  firstName: { id: "shipping.firstName", defaultMessage: "First Name" },
  lastName: { id: "shipping.lastName", defaultMessage: "Last Name" },
  address: {
    id: "shipping.address",
    defaultMessage: "Address",
  },
  address2: {
    id: "shipping.address2",
    defaultMessage: "Address 2/ Landmark",
  },
  country: {
    id: "shipping.country",
    defaultMessage: "Country",
  },
  city: {
    id: "shipping.city",
    defaultMessage: "City",
  },
  zipcode: {
    id: "shipping.zipcode",
    defaultMessage: "Zip/Postal Code",
  },
  mobile: {
    id: "shipping.mobile",
    defaultMessage: "Phone Number",
  },
  freeShipping: {
    id: "shipping.freeShipping",
    defaultMessage: "Free Shipping",
  },
  freeShippingTime: {
    id: "shipping.freeShippingTime",
    defaultMessage: "Between 2-5 working days",
  },
  nextDayShipping: {
    id: "shipping.nextDayShipping",
    defaultMessage: "Next Day Delivery {price}",
  },
  nextDayShippingTime: {
    id: "shipping.nextDayShippingTime",
    defaultMessage: "24 hour from checkout",
  },
  free: { id: "shipping.free", defaultMessage: "FREE" },
  submit: {
    id: "shipping.submit",
    defaultMessage: "Add Address",
  },
};

export const shippingMessage = defineMessages(shipping);

const payments = {
  cardNumber: {
    id: "payment.cardNumber",
    defaultMessage: "Card Number",
  },
  expiry: {
    id: "payment.expiry",
    defaultMessage: "MM/YY",
  },
  cvv: {
    id: "payment.cvv",
    defaultMessage: "CVV",
  },
  submit: {
    id: "payment.submit",
    defaultMessage: "Add Payment",
  },
};

export const paymentMessage = defineMessages(payments);
