import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
const queryClient = new QueryClient();

ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Router>,
  document.getElementById("root")
);
                                                                      