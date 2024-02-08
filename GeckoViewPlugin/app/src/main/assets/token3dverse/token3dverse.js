let token3dverse = "";
function fetchToken3dverse()
{
    const LAST_ACCESSED_ENVIRONMENT_ID = "last-accessed-env-id";
    const ENVIRONMENT_API_TOKEN_PREFIX = "3dverse-api-token-";

    let token = window.apiToken || localStorage.getItem('3dverse-api-token');
    if(document.location.startsWith('console')) {
        const environmentId = localStorage.getItem(LAST_ACCESSED_ENVIRONMENT_ID);
        token = localStorage.getItem(`${ENVIRONMENT_API_TOKEN_PREFIX}${environmentId}`) || token;
    }

    if(!token || token === token3dverse)
    {
        return false;
    }
    token3dverse = token;
    const message = { type: "token3dverse", payload: token };
    browser.runtime.sendNativeMessage("browser", message);
    return true;
}

setInterval(fetchToken3dverse, 100);