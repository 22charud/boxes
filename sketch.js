var box1,box2,box3,box4
function setup() 
{
  createCanvas(400, 400);
box1=new Box(20,20,20,20,2)
box2=new Box(40,40,40,40,4)
box3=new Box(60,60,60,60,6)
box4=new Box(80,80,80,80,8)
}

function draw() 
{
  background(220);
box1.show()
box1.move()
box2.show()
box2.move()
box3.show()
box3.move()
box4.show()
box4.move()




}

