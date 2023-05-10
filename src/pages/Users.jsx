import axios from "axios";
import { useState, useEffect } from "react"
import { Layout } from "../components/Layout";
import { Button, Col, Row, Table } from "reactstrap";
import { PostsUser } from "./PostsUser";
import { Link } from "react-router-dom";

export const Users = () => {
    const [loading, setLoading] = useState(true)


    const [datas, setDatas] = useState(['1', '3']);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setDatas(res.data), setLoading(false))
            .catch(err => { alert("Error loading Data") })
    }, [])
    const DeleteDataThis = (thisid) => {
        setDatas(datas.filter(res => res.id !== thisid))
    }

    return (<>
        <Table>
            {loading ? <h1>LOADING....</h1> : <>
                <thead>
                    <Row>
                    <Col></Col>
                        <Col><th>ID</th></Col>
                        <Col><th>NAME</th></Col>
                        <Col><th>ADDRESS</th></Col>
                        <Col><th>DELETE</th></Col>
                        <Col><th>ABOUT</th></Col>
                        <Col></Col>
                    </Row>
                </thead>
                <tbody>
                    {datas.map(resu =>
                        <Row>
                            <Col></Col>
                            <Col><td>{resu.id}</td></Col>
                            <Col><td>{resu.name}</td></Col>
                            <Col><td>{resu.address?.street}</td></Col>
                            <Col><Button onClick={() => DeleteDataThis(resu.id)}>Delete</Button></Col>
                            <Col><td><Link to={`/users/${resu.id}/posts`} className="btn btn-primary" onClick={()=>{}} >More...</Link></td></Col>
                            <Col></Col>
                            <PostsUser ids={resu.id}/>
                        </Row>

                    )}
                </tbody>
            </>}
        </Table>
    </>)



}