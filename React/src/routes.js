import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Breadcrumbs = Loadable({
  loader: () => import('./views/Base/Breadcrumbs'),
  loading: Loading,
});

const Merkez_Ayarlar = Loadable({
  loader: () => import('./views/Merkez_Ayarlar'),
  loading: Loading,
});
const Islem_detay = Loadable({
  loader: () => import('./views/Islem_detay'),
  loading: Loading,
});
const Cards = Loadable({
  loader: () => import('./views/Base/Cards'),
  loading: Loading,
});

const Carousels = Loadable({
  loader: () => import('./views/Base/Carousels'),
  loading: Loading,
});

const Collapses = Loadable({
  loader: () => import('./views/Base/Collapses'),
  loading: Loading,
});

const Dropdowns = Loadable({
  loader: () => import('./views/Base/Dropdowns'),
  loading: Loading,
});

const Forms = Loadable({
  loader: () => import('./views/Base/Forms'),
  loading: Loading,
});

const Jumbotrons = Loadable({
  loader: () => import('./views/Base/Jumbotrons'),
  loading: Loading,
});

const ListGroups = Loadable({
  loader: () => import('./views/Base/ListGroups'),
  loading: Loading,
});

const Navbars = Loadable({
  loader: () => import('./views/Base/Navbars'),
  loading: Loading,
});

const Navs = Loadable({
  loader: () => import('./views/Base/Navs'),
  loading: Loading,
});

const Paginations = Loadable({
  loader: () => import('./views/Base/Paginations'),
  loading: Loading,
});

const Popovers = Loadable({
  loader: () => import('./views/Base/Popovers'),
  loading: Loading,
});

const ProgressBar = Loadable({
  loader: () => import('./views/Base/ProgressBar'),
  loading: Loading,
});

const Switches = Loadable({
  loader: () => import('./views/Base/Switches'),
  loading: Loading,
});

const Tables = Loadable({
  loader: () => import('./views/Base/Tables'),
  loading: Loading,
});

const Tabs = Loadable({
  loader: () => import('./views/Base/Tabs'),
  loading: Loading,
});

const Tooltips = Loadable({
  loader: () => import('./views/Base/Tooltips'),
  loading: Loading,
});

const BrandButtons = Loadable({
  loader: () => import('./views/Buttons/BrandButtons'),
  loading: Loading,
});

const ButtonDropdowns = Loadable({
  loader: () => import('./views/Buttons/ButtonDropdowns'),
  loading: Loading,
});

const ButtonGroups = Loadable({
  loader: () => import('./views/Buttons/ButtonGroups'),
  loading: Loading,
});

const Buttons = Loadable({
  loader: () => import('./views/Buttons/Buttons'),
  loading: Loading,
});

const Charts = Loadable({
  loader: () => import('./views/Charts'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const CoreUIIcons = Loadable({
  loader: () => import('./views/Icons/CoreUIIcons'),
  loading: Loading,
});

const Flags = Loadable({
  loader: () => import('./views/Icons/Flags'),
  loading: Loading,
});

const FontAwesome = Loadable({
  loader: () => import('./views/Icons/FontAwesome'),
  loading: Loading,
});

const SimpleLineIcons = Loadable({
  loader: () => import('./views/Icons/SimpleLineIcons'),
  loading: Loading,
});

const Alerts = Loadable({
  loader: () => import('./views/Notifications/Alerts'),
  loading: Loading,
});

const Badges = Loadable({
  loader: () => import('./views/Notifications/Badges'),
  loading: Loading,
});

const Modals = Loadable({
  loader: () => import('./views/Notifications/Modals'),
  loading: Loading,
});

const Colors = Loadable({
  loader: () => import('./views/Theme/Colors'),
  loading: Loading,
});
const Raporlar = Loadable({
  loader: () => import('./views/Raporlar'),
  loading: Loading,
});

const Eksper_ekle = Loadable({
  loader: () => import('./views/Sistem_Yonetimi/Eksper/Eksper_ekle'),
  loading: Loading,
});
const Eksper_listesi = Loadable({
  loader: () => import('./views/Sistem_Yonetimi/Eksper/Eksper_listesi'),
  loading: Loading,
});

const Typography = Loadable({
  loader: () => import('./views/Theme/Typography'),
  loading: Loading,
});

const Widgets = Loadable({
  loader: () => import('./views/Widgets/Widgets'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});
const hasar_yonetimi = Loadable({
  loader: () => import('./views/hasar_yonetimi'),
  loading: Loading,
});

const yeni_hasar = Loadable({
  loader: () => import('./views/hasar_yonetimi/yeni_hasar'),
  loading: Loading,
});

const Onarim_Servisi = Loadable({
  loader: () => import('./views/Ana_Veriler/Onarim_Servisi'),
  loading: Loading,
});
const Sigorta_Sirketi = Loadable({
  loader: () => import('./views/Ana_Veriler/Sigorta_Sirketi'),
  loading: Loading,
});

const Arac_Marka = Loadable({
  loader: () => import('./views/Ana_Veriler/Arac_Marka'),
  loading: Loading,
});

const Arac_Kullanim_Sekli = Loadable({
  loader: () => import('./views/Ana_Veriler/Arac_Kullanim_Sekli'),
  loading: Loading,
});

const Arac_Rengi = Loadable({
  loader: () => import('./views/Ana_Veriler/Arac_Rengi'),
  loading: Loading,
});

const Hesap_Grubu = Loadable({
  loader: () => import('./views/Ana_Veriler/Hesap_Grubu'),
  loading: Loading,
});

const Hesap_Turu = Loadable({
  loader: () => import('./views/Ana_Veriler/Hesap_Turu'),
  loading: Loading,
});

const BekleyenTespitler = Loadable({
  loader: () => import('./views/Eksper/BekleyenTespitler'),
  loading: Loading,
});

const TamamlanmisTespitler = Loadable({
  loader: () => import('./views/Eksper/TamamlanmisTespitler'),
  loading: Loading,
});

const Kullanici_Listesi = Loadable({
  loader: () => import('./views/Sistem_Yonetimi/Kullanicilar/Kullanici_Listesi'),
  loading: Loading,
});
const Kullanici_Duzenle = Loadable({
  loader: () => import('./views/Sistem_Yonetimi/Kullanicilar/Kullanici_Duzenle'),
  loading: Loading,
});
const Kullanici_Ekle = Loadable({
  loader: () => import('./views/Sistem_Yonetimi/Kullanicilar/Kullanici_Ekle'),
  loading: Loading,
});

const Sirketler = Loadable({
  loader: () => import('./views/Sistem_Yonetimi/Sirketler'),
  loading: Loading,
});
const Profil = Loadable({
  loader: () => import('./views/Profil/Profil'),
  loading: Loading,
});
const Profili_Duzenle = Loadable({
  loader: () => import('./views/Profil/Profili_Duzenle'),
  loading: Loading,
});
const hasarAyrinti = Loadable({
  loader: () => import('./views/hasar_yonetimi/hasar_ayrinti'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Anasayfa', component: DefaultLayout },
  { path: '/dashboard', name: '', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/hasar_yonetimi/hasar_ayrinti', name: 'Hasar Ayrıntı', component: hasarAyrinti },

  { path: '/Islem_detay', name: 'Islem_detay', component: Islem_detay },

  { path: '/Profil/Profil', name: 'Profil', component: Profil },
  { path: '/Profil/Profili_Duzenle', name: 'Profili_Duzenle', component: Profili_Duzenle },

  { path: '/Ana_Veriler/Onarim_Servisi', exact: true, name: 'Onarım Servisi', component: Onarim_Servisi },
  { path: '/Ana_Veriler/Onarim_Servisi', name: 'Onarım Servisi', component: Onarim_Servisi },


  { path: '/Ana_Veriler/Sigorta_Sirketi', exact: true, name: 'Sigorta Şirketi', component: Sigorta_Sirketi },
  { path: '/Ana_Veriler/Sigorta_Sirketi', name: 'Sigorta Şirketi', component: Sigorta_Sirketi },

  { path: '/Ana_Veriler/Arac_Marka', exact: true, name: 'Araç Marka', component: Arac_Marka },
  { path: '/Ana_Veriler/Arac_Marka', name: 'Araç Marka', component: Arac_Marka },


  { path: '/Ana_Veriler/Onarim_Servisi', exact: true, name: 'Onarım Servisi', component: Onarim_Servisi },
  { path: '/Ana_Veriler/Onarim_Servisi', name: 'Onarım Servisi', component: Onarim_Servisi },


  { path: '/Ana_Veriler/Arac_Kullanim_Sekli', exact: true, name: 'Araç Kullanım Şekli', component: Arac_Kullanim_Sekli },
  { path: '/Ana_Veriler/Arac_Kullanim_Sekli', name: 'Araç Kullanım Şekli', component: Arac_Kullanim_Sekli },

  { path: '/Ana_Veriler/Arac_Rengi', exact: true, name: 'Araç Rengi', component: Arac_Rengi },
  { path: '/Ana_Veriler/Arac_Rengi', name: 'Araç Rengi', component: Arac_Rengi },


  { path: '/Ana_Veriler/Hesap_Grubu', exact: true, name: 'Hesap Grubu', component: Hesap_Grubu },
  { path: '/Ana_Veriler/Hesap_Grubu', name: 'Hesap Grubu', component: Hesap_Grubu },

  { path: '/Ana_Veriler/Hesap_Turu', exact: true, name: 'Hesap Türü', component: Hesap_Turu },
  { path: '/Ana_Veriler/Hesap_Turu', name: 'Hesap Türü', component: Hesap_Turu },

  { path: '/Eksper/BekleyenTespitler', exact: true, name: 'Bekleyen Tespitler', component: BekleyenTespitler },
  { path: '/Eksper/BekleyenTespitler', name: 'Bekleyen Tespitler', component: BekleyenTespitler },


  { path: '/Eksper/TamamlanmisTespitler', exact: true, name: 'Tamamlanmış Tespitler', component: TamamlanmisTespitler },
  { path: '/Eksper/TamamlanmisTespitler', name: 'Tamamlanmış Tespitler', component: TamamlanmisTespitler },


  { path: '/Sistem_Yonetimi/Kullanicilar/Kullanici_Listesi', exact: true, name: 'Kullanıcı Listesi', component: Kullanici_Listesi },
  { path: '/Sistem_Yonetimi/Kullanicilar/Kullanici_Listesi', name: 'Kullanıcı Listesi', component: Kullanici_Listesi },

  { path: '/Sistem_Yonetimi/Kullanicilar/Kullanici_Duzenle', exact: true, name: 'Kullanıcı Düzenle', component: Kullanici_Duzenle },
  { path: '/Sistem_Yonetimi/Kullanicilar/Kullanici_Duzenle', name: 'Kullanıcı Düzenle', component: Kullanici_Duzenle },
  
  { path: '/Sistem_Yonetimi/Kullanicilar/Kullanici_Ekle', exact: true, name: 'Kullanıcı Ekle', component: Kullanici_Ekle },
  { path: '/Sistem_Yonetimi/Kullanicilar/Kullanici_Ekle', name: 'Kullanıcı Ekle', component: Kullanici_Ekle },

  { path: '/Sistem_Yonetimi/Sirketler', exact: true, name: 'Şirketler', component: Sirketler },
  { path: '/Sistem_Yonetimi/Sirketler', name: 'Şirketler', component: Sirketler },



  { path: '/Sistem_Yonetimi/Eksper/Eksper_listesi', exact: true, name: 'Eksper Listesi', component: Eksper_listesi },
  { path: '/Sistem_Yonetimi/Eksper/Eksper_listesi', name: 'Eksper Listesi', component: Eksper_listesi },


  { path: '/Sistem_Yonetimi/Eksper/Eksper_ekle', exact: true, name: 'Eksper Ekle', component: Eksper_ekle },
  { path: '/Sistem_Yonetimi/Eksper/Eksper_ekle', name: 'Eksper Ekle', component: Eksper_ekle },


  { path: '/hasar_yonetimi/yeni_hasar', exact: true, name: 'Yeni Hasar', component: yeni_hasar },
  { path: '/hasar_yonetimi/yeni_hasar', name: 'Yeni Hasar', component: yeni_hasar },

  { path: '/Merkez_Ayarlar', exact: true, name: 'Merkez_Ayarlar', component: Merkez_Ayarlar },
  { path: '/Merkez_Ayarlar', name: 'Merkez_Ayarlar', component: Merkez_Ayarlar },

  { path: '/hasar_yonetimi', exact: true, name: 'Hasar Yönetimi', component: hasar_yonetimi },
  { path: '/hasar_yonetimi', name: 'Hasar Yönetimi', component: hasar_yonetimi },




  { path: '/Raporlar', exact: true, name: 'Raporlar', component: Raporlar },
  { path: '/Raporlar', name: 'Raporlar', component: Raporlar },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
