import logo from './logo.svg';
import './App.css';
import { toast, ToastContainer, } from 'react-toastify';
import Header from './components/Header';
import Home from './components/Home';
import Course from './components/Course';
import Allcourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import UpdateCourse from './components/UpdateCourse';


function App() {

  const btnHandle = () => {
    toast.success("Done", { position: 'top-left' })
  };

  return (
    <div>
      <Router>
      <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}><Menus /></Col>
            <Col md={8}>
              <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/add-course" element = {<AddCourse/>} />
              <Route exact path="/view-courses" element = {<Allcourse/>} />
              <Route exact path="/update-courses/:id" element = {<UpdateCourse/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>

    </div>
  );
}

export default App;
