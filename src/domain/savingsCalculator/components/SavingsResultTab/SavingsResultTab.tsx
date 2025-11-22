import CalculationResult from 'domain/savingsCalculator/components/calculationResult/CalculationResult';
import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { Border, colors, ListHeader, ListRow, Spacing } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

interface SavingsResultTabProps {
  filteredProducts: SavingsProduct[];
  selectedProduct: SavingsProduct | null;
  savingsGoalState: SavingsGoalState;
}

export default function SavingsResultTab({
  filteredProducts,
  selectedProduct,
  savingsGoalState,
}: SavingsResultTabProps) {
  return (
    <>
      <CalculationResult selectedProduct={selectedProduct} savingsGoalState={savingsGoalState} />
      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

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
          onClick={() => {}}
        />
      ))}

      <Spacing size={40} />
    </>
  );
}
