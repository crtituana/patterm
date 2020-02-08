const duck = require('./duck')
class redHeadQuak extends duck{
    constructor(display){
        super(display);
    }
    fly(){
        return ('yo no puedo volar volar porque no tengo alas :(')
    }
    quak(){
        return ('Quak!!!')
    }
    
}
module.exports=redHeadQuak;

