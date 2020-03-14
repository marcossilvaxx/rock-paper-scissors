class App{
    constructor(){

    }

    static render(el, props=[]){
        document.getElementById("app").innerHTML = el.render(props);
        new el();
    }
}


export default App;