import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-oranje',
  templateUrl: './oranje.component.html',
  styleUrls: ['./oranje.component.css']
})

export class OranjeComponent {
  public mainMenuItems = {};
  public subMenuItems = {};
  public subTitle = '';

  /**
   *
   * @param {Http} http
   */
  constructor(private http: Http) {
    this.http.get('assets/megamenu_nl.json').subscribe(res => {
      const data = res.json();

      this.mainMenuItems = data['megamenu']['items'];
    });
  }

  /**
   *
   * @param {{name: string; sub: string[]; subTitle: string}} data
   * @returns {boolean}
   */
  subMenu(data: { name: string, sub: string[], subTitle: string }) {
    if (data.sub.length === 0) {
      return true;
    }

    this.subMenuItems = data.sub;
    this.subTitle = data.subTitle;
    return false;
  }
}


