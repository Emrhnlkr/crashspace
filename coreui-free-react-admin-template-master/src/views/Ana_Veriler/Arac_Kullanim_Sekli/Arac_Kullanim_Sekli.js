import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Row, Col } from 'reactstrap';
import {Redirect} from 'react-router-dom';

class Arac_Kullanim_Sekli extends Component {

  constructor(){
    super();
    this.state = {
      data: [],
      redirect: false
    };
  };
  componentWillMount() {
    if (sessionStorage.getItem("id")) {
    }
    else {
      this.setState({ redirect: true });
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    //fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    fetch('http://localhost:8080/beynarackullanimsekli/findall')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data : json
        })})
      .catch(error => console.log('parsing failder',error))
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-car"></i>  Araç Kullanım Şekli
          </div>
          <div className="card-body">
            <Row>
              <h2>Araç Kullanım Şekli</h2>
              <ul id="authors"></ul>
            </Row>
            <Row>
              <div className="loader">
                <div className="icon"></div>
              </div>
            </Row>
            <Row>
              <BootstrapTable data={this.state.data}>
                <TableHeaderColumn dataField='id' isKey>Id</TableHeaderColumn>
                <TableHeaderColumn dataField='tanim'>Tanım</TableHeaderColumn>
                <TableHeaderColumn dataField='crUser'>Create User</TableHeaderColumn>
                <TableHeaderColumn dataField='crDate'>Create Date</TableHeaderColumn>
                <TableHeaderColumn dataField='updUser'>Update User</TableHeaderColumn>
                <TableHeaderColumn dataField='updDate'>Update Date</TableHeaderColumn>
                <TableHeaderColumn dataField='deleteFlag'>Delete Flag</TableHeaderColumn>
                <TableHeaderColumn dataField='isActive'>İsactive</TableHeaderColumn>

              </BootstrapTable>
            </Row>

          </div>
        </div>
      </div>

    );
  }
}
export default Arac_Kullanim_Sekli;
