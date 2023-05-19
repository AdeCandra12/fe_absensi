const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlFetch = 'https://pemrog3-ulbi.herokuapp.com/presensi/' + presensiId;