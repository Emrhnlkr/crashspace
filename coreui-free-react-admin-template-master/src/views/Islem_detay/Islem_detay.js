import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Row, Col} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Islem_detay extends Component {
  constructor(props){
    super(props);
    this.state = {
      idd:'',
      data: '',
      redirect: false
    };
  };

  componentDidMount(){
    this.fetchData();
    this.setState({
      idd: localStorage.getItem('idd')
    })
  }

  componentWillMount() {
    localStorage.getItem('idd') && this.setState({
      idd: localStorage.getItem('idd')
    })

    if (sessionStorage.getItem("id")) {
    }
    else {
      this.setState({ redirect: true });
    }
  }

  fetchData(){
    //fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    fetch(`http://localhost:8080/beynhasartespit/findbyid?id=${this.state.idd}`)
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
            <Row>
              <Col md={10}>
                <i className="icon-book-open"></i> İşlem Detayı
              </Col>
              <Col md={2}>
                <a href=""><button type="submit" className="btn-primary"><i className="fa fa-undo"></i> Listeye Geri Dön</button></a>
              </Col>
            </Row>
          </div>
          <div className="card-body">
            <Row>
              <h2>İşlem Detayı</h2>
            </Row>
            <Row>
              <h4>Dosya Bilgisi</h4>
              <table class="table table-striped">
                <tbody>
                <tr>
                  <td>Dosya Numarası:</td>
                  <td>{this.state.data.dosyaNumarasi}</td>
                </tr>
                <tr>
                  <td>Dosya Yılı:</td>
                  <td>{this.state.data.dosyaYili}</td>
                </tr>
                <tr>
                  <td>Tramer No:</td>
                  <td>{this.state.data.tramerNo}</td>
                </tr>
                <tr>
                  <td>Eklenme Tarihi:</td>
                  <td>{this.state.data.crDate}</td>
                </tr>
                <tr>
                  <td>Güncellenme Tarihi:</td>
                  <td>{this.state.data.updDate}</td>
                </tr>
                </tbody>
              </table>
              <h4>Hasar Bilgisi</h4>
              <table className="table table-striped">
                <tbody>
                <tr>
                  <td>Hasar Tarihi:</td>
                  <td>{this.state.data.hasarTarihi}</td>
                </tr>
                <tr>
                  <td>Hasar Yerii:</td>
                  <td>{this.state.data.hasarYeri}</td>
                </tr>
                <tr>
                  <td>Hasar Nedeni:</td>
                  <td>{this.state.data.hasarNedeni}</td>
                </tr>
                <tr>
                  <td>Hasar Kusur Tespiti:</td>
                  <td>{this.state.data.hasarKusurTespiti}</td>
                </tr>
                <tr>
                  <td>Hasar Kusur Şekli:</td>
                  <td>{this.state.data.hasarKusurSekli}</td>
                </tr>
                <tr>
                  <td>İzahat:</td>
                  <td>{this.state.data.izahat}</td>
                </tr>
                </tbody>
              </table>
              <h4>Hasar Alan Araç Bilgisi</h4>
              <table className="table table-striped">
                <tbody>
                <tr>
                  <td>Plaka:</td>
                  <td>{this.state.data.hasarPlaka}</td>
                </tr>
                <tr>
                  <td>Motor No:</td>
                  <td>{this.state.data.hasarMotorNo}</td>
                </tr>
                <tr>
                  <td>Sasi No:</td>
                  <td>{this.state.data.hasarSasiNo}</td>
                </tr>
                <tr>
                  <td>Değeri:</td>
                  <td>{this.state.data.aracDegeri}</td>
                </tr>
                <tr>
                  <td>Araç Tipi:</td>
                  <td>{this.state.data.hasarAracTipi}</td>
                </tr>
                <tr>
                  <td>Markası:</td>
                  <td>{this.state.data.beynAracMarkaHasar}</td>
                </tr>
                <tr>
                  <td>Rengi:</td>
                  <td>{this.state.data.beynAracRengiHasar}</td>
                </tr>
                <tr>
                  <td>Kilometresi:</td>
                  <td>{this.state.data.hasarKilometre}</td>
                </tr>
                <tr>
                  <td>Araç Sahibi:</td>
                  <td>{this.state.data.hassarAracSahibi}</td>
                </tr>
                <tr>
                  <td>Araç Sahibi Kimlik No:</td>
                  <td>{this.state.data.hasarKimlikNo}</td>
                </tr>
                </tbody>
              </table>
              <h4>Tespit Edilen Araç Bilgisi</h4>
              <table className="table table-striped">
                <tbody>
                <tr>
                  <td>Plaka:</td>
                  <td>{this.state.data.tespitPlaka}</td>
                </tr>
                <tr>
                  <td>Motor No:</td>
                  <td>{this.state.data.tespitMotorNo}</td>
                </tr>
                <tr>
                  <td>Sasi No:</td>
                  <td>{this.state.data.tespitSasiNo}</td>
                </tr>
                <tr>
                  <td>Araç Tipi:</td>
                  <td>{this.state.data.tespitAracTipi}</td>
                </tr>
                <tr>
                  <td>Markası:</td>
                  <td>{this.state.data.beynAracMarkaTespit}</td>
                </tr>
                <tr>
                  <td>Rengi:</td>
                  <td>{this.state.data.beynAracRengiTespit}</td>
                </tr>
                <tr>
                  <td>Kilometresi:</td>
                  <td>{this.state.data.tespitKilometre}</td>
                </tr>
                <tr>
                  <td>Araç Sahibi:</td>
                  <td>{this.state.data.tespitAracSahibi}</td>
                </tr>
                <tr>
                  <td>Araç Sahibi Kinlik No:</td>
                  <td>{this.state.data.tespitKimlikNo}</td>
                </tr>
                </tbody>
              </table>


            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Islem_detay;
