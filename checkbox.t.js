StartTest(function (t) {

    var cb = new Ext.form.Checkbox({
        xtype      : 'checkbox',
        fieldLabel : 'Label',
        boxLabel   : 'Search Both',
        renderTo   : Ext.getBody()
    });

    t.chain(
        { click : cb },

        function (next) {
            t.ok(cb.getValue(), 'Checkbox should be checked after clicking it');

            next()
        },

        { waitFor : 500 },

        { click : 'checkbox => label' },

        function (next) {
            t.notOk(cb.getValue(), 'Checkbox should react to clicks on its label');
        }
    );
});
