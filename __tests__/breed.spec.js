import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import BreedSelect from '../src/components/BreedSelect.jsx';

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message';

  const dogs = {
    'akita': [],
    'dalmatian': []
  }

  render(<BreedSelect 
    breed={Object.keys[0]}
    dogs={dogs}
    key={Object.keys[0] + i}
  />)

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})