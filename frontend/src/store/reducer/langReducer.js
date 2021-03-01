export default function lang(state = { locale: "en" }, action) {
  switch (action.type) {
    case "setLang":
      return { locale: action.value };
    default:
      return state;
  }
}
