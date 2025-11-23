import { useCallback, useState } from 'react';

export default function useSelectedProduct() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleSelectProduct = useCallback(
    (productId: string) => {
      if (selectedProductId === productId) {
        setSelectedProductId(null);
        return;
      }
      setSelectedProductId(productId);
    },
    [selectedProductId]
  );

  return { selectedProductId, handleSelectProduct };
}
