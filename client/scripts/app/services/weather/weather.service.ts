import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

let apiUrl = 'http://beta.randomapi.com/api/el3rc6as?key=2D3S-2MX2-EHXY-DDF6';

@Injectable()
export class Weather {

  col1 = '#644749';
  col2 = '#b1695a';
  col3 = '#db9864';
  col4 = '#e3bb88';

  droplets = [
      { offset: 0   },
      { offset: 0.2 },
      { offset: 0.4 },
      { offset: 0.6 },
      { offset: 0.8 }
  ];

  tabs: any;

  constructor(private http: Http) {

    this.tabs = [

    {
      ypos: 0.5,
      bgcolor: this.col1,
      suncolor: this.col3,
      mooncolor: this.col2,
      cloudcolor: this.col3,
      cloudopacity: 1,
      snowflakeColor: this.col4,
      dropletcolor: this.col4,
      runDroplets: true,
      runSnowflakes: true
    }, {
      ypos: 0.3334,
      bgcolor: this.col2,
      suncolor: this.col1,
      mooncolor: this.col1,
      cloudcolor: this.col4,
      dropletcolor: this.col3,
      runDroplets: true,
      runSnowflakes: false,
      snowflakeColor: this.col3
    }, {
      ypos: 0.1667,
      bgcolor: this.col3,
      suncolor: this.col2,
      mooncolor: this.col1,
      cloudcolor: this.col1,
      dropletcolor: this.col4,
      runDroplets: false,
      runSnowflakes: false,
      snowflakeColor: this.col4
    }, {
      ypos: 0,
      bgcolor: this.col4,
      suncolor: this.col3,
      mooncolor: this.col1,
      cloudcolor: this.col2,
      dropletcolor: this.col3,
      runDroplets: false,
      runSnowflakes: false,
      snowflakeColor: this.col3
    }
    ];
  }

  getWeather(): Observable <Array <any>> {
    return this.http
    .get(apiUrl)
    .map((res: Response): Array <any> => {
      let dayData = res.json().results[0].days;
      return dayData.map((day, index) => Object.assign({}, day, this.tabs[index]));
      });
  };
}