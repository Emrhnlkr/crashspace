import React , {Component} from 'react';
import {Row, Col} from 'reactstrap';
import { Redirect } from 'react-router-dom';



class Raporlar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  componentWillMount() {
    if (sessionStorage.getItem("id")) {
    }
    else {
      this.setState({ redirect: true });
    }
  }

  render() {

    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }

    return(
      <div className= "animated fadeIn">
      <div className= "card" >
      <div className="card-header">
      <i className="icon-user"></i> Raporlar
      </div>
      <div className= "card-body">

      <Row>
    {/*}  <h3>Rapor Listesi</h3> */}
      </Row>

      <Row>
      <table class="table table-bordered">
   <thead>
     <tr>
       <th>Rapor Numarası </th>
       <th>Tarih</th>
       <th>Durumu</th>
       <th></th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>Furkan</td>
       <td>Yıldırtan</td>
       <td>john@example.com</td>
       <th><input type="button" className="btn" value="Detaylı Bilgi"/></th>
     </tr>
     <tr>
       <td>Fatih</td>
       <td>Aslan</td>
       <td>mary@example.com</td>
       <th><input type="button" className="btn" value="Detaylı Bilgi"/></th>
     </tr>
     <tr>
       <td>Enes</td>
       <td>Yılmaz</td>
       <td>july@example.com</td>
        <th><input type="button" className="btn" value="Detaylı Bilgi"/></th>


     </tr>
     <tr>
       <td>İpek</td>
       <td>Selimoğlu</td>
       <td>july@example.com</td>
        <th><input type="button" className="btn" value="Detaylı Bilgi"/></th>
     </tr>
     <tr>
       <td>Gökhan</td>
       <td>Şişman</td>
       <td>july@example.com</td>
        <th><input type="button" className="btn" value="Detaylı Bilgi"/></th>
     </tr>
     <tr>
       <td>Yunus  Emre</td>
       <td>Çiçek</td>
       <td>july@example.com</td>
        <th><input type="button" className="btn" value="Detaylı Bilgi"/></th>
     </tr>
     <tr>
       <td>Baki</td>
       <td>Öztürk</td>
       <td>july@example.com</td>
        <th><input type="button" className="btn" value="Detaylı Bilgi"/></th>
     </tr>
     </tbody>
    </table>
      </Row>

      </div>
      </div>
      </div>
    );
  }
}


export default Raporlar ;
