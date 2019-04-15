import React, {Component} from 'react';
import {
  Badge,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from 'reactstrap';
import classnames from 'classnames';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {inputWidth, inputNumberSize, table1} from './hasar_ayrinti.css';

class hasar_ayrinti extends Component {

  constructor(props, context) {
    super(props, context);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleModalAyrinti = this.toggleModalAyrinti.bind(this);
    this.beynHasarTespitKaydet = this.beynHasarTespitKaydet.bind(this);
    this.beynHasarTespitGuncelle = this.beynHasarTespitGuncelle.bind(this);
    this.putHasarTespitHesap = this.putHasarTespitHesap.bind(this);
    this.state = {
      activeTab: '1',
      idd: '',
      data: '',
      hesaplar: [],
      eksper: [],
      turler: [],
      markaData: [],
      renkler: [],
      aracKullanimSekli: [],
      modal: false,
      hesapTuru: [],
      hesapGrubu: [],
      modalAyrinti: false,
      hesapid: '',
      hesapDetay: ''
    };
  }

  componentDidMount() {
    this.fetchHasarTespit();
    this.fetchAracMarkalar();
    this.fetchAracRenk();
    this.fetchAracKullanimSekli();
    this.fetchHasarTespitHesap();
    this.fetchEksperler();
    this.fetchHesapTuru();
    this.fetchHesapGrubu();
    this.setState({
      idd: localStorage.getItem('idd')
    })
  }

  componentWillMount() {
    localStorage.getItem('idd') && this.setState({
      idd: localStorage.getItem('idd')
    })
  }

  postData() {
    fetch(`http://localhost:8080/beynhasartespit/update/${this.state.idd}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hasarNedeni: this.state.hasarNedeni,
        dosyaNumarasi: this.state.dosyaNumarasi,
        dosyaYili: this.state.dosyaYili,
        tespitPlaka: this.state.tespitPlaka,
        hasarYeri: this.state.hasarYeri,
        hasarTarihi: this.state.hasarTarihi,
        hasarKusurTespiti: this.state.hasarKusurTespiti,
        hasarKusurSekli: this.state.hasarKusurSekli,
        izahat: this.state.izahat,
        deleteFlag: this.state.deleteFlag,
        isActive: this.state.isActive,
        updDate: this.state.updDate,
        updUser: this.state.updUser,
        crDate: this.state.crDate,
        crUser: this.state.crUser,
        tespitMotorNo: this.state.tespitMotorNo,
        tespitSasiNo: this.state.tespitSasiNo,
        aracDegeri: this.state.aracDegeri,
        tespitAracTipi: this.state.tespitAracTipi,
        beynAracMarkaTespit: this.state.beynAracMarkaTespit,
        beynAracRengiTespit: this.state.beynAracRengiTespit,
        tespitKilometre: this.state.tespitKilometre,
        tespitAracSahibi: this.state.tespitAracSahibi,
        tespitKimlikNo: this.state.tespitKimlikNo,
        hasarPlaka: this.state.hasarPlaka,
        hasarMotorNo: this.state.hasarMotorNo,
        hasarSasiNo: this.state.hasarSasiNo,
        hasarAracTipi: this.state.hasarAracTipi,
        beynAracMarkaHasar: this.state.beynAracMarkaHasar,
        hasarKilometre: this.state.hasarKilometre,
        hassarAracSahibi: this.state.hassarAracSahibi,
        hasarKimlikNo: this.state.hasarKimlikNo,
        beynSirketId: this.state.beynSirketId,
        eynEksperId: this.state.eynEksperId,
        beynAracRengiHasar: this.state.beynAracRengiHasar,
        beynAracKullanimSekliHasar: this.state.beynAracKullanimSekliHasar,
        beynAracKulanimSekliTespit: this.state.beynAracKulanimSekliTespit,
        tramerNo: this.state.tramerNo,
        beynSigortaSirketiId: this.state.beynSigortaSirketiId,
        magdurKusur: this.state.magdurKusur

      })
    })
    window.location.reload();
  }

  handleClick(e) {
    e.preventDefault();
    this.setState
    ({
      hasarNedeni: this.refs.hasarNedeniRef.value,
      dosyaNumarasi: this.refs.dosyaNumarasiRef.value,
      dosyaYili: this.refs.dosyaYiliRef.value,
      tespitPlaka: this.refs.tespitPlakaRef.value,
      hasarYeri: this.refs.hasarYeriRef.value,
      hasarTarihi: this.refs.hasarTarihiRef.value,
      hasarKusurTespiti: this.refs.hasarKusurTespitiRef.value,
      hasarKusurSekli: this.refs.hasarKusurSekliRef.value,
      izahat: this.refs.izahatRef.value,
      deleteFlag: this.refs.deleteFlagRef.value,
      isActive: this.refs.isActiveRef.value,
      updDate: this.refs.updDateRef.value,
      updUser: this.refs.updUserRef.value,
      crDate: this.refs.updDateRef.value,
      crUser: this.refs.crUserRef.value,
      tespitMotorNo: this.refs.tespitMotorNoRef.value,
      tespitSasiNo: this.refs.tespitSasiNoRef.value,
      aracDegeri: this.refs.aracDegeriRef.value,
      tespitAracTipi: this.refs.tespitAracTipiRef.value,
      beynAracMarkaTespit: this.refs.beynAracMarkaTespitRef.value,
      beynAracRengiTespit: this.refs.beynAracRengiTespitRef.value,
      tespitKilometre: this.refs.tespitKilometreRef.value,
      tespitAracSahibi: this.refs.tespitAracSahibiRef.value,
      tespitKimlikNo: this.refs.beynAracMarkaTespitRef.value,
      hasarPlaka: this.refs.hasarPlakaRef.value,
      hasarMotorNo: this.refs.hasarMotorNoRef.value,
      hasarSasiNo: this.refs.hasarSasiNoRef.value,
      hasarAracTipi: this.refs.hasarAracTipiRef.value,
      beynAracMarkaHasar: this.refs.beynAracMarkaHasarRef.value,
      hasarKilometre: this.refs.hasarKilometreRef.value,
      hassarAracSahibi: this.refs.hassarAracSahibiRef.value,
      hasarKimlikNo: this.refs.hasarKimlikNoRef.value,
      beynSirketId: this.refs.beynSirketIdRef.value,
      eynEksperId: this.refs.eynEksperIdRef.value,
      beynAracRengiHasar: this.refs.beynAracRengiHasarRef.value,
      beynAracKullanimSekliHasar: this.refs.beynAracKullanimSekliHasarRef.value,
      beynAracKulanimSekliTespit: this.refs.beynAracKulanimSekliTespitRef.value,
      tramerNo: this.refs.tramerNoRef.value,
      beynSigortaSirketiId: this.refs.beynSigortaSirketiIdRef.value,
      magdurKusur: this.refs.magdurKusurRef.value
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleModalAyrinti(id) {
    this.setState({
      modalAyrinti: !this.state.modalAyrinti
    });
    if (Number.isInteger(id)) {
      this.fetchData9(id);
    }
  }

  fetchHasarTespit() {
    fetch(`http://localhost:8080/beynhasartespit/findbyid?id=${this.state.idd}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  fetchAracMarkalar() {
    fetch(`http://localhost:8080/beynaracmarka/findall`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          markaData: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  fetchAracRenk() {
    fetch(`http://localhost:8080/beynaracrengi/findall`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          renkler: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  fetchAracKullanimSekli() {
    fetch(`http://localhost:8080/beynarackullanimsekli/findall`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          aracKullanimSekli: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  fetchHasarTespitHesap() {
    fetch(`http://localhost:8080/beynhasartespithesap/findbyhasartespit?id=${this.state.idd}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          hesaplar: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  fetchEksperler() {
    fetch('http://localhost:8080/beyneksper/findall')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          eksper: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  fetchHesapTuru() {
    fetch('http://localhost:8080/beynhesapturu/findall')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          hesapTuru: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  fetchHesapGrubu() {
    fetch('http://localhost:8080/beynhesapgrubu/findall')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          hesapGrubu: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  fetchData9(id) {
    fetch(`http://localhost:8080/beynhasartespithesap/findbyid?id=${id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          hesapDetay: json
        })
      })
      .catch(error => console.log('parsing failder', error))
  }

  putHasarTespitHesap(id, adet, grubId, turuId, tespitId, carpani, tutar, izahati, takdir, deleteFlag, isActive) {
    fetch(`http://localhost:8080/beynhasartespithesap/update/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        beynhasartespit_id: tespitId,
        adedi: adet,
        beynhesapgrubu_id: grubId,
        beynhesapturu_id: turuId,
        carpan: carpani,
        tutari: tutar,
        izahat: izahati,
        ekspertakdiri: takdir,
        deleteflag: deleteFlag,
        isactive: isActive
      })
    })
  }

  beynHasarTespitGuncelle(id, rayic) {
    let adet = document.getElementById("hesapUpdateAdet").value;
    let eksperTakdiri = document.getElementById("hesapUpdateEksperTakdiri").value;
    let carpan = document.getElementById("hesapUpdateCarpan").value;
    let tutar = 0;
    if (adet !== "") {
      tutar = (adet * carpan) * rayic / 100;
    }
    else {
      tutar = (eksperTakdiri * carpan) * rayic / 100;
    }
    console.log(tutar);
    this.putHasarTespitHesap(
      id,
      adet,
      document.getElementById("hesapUpdateGrupid").value,
      document.getElementById("hesapUpdateTuruid").value,
      document.getElementById("hesapUpdateTespitid").value,
      carpan,
      tutar,
      document.getElementById("hesapUpdateIzahat").value,
      eksperTakdiri,
      document.getElementById("hesapUpdateDeleteflag").value,
      document.getElementById("hesapUpdateIsactive").value
    );
    window.location.reload();
  }


  postHasarTespitHesap(adet, grubId, turuId, carpani, tutar, izahati, takdir) {
    fetch(`http://localhost:8080/beynhasartespithesap/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        beynhasartespit_id: this.state.idd,
        adedi: adet,
        beynhesapgrubu_id: grubId,
        beynhesapturu_id: turuId,
        carpan: carpani,
        tutari: tutar,
        izahat: izahati,
        ekspertakdiri: takdir,
        deleteflag: 0,
        isactive: 0,
        crdate: Date.now()
      })
    })
  }

  beynHasarTespitKaydet() {
    for (let i = 0; i < 18; i++) {
      if (document.getElementById("hesapCheckbox" + i).checked) {
        this.postHasarTespitHesap(
          document.getElementById("hesapAdet" + i).value,
          document.getElementById("hesapGrubId" + i).value,
          document.getElementById("hesapTuruId" + i).value,
          document.getElementById("hesapCarpan" + i).value,
          document.getElementById("hesapTutar" + i).value,
          document.getElementById("hesapIzahat" + i).value,
          document.getElementById("hesapEksperTakdir" + i).value
        );
        console.log("Hesap index=" + i);
      }
    }
    window.location.reload();
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  deleteHesapTuru(id) {
    fetch(`http://localhost:8080/beynhasartespithesap/delete/${id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    window.location.reload();
  }

  render() {
    let rayicDegeri = this.state.data.aracDegeri;
    console.log("Rayic Degeri=" + rayicDegeri);

    let markalar = this.state.markaData;
    let renkler = this.state.renkler;
    let aracKullanimSekli = this.state.aracKullanimSekli;
    let eksperler = this.state.eksper;
    let hesaplar = this.state.hesaplar;
    let hesapTuru = this.state.hesapTuru;
    let hesapGrubu = this.state.hesapGrubu;

    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-lg">
          <ModalHeader toggle={this.toggleModal}>Hasar Hesap İşlemi</ModalHeader>
          <ModalBody>

            <Table size="sm" bordered>
              <thead>
              <tr>
                <th></th>
                <th>Hesap Grubu</th>
                <th>Hesap Türü</th>
                <th>Çarpan</th>
                <th>Adet</th>
                <th>Eksper Takdiri</th>
                <th>Tutarı</th>
                <th>Açıklama</th>
              </tr>
              </thead>
              <tbody>
              {hesapTuru.map(function (hesapTuru, i) {

                  function onAdetChange(carpan, index) {
                    let toplam = 0;
                    toplam += (((document.getElementById("hesapAdet" + index).value) * carpan) * (rayicDegeri) / 100);
                    document.getElementById("hesapTutar" + index).value = toplam;
                    let degerKaybi = 0;
                    for (let j = 0; j < 18; j++) {
                      degerKaybi += Number(document.getElementById("hesapTutar" + j).value);
                    }
                    document.getElementById("DegerKaybi").innerHTML = degerKaybi;
                  }

                  function onEksperTakdiriChange(carpan, index) {
                    let toplam = 0;
                    toplam += (((document.getElementById("hesapEksperTakdir" + index).value) * carpan) * (rayicDegeri) / 100);
                    document.getElementById("hesapTutar" + index).value = toplam;
                    let degerKaybi = 0;
                    for (let j = 0; j < 18; j++) {
                      degerKaybi += Number(document.getElementById("hesapTutar" + j).value);
                    }
                    document.getElementById("DegerKaybi").innerHTML = degerKaybi;
                  }

                  return (
                    <tr>
                      <td><input id={"hesapCheckbox" + i} type="checkbox" defaultChecked={false}/></td>
                      <td><input id={"hesapGrubAdi" + i} size={30} type="text" disabled={true} value=
                        {hesapGrubu.map(function (grup, i) {
                          if (i + 1 === hesapTuru.beynhesapgrubu_id)
                            return (grup.tanim)
                        })}
                      /></td>
                      <td><input id={"hesapTuruAdi" + i} type="text" disabled={true} value={hesapTuru.tanim}/></td>
                      <td><input className="inputNumberSize" id={"hesapCarpan" + i} size={2} type="number" disabled={true}
                                 value={hesapTuru.carpan}/>
                      </td>
                      <td><input className="inputNumberSize" id={"hesapAdet" + i}
                                 onChange={() => onAdetChange(hesapTuru.carpan, i)}
                                 disabled={hesapTuru.ekspertakdirivarmi === "Evet"} type="number"/></td>
                      <td><select id={"hesapEksperTakdir" + i} onChange={() => onEksperTakdiriChange(hesapTuru.carpan, i)}
                                  disabled={hesapTuru.ekspertakdirivarmi === "Hayır"} name="cars">
                        <option disabled={true} selected={true} value="0">Seç</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select></td>
                      <td><input id={"hesapTutar" + i} size={2} type="text" disabled={true}/></td>
                      <td><input id={"hesapIzahat" + i} size={12} type="text"/></td>
                      <input disabled={true} hidden id={"hesapGrubId" + i} value={hesapTuru.beynhesapgrubu_id}/>
                      <input disabled={true} hidden id={"hesapTuruId" + i} value={hesapTuru.id}/>
                    </tr>)
                }
              )}

              </tbody>
            </Table>

          </ModalBody>
          <ModalFooter>
            <h4 className={"text-danger"}> DEĞER KAYBI: <span className="tabSmall" id="DegerKaybi">0</span></h4>
            <Button color="primary" onClick={this.beynHasarTespitKaydet}>Onayla</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>İptal</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalAyrinti} toggle={this.toggleModalAyrinti} className="modal-lg">
          <ModalHeader toggle={this.toggleModalAyrinti}>Hesap Düzenle</ModalHeader>
          <ModalBody>
            <Row>
              <Col md={1} hidden={this.state.hesapDetay.adedi == null}>Adet:</Col>
              <Col md={11} hidden={this.state.hesapDetay.adedi == null}>
                <input id="hesapUpdateAdet" disabled={this.state.hesapDetay.adedi == null} className="form-control"
                       type="number" defaultValue={this.state.hesapDetay.adedi}/> </Col>
              <br/><br/>
              <Col md={1} hidden={this.state.hesapDetay.ekspertakdiri === 0}>Eksper Takdiri:</Col>
              <Col md={11} hidden={this.state.hesapDetay.ekspertakdiri === 0}>
                <select id="hesapUpdateEksperTakdiri" disabled={this.state.hesapDetay.ekspertakdiri === 0}
                        className="form-control"
                        type="number" defaultValue={this.state.hesapDetay.ekspertakdiri}>
                  <option selected={this.state.hesapDetay.ekspertakdiri === 0} disabled={true} value="0">Yok</option>
                  <option selected={this.state.hesapDetay.ekspertakdiri === 1} value="1">1</option>
                  <option selected={this.state.hesapDetay.ekspertakdiri === 2} value="2">2</option>
                  <option selected={this.state.hesapDetay.ekspertakdiri === 3} value="3">3</option>
                  <option selected={this.state.hesapDetay.ekspertakdiri === 4} value="4">4</option>
                  <option selected={this.state.hesapDetay.ekspertakdiri === 5} value="5">5</option>
                </select>
              </Col>
              <br/><br/>
              <Col md={1}>İzahat:</Col><Col md={11}>
              <input id="hesapUpdateIzahat" className="form-control" type="text"
                     defaultValue={this.state.hesapDetay.izahat}/> </Col>
              <input id="hesapUpdateTespitid" disabled={true} hidden={true}
                     value={this.state.hesapDetay.beynhasartespit_id}/>
              <input id="hesapUpdateGrupid" disabled={true} hidden={true}
                     value={this.state.hesapDetay.beynhesapgrubu_id}/>
              <input id="hesapUpdateTuruid" disabled={true} hidden={true}
                     value={this.state.hesapDetay.beynhesapturu_id}/>
              <input id="hesapUpdateCarpan" disabled={true} hidden={true} value={this.state.hesapDetay.carpan}/>
              <input id="hesapUpdateDeleteflag" disabled={true} hidden={true} value={this.state.hesapDetay.deleteflag}/>
              <input id="hesapUpdateIsactive" disabled={true} hidden={true} value={this.state.hesapDetay.isactive}/>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"
                    onClick={() => this.beynHasarTespitGuncelle(this.state.hesapDetay.id, rayicDegeri)}>Kaydet</Button>{' '}
            <Button color="secondary" onClick={this.toggleModalAyrinti}>İptal</Button>
          </ModalFooter>
        </Modal>

        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="12" className="mb-4">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '1'})}
                    onClick={() => {
                      this.toggle('1');
                    }}
                  >
                    Hasar
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({active: this.state.activeTab === '2'})}
                    onClick={() => {
                      this.toggle('2');
                    }}
                  >
                    Ayrıntı
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <div className="animated fadeIn">
                    <div className="card">
                      <div className="card-header">
                        <Row>
                          <Col md={10}>
                            <i className="icon-book-open"></i> İşlem Detayı
                          </Col>
                          <Col md={2}>
                            <a href="#/hasar_yonetimi">
                              <button type="submit" className="btn-dark"><i className="fa fa-undo"></i> Listeye Geri Dön
                              </button>
                            </a>
                          </Col>
                        </Row>
                      </div>
                      <div className="card-body">
                        <Row>

                          {/* Dosya Bilgisi */}
                          <Col md={12}>
                            <h4>Dosya Bilgisi</h4>
                            <hr/>
                          </Col>
                          <Col md={2}>
                            Dosya Numarası:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="dosyaNumarasiRef" type="text" defaultValue={this.state.data.dosyaNumarasi} onChange={this.handleClick.bind(this)}/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Dosya Yılı:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="dosyaYiliRef" type="text" defaultValue={this.state.data.dosyaYili} onChange={this.handleClick.bind(this)}/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Araç Plakası:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="tespitPlakaRef" type="text" defaultValue={this.state.data.tespitPlaka} onChange={this.handleClick.bind(this)}/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Olay Yeri:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarYeriRef" type="text" defaultValue={this.state.data.hasarYeri} onChange={this.handleClick.bind(this)}/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Olay Tarihi:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" type="date" ref="hasarTarihiRef" defaultValue={this.state.data.hasarTarihi} onChange={this.handleClick.bind(this)}/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Eksperler:
                          </Col>
                          <Col md={10}>
                            <select className="form-control" ref="eynEksperIdRef"
                                    onChange={this.handleClick.bind(this)}>
                              <option selected disabled>-Eksper Seçiniz-</option>
                              {eksperler.map(eksper => <option selected={this.state.data.eynEksperId === eksper.id} value={eksper.id}>{eksper.firstName} {eksper.lastName}</option>)}
                            </select>
                          </Col>

                          {/* Hasar Bilgisi */}
                          <Col md={12}>
                            <hr/>
                            <h4>Hasar Bilgisi</h4>
                            <hr/>
                          </Col>
                          <Col md={2}>
                            Hasar Nedeni:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarNedeniRef" onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.hasarNedeni}
                                   type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Hasar Kusur Tespiti:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarKusurTespitiRef"
                                   onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.hasarKusurTespiti}
                                   type="text"/> {/* value={this.state.data.hasarKusurTespiti} */}
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Hasar Kusur Şekli:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarKusurSekliRef"
                                   onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.hasarKusurSekli}
                                   type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            İzahat:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="izahatRef" onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.izahat}
                                   type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Tramer No:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="tramerNoRef" onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.tramerNo}
                                   type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Mağdur Kusur:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="magdurKusurRef" onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.magdurKusur}
                                   type="text"/>
                          </Col>

                          {/* Tespit Edilen Araç Bilgisi */}
                          <Col md={12}>
                            <hr/>
                            <h4>Tespit Edilen Araç Bilgisi</h4>
                            <hr/>
                          </Col>
                          <Col md={2}>
                            Plaka:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" disabled={true} type="text" defaultValue={this.state.data.tespitPlaka}/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Motor No:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="tespitMotorNoRef"
                                   defaultValue={this.state.data.tespitMotorNo}
                                   onChange={this.handleClick.bind(this)} type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Sasi No:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="tespitSasiNoRef" onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.tespitSasiNo}
                                   type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Değeri:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="aracDegeriRef" onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.aracDegeri}
                                   type="number"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Araç Tipi:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="tespitAracTipiRef"
                                   defaultValue={this.state.data.tespitAracTipi}
                                   onChange={this.handleClick.bind(this)} type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Markası:
                          </Col>
                          <Col md={10}>
                            <select className="form-control" ref="beynAracMarkaTespitRef"
                                    onChange={this.handleClick.bind(this)}>
                              {markalar.map(marka => <option selected={this.state.data.beynAracMarkaTespit === marka.id} value={marka.id}>{marka.tanim}</option>)}
                            </select>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Rengi:
                          </Col>
                          <Col md={10}>
                            <select className="form-control" ref="beynAracRengiTespitRef"
                                    onChange={this.handleClick.bind(this)}>
                              {renkler.map(renk => <option selected={this.state.data.beynAracRengiTespit === renk.id} value={renk.id}>{renk.tanim}</option>)}
                            </select>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Kilometresi:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="tespitKilometreRef"
                                   defaultValue={this.state.data.tespitKilometre}
                                   onChange={this.handleClick.bind(this)} type="number"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Araç Kulanım Şekli:
                          </Col>
                          <Col md={10}>
                            <select className="form-control" ref="beynAracKulanimSekliTespitRef"
                                    onChange={this.handleClick.bind(this)}>
                              {aracKullanimSekli.map(aracKullanim => <option
                                selected={this.state.data.beynAracKulanimSekliTespit === aracKullanim.id}
                                value={aracKullanim.id}>{aracKullanim.tanim}</option>)}
                            </select>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Araç Sahibi:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="tespitAracSahibiRef"
                                   defaultValue={this.state.data.tespitAracSahibi}
                                   onChange={this.handleClick.bind(this)} type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Araç Sahibi Kimlik No:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="tespitKimlikNoRef"
                                   defaultValue={this.state.data.tespitKimlikNo}
                                   onChange={this.handleClick.bind(this)} type="number"/>
                          </Col>

                          {/* Hasar Alan Araç Bilgisi */}
                          <Col md={12}>
                            <hr/>
                            <h4>Hasar Alan Araç Bilgisi</h4>
                            <hr/>
                          </Col>
                          <Col md={2}>
                            Plaka:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarPlakaRef" onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.hasarPlaka}
                                   type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Motor No:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarMotorNoRef" onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.hasarMotorNo}
                                   type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Sasi No:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarSasiNoRef" onChange={this.handleClick.bind(this)}
                                   defaultValue={this.state.data.hasarSasiNo}
                                   type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Araç Tipi:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarAracTipiRef"
                                   defaultValue={this.state.data.hasarAracTipi}
                                   onChange={this.handleClick.bind(this)} type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Markası:
                          </Col>
                          <Col md={10}>
                            <select className="form-control" ref="beynAracMarkaHasarRef"
                                    onChange={this.handleClick.bind(this)}>
                              {markalar.map(marka => <option selected={this.state.data.beynAracMarkaHasar === marka.id} value={marka.id}>{marka.tanim}</option>)}
                            </select>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Rengi:
                          </Col>
                          <Col md={10}>
                            <select className="form-control" ref="beynAracRengiHasarRef"
                                    onChange={this.handleClick.bind(this)}>
                              {renkler.map(renk => <option selected={this.state.data.beynAracRengiHasar === renk.id} value={renk.id}>{renk.tanim}</option>)}
                            </select>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Kilometresi:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarKilometreRef"
                                   defaultValue={this.state.data.hasarKilometre}
                                   onChange={this.handleClick.bind(this)} type="number"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Araç Kulanım Şekli:
                          </Col>
                          <Col md={10}>
                            <select className="form-control" ref="beynAracKullanimSekliHasarRef"
                                    onChange={this.handleClick.bind(this)}>
                              {aracKullanimSekli.map(aracKullanim => <option
                                selected={this.state.data.beynAracKullanimSekliHasar === aracKullanim.id}
                                value={aracKullanim.id}>{aracKullanim.tanim}</option>)}
                            </select>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Araç Sahibi:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hassarAracSahibiRef"
                                   defaultValue={this.state.data.hassarAracSahibi}
                                   onChange={this.handleClick.bind(this)} type="text"/>
                          </Col>
                          <Col md={12}><br/></Col>
                          <Col md={2}>
                            Araç Sahibi Kimlik No:
                          </Col>
                          <Col md={10}>
                            <input className="form-control" ref="hasarKimlikNoRef"
                                   defaultValue={this.state.data.hasarKimlikNo}
                                   onChange={this.handleClick.bind(this)} type="number"/>
                          </Col>
                          <Col md={12}>
                            <hr/>
                          </Col>
                          <Col md={10}></Col>
                          <Col md={2}>
                            <button onClick={this.postData.bind(this)} className="btn btn-dark">
                              <i className="fa fa-save"></i> Kaydet
                            </button>
                            <button onClick={this.toggleModal} className="btn btn-primary">
                              <i className="fa fa-calculator"></i> İşlem
                            </button>
                          </Col>

                          {/* Gizli Bilgiler */}
                          <input ref="deleteFlagRef" hidden={true} disabled={true} value={this.state.data.deleteFlag}/>
                          <input ref="isActiveRef" hidden={true} disabled={true} value={this.state.data.isActive}/>
                          <input ref="updDateRef" hidden={true} disabled={true} value={this.state.data.updDate}/>
                          <input ref="updUserRef" hidden={true} disabled={true} value={this.state.data.updUser}/>
                          <input ref="crDateRef" hidden={true} disabled={true} value={this.state.data.crDate}/>
                          <input ref="crUserRef" hidden={true} disabled={true} value={this.state.data.crUser}/>
                          <input ref="beynSirketIdRef" hidden={true} disabled={true}
                                 value={this.state.data.beynSirketId}/>
                          <input ref="beynSigortaSirketiIdRef" hidden={true} disabled={true}
                                 value={this.state.data.beynSigortaSirketiId}/>

                        </Row>
                      </div>
                    </div>
                  </div>


                </TabPane>
                <TabPane tabId="2">
                  <table className="table1">
                    <tr>
                      <th>Hesap Grubu</th>
                      <th>Hesap Türü</th>
                      <th>Adedi</th>
                      <th>Çarpan</th>
                      <th>Eksper Takdiri</th>
                      <th>Tutarı</th>
                      <th>İzahat</th>
                      <th>Özellikler</th>
                    </tr>
                    {hesaplar.map(hesap =>
                      <tr>
                        <td>
                          {hesapGrubu.map(function (grup, i) {
                            if (i + 1 == hesap.beynhesapgrubu_id)
                              return (<tr key={i}>{grup.tanim}</tr>)
                          })}
                        </td>
                        <td>
                          {hesapTuru.map(function (tur, i) {
                            if (i + 1 == hesap.beynhesapturu_id)
                              return (<tr key={i}>{tur.tanim}</tr>)
                          })}
                        </td>
                        <td>{hesap.adedi}</td>
                        <td>{hesap.carpan}</td>
                        <td><span hidden={hesap.ekspertakdiri === 0}>{hesap.ekspertakdiri}</span></td>
                        <td>{hesap.tutari}</td>
                        <td>{hesap.izahat}</td>
                        <td>

                          <button onClick={() => this.deleteHesapTuru(hesap.id)} className="btn btn-danger">
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                          </button>
                          <button onClick={() => this.toggleModalAyrinti(hesap.id)} className="btn btn-warning">
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                          </button>
                        </td>
                      </tr>
                    )}
                  </table>
                </TabPane>
              </TabContent>
            </Col>
            <Col xs="12" md="12" className="mb-4">
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default hasar_ayrinti;
