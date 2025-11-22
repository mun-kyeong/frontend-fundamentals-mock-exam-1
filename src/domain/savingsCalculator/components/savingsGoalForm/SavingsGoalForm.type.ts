export type SavingsGoalState = {
  targetAmount: string | null;
  monthlyDeposit: string | null;
  savingsTerm: string | null;
};

export type SavingsGoalStateKeys = keyof SavingsGoalState;
