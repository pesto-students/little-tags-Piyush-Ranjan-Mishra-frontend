export default function user(state = {name:'Piyush'}, action) {
    switch (action.type) {
      case 'GET_USER':
        return state
      default:
        return state
    }
  }