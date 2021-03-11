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

const categories = {
  header: {
    id: "categories.header",
    defaultMessage: "Categories",
  },
};

export const categoriesMessage = defineMessages(categories);
