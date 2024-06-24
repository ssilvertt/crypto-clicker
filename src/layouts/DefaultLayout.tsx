import { useEffect } from 'react';
import { useExpand, WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserPage } from '../pages/BrowserPage.tsx';
import { MobileLayout } from '../components/MobileLayout';
import { useInitUser } from '../hooks/useInitUser';

export function DefaultLayout() {
    const [isExpanded, expand] = useExpand();
    useInitUser();
    
    useEffect(() => {
        if (!isExpanded) {
            expand();
        }
    }, [expand, isExpanded]);
    
    return (
      <WebAppProvider>
          <MobileView>
              <MobileLayout />
          </MobileView>
          <BrowserView>
              <div className="bg-black">
                  <div className="min-h-screen bg flex flex-col font-helvetica ">
                      <div className="flex-grow">
                          <BrowserPage />
                      </div>
                  </div>
              </div>
          </BrowserView>
      </WebAppProvider>
    );
}