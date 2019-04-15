import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    this.profiliDuzenle = this.profiliDuzenle.bind(this);
  };

  profiliDuzenle() {
    window.location = '/#/Profil/Profili_Duzenle'
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let id = sessionStorage.getItem('id');
    //fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    fetch(`http://localhost:8080/beynusers/findbyid?id=${id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Profil
            </div>
          <div className="card-body">
            <div class="container">
              <h2>Genel Bilgilerim</h2>
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <td className="renklendir">ID:</td>
                    <td>{this.state.data.id}</td>
                  </tr>
                  <tr>
                    <td className="renklendir">Kullanıcı Adı:</td>
                    <td>{this.state.data.username}</td>
                  </tr>
                  <tr>
                    <td className="renklendir">Elektronik Posta:</td>
                    <td>{this.state.data.eposta}</td>
                  </tr>
                  <tr>
                    <td className="renklendir">Şirket ID:</td>
                    <td>{this.state.data.sirketid}</td>
                  </tr>
                  <tr>
                    <td className="renklendir">Kullanıcı ID:</td>
                    <td>{this.state.data.eksperid}</td>
                  </tr>
                  <tr>
                    <td className="renklendir">Türü:</td>
                    <td>{this.state.data.uyelikTuru}</td>
                  </tr>
                  <tr>
                    <td className="renklendir">Oluşturan Kullanıcı ID:</td>
                    <td>{this.state.data.eksperid}</td>
                  </tr>
                  <tr>
                    <td className="renklendir">Kullancı Oluşturma Tarihi:</td>
                    <td>{this.state.data.crdate}</td>
                  </tr>
                  <tr>
                    <td className="renklendir">Güncelleyen Kullanıcı ID:</td>
                    <td>{this.state.data.upduser}</td>
                  </tr>
                  <tr>
                    <td className="renklendir">Güncelleme Tarihi:</td>
                    <td>{this.state.data.upddate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div align="right">
              <a ><button type="submit" onClick={this.profiliDuzenle} class="btn btn-dark">Profili Düzenle</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profil;