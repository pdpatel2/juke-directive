juke.directive('songList', function(PlayerFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/song/song.html',
		scope: {
			songs: '='
		},
		link: function(scope) {
			console.log("scope.songs", scope.songs)
			scope.getCurrentSong = PlayerFactory.getCurrentSong;
			scope.toggle = PlayerFactory.toggle;
			scope.isPlaying = PlayerFactory.isPlaying;
			
		}
	}
})