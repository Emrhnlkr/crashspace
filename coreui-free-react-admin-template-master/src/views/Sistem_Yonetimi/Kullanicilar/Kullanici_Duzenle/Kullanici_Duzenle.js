import React, { Component } from 'react';
import {FormGroup, Form ,   Button, Card, CardBody, CardFooter, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {ControlLabel, FormControl ,  HelpBlock,Checkbox} from 'react-bootstrap';

class Kullanici_Duzenle extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    };
    this.fetchData=this.fetchData.bind(this);
  };  
  componentWillMount(){
    this.fetchData();
  }

  fetchData(){
    let id= sessionStorage.getItem('currentID');
    fetch(`http://localhost:8080/beynusers/findbyid?id=${id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data : json
        })})
      .catch(error => console.log('parsing failder',error))
  }

  postData(){
    let id = sessionStorage.getItem('currentID');
    fetch(`http://localhost:8080/beynusers/update/${id}`, {
    method: 'PUT',  
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username:this.state.username,
    password:this.state.password,
    eposta:this.state.eposta,
    sirketid: sessionStorage.getItem('sirketId'),
    cruser:sessionStorage.getItem('id'),
    crdate: sessionStorage.getItem('eklemeTarihi'),
    uyelikTuru: this.state.data.uyelikTuru,
    upduser:sessionStorage.getItem('id'),
    upddate: Date.now(),
    deleteFlag: 0,
    isActive: 0
  })
  })
}
handleClick(e){
  e.preventDefault();
  this.setState({
    username:this.refs.username.value,
    password:this.refs.password.value,
    eposta:this.refs.eposta.value
  })
}

  render () {
    return (
      <Form horizontal>
          <FormGroup controlId="formHorizontalKullaniciAdi">
            <Col componentClass={ControlLabel} sm={2}>
              Kullanıcı Adı:
            </Col>
            <Col sm={10}>
              <input ref="username" className="form-control" onChange={this.handleClick.bind(this)} type="Username" defaultValue={this.state.data.username} placeholder="Kullanıcı Adınız"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Şifre:
            </Col>
            <Col sm={10}>
              <input type="password" className="form-control" onChange={this.handleClick.bind(this)} ref="password" defaultValue={this.state.data.password} placeholder="Şifreniz" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email:
            </Col>
            <Col sm={10}>
              <input type="Email" ref="eposta" className="form-control" onChange={this.handleClick.bind(this)} defaultValue={this.state.data.eposta} placeholder="Emailiniz" />
            </Col>
          </FormGroup>   
          {/* <FormGroup controlId="formHorizontalTelefon">
            <Col componentClass={ControlLabel} sm={2}>
              Telefon:
            </Col>
            <Col sm={10}>
              <input type="Telefon" ref="telefon" className="form-control" defaultValue={this.state.data.telefon}  placeholder="Telefon" />
            </Col>
          </FormGroup>   */}
          <FormGroup>
            <Col smOffset={2} sm={10}>
          <button type="submit" onClick={this.postData.bind(this)} className="btn btn-dark"><i className="fa fa-save"></i> Kaydet</button>
            </Col>
          </FormGroup>
        </Form>);
        }
      }

export default Kullanici_Duzenle;

