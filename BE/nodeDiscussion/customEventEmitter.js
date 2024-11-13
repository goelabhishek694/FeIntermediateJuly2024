class MyEventEmitter{
    constructor(){
        this.events = {}
    }

    on(event, listener){
        if(!this.events[event]){
            this.events[event]=[]
        }
        this.events[event].push(listener);
    }

    emit(event, ...args){
        if(this.events[event]){
            this.events[event].forEach(listener=>listener(...args));
        }
    }
}

const myEmmiter = new MyEventEmitter();
myEmmiter.on("myEvent",(...args) => console.log("there is a new event", args));
myEmmiter.emit("myEvent", 1,2,3);