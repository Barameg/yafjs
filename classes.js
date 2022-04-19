class Component {
    constructor(params){
        for (const [key, value] of Object.entries(params)) {
            this[key] = value
        }
        return this
    }
}

class Stack extends Component {
    constructor(params){
        super(params)
        let keys = ['id', 'classes', 'attributes']
        keys.forEach(key=>{
            if(!params[key]){
                return
            }
        })
        this.pages = []
        let id = params.id
        let classes = params.classes
        let attributes = params.attributes
        let pageStack = document.createElement('div')
        pageStack.id = id
        classes.forEach(className => {
            pageStack.classList.add(className)
        })
        for (const [key, value] of Object.entries(attributes)) {
            pageStack.setAttribute(key, value)
        }
        this.element = pageStack
        return this
    }
    pushPage(page){
        this.pages.push(page)
        return this
    }
    popPage(){
        this.pages[this.pages.length -1].element.remove()
        this.pages.pop()
        return this
    }
}

class Page extends Component{
    constructor(params){
        super(params)
        let keys = ['id', 'classes', 'attributes']
        keys.forEach(key=>{
            if(!params[key]){
                throw 'ERROR: missing Page '+key+' parameter'
            }
        })
        let id = params.id
        let classes = params.classes
        let attributes = params.attributes
        let page = document.createElement('div')
        page.id = id
        classes.forEach(className => {
            page.classList.add(className)
        })
        for (const [key, value] of Object.entries(attributes)) {
            page.setAttribute(key, value)
        }
        this.element = page
        return this
    }
    show(){
        this.element.classList.remove('hidden')
        return this
    }
    hide(){
        this.element.classList.add('hidden')
        return this
    }
}
class Button extends Component{
    constructor(params){
        super(params)
        let keys = ['id', 'classes', 'attributes']
        keys.forEach(key=>{
            if(!params[key]){
                throw 'ERROR: missing Page '+key+' parameter'
            }
        })
        let id = params.id
        let classes = params.classes
        let attributes = params.attributes
        let button = document.createElement('button')
        button.id = id
        classes.forEach(className => {
            button.classList.add(className)
        });
        for (const [key, value] of Object.entries(attributes)) {
            button.setAttribute(key, value)
        }
        return button
    }
}

class Input extends Component{
    constructor(params){
        super(params)
        let keys = ['id', 'classes', 'attributes']
        keys.forEach(key=>{
            if(!params[key]){
                throw 'ERROR: missing Page '+key+' parameter'
            }
        })
        let id = params.id
        let classes = params.classes
        let attributes = params.attributes
        let input = document.createElement('input')
        input.id = id
        classes.forEach(className => {
            input.classList.add(className)
        });
        for (const [key, value] of Object.entries(attributes)) {
            input.setAttribute(key, value)
        }
        return input
    }
}

export { Stack, Component, Page, Button, Input }
