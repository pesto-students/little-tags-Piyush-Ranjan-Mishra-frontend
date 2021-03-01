const initialState = {
  locale: "en",
  languageSupport: {
    en: "🇬🇧 English",
    hi: "🇮🇳 हिंदी",
  },
};

export default function lang(state = initialState, action) {
  switch (action.type) {
    case "setLang":
      return { ...state, locale: action.value };
    default:
      return state;
  }
}
