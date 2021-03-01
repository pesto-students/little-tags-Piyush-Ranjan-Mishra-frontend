const initialCategory = {
  list: {
    all: "nav.all",
    men: "nav.men",
    women: "nav.women",
    kids: "nav.kids",
    homeliving: "nav.home-living",
  },
};

export default function category(state = initialCategory, action) {
  switch (action.type) {
    case "GET_CATEGORY_LIST":
      state.list = {
        all: "nav.all",
        men: "nav.men",
        women: "nav.women",
        kids: "nav.kids",
        homeliving: "nav.home-living",
      };
      return state;
    default:
      return state;
  }
}
