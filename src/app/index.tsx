import { StoreProvider } from "./providers";
import { AppRouter } from "./router";

function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}

export default App;
