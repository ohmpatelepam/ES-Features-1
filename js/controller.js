class controller {

    constructor(modelObj) {
        this.model = modelObj;
        this.view = new view(this);

    }
    getSource = (name) => {

        return this.model.getSource(name);
    }

    getDate = (name) => {
        return this.model.getDate(name);
    }

    getAuthor = (name) => {
        return this.model.getAuthor(name);
    }

    getImageURL = (name) => {
        return this.model.getImageURL(name);
    }

    getContent = (name) => {
        return this.model.getContent(name);
    }

    getAll = () => {
        return this.model.getAll();
    }
    getAllKeys = () => {
        return this.model.getAllKeys();
    }


}
