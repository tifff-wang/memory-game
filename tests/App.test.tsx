import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../client/components/App'

describe('<App />', () => {
  test('renders a board', () => {
    render(<App />)
    const board = screen.getByTestId('Board')
    expect(board).toHaveTextContent('🌰🌽🌾🍍🍁🍍🌿🌽🌿🍀🌰🍇🌾🍇🍁🍀')
  })
})
