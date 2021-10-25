import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap'

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div Class="container">
            <ul>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Body</td>

                        </tr>
                    </thead>
                    {
                        posts.map((post) =>

                            <tbody>
                                <tr>

                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>

                                </tr>
                            </tbody>
                        )
                        // posts.map(post => (

                        // <tr key={post.id}>{post.title}{post.body}</tr>

                        // ))
                    }

                </Table>
            </ul>
        </div>
    )
}

export default DataFetching;
