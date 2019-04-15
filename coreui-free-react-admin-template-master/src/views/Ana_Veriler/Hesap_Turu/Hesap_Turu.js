import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Row, Col } from 'reactstrap';
import {Redirect} from 'react-router-dom';

class Hesap_Turu extends Component {

  constructor(){
    super();
    this.state = {
      data: [],
      redirect: false
    };
  };

  componentDidMount(){
    this.fetchData();
  }

  componentWillMount() {
    if (sessionStorage.getItem("id")) {
    }
    else {
      this.setState({ redirect: true });
    }
  }

  fetchData(){
    //fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    fetch('http://localhost:8080/beynhesapturu/findall')
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
            <i className="fa fa-car"></i>  Hesap Türü
          </div>
          <div className="card-body">
            <Row>
              <h2>Hesap Türü</h2>
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
                <TableHeaderColumn dataField='beynhesapgrubu_id' >Hesap Grubu Id</TableHeaderColumn>
                <TableHeaderColumn dataField='tanim'>Tanım</TableHeaderColumn>
                <TableHeaderColumn dataField='carpan' >Çarpan</TableHeaderColumn>
                <TableHeaderColumn dataField='ekspertakdirivarmi' >Eksper Takdiri Var Mı</TableHeaderColumn>
                <TableHeaderColumn dataField='cruser'>Create User</TableHeaderColumn>
                <TableHeaderColumn dataField='crdate'>Create Date</TableHeaderColumn>
                <TableHeaderColumn dataField='upduser'>Update User</TableHeaderColumn>
                <TableHeaderColumn dataField='upddate'>Update Date</TableHeaderColumn>
                <TableHeaderColumn dataField='deleteflag'>Delete Flag</TableHeaderColumn>
                <TableHeaderColumn dataField='isactive'>İsactive</TableHeaderColumn>

              </BootstrapTable>
            </Row>

          </div>
        </div>
      </div>

    );
  }
}
export default Hesap_Turu;
