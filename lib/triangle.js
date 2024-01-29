class Triangle{
    constructor(shape){
        this.shape = shape;
    }

    render(){
        if(this.shape === "triangle"){
            return "<polygon points=200,50 300,50 250,100/>";
        }else{
            return;
        }
    }
}

module.exports = Triangle;