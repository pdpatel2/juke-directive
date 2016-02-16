juke.directive('albumList', function(){
	return {
		restrict: 'E',
		templateUrl: '/js/album/album-list.html',
		scope: {
			albums: '='
		}
	}
})