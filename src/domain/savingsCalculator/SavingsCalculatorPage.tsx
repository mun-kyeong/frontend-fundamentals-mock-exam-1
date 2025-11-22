import ProductsTabSection from 'domain/savingsCalculator/components/productsTabSection/ProductsTabSection';
import SavingsGoalForm from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm';
import useFetchSavingsProducts from 'domain/savingsCalculator/hooks/useFetchSavingsProducts';
import { useState } from 'react';
import { Border, NavigationBar, Spacing } from 'tosslib';
import { SavingsProduct } from 'types/savingsProduct';

export function SavingsCalculatorPage() {
  const [savingsProductList, setSavingsProductList] = useState<SavingsProduct[]>([]);

  useFetchSavingsProducts({ setSavingsProductList });

  return (
    <>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />
      <SavingsGoalForm />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <ProductsTabSection savingsProductList={savingsProductList} />
    </>
  );
}
