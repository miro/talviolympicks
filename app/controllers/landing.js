
app.controller('landingController', [
    '$scope', 'apiService',
function(
    $scope, apiService
) {

    // IG related
    $scope.images = [];
    $scope.tags = {};
    $scope.cumulativeLikes = 0;

    $scope.schedule = [
        {
            date: 'Friday 27.1.',
            events: [
                { time: '11.00', title: 'Hotel check-in' },
                { time: '12.00', title: 'Olympicks Village opens' },
                { time: '13.00', title: 'Athlete Accredation', place: 'Event Centre 1' },
                { time: '18.00', title: 'Olympicks-Sauna opens' },
                { time: '21.00', title: 'Talviolympicks MMXVII Opening Ceremony', place: 'Biathlon Stadium Stonebeach' },
                { time: '23.00', title: 'Panel Discussion + Coctail Event', place: 'Restaurant Kanta Krouvi' }
            ]
        },

        {
            date: 'Saturday 28.1',
            events: [
                { time: '09.00', title: 'Breakfast', place: 'Ramppa\'s Steak House' },
                { time: '10.00', title: 'Athlete Assembly Meeting', place: 'Conference Room 3' },
                { time: '10.55', title: 'Olympicks Anthem and Athletes\' Oath', place: 'Biathlon Stadium Stonebeach' },

                { time: '11.00', title: 'Opening Event: Kaljakorin heitto', place: 'Kuirila Olympick Center', icon: 'kaljakori' },
                { time: '12.00', title: 'Biathlon', place: 'Biathlon Stadium Stonebeach', icon: 'biathlon' },

                { time: '13.00', title: 'Athlete Lunch', place: 'Ristorante Saaremaa' },

                { time: '14.00', title: '30m Beer', place: 'Terrafame Environment Arena', icon: '30m-beer' },
                { time: '15.00', title: 'Mäkihyppy K10', place: 'Garmisch-Ramppankirchen', icon: 'makihyppy' },
                { time: '16.00', title: 'Closing Event: Olympicks Magnitude Beer Bong', place: 'Terrafame Environment Arena' },

                { time: '17.00', title: 'Olympicks-Sauna Opens', place: 'Lempi puusauna' },
                { time: '19.00', title: 'Dinner Buffet', place: 'Kiviranta Cockhouse' },
                { time: '23.00', title: 'Award Ceremony', place: 'Restaurant Kanta Krouvi', icon: 'palkintojenjako' }
            ]
        },

        {
            date: 'Sunday 29.1',
            events: [
                { time: '01.00', title: 'Winners\' Press Conference', place: 'Restaurant Kanta Krouvi' },
                { time: '12.00', title: 'Hotel Check-out' },
                { time: '14.00', title: 'Lost Property -point open' },
                { time: '16.00', title: 'Olympicks Village closes' }
            ]
        }
    ];


    $scope.init = function init() {

        // Init the flipclockcounter (through global scope)
        var START_TIME = '2017-01-27 16:00';
        if (moment().isBefore(moment(START_TIME))) {
            // show the counter only if the start time is in the future
            // (the flipclock kind of explodes otherwise)
            setCounter(START_TIME);
        }


    };
}]);
