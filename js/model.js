import {controller} from './controller.js';
import {object} from './app.js';
export class model {

    constructor() {
        this.data = new Map();
        this.init();    
    }
    
    init = () => {
        this.fetchData();
    }

    async fetchData(){

        this.initializeLoader();
        let response =  await fetch('https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=8363dfba011f4cb99c2b54ae06629cca').then(response => response.json()).then(jsonres => this.set(jsonres)).catch(() => {
                alert("Please reload the page. Unable to fetch data");
            });
        new controller(this);
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
                const arr = [...this.data.get(element.source.name),temp];
                this.data.set(element.source.name,arr);
            }else{
                this.data.set(element.source.name,[temp]);
            }
          
        });
        return Promise.resolve(1);
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