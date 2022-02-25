/* APLICACION DE TAREAS */


let funcionesDeTareas =  require('./funcionesDeTareas');
let accion = process.argv[2];

switch (accion) {
    case 'listar':
        funcionesDeTareas.todasLasTareas();
        break;
        
    case 'incompletas':
        funcionesDeTareas.tareasIncompletas();
        break;
    
    case undefined:
        console.log('Atención - Tienes que pasar una Acción');
        break;

    default:
        console.log('No entiendo qué quieres hacer');
        break;
     
}


