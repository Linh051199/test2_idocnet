import { ADD_CART } from "./contants";
const initState = {
  cartList: [],
};

const reducer = (state, action) => {
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
    // case ADD_JOB:
    //     return {
    //         ...state,
    //         jobs: [...state.jobs, action.payload]
    //     }
    // case DELETE_JOB:
    //     const newJobs = [...state.jobs]
    //     newJobs.splice(state.payload, 1)
    //     return {
    //         ...state,
    //         jobs: newJobs
    //     }
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

export { initState };
export default reducer;
