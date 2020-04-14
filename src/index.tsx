import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Card, Content, Grid, Title } from 'components'
import { configureStore, unregister } from 'core'
import { GlobalStyles, theme } from 'styles'

const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content data-cy="content__data-attribute-for-easier-finding-and-testing">
        <Title data-cy="title__data-attribute-for-easier-finding-and-testing">
          Sudoku
        </Title>
        <Card data-cy="card__data-attribute-for-easier-finding-and-testing">
          <Grid />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
