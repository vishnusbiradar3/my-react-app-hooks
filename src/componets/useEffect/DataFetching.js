import React, { useEffect, useState } from 'react'
import axiox from 'axios';

export default function DataFetching() {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);
    const [id,setId]=useState(1);
    useEffect(() => {
        axiox.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    useEffect(() => {
        axiox.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[id])
    return (
        <div>

            <div className='allPost leftSide'>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> User ID </th>
                        <th> Title </th>
                        <th> Body  </th>
                    </tr>
                </thead>
                <tbody>
                    { posts.map((post) =>(
                            <tr key={ post.id}>
                                <td>{post.id}</td>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                    ))
                    }

                </tbody>
            </table>
            </div>
            <div className='serach rightSide'>

            <input 
            type="text"
            value={(id)}
            onChange={ e=>(setId(e.target.value))}

            />

             <tr key={ post.id}>
                                <td>{post.id}</td>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
            </div>
  
        </div>
    )
}