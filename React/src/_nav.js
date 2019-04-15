export default {
  items: [
    {
      name: 'Anasayfa',
      url: '/dashboard',
      icon: 'icon-home',
      badge: {
        variant: 'info',

      },
    },
    {
      title: true,
      name: '',
      wrapper: {
        element: '',
        attributes: {},
      },
    },



    {
      name: 'Ana Veriler',
      icon: 'icon-drop',
      children: [
        {
          name: 'Onarım Servisi',
          url: '/Ana_Veriler/Onarim_Servisi',
          icon: 'icon-cursor',
        },
        {
          name: 'Sigorta Şirketi',
          url: '/Ana_Veriler/Sigorta_Sirketi',
          icon: 'icon-cursor',
        },
        {
          name: 'Araç Marka',
          url: '/Ana_Veriler/Arac_Marka',
          icon: 'icon-cursor',
        },
        {
          name: 'Araç Kullanım Şekli',
          url: '/Ana_Veriler/Arac_Kullanim_Sekli',
          icon: 'icon-cursor',
        },
        {
          name: 'Araç Rengi',
          url: '/Ana_Veriler/Arac_Rengi',
          icon: 'icon-cursor',
        },
        {
          name: 'Hesap Grubu',
          url: '/Ana_Veriler/Hesap_Grubu',
          icon: 'icon-cursor',
        },

        {
          name: 'Hesap Türü',
          url: '/Ana_Veriler/Hesap_Turu',
          icon: 'icon-cursor',
        },
      ],
    },

    {
      name: 'Hasar Yönetimi',
      icon: 'icon-drop',
      children: [
        {
          name: 'Hasar Tespiti',
          url: '/hasar_yonetimi',
          icon: 'icon-cursor',
        },
      ],
    },

    {
      name: 'Eksper',
      icon: 'icon-drop',
      children: [
        {
          name: 'Bekleyen Tespitler',
          url: '/Eksper/BekleyenTespitler',
          icon: 'icon-cursor',
        },
        {
          name: 'Tamamlanmış Tespitler',
          url: '/Eksper/TamamlanmisTespitler',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Sistem Yönetimi',
      icon: 'icon-drop',
      children: [
        {
          name: 'Şirketler',
          url: '/Sistem_Yonetimi/Sirketler',
          icon: 'icon-cursor',
        },
        {
          name: 'Kullanıcılar',
          url: '/Sistem_Yonetimi/Kullanicilar/Kullanici_Listesi',
          icon: 'icon-cursor',
        },
        {
          name: 'Eksper',
          url: '/Sistem_Yonetimi/Eksper/Eksper_listesi',
          icon: 'icon-cursor',
        },
      ],
    },

  ],
};
