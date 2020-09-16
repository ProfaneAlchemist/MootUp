var CLIENT_ID = '';
var API_KEY = '';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets"

function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function initClient() {
	gapi.client.init({apiKey: API_KEY, clientId: CLIENT_ID, discoveryDocs: DISCOVERY_DOCS, scope: SCOPES}).then(function () {
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
		updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
	}, function(error) {
		appendPre(JSON.stringify(error,null,2));
	});
	
}
