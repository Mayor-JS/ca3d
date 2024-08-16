export function point(x,y){
    this.x=x;
    this.y=y;

}

point.prototype.add = function(point){
    return new point(this.x + point.x,this.y + point.y);
} 