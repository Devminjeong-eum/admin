import { createBrowserRouter } from "react-router"

import App from "../App.tsx"
import { DefaultRouterProvider } from "./default-provider"

export const router = createBrowserRouter(
    [
        {
            element: <DefaultRouterProvider />,
            children: [
                {
                    path: "/",
                    element: <App />
                }
            ],
            errorElement: (
                <>
                    <div>Test Error Page</div>
                </>
            )
        }
    ],
    {}
)
