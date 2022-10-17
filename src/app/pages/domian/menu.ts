import {isNotEmpty} from '../../helper/string-util';

export class Menu {
  id: number;
  parentId: number;
  title: string;
  routerLink: string;
  href: string;
  target: string;
  icon: string;
  iconType: string;
  active: boolean;
  menuOrder: number;
  role: string;
  translate: string;
  module: string;
}

export class KTMenuItem {
  id: number;
  title: string;
  root: boolean;
  parentId?: number;
  icon?: string;
  type?: string;
  page: string;
  module?: string;
  translate?: string;
  children?: KTMenuItem[];

  constructor(
      id: number,
      title: string,
      root: boolean,
      parentId: number,
      icon: string,
      type: string,
      page: string,
      module: string,
      translate: string) {
    this.id = id;
    this.title = title;
    this.root = root;
    this.parentId = parentId;
    this.icon = icon;
    this.type = type;
    this.page = page;
    this.module = page;
    this.translate = translate;
  }

  get submenu(): KTMenuItem[] {
    return this.hasSubmenu ? this.children : null;
  }

  get hasSubmenu(): boolean {
    return this.children.length > 0;
  }

  get render(): boolean {
    return (isNotEmpty(this.page) || this.hasSubmenu) && isNotEmpty(this.title);
  }
}
