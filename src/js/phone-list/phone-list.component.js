// phone-list.component.js
'use strict';

angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: '/tpl/phone-list.template.html',
        controller: ['Phone',
            function PhoneListController(Phone) {
                this.phones = Phone.query();
                this.orderProp = 'age';
            }
        ]
    });