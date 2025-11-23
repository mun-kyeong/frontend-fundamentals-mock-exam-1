import CalculationResult from 'domain/savingsCalculator/components/calculationResult/CalculationResult';
import EmptySavingsProducts from 'domain/savingsCalculator/components/emptySavingsProducts/EmptySavingsProducts';
import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import SavingsProductItem from 'domain/savingsCalculator/components/savingsProductItem/SavingsProductItem';
import SectionPadding from 'shared/components/sectionPadding/SectionPadding';
import { Border, ListHeader } from 'tosslib';
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

      {topRateProducts.length === 0 ? (
        <EmptySavingsProducts />
      ) : (
        topRateProducts.map(product => (
          <SavingsProductItem
            key={product.id}
            product={product}
            handleSelectProduct={handleSelectProduct}
            selectedProductId={selectedProductId}
          />
        ))
      )}
    </SectionPadding>
  );
}
