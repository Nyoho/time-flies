import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import { formatCountdown } from './time-flies'

describe('formatCountdown', () => {
  it('returns 間もなく when ms is 0', () => {
    expect(formatCountdown(0)).toBe('間もなく')
  })

  it('returns 間もなく when ms is negative', () => {
    expect(formatCountdown(-1)).toBe('間もなく')
  })

  it('shows only seconds for less than 1 minute', () => {
    render(formatCountdown(5000))
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('秒')).toBeInTheDocument()
  })

  it('uses Math.ceil for partial seconds (regression for 41b30f0)', () => {
    // 1500ms = 1.5 seconds, should ceil to 2 seconds
    render(formatCountdown(1500))
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('shows minutes and seconds', () => {
    // 90000ms = 90 seconds = 1 min 30 sec
    const { container } = render(formatCountdown(90000))
    expect(container.textContent).toContain('1')
    expect(container.textContent).toContain('分')
    expect(container.textContent).toContain('30')
    expect(container.textContent).toContain('秒')
  })

  it('shows hours, minutes and seconds', () => {
    // 3661000ms = 1 hour 1 min 1 sec
    const { container } = render(formatCountdown(3661000))
    expect(container.textContent).toContain('時間')
    expect(container.textContent).toContain('分')
    expect(container.textContent).toContain('秒')
  })

  it('shows days when ms exceeds 24 hours', () => {
    // 86400000ms = exactly 1 day
    const { container } = render(formatCountdown(86400000))
    expect(container.textContent).toContain('日')
  })

  it('does not show days for less than 1 day', () => {
    // 86399000ms = 23:59:59
    const { container } = render(formatCountdown(86399000))
    expect(container.textContent).not.toContain('日')
  })
})
