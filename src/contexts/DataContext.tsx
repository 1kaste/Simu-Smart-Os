import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Category, Order, StoreSettings, PRODUCTS_DATA, CATEGORIES_DATA, ORDERS_DATA, STORE_SETTINGS_DATA } from '../data/mock-data';

interface DataContextType {
  products: Product[];
  categories: Category[];
  orders: Order[];
  settings: StoreSettings;
  addProduct: (product: Omit<Product, 'id'>) => void;
  addProducts: (newProducts: Product[]) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateCategory: (category: Category) => void;
  deleteCategory: (categoryId: string) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  updateSettings: (newSettings: Partial<StoreSettings>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);
  const [categories, setCategories] = useState<Category[]>(CATEGORIES_DATA);
  const [orders, setOrders] = useState<Order[]>(ORDERS_DATA);
  const [settings, setSettings] = useState<StoreSettings>(STORE_SETTINGS_DATA);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: `prod${Date.now()}` };
    setProducts(prev => [...prev, newProduct]);
  };

  const addProducts = (newProducts: Product[]) => {
    setProducts(prev => [...newProducts, ...prev]);
  };
  
  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };
  
  const deleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  const addCategory = (category: Omit<Category, 'id'>) => {
    const newCategory = { ...category, id: `cat${Date.now()}` };
    setCategories(prev => [...prev, newCategory]);
  };

  const updateCategory = (updatedCategory: Category) => {
    setCategories(prev => prev.map(c => c.id === updatedCategory.id ? updatedCategory : c));
  };
  
  const deleteCategory = (categoryId: string) => {
    setCategories(prev => prev.filter(c => c.id !== categoryId));
  };

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  const updateSettings = (newSettings: Partial<StoreSettings>) => {
    setSettings(prev => ({...prev, ...newSettings }));
  };


  const value = {
    products,
    categories,
    orders,
    settings,
    addProduct,
    addProducts,
    updateProduct,
    deleteProduct,
    addCategory,
    updateCategory,
    deleteCategory,
    addOrder,
    updateOrderStatus,
    updateSettings,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
