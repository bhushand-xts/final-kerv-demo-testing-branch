// FILE: src/test/setup.js

import '@testing-library/jest-dom'

// Prevent mocks from leaking between tests
beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.restoreAllMocks()
})