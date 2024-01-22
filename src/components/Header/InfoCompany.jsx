import React from "react"

import "./styles/InfoCompany.css"


export default function InfoCompany() {
    const [infoCompany, setInfoCompany] = React.useState(
        <tr><td><img className="spinner" src="/media/resources/loading.svg" width="24px" height="24px"/></td></tr>
    )

    React.useEffect(() => {
        setTimeout(() => {
            setInfoCompany(
                <>
                <tr><td>Использовано компаний</td><td>{ localStorage.usedCompanyCountt }</td></tr>
                <tr><td>Лимит по компаниям</td><td>{ localStorage.companyLimit }</td></tr>
                </>
            )
        }, 1000)
    }, [])
        
    return(
        <div className="account-panel-auth-table">
            <table>
                <tbody>
                    { infoCompany }
                </tbody>
            </table>
        </div>
    )
}