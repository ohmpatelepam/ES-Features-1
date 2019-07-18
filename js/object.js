class object {

    constructor() {

        this.sourceText = "";
        this.dateText = "";
        this.authorText = "";
        this.imageurlText = "";
        this.contentText = "";

    }

    setSource = (source1) => {
        this.sourceText = source1;
    }
    get source() {
        return this.sourceText;
    }

    setDate = (date) => {
        let newdate = this.formatDate(date);
        this.dateText = newdate;
    }
    get date() {
        return this.dateText;
    }

    setAuthor = (category) => {
        this.authorText = category;
    }
    get author() {
        return this.authorText;
    }

    setImageurl = (url) => {
        this.imageurlText = url;
    }
    get imageurl() {
        return this.imageurlText;
    }

    setContent = (content) => {
        this.contentText = content;
    }
    get content() {
        return this.contentText;
    }
    formatDate = (date) => {
        const tempDate = new Date(date);
        const month = tempDate.toLocaleString('default', {
            month: 'long'
        })
        const year = tempDate.getFullYear();
        const day = tempDate.getDay();

        return `${day} ${month} ${year}`;
    }
}