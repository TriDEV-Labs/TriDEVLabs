import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-works',
  templateUrl: './section-works.component.html',
  styleUrls: ['./section-works.component.css'],
})
export class SectionWorksComponent implements OnInit {
  showMoreConteiner: boolean = false;
  showMoreLeitura: boolean = false;
  showMoreScore: boolean = false;
  showMoreMaridao: boolean = false;
  btnShow: string = 'Mostrar Mais';
  leituraTxt: string = 'Ler Mais';
  scoreTxt: string = 'Ler Mais';
  maridaoTxt: string = 'Ler Mais';

  constructor() {}

  ngOnInit(): void {}
  show_more() {
    if (this.showMoreConteiner == false) {
      this.showMoreConteiner = true;
      this.btnShow = 'Mostrar Menos';
    } else {
      this.showMoreConteiner = false;
      this.btnShow = 'Mostrar Mais';
    }
  }

  show_more_txt(how: string) {
    switch (how) {
      case 'maridao':
        this.showMoreMaridao = !this.showMoreMaridao;
        this.maridaoTxt = this.showMoreMaridao ? 'Ler Menos' : 'Ler Mais';
        break;
      case 'score':
        this.showMoreScore = !this.showMoreScore;
        this.scoreTxt = this.showMoreScore ? 'Ler Menos' : 'Ler Mais';
        break;
      case 'leitura':
        this.showMoreLeitura = !this.showMoreLeitura;
        this.leituraTxt = this.showMoreLeitura ? 'Ler Menos' : 'Ler Mais';
        break;
    }
  }
}
