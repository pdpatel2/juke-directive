juke.directive('songList', function(PlayerFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/song/song.html',
		scope: {
			songs: '=',
			doubleClick: '&'
		},
		link: function(scope) {
			scope.getCurrentSong = PlayerFactory.getCurrentSong;
			scope.toggle = function (song) {
			    if (song !== PlayerFactory.getCurrentSong()) {
			      PlayerFactory.start(song, scope.songs);
			    } else if ( PlayerFactory.isPlaying() ) {
			      PlayerFactory.pause();
			    } else {
			      PlayerFactory.resume();
			    }
			};
			scope.isPlaying = function (song) {
    			return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  			};
		}
	}
});
