//Alla views ("sidor") kommer att ärva denna Abstract View och utgå från denna som bas

export default class {
    constructor () { //Jag antar att denna kan ha parametrar om man skulle behöva men lämnar den tom 4 now 

    }

    setTitle(title) { //Titlar för dom olika "sidorna/views"
        document.title = title
    }

    async getHtml () { //Tanken är att viewen ska ha sin egna "html" som ska override:a index.html
        return ""
    }
}