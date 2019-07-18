class model {

    constructor() {
        this.data = new Map();
        this.init();    
    }
    init = () => {

        this.fetchData();
        this.initializeLoader();
        setTimeout(() => {
            new controller(this);
        }, 500);
    }

    fetchData = () => {
        fetch('https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=8363dfba011f4cb99c2b54ae06629cca').then(response => response.json()).then(jsonres => this.set(jsonres));

    }

    set = (data) => {


        data.articles.forEach(element => {
            const temp = new object();
            temp.setSource(element.source.name);
            temp.setDate(element.publishedAt);
            temp.setAuthor(element.author);
            temp.setImageurl(element.urlToImage);
            temp.setContent(element.content);
            temp.setDescription(element.description);
           
            if(this.data.has(element.source.name)){
                let arr = this.data.get(element.source.name);
                arr.push(temp);
                this.data.set(element.source.name,arr);
            }else{
                this.data.set(element.source.name,[temp]);
            }
          
        });
    }

    initializeLoader = () =>{
        let body = document.getElementById("main_content");
        let loaderDiv = document.createElement("div");
        loaderDiv.id = "loader";
        body.appendChild(loaderDiv);
    }

    removeLoader = () => {
        document.getElementById("loader").style.display = "none";
    }
    

    getAll = () => {
        return this.data;
    }

    getAllKeys = () => {
        return this.data.keys();
    }
}