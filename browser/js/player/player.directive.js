juke.directive('player', function(PlayerFactory){
	return {
		restrict: 'E',
		templateUrl: '/js/player/player.html',
		link: function(scope) {
			scope.toggle = function() {
	    		if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
    			else PlayerFactory.resume();			
			};
			scope.getPercent = function() {
				return PlayerFactory.getProgress() * 100;
			};
			scope.getCurrentSong = PlayerFactory.getCurrentSong;
			scope.previous = PlayerFactory.previous;
			scope.next = PlayerFactory.next;
			scope.isPlaying = PlayerFactory.isPlaying;
		}
	}
})