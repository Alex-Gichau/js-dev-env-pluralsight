export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/'; //On the '/' setup the Heroku link
}

//This code will get the parameter from the URL
function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}