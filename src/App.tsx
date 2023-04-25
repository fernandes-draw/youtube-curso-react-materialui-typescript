import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { MenuLAteral } from './shared/components';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLAteral>
            <AppRoutes />
          </MenuLAteral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
