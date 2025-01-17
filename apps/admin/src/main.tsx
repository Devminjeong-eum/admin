import '#/styles/global.css'
import '#/styles/normalize.css'

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from 'react-router'

import { router } from "#/routers"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
