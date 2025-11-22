import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { filterSavingsProducts } from 'domain/savingsCalculator/utils/filterSavingsProducts';
import { Assets, colors, ListRow } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

interface SavingsProductsTabProps {
  savingsGoalState: SavingsGoalState;
  savingsProductList: SavingsProduct[];
  handleSelectProduct: (productId: string) => void;
  selectSavingsProductId: string | null;
}

export default function SavingsProductsTab({
  savingsGoalState,
  savingsProductList,
  handleSelectProduct,
  selectSavingsProductId,
}: SavingsProductsTabProps) {
  const filteredProducts = filterSavingsProducts({
    products: savingsProductList,
    goal: savingsGoalState,
  });

  return (
    <>
      {filteredProducts.map(product => (
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
          right={selectSavingsProductId === product.id && <Assets.Icon name="icon-check-circle-green" />}
          onClick={() => handleSelectProduct(product.id)}
        />
      ))}
    </>
  );
}
