import { GlobalPortal, GlobalStyles } from 'tosslib';
import { Routes } from './routes/Routes';

export function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalPortal.Provider>
        <Routes />
      </GlobalPortal.Provider>
    </>
  );
}
