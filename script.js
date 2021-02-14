function getUrlQueries() {
    const queryStr = window.location.search.slice(1)
    const queries = {}
    if (!queryStr) {
        return queries
    }
    //&で文字列を分けて、配列をループさせて中身を取得する
    queryStr.split('&').forEach(function(queryStr) {
    //=で文字列を分けて
        const queryArr = queryStr.split('=')
    //=でqueriesに格納する
        queries[queryArr[0]] = queryArr[1]
    })
    return queries;
}
const query = JSON.stringify(getUrlQueries())
const el = document.createElement('script')
el.setAttribute('data-slots',[query])
el.setAttribute('src', './inject.js')
document.querySelector('head').appendChild(el)
