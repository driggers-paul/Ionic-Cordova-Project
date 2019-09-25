import { EventEmitter } from '@angular/core';

export type MenuEvents = 'open' | 'close' | 'allow-menu' | 'disallow-menu' | 'navigating';

class SideMenuHandler {
  protected emitter: EventEmitter<MenuEvents>;

  public constructor() {
    this.emitter = new EventEmitter<MenuEvents>();
  }

  public openMenu() {
    this.emitter.emit('open');
  }

  public closeMenu() {
    this.emitter.emit('close');
  }

  public getEmitter(): EventEmitter<MenuEvents> {
    return this.emitter;
  }

  public toggleAllowMenu(value = false) {
    if (value) {
      this.emitter.emit('allow-menu');
    } else {
      this.emitter.emit('disallow-menu');
    }
  }
}

const SideMenuHandlerEmitter = new SideMenuHandler();

export {SideMenuHandlerEmitter};
