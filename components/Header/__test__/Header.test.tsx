import Header from '../'
import { render, screen } from '@testing-library/react'

test('<Header />', () => {
  render(<Header />)
  expect(screen.getAllByText('This is a header'))
})
