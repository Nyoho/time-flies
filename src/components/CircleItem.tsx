import React from 'react'

interface CircleItemProps {
  mainText: string
  subText: string
  header: string
}

const CircleItem = ({ mainText, subText, header }: CircleItemProps) => {
  return <>
    {mainText} {header}
    {subText}
  </>
}

export default CircleItem
