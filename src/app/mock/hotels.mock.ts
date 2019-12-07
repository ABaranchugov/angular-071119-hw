import {IHotels} from '../weather-widget/models/hotels.model';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

export const hotels: IHotels = [
  {
    img: '2/n1.jpeg',
    address: '939 Box Street, Saddlebrooke, California, 1068',
    phone: 841888255190,
    weather: {
      title: 'rain',
      icon: 'icons/rain.svg',
      water: 23,
      temperature: 31
    },
    social_info: {
      title: 'Ovolo Assitia',
      img: '1/a1.jpeg',
      followers: 999,
      following: 155
    },
    type: 'California'
  },
  {
    img: '2/n2.jpeg',
    address: '166 Jay Street, Gardiner, California, 4635',
    phone: 984628463963,
    weather: {
      title: 'rain',
      icon: 'icons/rain.svg',
      water: 21,
      temperature: 27
    },
    social_info: {
      title: 'Eschoir Kneedles',
      img: '1/a2.jpeg',
      followers: 748,
      following: 103
    },
    type: 'California'
  },
  {
    img: '2/n3.jpeg',
    address: '393 Barwell Terrace, Windsor, Arizona, 9829',
    phone: 774064903360,
    weather: {
      title: 'rain',
      icon: 'icons/rain.svg',
      water: 22,
      temperature: 32
    },
    social_info: {
      title: 'Pivitol Caxt',
      img: '1/a3.jpeg',
      followers: 949,
      following: 116
    },
    type: 'Arizona'
  },
  {
    img: '2/n4.jpeg',
    address: '574 Montague Terrace, Bancroft, California, 5697',
    phone: 853431203778,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 21,
      temperature: 29
    },
    social_info: {
      title: 'Immunics Fortean',
      img: '1/a4.jpeg',
      followers: 710,
      following: 172
    },
    type: 'California'
  },
  {
    img: '2/n5.jpeg',
    address: '645 Irvington Place, Waterloo, California, 6126',
    phone: 313673008682,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 23,
      temperature: 28
    },
    social_info: {
      title: 'Eyeris Grok',
      img: '1/a5.jpeg',
      followers: 745,
      following: 72
    },
    type: 'California'
  },
  {
    img: '2/n6.jpeg',
    address: '166 Terrace Place, Salix, Tennessee, 5084',
    phone: 768189437926,
    weather: {
      title: 'rain',
      icon: 'icons/rain.svg',
      water: 24,
      temperature: 27
    },
    social_info: {
      title: 'Zilch Scenty',
      img: '1/a6.jpeg',
      followers: 853,
      following: 123
    },
    type: 'Tennessee'
  },
  {
    img: '2/n7.jpeg',
    address: '303 Sullivan Place, Mooresburg, Connecticut, 6071',
    phone: 816371972760,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 22,
      temperature: 29
    },
    social_info: {
      title: 'Farmex Sybixtex',
      img: '1/a7.jpeg',
      followers: 612,
      following: 127
    },
    type: 'Connecticut'
  },
  {
    img: '2/n8.jpeg',
    address: '211 Lyme Avenue, Freeburn, Arizona, 6760',
    phone: 944619170242,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 21,
      temperature: 31
    },
    social_info: {
      title: 'Eventex Xth',
      img: '1/a8.jpeg',
      followers: 631,
      following: 90
    },
    type: 'Arizona'
  },
  {
    img: '2/n9.jpeg',
    address: '970 Thomas Street, Fairforest, Connecticut, 9098',
    phone: 728683474491,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 24,
      temperature: 28
    },
    social_info: {
      title: 'Snips Idego',
      img: '1/a9.jpeg',
      followers: 634,
      following: 127
    },
    type: 'Connecticut'
  },
  {
    img: '2/n10.jpeg',
    address: '468 Commerce Street, Jugtown, California, 9143',
    phone: 564184690840,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 24,
      temperature: 27
    },
    social_info: {
      title: 'Uberlux Overplex',
      img: '1/a10.jpeg',
      followers: 906,
      following: 124
    },
    type: 'California'
  },
  {
    img: '2/n11.jpeg',
    address: '593 Garden Street, Rosine, Arizona, 2047',
    phone: 299492631493,
    weather: {
      title: 'rain',
      icon: 'icons/rain.svg',
      water: 22,
      temperature: 31
    },
    social_info: {
      title: 'Netropic Tsunamia',
      img: '1/a11.jpeg',
      followers: 501,
      following: 128
    },
    type: 'Arizona'
  },
  {
    img: '2/n12.jpeg',
    address: '745 Bowne Street, Crenshaw, California, 9082',
    phone: 810757140950,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 24,
      temperature: 30
    },
    social_info: {
      title: 'Norsul Daycore',
      img: '1/a12.jpeg',
      followers: 905,
      following: 157
    },
    type: 'California'
  },
  {
    img: '2/n13.jpeg',
    address: '198 Cook Street, Kingstowne, Connecticut, 134',
    phone: 566524265219,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 19,
      temperature: 31
    },
    social_info: {
      title: 'Biotica Geeky',
      img: '1/a13.jpeg',
      followers: 618,
      following: 53
    },
    type: 'Connecticut'
  },
  {
    img: '2/n14.jpeg',
    address: '680 Hastings Street, Davenport, Tennessee, 6254',
    phone: 567429920662,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 19,
      temperature: 32
    },
    social_info: {
      title: 'Cuizine Artworlds',
      img: '1/a14.jpeg',
      followers: 670,
      following: 176
    },
    type: 'Tennessee'
  },
  {
    img: '2/n15.jpeg',
    address: '241 McKibben Street, Lupton, Tennessee, 8801',
    phone: 747806576148,
    weather: {
      title: 'clouds',
      icon: 'icons/clouds.svg',
      water: 25,
      temperature: 27
    },
    social_info: {
      title: 'Applica Earthplex',
      img: '1/a15.jpeg',
      followers: 821,
      following: 177
    },
    type: 'Tennessee'
  },
  {
    img: '2/n16.jpeg',
    address: '253 Bath Avenue, Lewis, Arizona, 2271',
    phone: 191886384143,
    weather: {
      title: 'rain',
      icon: 'icons/rain.svg',
      water: 25,
      temperature: 30
    },
    social_info: {
      title: 'Quiltigen Imant',
      img: '1/a16.jpeg',
      followers: 778,
      following: 162
    },
    type: 'Arizona'
  },
  {
    img: '2/n17.jpeg',
    address: '845 Moore Place, Groveville, Arizona, 7607',
    phone: 710863369771,
    weather: {
      title: 'clouds',
      icon: 'icons/clouds.svg',
      water: 25,
      temperature: 28
    },
    social_info: {
      title: 'Flyboyz Gynk',
      img: '1/a17.jpeg',
      followers: 727,
      following: 167
    },
    type: 'Arizona'
  },
  {
    img: '2/n18.jpeg',
    address: '688 Henderson Walk, Comptche, California, 6386',
    phone: 349534850023,
    weather: {
      title: 'clouds',
      icon: 'icons/clouds.svg',
      water: 22,
      temperature: 32
    },
    social_info: {
      title: 'Aquasseur Rockyard',
      img: '1/a18.jpeg',
      followers: 788,
      following: 118
    },
    type: 'California'
  },
  {
    img: '2/n19.jpeg',
    address: '317 Garfield Place, Barclay, Arizona, 5541',
    phone: 306601947959,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 23,
      temperature: 31
    },
    social_info: {
      title: 'Elpro Kaggle',
      img: '1/a19.jpeg',
      followers: 929,
      following: 171
    },
    type: 'Arizona'
  },
  {
    img: '2/n20.jpeg',
    address: '236 Flatlands Avenue, Eden, Missouri, 7837',
    phone: 484372221403,
    weather: {
      title: 'sun',
      icon: 'icons/sun.svg',
      water: 20,
      temperature: 31
    },
    social_info: {
      title: 'Imageflow Translink',
      img: '1/a20.jpeg',
      followers: 804,
      following: 186
    },
    type: 'Missouri'
  }
];

export function getHotels$(): Observable<IHotels> {
  return of(hotels)
    .pipe(
      delay(2000)
    );
}
