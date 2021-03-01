export default function user(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return { name: "Piyush" };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
}
