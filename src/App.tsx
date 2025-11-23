import { GlobalPortal, GlobalStyles } from 'tosslib';
import { Routes } from './routes/Routes';
import { SavingsGoalProvider } from 'shared/context/SavingsGoalContext';
import { SavingsProductsProvider } from 'shared/context/SavingsProductsContext';
import ErrorBoundary from 'shared/components/errorBoundary/errorBoundary';

export function App() {
  return (
    <ErrorBoundary>
      <SavingsGoalProvider>
        <SavingsProductsProvider>
          <GlobalStyles />
          <GlobalPortal.Provider>
            <Routes />
          </GlobalPortal.Provider>
        </SavingsProductsProvider>
      </SavingsGoalProvider>
    </ErrorBoundary>
  );
}
