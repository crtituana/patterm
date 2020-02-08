const duck = require('./duck')
class decoryDuck extends duck{
    constructor(display){
        super(display);
    }
    fly(){
        return ('yo tengo alas pero no se volar  volar')
    }
    quak(){
        return ('Quak!!!...... Quak!!!... Quak!!!')
    }
    
}
module.exports=decoryDuck;
