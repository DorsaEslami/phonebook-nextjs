import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import type { RootState } from '../../store/config/configureStore'
import store from '../../store/config/configureStore';
import { ConfigProvider } from 'antd'
import { antdConfigToken } from '../../utils/antdConfigToken'
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
}

export function renderWithProviders(ui: React.ReactElement, { preloadedState = {}, ...renderOptions }: ExtendedRenderOptions = {}) {

  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <ConfigProvider theme={{ token: antdConfigToken }}>
        <Provider store={store}>{children}</Provider>
      </ConfigProvider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}