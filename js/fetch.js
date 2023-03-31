// import { get } from "https://bukulapak.github.io/api/process.js"; 
// let urlAPI = "https://pemrog3-ulbi.herokuapp.com/presensi";
// get(urlAPI,isiTablePresensi);
// function isiTablePresensi(results){
//   console.log(results);
//    results.forEach(isiRow);
// }
// function isiRow(value){
//    console.log(value)
// }

import { get } from "https://bukulapak.github.io/api/process.js";
import { setInner } from "https://bukulapak.github.io/element/process.js";
let urlAPI = "https://adecandra12.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
    results.forEach(isiRow);
}
function isiRow(value){
    console.log(value)
}