import { create } from "zustand";
import { Product } from "../utils";
import { devtools } from "zustand/middleware";

type CartItem = Product & {
  quantity: number;
};

type CartState = {
  items: CartItem[];

  // actions (reducers)
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  updateCount: (id: string, quantity: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addItem: (item: CartItem) =>
    set((state) => {
      const existing = state.items.find(
        (stateItem) => stateItem.id === item.id
      );

      if (existing) {
        return {
          items: state.items.map((stateItem) =>
            stateItem.id === item.id
              ? { ...stateItem, quantity: stateItem.quantity + item.quantity }
              : stateItem
          ),
        };
      }

      return { items: [...state.items, item] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  updateCount: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      ),
    })),

  increment: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decrement: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    })),

  clear: () => set({ items: [] }),
}));
