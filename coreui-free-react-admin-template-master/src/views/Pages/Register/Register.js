import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sirketAdi: [],
            data: []
        };
    };
    handleChange(e) {
        e.preventDefault();
    }
    postData() {
        let tanim = this.state.tanim;

        fetch('http://localhost:8080/beynsirket/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tanim: this.state.tanim,
                adres: this.state.adres,
                cepTelefonu: this.state.cepTelefonu,
                eposta: this.state.eposta,
                crdate: Date.now(),
                deleteflag: 0,
                isactive: 0
            })
        }).then(() => {
            fetch(`http://localhost:8080/beynsirket/findbytanim?tanim=${tanim}`)
                .then(response => response.json())
                .then(json => {
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
                            sirketid: json.id,
                            uyelikTuru: 2,
                            deleteFlag: 0,
                            crdate: Date.now(),
                            isActive: 0
                        })
                    })

                })
                .catch(error => console.log('parsing failder', error))
        })
        window.location = '/';
    }

    handleClick(e) {
        e.preventDefault();
        this.setState
            ({
                username: this.refs.username.value,
                password: this.refs.password.value,
                eposta: this.refs.mail.value,
                tanim: this.refs.beynSirketAdi.value,
                adres: this.refs.adres.value,
                cepTelefonu: this.refs.telefon.value
            });
    }

    render() {
        //let sirketAdi = this.state.sirketAdi;
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <h1>Kayıt Ol</h1>
                                    <p className="text-muted">Hesap oluştur</p>
                                    {/*<InputGroup>
                   <InputGroupText>
                      <i className="icon-home"></i>
                    </InputGroupText>*/}
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-home"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <input ref="beynSirketAdi" className="form-control" onChange={this.handleClick.bind(this)} type="text" placeholder="Şirket Adı" />
                                    </InputGroup>
                                    {/* <InputGroup>
                  <select className="form-control" ref="beynSirketAdi" onChange={this.handleClick.bind(this)}>
                    <option selected value="sirketAdi" disabled>Şirket Adı</option> {sirketAdi.map(sirket =><option value={sirket.id}>{sirket.tanim}</option>)}
                    </select><InputGroup/>
                  </InputGroup>*/}
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-user"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <input ref="username" className="form-control" onChange={this.handleClick.bind(this)} type="text" placeholder="Kullanıcı Adı" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>@</InputGroupText>
                                        </InputGroupAddon>
                                        <input ref="mail" type="text" className="form-control" onChange={this.handleClick.bind(this)} placeholder="Email" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-lock"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <input ref="password" type="password" className="form-control" onChange={this.handleClick.bind(this)} placeholder="Şifre" />
                                    </InputGroup>
                                    {/* <form onClick={this.handleChange.bind(this)}>
                    <input type="radio" onChange={this.handleChange} name="fruit" value="yasin" checked={this.state.selectedOption===false} />Yasin
                    <input type="radio" onChange={this.handleChange} name="fruit" value="gokhan" checked={this.state.selectedOption===false} />Gökhan
                  </form>*/}
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-lock"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <input ref="repeatPassword" className="form-control" type="password" placeholder="Şifre Tekrarla" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-phone"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <input ref="telefon" className="form-control" onChange={this.handleClick.bind(this)} type="text" placeholder="Telefon" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-map"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <input ref="adres" className="form-control" onChange={this.handleClick.bind(this)} type="text" placeholder="Adres" />
                                    </InputGroup>
                                    <Button onClick={this.postData.bind(this)} color="success" block>Hesap Oluştur</Button>
                                </CardBody>
                                <CardFooter className="p-4">
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;