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
        let pageStack = document.createElement('div')
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
                return
            }
        })
        let id = params.id
        let classes = params.classes
        let page = document.createElement('div')
        page.id = id
        classes.forEach(className => {
            page.classList.add(className)
        })
        this.element = page
        return this
    }
    show(){
        console.log(this.element)
        this.element.classList.remove('hidden')
        console.log(this.element)
        return this
    }
    hide(){
        console.log(this.element.classList)
        this.element.classList.add('hidden')
        console.log(this.element.classList)
        return this
    }
}
class Button extends Component{
    constructor(params){
        super(params)
        let keys = ['id', 'classes']
        keys.forEach(key=>{
            if(!params[key]){
                console.log(key, 'is missing')
                return
            }
        })
        let id = params.id
        let classes = params.classes
        let button = document.createElement('button')
        button.id = id
        classes.forEach(className => {
            button.classList.add(className)
        });
        return button
    }
}

class Input extends Component{
    constructor(params){
        super(params)
        let keys = ['id', 'classes']
        keys.forEach(key=>{
            if(!params[key]){
                console.log(key, 'is missing')
                return
            }
        })
        let id = params.id
        let classes = params.classes
        let input = document.createElement('input')
        input.id = id
        classes.forEach(className => {
            input.classList.add(className)
        });
        return input
    }
}

export { Stack, Component, Page, Button, Input }
