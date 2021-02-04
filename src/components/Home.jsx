import React, { Component } from 'react'
import { Row, Col, Form, Button } from "react-bootstrap"
import JobsTable from './JobsTable';



export default class Home extends Component {
    state = {
        location: "",
        position: "",
        render: false
    }
    
    handleLocation=(event)=>{
        this.setState({ location: event.target.value });
    }
    handlePosition=(event)=>{
        this.setState({ position: event.target.value });
    }
     handleSubmit= (event)=>{
        event.preventDefault();
        this.setState({ render: !this.state.render })
    }
    

    render() {
        return (
            <>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Row style={{ paddingTop: 20, paddingBottom: 20 }}>
                            <Col>
                                <Form.Control placeholder="Location" onChange={this.handleLocation} />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Position"onChange={this.handlePosition} />
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div>
                    {this.state.position ? <JobsTable location={this.state.location} position={this.state.position} /> 
                    : <h1 style={{color:"white"}}>Please Enter Position or Location</h1>}
                </div>
            </>
        )
    }
}
