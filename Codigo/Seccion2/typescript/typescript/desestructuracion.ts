(()=>{

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }

    const extraer = ( {nombre, clave, poder}: any ) => {

        // const { nombre, clave, poder } = avenger;

        console.log( nombre );
        console.log( clave );
        console.log( poder );

    }

    extraer( avenger );

    const avengers: string[] = ['Thor','Ironman','Spiderman'];

    const [ thor, ironman, spiderman ] = avengers

    console.log( thor );
    console.log( ironman );
    console.log( spiderman );

    const extraerArr = ( [thor, ironman, spiderman]: string[] ) => {

        // const [ thor, ironman, spiderman ] = avengers

        console.log( thor );
        console.log( ironman );
        console.log( spiderman );

    }

})();