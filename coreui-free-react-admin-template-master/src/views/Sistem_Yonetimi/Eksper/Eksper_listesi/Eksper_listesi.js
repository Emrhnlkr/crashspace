import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { Table } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import './style.css';
import { userInfo } from 'os';


class Eksper_listesi extends Component{
 
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
     
    this.state = {
      dropdownOpen: false,
      Eksperler: []
    };
  }

  componentDidMount() {

    
    let sirketId = sessionStorage.getItem('sirketId');
    let yetki = sessionStorage.getItem('uyelikTuru');

    // yetkiler:
    // 1 -> admin kullanıcı
    // 2 -> merkez kullanıcı
    // 3 -> eksper kullanıcı

    if(yetki=='1'){
      fetch('http://localhost:8080/beyneksper/findbydeleteflag/0')
      .then(response => response.json())
      .then(Eksperler => { console.log(Eksperler); this.setState({ Eksperler })}).catch(error => console.log('parsing failder', error));
    }else if(yetki=='2' || yetki=='3'){
      fetch(`http://localhost:8080/beyneksper/findbydeleteflag/0/${sirketId}`)
      .then(response => response.json())
      .then(Eksperler => { console.log(Eksperler); this.setState({ Eksperler })}).catch(error => console.log('parsing failder', error));
    }
    
  }

  componentWillMount() {
    if (sessionStorage.getItem("id")) {
    }
    else {
      this.setState({ redirect: true });
    }
  }
 
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render(){

    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }
    const toogle1 = this.toogle;
    const { Eksperler } = this.state;    

    function eksperSil(id){
      fetch(`http://localhost:8080/beyneksper/delete/${id}`, { 
            method: 'delete',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })      
          window.location.reload();     
    }
    return ( 
      <div className="animated fadeIn">
          <div className="card">
              <div className="card-header">
                <i className="icon-user"></i> Eksperler
              </div>
              <div className="card-body">
                  <Row>
                    <h2>Eksperler Listesi</h2>
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
                        <th>Eksper Sayısı</th>
                        {/* <th>ID</th> */}
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Şirket</th>
                        <th>Oluşturan ID</th>
                        <th>Oluşturma Tarihi</th>
                        <th>İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      { Eksperler.map( function (user,i) {
                        return (
                          <tr className="center">
                            <td >{i+1}</td>
                            {/* <td>{user.id}</td> */}
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.beynSirketId}</td>
                            <td>{user.crUser}</td>
                            <td>{user.crDate}</td>
                            <td><button type="submit" className="btn btn-danger fa fa-trash-o" onClick={() => { if (window.confirm('Silmek istediğinize emin misiniz?')) eksperSil(user.id)}}> SİL </button></td>
                          </tr>                         
                        );
                      })} 
                    </tbody>
                  </Table>
                  <div align="right">
                    <a href="#/Sistem_Yonetimi/Eksper/Eksper_ekle">
                      <button type="submit" className="btn btn-dark">Eksper Ekle</button>
                    </a>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Eksper_listesi;