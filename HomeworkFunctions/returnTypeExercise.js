
 // Ovaa najlesnata ja vaka ja sfativ... da ni dade od koj tip se arguments? vaka mi iskaca rezultatot ama nemam arguments staveno
 // ne znam zasto ne mi iskoci so arguments, sigurno nesto gresno pravam

function dataType1() {
    result = typeof ((new Object())); 
    console.log(result);                
    return result;
}
dataType1((new Object()));

function dataType2(propetry) {
    result = typeof (property);
    console.log(result);
    return result;
}
dataType2(true);

function dataType3 (){
    result = typeof(1,2);
    console.log(result);
    return result;
}
dataType3 (1,2)

function dataType4() {
    result = typeof ("What type is this?");
    console.log(result);
    return result;
}
dataType4 ("What type is this?");

function dataType5() {
    result = typeof (undefined)
    console.log(result);
    return result;
}
dataType5 (undefined);
