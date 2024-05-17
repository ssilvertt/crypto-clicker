import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout.tsx'
import { Airdrop } from './pages/Airdrop.tsx'
import { Exchange } from './pages/Exchange.tsx'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Exchange />,
            },
           
            {
                path: '/airdrop',
                element: <Airdrop />,
            },
        ],
    },
])
