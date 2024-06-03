import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout.tsx';
import { Mine } from './pages/Mine.tsx';
import { Exchange } from './pages/Exchange.tsx';
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
        ],
    },
]);
