import React from 'react';

interface TweetItemProps {
    text: string;
}

const TweetItem = ({ text }: TweetItemProps) => (
    <div className="tweet">
        <p>
            <a
                href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${window.location.hostname}&hashtags=TimeFlies&text=${encodeURIComponent(text)}`}
            >
                <i className="fa fa-twitter fa-2x"></i>
            </a>
        </p>
    </div>
);

export default TweetItem;