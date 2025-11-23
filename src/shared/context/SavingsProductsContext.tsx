import useFetchSavingsProducts from 'domain/savingsCalculator/hooks/useFetchSavingsProducts';
import { createContext, useContext, useState } from 'react';
import { SavingsProduct } from 'domain/savingsCalculator/types/savingsProduct';

interface SavingsProductsContextValue {
  savingsProducts: SavingsProduct[];
}

const SavingsProductsContext = createContext<SavingsProductsContextValue | null>(null);

interface SavingsProductsProviderProps {
  children: React.ReactNode;
}

export function SavingsProductsProvider({ children }: SavingsProductsProviderProps) {
  const [savingsProducts, setSavingsProducts] = useState<SavingsProduct[]>([]);

  useFetchSavingsProducts({ setSavingsProducts });

  return <SavingsProductsContext.Provider value={{ savingsProducts }}>{children}</SavingsProductsContext.Provider>;
}

export function useSavingsProductsContext() {
  const context = useContext(SavingsProductsContext);
  if (!context) {
    throw new Error('SavingsProductsContext must be used within a SavingsProductsProvider');
  }
  return context;
}
