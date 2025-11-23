import ProductsTabSection from 'domain/savingsCalculator/components/productsTabSection/ProductsTabSection';
import SavingsGoalForm from 'domain/savingsCalculator/components/savingsGoalForm/SavingsGoalForm';
import { Border, NavigationBar } from 'tosslib';

export function SavingsCalculatorPage() {
  return (
    <>
      <NavigationBar title="적금 계산기" />
      <SavingsGoalForm />
      <Border height={16} />
      <ProductsTabSection />
    </>
  );
}
