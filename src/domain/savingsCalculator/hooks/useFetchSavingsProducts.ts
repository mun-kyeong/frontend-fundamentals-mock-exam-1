import { savingsProducts } from 'api/savingsProducts';
import { useEffect } from 'react';
import { isHttpError } from 'tosslib';
import { SavingsProduct } from 'domain/savingsCalculator/types/savingsProduct';

interface UseFetchSavingsProductsProps {
  setSavingsProducts: React.Dispatch<React.SetStateAction<SavingsProduct[]>>;
}

export default function useFetchSavingsProducts({ setSavingsProducts }: UseFetchSavingsProductsProps) {
  useEffect(() => {
    async function fetchSavingsProducts() {
      try {
        const products = await savingsProducts();
        setSavingsProducts(products);
      } catch (error) {
        if (isHttpError(error)) {
          console.error('HTTP Error:', error.status, error.message);
        } else {
          console.error('Unexpected Error:', error);
        }
      }
    }

    fetchSavingsProducts();
  }, [setSavingsProducts]);
}
