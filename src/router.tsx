import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout.tsx'
import { Airdrop } from './pages/Airdrop.tsx'
import { Earn } from './pages/Earn.tsx'
import { Exchange } from './pages/Exchange.tsx'
import { Friends } from './pages/Friends.tsx'
import { Mine } from './pages/Mine.tsx'
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
                path: '/mine',
                element: <Mine />,
            },
            {
                path: '/friends',
                element: <Friends />,
            },
            {
                path: '/earn',
                element: <Earn />,
            },
            {
                path: '/airdrop',
                element: <Airdrop />,
            },
        ],
    },
])
