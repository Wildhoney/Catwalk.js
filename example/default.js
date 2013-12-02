(function($catwalk, $cats, $colours) {

    $colours.addModel({ id: 1, colour: 'Black' });
    $colours.addModel({ id: 2, colour: 'White' });
    $colours.addModel({ id: 3, colour: 'Ginger' });
    $colours.addModel({ id: 4, colour: 'Grey' });

    var model = $cats.addModel({ id: 5, name: 'Kipper', age: 14, colours: [1, 2, 3, 5, 6, 7] });

    $colours.defineEvent('read', function(ids, defer) {
        defer.resolve([{ id: 5, colour: 'Red' }, { id: 6, colour: 'Blue' }]);
    });

    console.log(model.colours);

})(window.catwalk, window.cats, window.colours);