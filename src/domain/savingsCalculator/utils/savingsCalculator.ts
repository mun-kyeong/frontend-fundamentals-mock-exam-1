interface CalculateExpectedProfitProps {
  monthlyDeposit: number;
  term: number;
  annualRate: number;
}

export function calculateExpectedProfit({ monthlyDeposit, term, annualRate }: CalculateExpectedProfitProps) {
  const rateFactor = 1 + annualRate * 0.5;
  return Math.floor(monthlyDeposit * term * rateFactor);
}

interface CalculateGoalDifferenceProps {
  targetAmount: number;
  expectedProfit: number;
}

export function calculateGoalDifference({ targetAmount, expectedProfit }: CalculateGoalDifferenceProps) {
  return targetAmount - expectedProfit;
}
interface CalculateRecommendedMonthlyDepositProps {
  targetAmount: number;
  term: number;
  annualRate: number;
}
export function calculateRecommendedMonthlyDeposit({
  targetAmount,
  term,
  annualRate,
}: CalculateRecommendedMonthlyDepositProps) {
  const rateFactor = 1 + annualRate * 0.5;
  return Math.round(targetAmount / (term * rateFactor) / 1000) * 1000;
}
