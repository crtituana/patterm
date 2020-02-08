const duck = require('./duck')
class mallarDuck extends duck{
    constructor(display){
        super(display);
    }
    fly(){
        return ('puedo volar')
    }
    quak(){
        return ('Quak!!!')
    }
    
}
module.exports=mallarDuck;

