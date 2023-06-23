const mayorMenor = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

const quickSort = (array,ordenar = mayorMenor) => {
    const arraynew = [...array];
    const ordenarElementos = (array1, i, j) => {
        const x = array1[i];
        array1[i] = array1[j];
        array1[j] = x;
    };
    const particion = (array2, inicio, fin) => {
        const pivote = array2[fin];
        let divicion = inicio;
        for (let j = inicio; j <= fin - 1; j++) {
            const ordenarValor = ordenar(array2[j], pivote);
            if (ordenarValor === -1) {
            ordenarElementos(array2, divicion, j);
            divicion++;
            }
        }
        ordenarElementos(array2, divicion, fin);
        return divicion;
    };
    const recursiva = (array3, start, end) => {
        if (start < end) {
            const posicionPivote = particion(array3, start, end);
            recursiva(array3, start, posicionPivote - 1);
            recursiva(array3, posicionPivote + 1, end);
        }
    };
    recursiva(arraynew, 0, array.length - 1);
    return arraynew;
};
console.log(quickSort([8,3,7,5,6,4,1,2,9]));