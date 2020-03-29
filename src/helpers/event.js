export function triggerEvent(eventName, stuff = null) {

  document.body.dispatchEvent(new CustomEvent(eventName, {
    detail: stuff
  }))
}

export function onEvent(eventName, callback) {
  document.body.addEventListener(eventName, (e) => {
    callback(e.detail)
  })
}
