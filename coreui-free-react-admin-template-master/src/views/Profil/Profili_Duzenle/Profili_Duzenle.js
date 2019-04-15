import React, { Component } from 'react';
import {FormGroup, Form ,   Button, Card, CardBody, CardFooter, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {ControlLabel, FormControl ,  HelpBlock,Checkbox} from 'react-bootstrap';

class Profili_Duzenle extends Component {
  constructor(props){
    super(props);
    this.state = {
      idd : '',
      username :'',
      password : '',
      elektronikposta : '',
      data: []
    };
  };


  postData(){
    let id = sessionStorage.getItem('id');
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
    crdate: sessionStorage.getItem('eklemeTarihi'),
    upddate: Date.now(),
    deleteFlag: 0,
    isActive: 0
  })
  })
}
  handleClick(e){
    e.preventDefault();
  this.setState
  
({
  username:this.refs.username.value,
  password:this.refs.password.value,
  eposta:this.refs.eposta.value
})
console.log(this.state.username);
}
componentDidMount(){
  this.fetchData();
  this.setState({
    idd:localStorage.getItem('idd')
  })
}
componentWillMount(){
  localStorage.getItem('idd')&&this.setState({
    idd:localStorage.getItem('idd')
  })
}
fetchData(){  
  let id = sessionStorage.getItem('id');
  fetch(`http://localhost:8080/beynusers/findbyid?id=${id}`)
.then(response => response.json())
.then(json => {
  console.log(json);
  this.setState({
    data : json
  })})
.catch(error => console.log('parsing failder',error))
}

  render () {
    return (
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Kullanıcı Adı:
            </Col>
            <Col sm={10}>
              <input ref="username" className="form-control" defaultValue={this.state.data.username} onChange={this.handleClick.bind(this)} type="Username" placeholder="Kullanıcı Adınız" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Şifre:
            </Col>
            <Col sm={10}>
              <input type="password" className="form-control" ref="password" defaultValue={this.state.data.password} onChange={this.handleClick.bind(this)} placeholder="Şifreniz" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email:
            </Col>
            <Col sm={10}>
              <input type="Email" ref="eposta" className="form-control" defaultValue={this.state.data.eposta} onChange={this.handleClick.bind(this)}  placeholder="Emailiniz" />
            </Col>
          </FormGroup>   
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Telefon:
            </Col>
            <Col sm={10}>
              <input type="Telefon" ref="telefon" className="form-control" onChange={this.handleClick.bind(this)}  placeholder="Telefon" />
            </Col>
          </FormGroup>  
          <FormGroup>
            <Col smOffset={2} sm={10}>
          <button type="submit"onClick={this.postData.bind(this)} className="btn btn-dark"><i className="fa fa-save"></i> Kaydet</button>
            </Col>
          </FormGroup>
        </Form>);
        }
      }

export default Profili_Duzenle;

