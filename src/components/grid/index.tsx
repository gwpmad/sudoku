import React, { Children, FC, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { INDEX } from 'typings'
import { createGrid } from 'reducers'

import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>() // hook that returns the dispatch function
  const create = useCallback(() => dispatch(createGrid()), [dispatch]) // memoized function - only re-call if dispatch changes which it won't
  useEffect(() => {
    create()
  }, [create]) // only run once, unless create changes, which it never should
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  rowIndex={rowIndex as INDEX}
                  colIndex={colIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
