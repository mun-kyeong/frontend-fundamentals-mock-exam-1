import { memo } from 'react';
import { Assets, colors, ListRow } from 'tosslib';
import { SavingsProduct } from 'domain/savingsCalculator/types/savingsProduct';

interface SavingsProductItemProps {
  product: SavingsProduct;
  handleSelectProduct: (productId: string) => void;
  selectedProductId: string | null;
}

function SavingsProductItem({ product, handleSelectProduct, selectedProductId }: SavingsProductItemProps) {
  return (
    <ListRow
      key={product.id}
      contents={
        <ListRow.Texts
          type="3RowTypeA"
          top={product.name}
          topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
          middle={`연 이자율: ${product.annualRate}%`}
          middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
          bottom={`${product.minMonthlyAmount.toLocaleString()}원 ~ ${product.maxMonthlyAmount.toLocaleString()}원 | ${product.availableTerms}개월`}
          bottomProps={{ fontSize: 13, color: colors.grey600 }}
        />
      }
      right={selectedProductId === product.id && <Assets.Icon name="icon-check-circle-green" />}
      onClick={() => handleSelectProduct(product.id)}
    />
  );
}

export default memo(SavingsProductItem);
