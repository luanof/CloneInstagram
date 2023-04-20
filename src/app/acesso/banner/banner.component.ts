import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import Imagens from 'src/app/interface/animationImage.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner', [
      state(
        'escondido',
        style({
          opacity: 0,
        })
      ),
      state(
        'visivel',
        style({
          opacity: 1,
        })
      ),
      transition('escondido <=> visivel', animate('1s')),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  Imagens: Imagens[] = [
    { estado: 'visivel', url: '../../../assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_5.png' },
  ];
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => this.rotacao(), 3000);
  }

  rotacao(): void {
    let index: number = 0;
    for (const item in this.Imagens) {
      if (this.Imagens[item].estado === 'visivel') {
        this.Imagens[item].estado = 'escondido';
        index = Number(item);
        index = index == 4 ? -1 : index;
        break;
      }
    }

    if (this.Imagens[index + 1].estado === 'escondido')
      this.Imagens[index + 1].estado = 'visivel';
    setTimeout(() => this.rotacao(), 3000);
  }
}
