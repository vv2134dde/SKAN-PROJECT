import React from "react"
import { useDispatch, useSelector } from "react-redux"

import "./styles/ResultPublication.css"
import { popPublicationID, addPublication } from "../../../../../../store/publicationSlice"
import { objectSearch } from "../../../../../../export/featchAPI"
import { tagList } from "../../../../../../export/lists"


export default function ResultPublication() {
    const publication = useSelector(state => state.publication.publication);
    const IDs = useSelector(state => state.publication.publicationID);
    const dispatch = useDispatch()
    const addPub = (obj) => dispatch(addPublication(obj))
    const popIDs = (count) => dispatch(popPublicationID(count))

    function getDocument(pub) {
        const parser = new DOMParser();
        const xmlContent = pub.ok.content.markup
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml")
        return xmlDoc.getElementsByTagName("scandoc")[0].innerHTML
    }

    function getPubDate(date) {
        return new Date(date).toLocaleString('ru-RU').replace(/,.+/, "")
    }

    function getPubTags(pub) {
        const attributes = pub.ok.attributes
        return [attributes.isTechNews, attributes.isDigest, attributes.isAnnouncement]
    }

    function getPubImg(pub) { 
        const imgList = []
        getDocument(pub).replace(/src="[^"]*"/g, (match) => {
            const src = match.replace(/(src=)?"/g, "")
            if (src) {
                imgList.push(src)
            }
        })
        return imgList
    }

    function getPubText(pub) {
        const text = getDocument(pub)
        return removeAllTags(decodeHtmlCharCodes(text))
    }

    function decodeHtmlCharCodes(doc) {
        return doc.replace(/&\D{2};/g, (match) => {
            if (match == "&lt;") {
                return "<"
            }
            if (match == "&gt;") {
                return ">"
            }
            // if (match == "&quot;") {
            //     return '"'
            // }
        })
    }

    function removeAllTags(doc) {
        return doc.replace(/<[^>]+>/g, (match) => {
            if (match == "<p>" || match == "</p>" || match == "<a>" || match == "</a>") {
                return match
            }
            return ""
        })
    }
    
    function declensionsQuantity(quantity) {
        const remainder = quantity % 10
        if (remainder == 1 && quantity % 100 != 11) {
            return "о"
        }
        if ([2, 3, 4].includes(remainder) && ![12, 13, 14].includes(quantity % 100)) {
            return "а"
        } else {return ""}
    }

    async function getPublication() {
        if (IDs.length) {
            const publications = await objectSearch({ids: IDs.slice(0, 10)}, "/documents")
            addPub(publications)
            popIDs(10)
        }
    }


    return(
        <div className="main-result-content-publications">
            <h2>Список документов</h2>
            { publication.length ?
                <div className="main-result-content-publications-container">
                { publication.map((pub) => 
                    <div className="main-result-content-publications-container-publication" key={pub.ok.id}>
                        <div className="main-result-content-publications-container-publication-content">
                            <div className="main-result-content-publications-container-publication-content-title">
                                <p>{getPubDate(pub.ok.issueDate)}<span>{pub.ok.source.name}</span></p>
                                <h3>{pub.ok.title.text}</h3>
                            </div>
                            <div className="main-result-content-publications-container-publication-content-tag">
                                { getPubTags(pub).map((tag, id) => tag ? <span style={{backgroundColor: `var(${tagList[id].color})`}}key={id}>{tagList[id].name}</span>: "")}
                            </div>
                            { getPubImg(pub)[0] ? <div className="main-result-content-publications-container-publication-content-img" style={{backgroundImage: `url(${getPubImg(pub)[0]})`}}/>: "" }                            
                            <div className="main-result-content-publications-container-publication-content-text" dangerouslySetInnerHTML={{ __html: getPubText(pub)}}/>
                        </div>
                        <div className="main-result-content-publications-container-footer">
                            <button onClick={() => window.open(pub.ok.url, '_blank')}>Читать в источнике</button>
                            <span>{pub.ok.attributes.wordCount} слов{declensionsQuantity(pub.ok.attributes.wordCount)}</span>
                        </div>
                    </div>
                )}
                </div>: ""
            }
            <button onClick={getPublication} className={ !IDs.length ? "hidden" : "" }>Показать больше</button>
        </div>
    )
}