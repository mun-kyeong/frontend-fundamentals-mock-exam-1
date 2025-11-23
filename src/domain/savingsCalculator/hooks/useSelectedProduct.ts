import { useState } from 'react';

export default function useSelectedProduct() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleSelectProduct = (productId: string) => {
    if (selectedProductId === productId) {
      setSelectedProductId(null);
      return;
    }
    setSelectedProductId(productId);
  };

  return { selectedProductId, handleSelectProduct };
}
