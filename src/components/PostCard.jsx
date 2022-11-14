import React from 'react';

export default function PostCard({ post }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ post.title }</h5>
                <p className="card-text">{ post.author.username }</p>
                <p className="card-text">{ post.content }</p>
                <a className='btn btn-success' href='/'>See More</a>
            </div>
        </div>
    )
}