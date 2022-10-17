import {Component, Input, OnInit} from '@angular/core';
import {LinkItem} from './link-item';

@Component({
  selector: 'app-feature-link',
  template: `
    <a *ngIf="item" [href]=item.url class="nav-link feature-link-item d-flex flex-grow-1 flex-column align-items-center">
    <span class="py-2 bg-light-{{style}} bg-hover-{{style}}">
        <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Movie-Lane2.svg-->
        <span [inlineSVG]=item.icon
              class="svg-icon svg-icon-{{style}} svg-icon-3x d-block my-12 mx-15"></span>
      <!--end::Svg Icon-->
    </span>
      <span class="font-size-sm pt-2 mt-3 text-hover-primary title text-center kt-link">{{item.title}}</span>
    </a>
  `,
  styleUrls: ['./feature-link.component.scss']
})
export class FeatureLinkComponent implements OnInit {

  @Input() item: LinkItem;

  constructor() {
  }

  get style(): string {
    return this.item.style ? this.item.style : 'primary';
  }

  ngOnInit(): void {
  }
}
