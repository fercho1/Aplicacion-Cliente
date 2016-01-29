var c;

function a() {
    c = CryptoJS.MD5((document.getElementById("idUsuario")).value);
    //alert(c);
}




app.controller('HomeController', ['$scope', '$http', function ($scope, $http, c) {
    console.log("Entro al controlador Home");
    $http({
        method: 'GET',
        url: 'http://localhost:1337/Angular/wordlist.html'
    }).then(
        function exitoEnElGuardado(respuesta) {
            console.log(respuesta);


            $scope.dem = function () {
                var myStringArray = respuesta.data;
                var arrayLength = myStringArray.length;
                for (var i = 20000; i < arrayLength; i++) {
                    //alert(myStringArray[10]);
                    //Do something
                    $http({
                        method: 'POST',
                        url: 'http://localhost:1337/Md5/',
                        data: {
                            decifrado: $scope.decifrado=myStringArray[i],
                            cifrado: $scope.cifrado = String(CryptoJS.MD5($scope.decifrado))

                        }
                    }).then(
                        function exitoEnElGuardado(respuesta) {
                            console.log(respuesta);
                            $scope.decifrado = "";

                        },
                        function falloEnElGuardado(error) {
                            console.log(error);
                        });
                }
                //alert(respuesta.data[2])

            }
        },
        function falloEnElGuardado(error) {
            console.log(error);

        });








    $scope.agregarUsuario = agregarUsuario;


    $scope.buscarPorHash = function () {

        $http({
            method: 'GET',
            url: 'http://localhost:1337/Md5?cifrado=' + $scope.searchText
        }).then(
            function exitoEnElGuardado(respuesta) {
                console.log(respuesta);
                $scope.data = respuesta.data;
            },
            function falloEnElGuardado(error) {
                console.log(error);

            });

    }

    $scope.buscar = function () {

        $http({
            method: 'GET',
            url: 'http://localhost:1337/Md5/'
        }).then(
            function exitoEnElGuardado(respuesta) {
                console.log(respuesta);
                $scope.hola = respuesta.data;
            },
            function falloEnElGuardado(error) {
                console.log(error);

            });

    }







    function agregarUsuario() {


        $http({
            method: 'POST',
            url: 'http://localhost:1337/Md5/',
            data: {
                decifrado: $scope.decifrado,
                cifrado: $scope.cifrado = String(CryptoJS.MD5($scope.decifrado))

            }
        }).then(
            function exitoEnElGuardado(respuesta) {
                console.log(respuesta);
                $scope.decifrado = "";

            },
            function falloEnElGuardado(error) {
                console.log(error);
            });
    }








}]);