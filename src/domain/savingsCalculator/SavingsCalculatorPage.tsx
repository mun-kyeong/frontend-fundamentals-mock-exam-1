import ProductsTabSection from 'domain/savingsCalculator/components/productsTabSection/ProductsTabSection';
import SavingsGoalForm from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm';
import useSavingsGoalForm from 'domain/savingsCalculator/components/savingsGoalForm/useSavingsGoalForm';
import useFetchSavingsProducts from 'domain/savingsCalculator/hooks/useFetchSavingsProducts';
import { useState } from 'react';
import { Border, NavigationBar, Spacing } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

export function SavingsCalculatorPage() {
  const [savingsProductList, setSavingsProductList] = useState<SavingsProduct[]>([]);

  const { savingsGoalState, updateSavingsGoal } = useSavingsGoalForm();

  useFetchSavingsProducts({ setSavingsProductList });

  return (
    <>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />
      <SavingsGoalForm updateSavingsGoal={updateSavingsGoal} savingsGoalState={savingsGoalState} />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <ProductsTabSection savingsGoalState={savingsGoalState} savingsProductList={savingsProductList} />
    </>
  );
}
