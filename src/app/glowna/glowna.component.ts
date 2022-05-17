import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-glowna',
  templateUrl: './glowna.component.html',
  styleUrls: ['./glowna.component.css']
})
export class GlownaComponent implements OnInit {

  isLoggedIn=false;
  user=null;

  constructor(public login:LoginService) { }
  
  images =[
    {
      imageSrc:'https://www.konferencje.pl/media/cache/resolve/collage_hq/1/5/2/8/152842f7ba87e6f1c96f559b254b2f0c.jpg',
      imageAlt:'sala1'
    },
    {
      imageSrc:'http://www.confero.pl/content/img/mdc/36065.jpg',
      imageAlt:'sala2'
    },
    {
      imageSrc:'https://samequizy.pl/wp-content/uploads/2021/04/20/images_ef55a3cec90c.jpg',
      imageAlt:'sala3'
    },
    {
      imageSrc:'https://csn.naekranie.pl//wp-content/uploads/2019/04/14_wiedzmin_od_netfliksa_pierwsze_sceny_i_fotografie_kaer_morhen_0_b_5cac493ac55c6.jpeg',
      imageAlt:'sala4'
    },
    {
      imageSrc:'https://assets.reedpopcdn.com/144959154208.jpg/BROK/thumbnail/1200x900/quality/100/144959154208.jpg',
      imageAlt:'sala5'
    },
    {
      imageSrc:'http://www.confero.pl/content/img/mdc/36065.jpg',
      imageAlt:'sala6'
    },
  ]
  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.login.isLoggedIn();
      this.user=this.login.getUser();
    });
  }
  
}
