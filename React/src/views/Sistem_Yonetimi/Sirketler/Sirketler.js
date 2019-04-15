import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Sirketler extends Component{

  constructor(){

    super()
    this.state = {
      data:[],
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

    fetch(`http://localhost:8080/beynsirket/findall`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data : json
        })})
      .catch(error => console.log('parsing failder',error))

  }

  render(){
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }

    return(
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-building"></i> Şirketler
          </div>
          <div className="card-body">
            <Row>
              <h2>Şirketlerin Listesi</h2>
              <ul id="authors"></ul>
            </Row>
            <Row>
              <div className="loader">
                <div className="icon"></div>
              </div>
            </Row>
            <Row>
              <BootstrapTable data={this.state.data}>
                <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='tanim'>Tanım</TableHeaderColumn>
                <TableHeaderColumn dataField='adres'>Adres</TableHeaderColumn>
                <TableHeaderColumn dataField='cepTelefonu'>Cep Telefonu</TableHeaderColumn>
                <TableHeaderColumn dataField='eposta'>E-posta</TableHeaderColumn>

              </BootstrapTable>
            </Row>
          </div>
        </div>
      </div>


    );
  }
}
export default Sirketler;
