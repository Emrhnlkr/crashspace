import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './style.css';


class Kullanici_Listesi extends Component{

  constructor(props){
    super(props);
    this.state = {
      Users:[]
    };
  }

  componentDidMount(){
    let sirketId = sessionStorage.getItem('sirketId');
    let yetki = sessionStorage.getItem('uyelikTuru');


    // yetkiler:
    // 1 -> admin kullanıcı
    // 2 -> merkez kullanıcı
    // 3 -> eksper kullanıcı

    
    if(yetki=='1'){
        fetch(`http://localhost:8080/beynusers/findbydeleteflag/0`)    
        .then(response => response.json())
        .then(Users => { console.log(Users); this.setState({ Users })}).catch(error => console.log('parsing failder', error));    
    }else if(yetki=='2'|| yetki=='3'){
      fetch(`http://localhost:8080/beynusers/findbydeleteflag/0/${sirketId}`)
      .then(response => response.json())
        .then(Users => { console.log(Users); this.setState({ Users })}).catch(error => console.log('parsing failder', error)); 
    }
  }

  componentWillMount() {
    if (sessionStorage.getItem("id")) {
    }
    else {
      this.setState({ redirect: true });
    }
  }
  render(){

    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }

    const { Users } = this.state;

    function Sil(id){
      fetch(`http://localhost:8080/beynusers/delete/${id}`, { 
            method: 'delete',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })      
          window.location.reload();     
    }

    function Duzenle(id){
      if(sessionStorage.getItem('currentID') != null){
        sessionStorage.removeItem('currentID');        
      }
      sessionStorage.setItem('currentID', id);
      window.location="/#/Sistem_Yonetimi/Kullanicilar/Kullanici_Duzenle";
    }

    return(
      <div className="animated fadeIn">
          <div className="card">
              <div className="card-header">
                <i className="icon-user"></i> Kullanıcılar
              </div>
              <div className="card-body">
                  <Row>
                    <h2>Kullanıcılar Listesi</h2>
                    <ul id="authors"></ul>
                  </Row>
                  <Row>
                    <div className="loader">
                      <div className="icon"></div>
                    </div>
                  </Row>

                  <Table striped bordered condensed hover responsive>
                    <thead>
                      <tr className="center">
                        <th>Sıra</th>
                        <th>ID</th>
                        <th>Kullanıcı Adı</th>
                        <th>E-posta</th>
                        <th>Şirket ID</th>
                        <th>Eksper ID</th>
                        <th>Kullanıcı Türü</th>
                        <th>İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      { Users.map( function (user,i) {
                        return (
                          <tr className="center">
                            <td>{i+1}</td>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.eposta}</td>
                            <td>{user.sirketid}</td>
                            <td>{user.eksperid}</td>
                            <td>{user.uyelikTuru}</td>
                            <td><button type="submit" className="btn btn-primary" onClick={() => Duzenle(user.id)}>
                                  <span class="cui-pencil" aria-hidden="true"></span> Düzenle </button>&nbsp;
                            <button type="submit" className="btn btn-danger fa fa-trash-o" onClick={() => { if (window.confirm('Silmek istediğinize emin misiniz?')) Sil(user.id)}} > Sil </button></td>
                          </tr>                         
                        );
                      })} 
                    </tbody>
                  </Table>
                  <div align="right">
                    <a href="#/Sistem_Yonetimi/Kullanicilar/Kullanici_Ekle">
                      <button type="submit" className="btn btn-dark">Kullanıcı Ekle</button>
                    </a>
                  </div>   
              </div>
          </div>
      </div>
      
    );
  }
}
export default Kullanici_Listesi;