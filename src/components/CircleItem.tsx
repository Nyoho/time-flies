import React from 'react'

interface CircleItemProps {
  mainText: string
  subText: string
  header: string
  children?: React.ReactNode
}

const CircleItem = ({ mainText, subText, header, children }: CircleItemProps) => {

  return <div className="col-md-2 col-md-offset-1 col-sm-12 text-center">
    <div className="service-item">
      <div className="circle-box-container">
        <div className="circle-box">
          <div className="cell" onClick={() => ''}>
            {mainText}<br />
            {subText}
          </div>
        </div>
      </div>
      <h4>{header}</h4>
      {children}
    </div>
  </div>
}

export default CircleItem
