(()=>{

    const retirarDinero = ( montoRetirar: number ): Promise<number> => {

        let dineroActual = 1000;

        return new Promise( (resolve, reject) => {

            if( montoRetirar > dineroActual ){
                reject('No hay suficiente dinero')
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }

        });

    }

    retirarDinero( 500 )
        .then( montoActual => console.log( 'Me quedan '+montoActual+' Pesos' ) )
        .catch( err => console.warn( err ) ); // O como solo quiero devolver el mensaje del reject() puedo poner console.warn solamente

})();