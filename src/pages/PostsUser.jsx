import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardHeader, Col } from "reactstrap";

export const PostsUser =() =>{
  const id = useParams();
      const [posts, setPosts] = useState([]);
      const [postsEdit, setPostsEdit] = useState([]);
   async useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      await  .then(res=> setPosts(res.data))
        .catch((err) => {
            alert('Error This User Post')
          })
          console.log('1ci');
        }, [])
        console.log('2ci', posts);
        // postsEdit = posts.find(q=> q.id == id)
        // setPostsEdit(postsEdit)
        return(<>
          <Col>
          {posts.map((k)=>{
            <Card>
            <CardHeader>post ID : {k.id}</CardHeader>
            <CardBody>axcvbnmj,./kjhgfd</CardBody>
          </Card>
          })}
          </Col>
        </>)
    
}