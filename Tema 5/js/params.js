export default function params(nombreParametro){
    const urlParams = new URLSearchParams(window.location.search);
    if (!nombreParametro) return urlParams.entries();
    return urlParams.get(nombreParametro);
}