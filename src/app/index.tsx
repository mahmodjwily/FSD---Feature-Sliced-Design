import { Header } from "@/widgets/header/ui";

import { AppRouter } from "./router";
import { RouterProvider, StoreProvider } from "./providers";

function App() {
  return (
    <StoreProvider>
      <RouterProvider>
        <Header />
        <AppRouter />
      </RouterProvider>
    </StoreProvider>
  );
}

export default App;
