import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { loginPost } from './loginPost';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      loginPost(`${this.state.username}&password=${this.state.password}`, this.state).then((result) => {
        let responseJson = result;
        console.log(responseJson);
        if (responseJson.id) {
          sessionStorage.setItem('id', responseJson.id);
          sessionStorage.setItem('sirketId', responseJson.sirketid);
          sessionStorage.setItem('eklemeTarihi', responseJson.crdate);
          sessionStorage.setItem('uyelikTuru', responseJson.uyelikTuru);
          //sessionStorage.setItem('Üyelik Türü', responseJson.uyelikTuru);
          this.setState({ redirect: true });
        }
        else {
          alert("Hatalı giriş");
        }
      })
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={'/dashbord'} />
      )
    }
    if (sessionStorage.getItem("id")) {
      <Redirect to={'/dashbord'} />
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Giriş</h1>
                    <p className="text-muted">Hesabınızla Giriş Yapın</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="username"
                        type="text"
                        placeholder="Kullanıcı Adı"
                        onChange={this.onChange}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Şifre"
                        onChange={this.onChange}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button onClick={this.login} color="primary" className="px-4">Giriş Yap</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Şifremi Unuttum</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Kayıt Ol</h2>
                      <p />
                      <p>Hesap oluşturmak ister misiniz?</p>
                      <Button href="#/register" color="primary" className="mt-3" active>Kayıt Ol</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
