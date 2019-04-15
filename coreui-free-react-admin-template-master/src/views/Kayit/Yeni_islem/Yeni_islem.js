import React, { Component } from 'react';
import {FormGroup, Form , Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row ,} from 'reactstrap';
import { ButtonToolbar, DropdownButton, MenuItem, ControlLabel, FormControl ,  HelpBlock,Checkbox, option} from 'react-bootstrap';

class Yeni_islem extends Component {

  constructor(props){
    super(props);
    this.state = {
      idd:'',
      data : [],
      sirketler : []
    };
  };
  postData(){
      fetch(`http://localhost:8090/beynhasartespit/add`,{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dosyaNumarasi: this.state.dosyaNumarasi,
        dosyaYili: this.state.dosyaYili,
        hasarTarihi: this.state.hasarTarihi,
        tespitPlaka: this.state.tespitPlaka,
        hasarYeri: this.state.hasarYeri,
        eynEksperId :this.state.eynEksperId,
        beynSirketId : this.state.beynSirketId
            // username: this.username,
    })
  })
  console.log(this.state.eynEksperId);
  }


  handleClick(e){
    e.preventDefault();
      localStorage.setItem('idd',"2");
    this.setState

  ({

    dosyaNumarasi:this.refs.dno.value,
    dosyaYili:this.refs.dyil.value,
    hasarTarihi:this.refs.ht.value,
    tespitPlaka:this.refs.p.value,
    hasarYeri:this.refs.hy.value,
    eynEksperId : this.refs.ey.value,
    beynSirketId : this.refs.sI.value
});
console.log(this.state.beynSirketId);
}
  componentDidMount(){
    this.fetchData();
    this.fetchDataSirket();
    this.setState({
      idd: localStorage.getItem('idd')
    })
  }

  componentWillMount() {
    localStorage.getItem('idd') && this.setState({
      idd: localStorage.getItem('idd')
    })
  }
  fetchDataSirket(){
    //fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    fetch(`http://localhost:8090/beynsirket/findall`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          sirketler : json
        })})
      .catch(error => console.log('parsing failder',error))
  }



  fetchData(){
    //fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    fetch(`http://localhost:8090/beyneksper/findall`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data : json
        })})
      .catch(error => console.log('parsing failder',error))
  }




  render() {
     let veriler = this.state.data;
     let sirketler = this.state.sirketler;

    return (

      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <Row>


            </Row>
          </div>
          <div className="card-body">
            <Row>

            </Row>
            <Row>

              <h4> İşlem  Girişi</h4>
              <table className="table table-striped">
                <tbody>
                <tr>
                  <td>Dosya Numarası:</td>
                  <td><input className="form-control" id="dosyaNumarasi"onChange={this.handleClick.bind(this)} ref="dno" /></td>
                </tr>
                <tr>
                  <td>Dosya Yılı:</td>
                  <td><input className="form-control" id="dosyaYili" type="text" onChange={this.handleClick.bind(this)} ref="dyil"/></td>
                </tr>
                <tr>
                  <td>Hasar Tarihi:</td>
                  <td><input className="form-control" id="hasarTarihi" type="date"  onChange={this.handleClick.bind(this)} ref="ht"/></td>
                </tr>
                <tr>
                  <td>Başvuran Araç Plaka:</td>
                  <td><input className="form-control" id="tespitPlaka" type="text"  onChange={this.handleClick.bind(this)} ref="p" /></td>
                </tr>
                <tr>
                <td>Hasar Yeri:</td>
                <td><input className="form-control" id="hasarYeri" type="textarea" onChange={this.handleClick.bind(this)} ref="hy"/></td>
              </tr>
              <tr>
                <td>Eksper Seçiniz:</td>
              <select className="form-control" ref="ey" onChange={this.handleClick.bind(this)} >
               {veriler.map(veri=><option value={veri.id}>{veri.firstName} {veri.lastName}</option>)}
               </select>
              </tr>
              <tr>
                <td>Eksper Seçiniz:</td>
              <select className="form-control" ref="sI" onChange={this.handleClick.bind(this)} >
               {sirketler.map(veri=><option value={veri.id}>{veri.tanim}</option>)}
               </select>
              </tr>





                </tbody>

                <Col md={9}></Col>
                <Col md={2}><button  className="btn btn-lg btn-basic"  onClick={this.postData.bind(this)} color="success" block><i className="fa fa-save fa-2x"></i> Hasar Kaydı Oluştur</button></Col>






              </table>






            </Row>
          </div>
        </div>
      </div>
    );
  }
}






export default Yeni_islem;
