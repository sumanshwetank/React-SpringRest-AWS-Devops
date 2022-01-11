import React from "react";
import { useEffect } from "react";
import { Container, Button } from 'reactstrap';

const Home = () => {
    useEffect(()=>{
        document.title="Home"
    },[])
    return (
        <div className="bg-light p-1 rounded-lg text-center">
            <h1 className="display-6" style={{fontWeight:"bold",color:"brown"}}>Learning React JS with SpringBoot as Backend</h1>
            <p className="lead">This is developed by Shwetank Suman to learn Spring Boot Rest Web Service having UI as React JS</p>
            <hr className="my-3" />
            <p>It has got CRUD operation for Course Management</p>
            <Container>
                <Button color="primary" outline> Start Learning</Button>
            </Container>
        </div>
    )
};

export default Home
