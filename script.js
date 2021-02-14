function getUrlQueries() {
    const queryStr = window.location.search.slice(1)
    const queries = {}
    if (!queryStr) {
        return queries
    }
    queryStr.split('&').forEach(function(queryStr) {
        const queryArr = queryStr.split('=')
        queries[queryArr[0]] = queryArr[1]
    })
    return queries;
}
const query = JSON.stringify(getUrlQueries())
const el = document.createElement('script')
el.setAttribute('data-slots',[query])
el.setAttribute('src', './inject.js')
document.querySelector('head').appendChild(el)
