// phone-detail.component.js
'use strict';

angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'src/js/phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', function PhoneDetailController($routeParams, Phone) {
        var self = this;

        self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
            self.setImage(phone.images[0]);
        });

        self.setImage = function (imageUrl) {
            self.mainImageUrl = imageUrl;
        };
    }]
});

//# sourceMappingURL=phone-detail.component-compiled.js.map