import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLinkComponent } from './feature-link.component';
import {InlineSVGModule} from "ng-inline-svg-2";




@NgModule({
  declarations: [
    FeatureLinkComponent
  ],
  exports: [
    FeatureLinkComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule
  ]
})
export class FeatureLinkModule { }
