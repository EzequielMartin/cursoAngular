(()=>{

    const sumar = ( a: number, b: number ): number => a + b;

    const nombre = (): string => 'Hola Eze';

    const obtenerSalario = (): Promise<string> => {

        return new Promise( (resolve, reject)  => {
            resolve('Eze');
        });

    }

    obtenerSalario().then( a => console.log( a.toUpperCase ));

})();