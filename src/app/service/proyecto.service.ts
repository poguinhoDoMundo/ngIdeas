import { Injectable } from '@angular/core';

@Injectable()
export class ProyectoService {

  proyectos:proyecto[]= [
 {
   "id": 1,
   "id_factor": 1,
   "nombre": "Prácticas institucionales interdisciplinarias y con pertinencia",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Contribuir con la solucin de la problemática social en la región de influencia mediante la presencia institucional y el desarrollo de proyectos de extensión solidaria",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 2,
   "id_factor": 2,
   "nombre": "U. Caldas en las Comunas",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Contribuir con la solución de la problemática social en la región de influencia mediante la presencia institucional y el desarrollo de proyectos de extensión solidaria",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 3,
   "id_factor": 3,
   "nombre": "Apoyo a Proyectos de Extensión",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Contribuir con la solución de la problemática social en la región de influencia mediante la presencia institucional y el desarrollo de proyectos de extensión solidaria",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 4,
   "id_factor": 4,
   "nombre": "Fortalecimiento de asociaciones gremiales y de alianzas sectoriales",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Contribuir con la solución de la problemática social en la región de influencia mediante la presencia institucional y el desarrollo de proyectos de extensión solidaria",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 5,
   "id_factor": 5,
   "nombre": "Formulación e implementación de la Política de Internacionacionalización",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Contribuir con la solución de la problemática social en la región de influencia mediante la presencia institucional y el desarrollo de proyectos de extensión solidaria",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 6,
   "id_factor": 6,
   "nombre": "Internacionalización en casa",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Insertar la dimensión internacional en las funciones sustantivas de la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 7,
   "id_factor": 7,
   "nombre": "Internacionalización hacia afuera",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Insertar la dimensión internacional en las funciones sustantivas de la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 8,
   "id_factor": 8,
   "nombre": "Evaluación,  acreditación y oferta internacional",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Insertar la dimensión internacional en las funciones sustantivas de la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 9,
   "id_factor": 1,
   "nombre": "Observatorio de oportunidades",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Consolidar comunidades de graduados que fortalezcan la gestión universitaria y el sentido de pertenencia e identidad con la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 10,
   "id_factor": 2,
   "nombre": "Embajadores U. Caldas",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Consolidar comunidades de graduados que fortalezcan la gestión universitaria y el sentido de pertenencia e identidad con la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 11,
   "id_factor": 3,
   "nombre": "Reconocimiento y estímulo a la proyección universitaria (interna y externa: OHGG)",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Generar visibilidad, accesibilidad e interacción con el conocimiento producido en la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 12,
   "id_factor": 4,
   "nombre": "U. Caldas informada",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Generar visibilidad, accesibilidad e interacción con el conocimiento producido en la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 13,
   "id_factor": 5,
   "nombre": "Ciencias para todos",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Generar visibilidad, accesibilidad e interacción con el conocimiento producido en la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 14,
   "id_factor": 6,
   "nombre": "Unidad de servicios y mercadeo",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Generar visibilidad, accesibilidad e interacción con el conocimiento producido en la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 15,
   "id_factor": 7,
   "nombre": "Comunicación organizacional",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Generar visibilidad, accesibilidad e interacción con el conocimiento producido en la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 16,
   "id_factor": 8,
   "nombre": "Mesa permanente e itinerante de políticas públicas de Estado   y debates",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Contribuir con la formulación, implementación y evaluación de polóticas públicas de Estado",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 17,
   "id_factor": 1,
   "nombre": "Cultura digital y sonora, Sello Editorial (Fondo Editorial)",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Contribuir con el posicionamiento de Manizales como ciudad cultural y del conocimiento",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 18,
   "id_factor": 2,
   "nombre": "CCU y Desarrollo Cultural Universitario",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Contribuir con el posicionamiento de Manizales como ciudad cultural y del conocimiento",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 19,
   "id_factor": 3,
   "nombre": "Patrimonio Cultural y de Museos",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Contribuir con el posicionamiento de Manizales como ciudad cultural y del conocimiento",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 20,
   "id_factor": 4,
   "nombre": "Articulación con los procesos misionales y el entorno (semilleros de  investigación  y de emprendimiento y currículos)",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Fortalecer la cultura del emprendimiento y el desarrollo de competencias innovadoras",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 21,
   "id_factor": 5,
   "nombre": "Redes para la innovación social",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Fortalecer la cultura del emprendimiento y el desarrollo de competencias innovadoras",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 22,
   "id_factor": 6,
   "nombre": "Cultura del emprendimiento",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Fortalecer la cultura del emprendimiento y el desarrollo de competencias innovadoras",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 23,
   "id_factor": 7,
   "nombre": "Desarrollo y gestión del emprendimiento",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Fortalecer la cultura del emprendimiento y el desarrollo de competencias innovadoras",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 24,
   "id_factor": 8,
   "nombre": "Implementación de la Política de Regionalización y acompañamiento a proyectos en la región",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Consolidar la presencia y materialización de los propósitos misionales en el área de influencia de la Universidad",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 25,
   "id_factor": 1,
   "nombre": "Aulas para la docencia",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Incrementar y mejorar la capacidad instalada de la infraestructura física a través de la  construcción   y  adecuación de espacios académicos para la investigación y la formación",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 26,
   "id_factor": 2,
   "nombre": "Creación equipamiento laboratorios y talleres de creación artística",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Incrementar y mejorar la capacidad instalada de la infraestructura física a través de la  construcción   y  adecuación de espacios académicos para la investigación y la formación",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 27,
   "id_factor": 3,
   "nombre": "Definición y mejoramiento integral de infraestructura fósica",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Incrementar y mejorar la capacidad instalada de la infraestructura física a través de la  construcciéón   y  adecuaciéón de espacios académicos para la investigación y la formación",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 28,
   "id_factor": 4,
   "nombre": "Adecuación de espacios complementarios, estancias y equipamientos adecuados, conservación del patrimonio arquitectónico, ornamento y paisajismo",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Recuperar y acondicionar la biblioteca, los espacios públicos y de esparcimiento, las construcciones patrimoniales y los escenarios culturales y deportivos",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 29,
   "id_factor": 5,
   "nombre": "Mantenimiento, equipamiento y generación de infraestructura para actividades culturales y deportivas",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Recuperar y acondicionar la biblioteca, los espacios públicos y de esparcimiento, las construcciones patrimoniales y los escenarios culturales y deportivos",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 30,
   "id_factor": 6,
   "nombre": "Establecimiento de la política ambiental institucional y",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Consolidar un Campus Sostenible y fortalecer la estrategia de Universidad Verde",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 31,
   "id_factor": 7,
   "nombre": "construcción sostenible y bio-arquitecténica",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Consolidar un Campus Sostenible y fortalecer la estrategia de Universidad Verde",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 32,
   "id_factor": 8,
   "nombre": "Fortalecimiento del Jardín Botánico y el Sistema de Granjas y su articulación con la docencia, la investigación y la proyección",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Consolidar un Campus Sostenible y fortalecer la estrategia de Universidad Verde",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 33,
   "id_factor": 1,
   "nombre": "Gestión de recursos externos para el desarrollo de la investigación científica,la investigación-creación y la innovación",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Fomentar la investigación y el desarrollo tecnológico de alta calidad",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 34,
   "id_factor": 2,
   "nombre": "Fortalecimiento de los grupos de investigación y su vinculación a redes nacionales e internacionales",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Fomentar la investigación y el desarrollo tecnológico de alta calidad",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 35,
   "id_factor": 3,
   "nombre": "Desarrollo de la investigación científica, la investigación aplicada y la",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Fomentar la investigación y el desarrollo tecnológico de alta calidad",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 36,
   "id_factor": 4,
   "nombre": "investigación-creación",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Fomentar la investigación y el desarrollo tecnológico de alta calidad",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 37,
   "id_factor": 5,
   "nombre": "Promoción, indexación y sostenibilidad de las revistas científicas de la Universidad de Caldas",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Divulgar la producción investigativa y artística",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 38,
   "id_factor": 6,
   "nombre": "Fortalecimiento de la investigación en los postgrados para su acreditación de alta calidad",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Divulgar la producción investigativa y artística",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 39,
   "id_factor": 7,
   "nombre": "Fortalecimiento de la oferta de programas de postgrado",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Fortalecer la oferta de postgrados",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 40,
   "id_factor": 8,
   "nombre": "Pertinencia de la oferta académica",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Ofrecer y realizar programas académicos de pre y postgrado con pertinencia y calidad",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 41,
   "id_factor": 1,
   "nombre": "Acreditación de programas y acreditación institucional",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Ofrecer y realizar programas académicos de pre y postgrado con pertinencia y calidad",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 42,
   "id_factor": 2,
   "nombre": "Disminución de la deserción",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Ofrecer y realizar programas académicos de pre y postgrado con pertinencia y calidad",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 43,
   "id_factor": 3,
   "nombre": "Acceso con calidad y equidad",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Promover el acceso y permanencia de los estudiantes en la institución con criterios de calidad, equidad y pertinencia",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 44,
   "id_factor": 4,
   "nombre": "Acceso con calidad y equidad",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Fortalecer la participación de la Universidad de Caldas en la región centro occidente a travós de programas acadómicos pertinentes y ampliación de cobertura",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 45,
   "id_factor": 5,
   "nombre": "Ampliación de la cobertura en la región",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Fortalecer la participación de la Universidad de Caldas en la región centro occidente a través de programas académicos pertinentes y ampliación de cobertura",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 46,
   "id_factor": 6,
   "nombre": "Apertura de programas virtuales",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Fortalecer los procesos de enseñanza-aprendizaje y formación a través del uso de las TICs",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 47,
   "id_factor": 7,
   "nombre": "Formación y apoyo a profesores en TICs",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Fortalecer los procesos de enseñanza-aprendizaje y formación a través del uso de las TICs",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 48,
   "id_factor": 8,
   "nombre": "Revisión y reforma de política curricular",
   "descripcion": "Donec efficitur mollis euismod. Duis varius mi vel commodo accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elit libero, semper et consectetur at, elementum vel velit. Nam lobortis mauris odio, in congue velit sagittis sit amet. In dui massa, blandit quis aliquet vel, feugiat non leo. Proin pretium, metus vitae dapibus condimentum, sapien arcu sollicitudin tortor, ut sollicitudin velit dui vitae urna. Donec ac facilisis felis. Sed elementum gravida ante, a placerat eros semper quis. Maecenas vitae convallis est. Suspendisse id tellus sed urna tempus aliquam ac eget enim.",
   "objetivo": "Revisar y ajustar integralmente la politica curricular de la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 49,
   "id_factor": 1,
   "nombre": "Formación en segunda lengua",
   "descripcion": "Cras quis mauris eu metus sagittis accumsan sit amet quis orci. Cras eros nunc, fringilla eget pellentesque ut, vulputate sed justo. Aenean interdum enim quis mattis placerat. Nulla blandit turpis in maximus gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit erat quis augue pellentesque porta. Donec vel arcu a nisl lobortis interdum. Maecenas non arcu in ligula venenatis ullamcorper. Cras eu ullamcorper nibh. Aenean suscipit ipsum nulla, id fringilla magna imperdiet eu. Donec neque urna, egestas in viverra a, venenatis eu metus.",
   "objetivo": "Revisar y ajustar integralmente la politica curricular de la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 50,
   "id_factor": 2,
   "nombre": "Proyecto doble titulación - oble carrera",
   "descripcion": "Duis aliquet, lorem ac venenatis lobortis, dolor augue eleifend quam, a auctor nisl risus non turpis. Suspendisse rhoncus dui et tincidunt feugiat. Maecenas malesuada viverra fringilla. Nam consequat metus vitae metus fermentum convallis. Proin lorem nisi, pretium at nulla a, imperdiet pulvinar lorem. Suspendisse aliquet bibendum ipsum, ut semper purus laoreet quis. Donec commodo, enim eu egestas tristique, enim eros porta ex, non ultricies purus sapien at lacus. Suspendisse mi tellus, pretium finibus orci et, accumsan pretium leo. Etiam tempor dolor a nulla tincidunt, a laoreet velit volutpat. Aliquam vitae ligula orci. Sed bibendum vitae leo a suscipit. Nullam neque sem, eleifend eu arcu ut, dapibus pretium dui. Cras egestas quis metus ut faucibus. Donec vel sodales ante.",
   "objetivo": "Revisar y ajustar integralmente la politica curricular de la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 51,
   "id_factor": 3,
   "nombre": "Articulación bósica- secundaria- pregrado- maestría - doctorado",
   "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget egestas odio. Vestibulum at aliquet eros, at dapibus diam. Mauris metus sem, rhoncus dignissim auctor a, sagittis id lorem. Sed molestie erat in dolor elementum, vitae consequat ante sodales. Maecenas vel dictum elit, non fermentum elit. Nunc ac dictum arcu. Aenean sit amet malesuada sem. Etiam elementum nulla sed tellus volutpat ultrices. Etiam tincidunt nisl id elit pellentesque rutrum. Donec eleifend facilisis mi, non facilisis erat suscipit sed. Sed turpis sem, tincidunt ut porttitor a, interdum a nisl. Maecenas nec odio nibh. Ut ultricies euismod massa, id cursus quam pellentesque et.",
   "objetivo": "Revisar y ajustar integralmente la politica curricular de la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 },
 {
   "id": 52,
   "id_factor": 4,
   "nombre": "Formación integral del estudiante y proyecto de vida universitaria",
   "descripcion": "Nulla a dolor eget odio accumsan commodo. Fusce enim magna, luctus vel rhoncus et, consequat nec magna. Curabitur non aliquet nibh, sit amet auctor ante. Integer bibendum mi nec nunc fringilla accumsan. Pellentesque sodales in ipsum ac facilisis. Nam lobortis orci nec lectus mollis, nec sodales mauris condimentum. Aliquam sollicitudin condimentum semper. Duis vulputate, sapien sed rutrum tristique, tellus dui malesuada arcu, sed accumsan tortor ligula ut ex. Aliquam vitae velit molestie, porttitor tortor nec, fermentum elit. Integer a condimentum magna, vitae pharetra tortor. Sed augue ligula, ultrices pretium volutpat ut, congue et dui. Donec id gravida lectus, at gravida augue. Sed ullamcorper iaculis nunc sit amet volutpat. Pellentesque est erat, tristique eget turpis non, tristique pretium sem. In sed accumsan leo. Nullam eget tempor magna.",
   "objetivo": "Revisar y ajustar integralmente la politica curricular de la Universidad de Caldas",
   "costo": 0,
   "precondicion": "",
   "usuario": "sysUcaldas",
   "fecha": "11/07/2018"
 }
];

  constructor() {
   }

   getproyectos(factor){
     let proyectoFactor:proyecto[]=[];

     for( let proyecto of this.proyectos  ){
        if (  proyecto.id_factor == factor )
           proyectoFactor.push(proyecto);
     }

     return proyectoFactor;
   }

   contProyectosFactor(i:number ){
         let cont:number=0;

         for( let proyecto of this.proyectos  ){
            if (  proyecto.id_factor == i )
               cont++ ;
         }

         return cont;
   }

   getProyecto(id:number){
     let proyecto:proyecto;

     for( let proyecto of this.proyectos  ){
        if (  proyecto.id == id )
           return proyecto
     }

   }

   searchProyecto(criterio:string){
       let proyectos:proyecto[]=[];

       for( let proyecto of this.proyectos  ){
          console.log(proyecto.nombre.toLowerCase().indexOf(criterio));

          if (  proyecto.nombre.toLowerCase().indexOf(criterio) >= 0 )
          {
             proyectos.push(proyecto);
          }
       }

       return proyectos;
   }



}

export interface proyecto{
    id:number;
    id_factor:number;
    nombre:string;
    descripcion:string;
    objetivo:string;
    costo:number;
    precondicion:string;
    usuario:string;
    fecha:string;
}
