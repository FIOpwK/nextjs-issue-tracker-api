import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages/home'

describe('Rendering content for the /home route', () => {
    beforeAll(() => {
        render(<Home url="/home"/>)
    })

    test('page renders deploy links', () => {
        
        expect('Home').toHaveTextContent
      })

      test('page renders deploy text', () => {
          expect('API Issue Tracker').toBeInTheDocument()

      })
})