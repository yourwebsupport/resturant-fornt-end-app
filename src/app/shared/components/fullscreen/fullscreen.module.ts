import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFullscreenComponent } from './fullscreen.component';
import { CommonModule } from '@angular/common';
import {InlineSVGModule} from "ng-inline-svg-2";


@NgModule({
    declarations: [
        FuseFullscreenComponent
    ],
    imports: [
        MatTooltipModule,
        CommonModule,
        InlineSVGModule

    ],
    exports     : [
        FuseFullscreenComponent
    ]
})
export class FuseFullscreenModule
{
}
