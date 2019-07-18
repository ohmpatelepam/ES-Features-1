class controller {

    constructor(modelObj) {
        this.model = modelObj;
        this.view = new view(this);
    }
    getAll = () => {
        return this.model.getAll();
    }
    getAllKeys = () => {
        return this.model.getAllKeys();
    }
    removeLoader = () =>{
        this.model.removeLoader()
    }


}
