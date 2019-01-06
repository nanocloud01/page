(function(){
    function nombrar(nombre) {
        return nombre;
    }

    function saludar(nombre) {
        console.info(nombre, ', Hola campeón');
    }

    saludar(nombrar('Nano'));

})();