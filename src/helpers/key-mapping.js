export const mappings = {
  38: 'up',
  40: 'down',
  37: 'left',
  39: 'right',
  32: 'space',
  13: 'return'
}

export function keyQuery(e) {
    e.preventDefault()
    e = e || window.event
    return mappings[e.keyCode] || e.keyCode
}

export default mappings
