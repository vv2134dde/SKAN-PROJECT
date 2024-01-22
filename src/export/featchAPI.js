const APIURL = "https://gateway.scan-interfax.ru/api/v1"

export async function login(logpass) 
{
    await fetch(
        APIURL + "/account/login", 
        {
        method: "POST",
        body: JSON.stringify(logpass),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
    .then((response) => response.json())
    .then((json) => {
        if (!json.errorCode){
            localStorage.setItem("accessToken", json.accessToken)
            localStorage.setItem("expire", json.expire)
            getAccountInfo()
        } else {
            throw new Error(json.message);
        }
    })
}

export function logout() {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("expire")
    localStorage.removeItem("companyLimit")
    localStorage.removeItem("usedCompanyCountt")
    location.replace(location.href)
}

export function getAccountInfo() {
    fetch(APIURL + "/account/info", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.accessToken}`
        }
    })
    .then((response) => response.json())
    .then((json) => {
        const info = json.eventFiltersInfo
        localStorage.setItem("companyLimit", info.companyLimit)
        localStorage.setItem("usedCompanyCountt", info.usedCompanyCount)
        location.replace(location.origin)
    })
}

export async function objectSearch(body, path) 
{
    return await fetch(
        APIURL + path, 
        {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.accessToken}`
        }
        })
    .then((response) => response.json())
    .then((json) => {
        if (json.errorCode) { return }
        if (path == "/objectsearch/histograms"){
            const data = json.data
            if (!data.length) { return }
            const dateList = data[0].data.map((data) => new Intl.DateTimeFormat({dateStyle: "short"}).format(new Date(data.date)))
            const all = data[0].data.map((data) => data.value)
            const risks = data[1].data.map((data) => data.value)
            return {date: dateList, all: all, risks: risks}
        }
        if (path == "/objectsearch"){
            const data = json.items
            console.log(json.items)
            const pubIds = data.map((pub) => pub.encodedId)
            return pubIds
        }
        if (path == "/documents"){
            return json
        }
    })
}