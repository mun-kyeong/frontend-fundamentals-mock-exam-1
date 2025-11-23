import EmptySavingsProducts from 'domain/savingsCalculator/components/emptySavingsProducts/EmptySavingsProducts';
import SavingsProductItem from 'domain/savingsCalculator/components/savingsProductItem/SavingsProductItem';
import { SavingsProduct } from 'types/savingsProduct';

interface SavingsProductsTabProps {
  filteredProducts: SavingsProduct[];
  handleSelectProduct: (productId: string) => void;
  selectedProductId: string | null;
}

export default function SavingsProductsTab({
  filteredProducts,
  handleSelectProduct,
  selectedProductId,
}: SavingsProductsTabProps) {
  if (filteredProducts.length === 0) {
    return <EmptySavingsProducts />;
  }

  return (
    <>
      {filteredProducts.map(product => (
        <SavingsProductItem
          key={product.id}
          product={product}
          handleSelectProduct={handleSelectProduct}
          selectedProductId={selectedProductId}
        />
      ))}
    </>
  );
}
