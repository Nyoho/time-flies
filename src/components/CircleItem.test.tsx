import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CircleItem from './CircleItem'
import '@testing-library/jest-dom'

describe('CircleItem', () => {
  it('円形に指定したテキストが表示される', () => {
    render(<CircleItem mainText="50" subText="%" header="残り" />)
    expect(screen.getByText(/50/)).toBeInTheDocument()
    expect(screen.getByText(/残り/)).toBeInTheDocument()
  })
})
