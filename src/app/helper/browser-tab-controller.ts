'use strict';

class BrowserTabController implements EventListenerObject {

    private readonly id = Math.random();
    private callbacks: { [key: string]: Array<(data) => void> } = {};

    constructor() {
        window.addEventListener('storage', this, false);
        window.addEventListener('unload', this, false);
    }

    handleEvent(event) {
        if (event.type === 'unload') {
            this.destroy();
        } else if (event.key === 'broadcast') {
            try {
                const data = JSON.parse(event.newValue);
                if (data.id !== this.id) {
                    if (typeof this[data.type] === 'function') {
                        this[data.type](data);
                        return;
                    }

                    if (this.callbacks[data.type]) {
                        this.callbacks[data.type].forEach(fn => fn(data));
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    destroy() {
        window.removeEventListener('storage', this, false);
        window.removeEventListener('unload', this, false);
    }

    private _broadcast(type, data?) {
        const event = {
            id: this.id,
            data: undefined,
            type
        };

        if (data) {
            event.data = data;
        }

        try {
            localStorage.setItem('broadcast', JSON.stringify(event));
        } catch (error) {
            console.log(error);
        }
    }

    broadcast(type, data?) {
        if (typeof this[type] === 'function') {
            throw Error('Reserved events');
        }

        this._broadcast(type, data);
    }


    on(name: string, callback: (data) => void) {
        if (typeof this[name] === 'function') {
            throw new Error('Reserved callback');
        }

        if (typeof this.callbacks[name] === 'undefined') {
            this.callbacks[name] = [];
        }

        this.callbacks[name][this.callbacks[name].length] = callback;

        return this;
    }

    off(name: string, callback?: (data) => void) {
        if (this.callbacks[name] === undefined) {
            return;
        }

        if (callback === undefined || callback === null) {
            delete this.callbacks[name];
        } else {
            const index = this.callbacks[name].indexOf(callback, 0);
            if (index > -1) {
                this.callbacks[name].splice(index, 1);
            }
        }
    }
}

export default new BrowserTabController();
