const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlPUT = "https://pemrog3-ulbi.herokuapp.com/upd/" + presensiId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); // menampilkan response API pada alert
    window.location.href = "index.html" // reaload halaman setelah klik ok pada alert
}