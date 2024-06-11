import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout.tsx';
import { DailyQ } from './pages/DailyQ.tsx';
import { Earn } from './pages/Earn.tsx';
import { Friends } from './pages/Friends.tsx';
import { Farming } from './pages/Farming.tsx';
import { Mine } from './pages/Mine.tsx';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Farming />,
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
                path: '/mine',
                element: <Mine />,
            },
            {
                path: '/daily',
                element: <DailyQ />,
            },
        ],
    },
]);
