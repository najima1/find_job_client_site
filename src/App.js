import { RouterProvider } from "react-router-dom";
import router from "./Component/routes/Router";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import ContextProvider from "./Component/authContext/ContextProvider";
import { Toaster } from "react-hot-toast";



// Create a client
const queryClient = new QueryClient()

function App() {

  return (

    <ContextProvider>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>

    </ContextProvider>




  );
}

export default App;
