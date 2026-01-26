import type React from 'react'
import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

interface CircleItemProps {
  mainText?: string | number
  subText?: string | number
  header: string
  children?: React.ReactNode
  flippable?: boolean
  flipped?: boolean
  onFlip?: () => void
  frontContent?: React.ReactNode
  backContent?: React.ReactNode
}

const CircleItem = ({
  mainText,
  subText,
  header,
  children,
  flippable = false,
  flipped = false,
  onFlip,
  frontContent,
  backContent,
}: CircleItemProps) => {
  const frontRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLDivElement>(null)

  const defaultContent = (
    <div>
      <span className="main-part">{mainText}</span>
      {subText}
    </div>
  )

  return (
    <div className="col-lg-2 col-md-4 col-sm-6 col-12 text-center mb-3">
      <div className="service-item">
        {flippable ? (
          <div className="animate-switch-container">
            <button
              type="button"
              className="circle-toggle-button"
              onClick={onFlip}
              aria-label={`${header}を切り替える`}
            ></button>
            <div className="circle-box-container">
              <CSSTransition nodeRef={frontRef} in={!flipped} timeout={500} classNames="flip" unmountOnExit>
                <div ref={frontRef} className="circle-box">
                  <div className="cell">{frontContent || defaultContent}</div>
                </div>
              </CSSTransition>

              <CSSTransition nodeRef={backRef} in={flipped} timeout={500} classNames="flip" unmountOnExit>
                <div ref={backRef} className="circle-box">
                  <div className="cell">{backContent}</div>
                </div>
              </CSSTransition>
            </div>
          </div>
        ) : (
          <div className="circle-box-container">
            <div className="circle-box">
              <div className="cell">{defaultContent}</div>
            </div>
          </div>
        )}
        <h4>{header}</h4>
        {children}
      </div>
    </div>
  )
}

export default CircleItem
