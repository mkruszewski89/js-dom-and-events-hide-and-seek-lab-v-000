function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n) {
  let items = document.querySelectorAll('.ranked-list')
  for (let i=0; i<items.length; i++) {
    items[i].innerHTML = parseInt(items[i].innerHTML) + n
  }
}

function deepestChild() {
  let nodes = document.querySelector('#grand-node').querySelectorAll('div')
  return nodes[nodes.length - 1]
}
