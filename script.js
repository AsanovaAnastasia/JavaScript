const musicCollection = [
    {
        title: 'Day of the Dead',
        artist: 'Hollywood Undead',
        year: '2015'
    },

    {
        title: 'Dead by April',
        artist: 'Dead by April',
        year: '2009'
    },

    {
        title: 'From Zero',
        artist: 'Linkin Park',
        year: '2024'
    }
];

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: musicCollection[this.current++] }
                : { done: true };
        }
    }
}

for (const albom of musicCollection) {
    console.log(`Название альбома: ${albom.title}. Исполнитель: ${albom.artist}. Год выпуска: ${albom.year}`);
}