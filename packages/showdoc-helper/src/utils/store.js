
class Store {
    constructor() {
        this.prefix = 'showdoc_'
    }

    getShowdoc(key=''){
        let item = localStorage.getItem(key)
        if (!item) {
            return ''
        }
        try {
            return JSON.parse(item)
        } catch (e) {
            return item;
        }
    }

    getItem(key = '') {
       return this.getShowdoc(this.prefix +key);
    }

    setItem(key = '', value) {
        localStorage.setItem(this.prefix +key, value instanceof Object ? JSON.stringify(value) : value)
    }

    removeItem(key){
        if(key==null || key == ''){
            return
        }
        localStorage.removeItem(this.prefix +key,);
    }


}

export default  new Store()
