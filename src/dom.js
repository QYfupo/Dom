window.dom = {
    find(selector, scope) {
        return (scope || document).queryselectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.Style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const Object = name
                for (let key in Object) {
                    node.style[Object] = Object[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
}

let node = document.getElementById()
node.insertBefore