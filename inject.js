const currentScript = document.currentScript || (function() {
    const nodeList = document.getElementsByTagName('script')
    return nodeList.item(nodeList.length - 1)
}())
alert(currentScript.getAttribute('data-slots'))