import ProductsTabSection from 'domain/savingsCalculator/components/productsTabSection/ProductsTabSection';
import SavingsGoalForm from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm';
import { Border, NavigationBar, Spacing } from 'tosslib';

export function SavingsCalculatorPage() {
  return (
    <>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />
      <SavingsGoalForm />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <ProductsTabSection />
    </>
  );
}
