import { SavingsGoalState } from 'domain/savingsCalculator/types/savingsGoalForm.type';
import useSavingsGoalForm, { UpdateSavingsGoalProps } from 'domain/savingsCalculator/hooks/useSavingsGoalForm';
import { createContext, useContext } from 'react';

interface SavingsGoalStateContextValue {
  savingsGoalState: SavingsGoalState;
  updateSavingsGoal: ({ value, field }: UpdateSavingsGoalProps) => void;
}

const SavingsGoalStateContext = createContext<SavingsGoalStateContextValue | null>(null);

interface SavingsGoalProviderProps {
  children: React.ReactNode;
}

export function SavingsGoalProvider({ children }: SavingsGoalProviderProps) {
  const { savingsGoalState, updateSavingsGoal } = useSavingsGoalForm();

  return (
    <SavingsGoalStateContext.Provider value={{ savingsGoalState, updateSavingsGoal }}>
      {children}
    </SavingsGoalStateContext.Provider>
  );
}

export function useSavingsGoalsContext() {
  const context = useContext(SavingsGoalStateContext);
  if (!context) {
    throw new Error('useSavingsGoalsContext must be used within a SavingsGoalProvider');
  }
  return context;
}
