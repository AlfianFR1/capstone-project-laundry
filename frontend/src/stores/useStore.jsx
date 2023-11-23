import { create } from 'zustand';

const initialState = {
    categories: [],
    products: [],
    selectedCategory: null,
    checkoutProducts: [],
    totalProductPrice: 0,
    totalProductQuantity: 0,
    subTotal: 0,
    total: 0,
};

export const useStore = create((set) => ({
    ...initialState,
    setSelectedCategory: (category) => set({ selectedCategory: category }),
    setProducts: (products) => set({ products }),
    clearCheckout: () => set(initialState),
    addToCheckout: (product) =>
        set((state) => ({
            checkoutProducts: [...state.checkoutProducts, product],
        })),
    removeFromCheckout: (product) =>
        set((state) => ({
            checkoutProducts: state.checkoutProducts.filter(
                (p) => p.id !== product.id
            ),
        })),
    setCategories: (categories) => set({ categories }),
    setTotalProductPrice: (price) => set({ totalProductPrice: price }),
    setTotalProductQuantity: (quantity) =>
        set({ totalProductQuantity: quantity }),
    setSubTotal: (subTotal) => set({ subTotal }),
    setTotal: (total) => set({ total }),
}));
