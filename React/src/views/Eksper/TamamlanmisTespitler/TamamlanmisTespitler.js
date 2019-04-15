import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class TamamlanmisTespitler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idd: '',
      data: [],
      redirect: false
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    localStorage.setItem('idd', "2");
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillMount() {
    localStorage.getItem('data') && this.setState({
      contacts: JSON.parse(localStorage.getItem('data'))
    })

    if (sessionStorage.getItem("id")) {
    }
    else {
      this.setState({ redirect: true });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('data', JSON.stringify(nextState.data));
    localStorage.setItem('dataDate', Date.now());
    localStorage.setItem('idd', "");
  }

  fetchData() {
    fetch('http://localhost:8080/beynhasartespit/findtamamlanmistespitler')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  render() {
    function buttonFormatter(cell, row, ) {
      return <Row>
        <a href="#/islemdetay"><button type="submit" onClick={this.handleClick} class="btn btn-success">Hasar</button></a>
        <a href="#/hesaplama"><button type="submit" class="btn btn-primary">Ayrıntı</button></a>
      </Row>
    }
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-book-open"></i> Tamamlanmış Tespitler
          </div>
          <div className="card-body">
            <Row>
              <Col md={10}>
                <h2>Tamamlanmış Tespitlerin Listesi</h2>
              </Col>
              <Col md={2}>

              </Col>
            </Row>
            <Row>
              <BootstrapTable data={this.state.data} options={options}>
                <TableHeaderColumn dataField='id' hidden isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='raporNumarasi'>Rapor Numarası</TableHeaderColumn>
                <TableHeaderColumn dataField='raporYili'>Rapor Yılı</TableHeaderColumn>
                <TableHeaderColumn dataField='dosyaNumarasi'>Dosya Numarası</TableHeaderColumn>
                <TableHeaderColumn dataField='dosyaYili'>Dosya Yılı</TableHeaderColumn>
                <TableHeaderColumn dataField='tespitPlaka'>Araç Plakası</TableHeaderColumn>
                <TableHeaderColumn dataField='hasarYeri'>Olay Yeri</TableHeaderColumn>
                <TableHeaderColumn dataField='hasarTarihi'>Olay Tarihi</TableHeaderColumn>
                {/*<TableHeaderColumn dataField='button' dataFormat={buttonFormatter}>Özellikler</TableHeaderColumn>*/}
              </BootstrapTable>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
const options = {
  onRowClick: function (row) {
    localStorage.setItem('idd', `${row.id}`);
  },
  onRowDoubleClick: function (row) {
    alert(`You double click row id: ${row.id}`);
  }
};
export default TamamlanmisTespitler;
