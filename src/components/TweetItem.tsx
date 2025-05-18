import React from 'react'
import { FaTwitter } from 'react-icons/fa'

interface TweetItemProps {
  text: string
}

const TweetItem = ({ text }: TweetItemProps) => (
  <div className="tweet">
    <p>
      <a
        href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${window.location.hostname}&hashtags=TimeFlies&text=${encodeURIComponent(text)}`}
      >
        <FaTwitter style={{fontSize: 'x-large'}}/>
      </a>
    </p>
  </div>
)

export default TweetItem
