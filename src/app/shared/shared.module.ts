import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { TrimPipe } from './pipes/trim.pipe';

const COMPONENTS = [
  CardComponent
];
const PIPES = [
  TrimPipe
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS, ...PIPES]
})
export class SharedModule { }
