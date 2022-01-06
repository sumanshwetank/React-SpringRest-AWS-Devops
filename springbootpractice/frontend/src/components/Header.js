import react from "react";
import { Card, CardBody } from "reactstrap";


function Header() {
    return (
        <div>
            <Card className="my-2" style={{backgroundColor:"lightblue"}}>
                <CardBody>
                    <h1 className="text-center my-3">Welcome to Course Management Aplication</h1>
                </CardBody>
            </Card>

        </div>
    )
}

export default Header