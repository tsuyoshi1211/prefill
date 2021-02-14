function getUrlQueries() {
    const queryStr = window.location.search.slice(1)
    const queries = []
    if (!queryStr) {
        return queries
    }
    queryStr.split('&').forEach(function(queryStr) {
        const queryArr = queryStr.split('=')
        queries[queryArr[0]] = queryArr[1]
    })
    return queries;
}
const q = getUrlQueries()
Object.keys(q).forEach(k => {
    q[k] = decodeURI(q[k])
})
const query = JSON.stringify(q)
const el = document.createElement('script')
//ここからscriptタグの要素設定
el.setAttribute('id', 'bedore-webagent')
el.setAttribute('src', 'https://webagent.bedore.jp/init.js') //src
el.setAttribute('charset', 'utf-8')
el.setAttribute('data-token', '4dd8edc6-bb0a-4457-9594-5e254bd83fad')
el.setAttribute('data-slots', [[query]])
el.setAttribute('data-config-index', '1')
//ここまで

document.querySelector('head').appendChild(el)
