StartTest(function (t) {

    var cb = new Ext.form.Checkbox({
        xtype      : 'checkbox',
        fieldLabel : 'Label',
        boxLabel   : 'Search Both',
        renderTo   : Ext.getBody()
    });

    t.firesOnce(cb, 'click');
    t.firesOnce(cb, 'dblclick');
    t.firesOnce(cb, 'contextmenu');

    t.chain(
        { click : cb },

        function (next) {
            t.ok(cb.getValue(), 'Checkbox should be checked after clicking it');

            next()
        },

        { waitFor : 500 },
        { rightclick : cb },

        { waitFor : 500 },
        { dblclick : cb }
    );
});
