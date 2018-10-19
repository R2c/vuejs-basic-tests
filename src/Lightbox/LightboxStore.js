class LightboxStore {

    constructor () {
        this.state = {
            images: {},
            currentIndex: null,
            direction: null,
            group: null,
        }
    }

    addImage (url, group) {
        if (this.state.images[group] === undefined) {
            this.state.images[group] = [];
        }
        return this.state.images[group].push(url) - 1;
    }

    removeImage (url, group) {
        this.state.images = this.state.images[group].filter(image => image !== url);
    }

    open (url, group) {
        this.state.group = group;
        this.state.currentIndex = this.state.images[group].findIndex(image => image === url);
    }

    close () {
        this.state.currentIndex = null;
    }

    prev () {
        this.state.direction = 'left';
        this.state.currentIndex--;
        if (this.state.currentIndex < 0) {
            this.state.currentIndex = this.state.images[this.state.group].length - 1;
        }
    }

    next () {
        this.state.direction = 'right';
        this.state.currentIndex++;
        if (this.state.currentIndex >= this.state.images[this.state.group].length) {
            this.state.currentIndex = 0;
        }
    }
}

export default new LightboxStore();
