import CalculationResult from 'domain/savingsCalculator/components/calculationResult/CalculationResult';
import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { useEffect } from 'react';
import SectionPadding from 'shared/components/sectionPadding/SectionPadding';
import { Assets, Border, colors, ListHeader, ListRow } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

interface SavingsResultTabProps {
  topRateProducts: SavingsProduct[];
  selectedProduct: SavingsProduct | null;
  savingsGoalState: SavingsGoalState;
  handleSelectProduct: (productId: string) => void;
  selectedProductId: string | null;
}

export default function SavingsResultTab({
  topRateProducts,
  selectedProduct,
  savingsGoalState,
  handleSelectProduct,
  selectedProductId,
}: SavingsResultTabProps) {
  return (
    <SectionPadding bottom={40}>
      <CalculationResult selectedProduct={selectedProduct} savingsGoalState={savingsGoalState} />

      <Border height={16} />

      <SectionPadding top={8} bottom={12}>
        <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      </SectionPadding>

      {topRateProducts.map(product => (
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
      ))}
    </SectionPadding>
  );
}
