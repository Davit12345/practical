import {Component, OnInit} from '@angular/core';
import {ShortenService} from 'src/app/services/shorten.service';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss']
})
export class ShortenComponent implements OnInit {
  public responseData: any = null;
  link: any;
  errorText: string = '';

  constructor(private _shortenService: ShortenService) {
  }

  ngOnInit(): void {
  }

  public doShorten() {
    this.responseData = null;
    this.errorText = '';

    if (this.link) {
      this._shortenService.getData(this.link)
        .subscribe(
          res => {
            if (res.ok) {
              this.link = '';
              this.responseData = res.result
            }
          },
          err => {
            this.errorText=err.error.error?err.error.error:'This is not a valid URL, for more infos see shrtco.de/docs 2';
            // alert()
          }
        );
    } else {
      this.errorText='Pleas fill the field'

      // alert('Pleas fill input field')
    }
  }

  changeInput() {
    this.errorText = '';
  }

  getRoutingLink(link:string){
    console.log('//'+link)
    return '//'+link
  }
}
