function PersonasController ($scope) {
	// cuerpo...
	$scope.personas=[
		{nombre:"Juan Blanco", telefono:"123456789", direccion:"Calle San Carlos nº10"}
		
	];

	// el scope debe estar siempre con su scope padre, por tanto dentro de el.

	$scope.Save = function(){
		$scope.personas.push({nombre:$scope.nuevaPersona.nombre,
			telefono:$scope.nuevaPersona.telefono, 
			direccion: $scope.nuevaPersona.direccion});
	$scope.formVisibility=false;
	console.log($scope.formVisibility)
	}
$scope.formVisibility = false;
$scope.ShowForm = function(){
		$scope.formVisibility = true;
		console.log($scope.formVisibility)
	}
}