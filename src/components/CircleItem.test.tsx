import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CircleItem from './CircleItem'
import '@testing-library/jest-dom'

describe('CircleItem', () => {
  it('円形に指定したテキストが表示される', () => {
    render(<CircleItem mainText="50" subText="%" header="残り" />)
    expect(screen.getByText(/50/)).toBeInTheDocument()
    expect(screen.getByText(/残り/)).toBeInTheDocument()
  })

  it('childrenが機能している', () => {
    render(
      <CircleItem mainText="main" subText="sub" header="header">
        <div>内側</div>
      </CircleItem>,
    )
    expect(screen.getByText(/内側/)).toBeInTheDocument()
  })

  it('フリップ可能な場合、クリック後にバックコンテンツが表示される', async () => {
    const handleFlip = vi.fn()
    const { rerender } = render(
      <CircleItem
        mainText=""
        subText=""
        header="テスト"
        flippable={true}
        flipped={false}
        onFlip={handleFlip}
        frontContent={<div>フロント</div>}
        backContent={<div>バック</div>}
      />,
    )

    expect(screen.getByText('フロント')).toBeInTheDocument()
    expect(screen.queryByText('バック')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('フロント'))
    expect(handleFlip).toHaveBeenCalled()

    rerender(
      <CircleItem
        mainText=""
        subText=""
        header="テスト"
        flippable={true}
        flipped={true}
        onFlip={handleFlip}
        frontContent={<div>フロント</div>}
        backContent={<div>バック</div>}
      />,
    )

    await waitFor(() => {
      const backElement = screen.getByText('バック')
      expect(backElement).toBeInTheDocument()
      expect(backElement).toBeVisible()
    })
  })
})
