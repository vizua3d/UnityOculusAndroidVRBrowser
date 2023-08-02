let token3dverse = "";
function fetchToken3dverse()
{
    const token = window.apiToken || localStorage.getItem('3dverse-api-token');
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