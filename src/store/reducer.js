import { ADD_CART } from "./contants";
const initState = {
  cartList: [],
};

function reducer(state, action) {
  //   switch (action.type) {
  //     case ADD_CART:
  //       return {
  //         ...state,
  //         cartList: [...state.cartList, action.payload],
  //       };

  //     default:
  //       throw new Error(`Invalid action `);
  //   }

  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };

    default:
      throw new Error(`Invalid action ${action}`);
  }
}

export { initState };
export default reducer;
