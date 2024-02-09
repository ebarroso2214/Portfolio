import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Navigation(){
    return(
    <>
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href='#home'>Esteban Barroso</Navbar.Brand>
            </Container>
        </Navbar>
    </>
    )
}

export default Navigation