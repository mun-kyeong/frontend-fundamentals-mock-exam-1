export interface SavingsGoalState {
  targetAmount: number | null;
  monthlyDeposit: number | null;
  savingsTerm: number | null;
}

export type SavingsGoalStateKeys = keyof SavingsGoalState;
