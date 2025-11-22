import { savingsProducts } from 'api/savingsProducts';
import { useEffect } from 'react';
import { isHttpError } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

interface UseFetchSavingsProductsProps {
  setSavingsProductList: React.Dispatch<React.SetStateAction<SavingsProduct[]>>;
}

export default function useFetchSavingsProducts({ setSavingsProductList }: UseFetchSavingsProductsProps) {
  useEffect(() => {
    async function fetchSavingsProducts() {
      try {
        const products = await savingsProducts();
        setSavingsProductList(products);
      } catch (error) {
        if (isHttpError(error)) {
          console.error('HTTP Error:', error.status, error.message);
        } else {
          console.error('Unexpected Error:', error);
        }
      }
    }

    fetchSavingsProducts();
  }, [setSavingsProductList]);
}
