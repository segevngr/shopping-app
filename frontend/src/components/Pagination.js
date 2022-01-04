import React from "react";

const Pagination = (props) => {

    const renderPages = (pagesArray) => {
        const pagesJSX = pagesArray.map(function (page) {
            if(props.page === page)
                return (<b> {page} </b>)
            else
                return (<a onClick={() => props.setPage(page)}> {page} </a>)
        });
        let enablePrev = (props.page > 1);
        let enableNext = (props.page < pagesArray.length);
        return (
            <div id = "pagination">
                {enablePrev? <a id="page-btn-on" onClick={() => props.setPage(props.page-1)}> Previous </a> :
                    <span id="page-btn"> Previous </span>}
                {pagesJSX}
                {enableNext? <a id="page-btn-on" onClick={() => props.setPage(props.page+1)}> Next </a> :
                    <span id="page-btn"> Next </span>}
            </div>
        );
    };

    if(props.data && props.page) {
        const pagesCount = props.data.length / 5;
        if(props.page > pagesCount+1)
            props.setPage(1);
        let pagesArray = [];
        for (let i = 0; i < pagesCount; i++) {
            pagesArray[i] = i + 1;
        }
        return (<div>{renderPages(pagesArray)}</div>)
    }
    return null;
}


export default Pagination;