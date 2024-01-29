class Square{
    constructor(shape){
        this.shape = shape;
    }

    render(){
        if(this.shape==="square"){
            return "<rect x=50 y=50 width=100 height=100></rect>";
        }else{
            return;
        }
    }
}

module.exports = Square;