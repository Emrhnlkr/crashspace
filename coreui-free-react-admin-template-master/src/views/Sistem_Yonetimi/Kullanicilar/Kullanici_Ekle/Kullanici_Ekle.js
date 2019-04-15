import React, { Component } from 'react';
import { FormGroup, Form, Button, Card, CardBody, CardFooter, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ControlLabel, FormControl, HelpBlock, Checkbox } from 'react-bootstrap';

class Kullanici_Duzenle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      eksper: []
    };
  };
  componentDidMount() {
    this.fetchEksperler();
  }
  fetchEksperler() {
    let sirketId = sessionStorage.getItem('sirketId');
    fetch(`http://localhost:8080/beyneksper/findbydeleteflag/0/${sirketId}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          eksper: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  postData() {

    fetch('http://localhost:8080/beynusers/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        eposta: this.state.eposta,
        sirketid: sessionStorage.getItem('sirketId'),
        eksperid:this.state.eksperid,
        uyelikTuru: 3,
        cruser: sessionStorage.getItem('id'),
        crdate: Date.now(),
        upduser: sessionStorage.getItem('id'),
        upddate: Date.now(),
        deleteFlag: 0,
        isActive: 0
      })
    })
    window.location = '#/Sistem_Yonetimi/Kullanicilar/Kullanici_Listesi';
    window.location.reload();
  }
  handleClick(e) {
    e.preventDefault();
    this.setState
      ({
        username: this.refs.username.value,
        password: this.refs.password.value,
        eposta: this.refs.eposta.value,
        eksperid: this.refs.beynEksperIdRef.value
      });
  }
  render() {
    let eksperler = this.state.eksper;
    return (
      <Form horizontal>
      <FormGroup controlId="formHorizontalEksperler">
        <Col componentClass={ControlLabel} sm={2}>
          Eksperler:
            </Col>
        <Col md={10}>
          <select className="form-control" ref="beynEksperIdRef"
            onChange={this.handleClick.bind(this)}>
            <option selected disabled>-Eksper Seçiniz-</option>
            {eksperler.map(eksper => <option
              value={eksper.id}>{eksper.firstName} {eksper.lastName}</option>)}
          </select>
        </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalKullaniciAdi">

          <Col componentClass={ControlLabel} sm={2}>
            Kullanıcı Adı:
            </Col>
          <Col sm={10}>
            <input ref="username" className="form-control" onChange={this.handleClick.bind(this)} type="Username" placeholder="Kullanıcı Adınız" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Şifre:
            </Col>
          <Col sm={10}>
            <input type="password" className="form-control" onChange={this.handleClick.bind(this)} ref="password" placeholder="Şifreniz" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email:
            </Col>
          <Col sm={10}>
            <input type="Email" ref="eposta" onChange={this.handleClick.bind(this)} className="form-control" defaultValue={this.state.data.eposta} placeholder="Emailiniz" />
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

