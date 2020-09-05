(function(){

    const miFuncion = function( a: string ){
        return a.toUpperCase();
    }

    const miFuncionF = ( a: string ) => a.toUpperCase();

    console.log( miFuncion('Normal') );
    console.log( miFuncionF('Flecha') );

    const sumarN = function( a: number, b: number){
        return a + b;
    }

    const sumarF = ( a: number, b:number) => a+b;

    console.log( sumarN(1,3) );
    console.log( sumarF(2,5) );

    const hulk = {
        nombre: 'Hulk',
        smash(){

            setTimeout( () => {
                console.log(`${ this.nombre } smash!!`);
            }, 1000 );

        }
    }

    hulk.smash();
})();



