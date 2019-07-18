class model {

    constructor() {
        this.data = new Map();
        this.fetchData();
        setTimeout(() => {
            new controller(this)
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
           
            if(this.data.has(temp.source)){
                let arr = this.data.get(temp.source);
                arr.push(temp);
                this.data.set(temp.source,arr);
            }else{
                this.data.set(temp.source,[temp]);
            }
          
        });
        console.log(this.data);
       
    }

    getSource = (name) => {
       
        return this.data[name].sourceText;
    }

    getDate = (name) => {
        return this.data[name].dateText;
    }

    getAuthor = (name) => {

        return this.data[name].authorText;
    }

    getImageURL = (name) => {
        return this.data[name].imageurlText;
    }

    getContent = (name) => {
       
        return this.data[name].contentText;
    }

    getAll = () => {
        return this.data;
    }

    getAllKeys = () => {
        return this.data.keys();
    }
}