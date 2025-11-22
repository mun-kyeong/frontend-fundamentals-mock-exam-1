import { SavingsCalculatorPage } from 'domain/savingsCalculator/SavingsCalculatorPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { SavingsCoalProvider } from 'shared/context/SavingsGoalContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SavingsCalculatorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
]);

export function Routes() {
  return (
    <SavingsCoalProvider>
      <RouterProvider router={router} />
    </SavingsCoalProvider>
  );
}
