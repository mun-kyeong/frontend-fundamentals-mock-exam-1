import { SavingsGoalState } from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm.type';
import { createSavingsResultItems } from 'domain/savingsCalculator/utils/calculateSavingsResultItems';
import { colors, ListRow } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

interface CalculationResultProps {
  selectedProduct: SavingsProduct | null;
  savingsGoalState: SavingsGoalState;
}
export default function CalculationResult({ selectedProduct, savingsGoalState }: CalculationResultProps) {
  if (!selectedProduct) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />;
  }

  if (savingsGoalState.monthlyDeposit === null || savingsGoalState.savingsTerm === null) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="납입 금액과 기간을 입력해주세요." />} />;
  }

  const savingResultItems = createSavingsResultItems({ selectedProduct, savingsGoalState });

  return (
    <>
      {savingResultItems.map(item => (
        <ListRow
          key={item.valueKey}
          contents={
            <ListRow.Texts
              type="2RowTypeA"
              top={item.label}
              topProps={{ color: colors.grey600 }}
              bottom={item.bottom}
              bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
            />
          }
        />
      ))}
    </>
  );
}
