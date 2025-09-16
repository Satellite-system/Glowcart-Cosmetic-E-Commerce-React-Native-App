import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../types';

type CartItem = Product & { qty: number };

type State = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD'; product: Product }
  | { type: 'REMOVE'; id: string }
  | { type: 'INCREMENT'; id: string }
  | { type: 'DECREMENT'; id: string }
  | { type: 'CLEAR' };

const initialState: State = { items: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const found = state.items.find(i => i.id === action.product.id);
      if (found) {
        return {
          ...state,
          items: state.items.map(i => i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i)
        };
      }
      return { ...state, items: [...state.items, { ...action.product, qty: 1 }] };
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'INCREMENT':
      return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i) };
    case 'DECREMENT':
      return { ...state, items: state.items.map(i => i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i) };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

const CartContext = createContext<any>(null);

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = (product: Product) => dispatch({ type: 'ADD', product });
  const remove = (id: string) => dispatch({ type: 'REMOVE', id });
  const increment = (id: string) => dispatch({ type: 'INCREMENT', id });
  const decrement = (id: string) => dispatch({ type: 'DECREMENT', id });
  const clear = () => dispatch({ type: 'CLEAR' });
  const total = state.items.reduce((s: number, i: any) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items: state.items, add, remove, increment, decrement, clear, total }}>
      {children}
    </CartContext.Provider>
  );
};
