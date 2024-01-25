import Welcome from "./react/Welcome";
import ListGroup from "./react/components/ListGroup";
const stadt = ['London', 'Berlin','Paris'];
const namen = ['Stefan', 'Christian','Paul'];
const alter = ['10', '20','42'];


function App() {
    return (
        <>


{/* 
            <Welcome nane="Chris" age={23} />
            <Welcome nane="Stefan" age={42} />
 */
 }            
 <ListGroup id={"Stadt"} liste={stadt} />
 <br />
 <ListGroup id={"Name"} liste={namen} />
 <br />
 <ListGroup id={"Alter"} liste={alter} />
             <hr />
             <Welcome text="zur React" />
             <Welcome name="Chris" age={23} />
             <Welcome name="Stefan" age={42} text={"Das ist Text"} />
<br />
             <Welcome name="Name.active.ValueText" age={"Alter.active.ValueText"} text={"Stadt.active.ValueText"} />
        </>
    )
}

export default App;
