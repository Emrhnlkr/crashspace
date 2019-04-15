import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Eksper_ekle extends Component {

  constructor(props){
    super(props);
    this.state={
      redirect: false
    };
  };

  postData(){

    fetch('http://localhost:8080/beyneksper/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        beynSirketId:sessionStorage.getItem('sirketId'),
        crUser:sessionStorage.getItem('id'),
        crDate:Date.now(),
        updUser:sessionStorage.getItem('id'),
        updDate:Date.now(),
        deleteFlag:0,
        isActive:0
      })
    })
    window.location='#/Sistem_Yonetimi/Eksper/Eksper_listesi';
    window.location.reload();
  }
  handleClick(e){
    e.preventDefault();
    this.setState
    ({
      firstName:this.refs.firstname.value,
      lastName:this.refs.lastname.value
    });
  }

  componentDidMount(){
    this.fetchData();
    this.setState({
      idd: localStorage.getItem('idd')
    })
    // this.postData();
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

    fetch(`http://localhost:8080/beyneksper/findbyid?id=1`)
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
            <i className="icon-drop"></i> Eksper Kayıt
          </div>
          <div className="card-body">


            <form className="form-horizontal" action="">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="firstname">Ad:</label>
                <div className="col-sm-10">
                  <input ref="firstname" onChange={this.handleClick.bind(this)} type="text" className="form-control" id="firstname" placeholder="Adı Giriniz" />
                </div>


                <label className="control-label col-sm-2" htmlFor="lastname">Soyad:</label>
                <div className="col-sm-10">
                  <input  ref="lastname" onChange={this.handleClick.bind(this)} type="text" className="form-control" id="lastname" placeholder="Soyadını Giriniz" />
                </div>
              </div>


             {/*<label className="control-label col-sm-2" htmlFor="">Eksper Kullanıcı Adı:</label>
              <div className="col-sm-10">
                <input   type="text" className="form-control" id="ad" placeholder="Eksperin kullanıcı adını giriniz" />
              </div>


              <label className="control-label col-sm-2" htmlFor="">Şifre:</label>
              <div className="col-sm-10">
                <input   type="text" className="form-control" id="şifre" placeholder="Eksperin şifresini  giriniz" />
    </div>*/}

            </form>

            < div align="center">
              <button className="btn btn-dark" onClick={this.postData.bind(this)}>KAYDET</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Eksper_ekle;
