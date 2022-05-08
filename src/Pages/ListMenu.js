
import { React, useState, useEffect } from 'react'
import Axios from "axios";
import { Card,Button } from 'react-bootstrap';
function List(props) {
    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        const { data } = await Axios.get(
            "http://localhost:7000/posts"
        );
        const posts = data;
        setPosts(posts);
        console.log(posts);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const filteredData = posts.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.Name.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className='row' style={{margin:'0 auto'}}>
            {filteredData.map((post, key) => (
                <Card key={key} style={{ width: '22rem' , marginLeft:'4rem', color:'black', marginTop:'3rem'}}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{post.Name}</Card.Title>
                        <Card.Text>
                            {post.Price}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default List