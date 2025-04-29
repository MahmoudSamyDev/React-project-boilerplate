import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes";
import { store } from "./redux/store";

function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={appRouter} />
            </Provider>
        </React.StrictMode>
    );
}

export default App;
