import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore, type PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import type { RootState } from '../../store/config/configureStore';
import { ConfigProvider, notification } from 'antd';
import { antdConfigToken } from '../../utils/antdConfigToken';
import { NotificationAPIContext } from '@/contexts/notificationAPI';
import rootReducer from '@/store/config/rootReducer';


interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
}

export function renderWithProviders(ui: React.ReactElement, { preloadedState = {}, ...renderOptions }: ExtendedRenderOptions = {}) {
  const store = configureStore({ reducer: rootReducer, preloadedState });

  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    const [api, contextHolder] = notification.useNotification();
    return (

      <Provider store={store}>
        <ConfigProvider theme={{ token: antdConfigToken }}>
          <NotificationAPIContext.Provider value={api}>
            {contextHolder}
            {children}
          </NotificationAPIContext.Provider>
        </ConfigProvider>
      </Provider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}