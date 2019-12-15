import { Component, OnInit, Input } from '@angular/core';
import { ICard } from 'src/app/shared/models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'msa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  safeDescriptionHtml: SafeHtml;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeDescriptionHtml = this.sanitizer.bypassSecurityTrustHtml(this.card.description);
  }
}
