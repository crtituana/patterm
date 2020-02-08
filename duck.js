class Duck {
    constructor(display){
        this._display=display;
        this._quak = null;
        this._fly = null;

    }

    nadar(){
        return ("yo puedo nadar \r");
    }

    get display(){
       return this._display;
    }
 
}
module.exports=Duck

   