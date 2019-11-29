const sw = new Stopwatch();

function Stopwatch(){
    let st, et, running, duration = 0;
    
    this.start = function(){
        if(running){
            throw new Error("Already Started")
        }
        running = true;
        st = new Date();
    }

    this.stop = function(){
        if(!running){
            throw new Error('Not started');
        }

        running = false;
        et = new Date();
        const seconds = 
    }

    this.reset = function(){
        
    }

    this.duration = function(){
        
    }

    Object.defineProperty(this, 'duration', {
        get: function() { return duration;}
    }
}