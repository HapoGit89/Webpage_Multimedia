function shuffle(items) {
    var j, x, i;
    for (i = items.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = items[i];
        items[i] = items[j];
        items[j] = x;
    }
    return items;
}


module.exports = shuffle