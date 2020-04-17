import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { Card, Content, Grid, NewButton, Numbers, Title } from 'components'
import { configureStore, register } from 'core'
import { GlobalStyles, theme } from 'styles'

const { persistor, store } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content data-cy="content__data-attribute-for-easier-finding-and-testing">
          <Title data-cy="title__data-attribute-for-easier-finding-and-testing">
            Sudoku
          </Title>
          <Card data-cy="card__data-attribute-for-easier-finding-and-testing">
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// note - in the course we opted into the service worker by changing unregister() to register()
register()
