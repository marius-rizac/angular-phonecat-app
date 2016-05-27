// phone-list.component.js
'use strict';

angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: 'src/js/phone-list/phone-list.template.html',
        controller: ['Phone',
            function PhoneListController(Phone) {
                this.phones = Phone.query();
                this.orderProp = 'age';
            }
        ]
    });