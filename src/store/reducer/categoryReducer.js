const initialCategory = {
  list: {
    all: "nav.all",
    men: "nav.men",
    women: "nav.women",
    kids: "nav.kids",
    homeliving: "nav.home-living",
  },
  categories: [
    {
      img:
        "https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Breakfast",
      author: "jill111",
      cols: 2,
      featured: true,
    },
    {
      img:
        "https://images.unsplash.com/photo-1516442719524-a603408c90cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
      title: "Tasty burger",
      author: "director90",
    },
    {
      img:
        "https://images.unsplash.com/photo-1502323936172-532616ad0c5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Camera",
      author: "Danson67",
    },
    {
      img:
        "https://images.unsplash.com/photo-1602573991155-21f0143bb45c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=657&q=80",
      title: "Morning",
      author: "fancycrave1",
      featured: true,
    },
    {
      img:
        "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Hats",
      author: "Hans",
    },
    {
      img:
        "https://images.unsplash.com/photo-1563826693565-15b453e9554a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Honey",
      author: "fancycravel",
    },
    {
      img:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80",
      title: "Vegetables",
      author: "jill111",
      cols: 2,
    },
    {
      img:
        "https://images.unsplash.com/photo-1432110847799-39dfbae1299f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      title: "Water plant",
      author: "BkrmadtyaKarki",
    },
    {
      img:
        "https://images.unsplash.com/photo-1432110847799-39dfbae1299f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      title: "Mushrooms",
      author: "PublicDomainPictures",
    },
    {
      img:
        "https://images.unsplash.com/photo-1432110847799-39dfbae1299f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      title: "Olive oil",
      author: "congerdesign",
    },
  ],
};

export default function category(state = initialCategory, action) {
  switch (action.type) {
    case "GET_CATEGORY_LIST":
      return {
        ...state,
        list: {
          all: "nav.all",
          men: "nav.men",
          women: "nav.women",
          kids: "nav.kids",
          homeliving: "nav.home-living",
        },
      };
    default:
      return state;
  }
}
