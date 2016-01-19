
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
            date: 'Torstai 21.1',
            events: [
                { time: '18.00', title: 'Kisakylä aukeaa' },
                { time: '', title: 'Talkooväen ilmottautuminen' },
                { time: '', title: 'Majoituspakettien lunastus' },
                { time: '20.00', title: 'Talkooväen käskynjakosauna' }
            ]
        },

        {
            date: 'Perjantai 22.1 ',
            events: [
                { time: '12.00', title: 'Akklimatisoituminen alppimajalla' },
                { time: '15.00', title: 'Atleettien akkredointi' },
                { time: '', title: 'Kisapassien nouto' },
                { time: '18.00', title: 'Tervetulolöylyt', place: 'Lempi puusauna' },
                { time: '20.50', title: 'Olympicks-tulen sytytys' },
                { time: '20.55', title: 'Olympicks-atleetin vala' },
                { time: '21.00', title: 'Alkusanat + cocktail-tilaisuus' }
            ]
        },

        {
            date: 'Lauantai 23.1',
            events: [
                { time: '9.00', title: 'Aamupalabrunssi', place: 'Kisakylän päärakennus' },
                { time: '11.45', title: 'Kisojen avajaisfanfaari' },
                { time: '12.00', title: 'Avauslaji: Kaljakorin heitto', place: 'Kuirila Olympick Center', icon: 'kaljakori' },
                { time: '13.00', title: 'Ampumahiihto', place: 'Biathlon Stadium Stonebeach', icon: 'biathlon' },
                { time: '14.00', title: '30m Kalja', place: 'Terrafame Environment Arena', icon: '30m-beer' },
                { time: '15.00', title: 'Mäkihyppy K10', place: 'Garmisch-Ramppankirchen', icon: 'makihyppy' },
                { time: '17.00', title: 'Palkintojen jako ja Marathonsauna', place: 'Lempi savusauna', icon: 'palkintojenjako' }
            ]
        },

        {
            date: 'Sunnuntai 24.1',
            events: [
                { time: '01.00', title: 'Mitalistien lehdistötilaisuus', place: 'Anniskeluravintola Kantis' },
                { time: '9.00', title: 'Palauttelubrunssi', place: 'Kisakylän päärakennus' },
                { time: '12.00', title: 'Päätöspalaveri' },
                { time: '13.00', title: 'Järjestelytoimikunta' },
                { time: '16.00', title: 'Kisakylä sulkeutuu' }
            ]
        }
    ];


    $scope.init = function init() {

        // Init the flipclockcounter (through global scope)
        var START_TIME = '2016-01-22 15:00';
        if (moment().isBefore(moment(START_TIME))) {
            // show the counter only if the start time is in the future
            // (the flipclock kind of explodes otherwise)
            setCounter(START_TIME);
        }


        // Fetch Instagram photos
        apiService.getInstagameFeed()
        .then(
            function success(data) {
                $scope.images = data.images;
                $scope.tags = data.tags;
                $scope.cumulativeLikes = data.cumulativeLikes;
            },
            function error(error) {
                console.log('Error while fetching Instagame data', error);
            }
        );
    };
}]);
