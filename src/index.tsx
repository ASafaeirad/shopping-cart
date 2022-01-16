import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
const queryClient = new QueryClient();

ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Suspense fallback={<>Loading!</>}>
        <App />
      </Suspense>
    </QueryClientProvider>
  </Router>,
  document.getElementById("root")
);
