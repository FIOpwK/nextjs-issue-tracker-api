import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'

it('renders landingpage unchanged', () => {
  const tree = renderer.create(<Index />).toJSON()
  expect(tree).toMatchSnapshot()
})
