const duck = require('./duck')
class robberHeat extends duck{
    constructor(display){
        super(display);
    }
    fly(){
        return ('yo se que puedo volar pero no lo eh intentado')
    }
    quak(){
        return ('Quak!!!,.... Quak!!!... Quak!!!')
    }
    
}
module.exports=robberHeat;
