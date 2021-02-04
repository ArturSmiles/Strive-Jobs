import React, { Component } from 'react'
import {Table,Image} from "react-bootstrap"


export default class JobsTable extends Component {
    state={
        loading:false,
        jobs:[]
    }

    
    async componentDidUpdate() {
        const url=`https://jobs.github.com/positions.json?description=${this.props.position}&location=${this.props.location}`
        const response = await fetch(url)
        const data =await response.json()
        console.log(data)
        this.setState({...this.state.jobs,jobs:data})
    }
    render() {
        return (
            <>
                {this.state.loading ? <div>Loading Jobs</div> : <Table striped bordered hover variant="dark">  <thead>
    <tr>
      <th>#</th>
      <th>Type</th>
      <th>Company</th>
      <th>Location</th>
      <th>Details Page</th>
    </tr>
  </thead>
  <tbody>
      {this.state.jobs.map((jobs,index)=>(
        <tr>
              <td>{index+1}</td>
              <td>{jobs.type}</td>
              <td>{jobs.company}<div><a href={jobs.company_url}><Image src={jobs.company_logo} rounded></Image></a></div></td>
              <td>{jobs.location}</td>
              <td><a href={jobs.url}>Click Here</a></td>
        </tr>
      ))}</tbody></Table>}
            </>
        )
    }
}


