// // Reduxフローを実現
// import React, { FC, useReducer, createContext} from 'react';
// import AppScreen from './AppScreen';

// const initialState = { count: 0 };

// interface StateProps {
//   count: number;
// }

// interface ActionProps {
//   type: string;
// }

// const reducer = (state: StateProps, action: ActionProps) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// };

// interface StoreContextProps {
//   state: StateProps;
//   dispatch: ({ type }: ActionProps) => void;
// }

// export const StoreContext = createContext({} as StoreContextProps);

// const App: FC = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <StoreContext.Provider value={{ state, dispatch }}>
//       <AppScreen />
//     </StoreContext.Provider>
//   );
// };

// export default App;