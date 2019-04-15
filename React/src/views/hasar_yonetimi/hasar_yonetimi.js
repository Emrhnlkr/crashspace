import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Row, Col} from 'reactstrap';
import {connect} from 'react-redux';

class Hasar_yonetimi extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeTab: '1',
      idd: '',
      data: '',
      hesaplar: [],
      eksper: [],
      turler: [],
      markaData: [],
      renkler: [],
      aracKullanimSekli: [],
      hesapTuru:[],
      hesapGrubu:[]
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    localStorage.setItem('idd',"2");
  }

  componentDidMount(){
    this.fetchData();
  }

  componentWillMount() {
    localStorage.getItem('data') && this.setState({
      contacts: JSON.parse(localStorage.getItem('data'))
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('data', JSON.stringify(nextState.data));
    localStorage.setItem('dataDate', Date.now());
    localStorage.setItem('idd',"");

    //localStorage.setItem('idd',"6");
    // localStorage.setItem('kimlik',this.state.contactname);
  }

  fetchData(){
    //fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    fetch('http://localhost:8080/beynhasartespit/findall')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data : json
        })})
      .catch(error => console.log('parsing failder',error))
  }

  render() {
    function buttonFormatter(cell, row,){
      return <Row>
        <a href="#/hasar_yonetimi/hasar_ayrinti/hasar_ayrinti.js"><button onClick={this.handleClick} class="btn btn-success">İşlemi Güncelle</button></a>
        {/*<a href="#/hesaplama"><button type="submit" class="btn btn-primary">Ayrıntı</button></a>*/}
      </Row>
    }
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-book-open"></i> İşlemler
          </div>
          <div className="card-body">
            <Row>
              <Col md={10}>
                <h2>İşlem Listesi</h2>
              </Col>
              <Col md={2}>
                <a href="#/hasar_yonetimi/yeni_hasar/yeni_hasar.js"><button type="submit" className="btn btn-danger"><i className="fa fa-plus-circle"></i> Yeni Hasar</button></a>
              </Col>
            </Row>
            <Row>
              <BootstrapTable data={this.state.data} options={options}>
                <TableHeaderColumn dataField='id' hidden isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='dosyaNumarasi'>Dosya Numarası</TableHeaderColumn>
                <TableHeaderColumn dataField='dosyaYili'>Dosya Yılı</TableHeaderColumn>
                <TableHeaderColumn dataField='tespitPlaka'>Araç Plakası</TableHeaderColumn>
                <TableHeaderColumn dataField='hasarYeri'>Olay Yeri</TableHeaderColumn>
                <TableHeaderColumn dataField='hasarTarihi'>Olay Tarihi</TableHeaderColumn>
                <TableHeaderColumn dataField='button' dataFormat={buttonFormatter}>Özellikler</TableHeaderColumn>
              </BootstrapTable>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
const options = {
  onRowClick: function(row) {
    localStorage.setItem('idd',`${row.id}`);
  },
  onRowDoubleClick: function(row) {
    alert(`You double click row id: ${row.id}`);
  }
};
export default Hasar_yonetimi;
