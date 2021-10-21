import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <ul>
                <table>

                <tr>
                        <td>ID</td>
                       <td>Title</td>
                       <td>Body</td>

                    </tr>
                {
                    posts.map((post)=>
                    <tr>
                        <td>{post.id}</td>
                       <td>{post.title}</td>
                       <td>{post.body}</td>

                    </tr>
                    )
                    // posts.map(post => (
                        
                    // <tr key={post.id}>{post.title}{post.body}</tr>

                    // ))
                }
                </table>
            </ul>
        </div>
    )
}

export default DataFetching;
