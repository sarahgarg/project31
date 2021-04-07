const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var groundbody;
var plinkos=[]
var particles=[]
var score=0;


function setup()
 {

  createCanvas(480,800);
  engine = Engine.create();

    world = engine.world;
groundbody=new ground(240,800,480,20);
div1 = new division(10,700,15,180);
div2 = new division(80,700,15,180);
div3 = new division(160,700,15,180);
div4 = new division(240,700,15,180);
div5 = new division(320,700,15,180);
div6 = new division(400,700,15,180);
div7 = new division(475,700,15,180);
for (var i=40;i<=width;i=i+50)
{
  plinkos.push(new plinko(i,80));

}
for (var i=15;i<=width-10;i=i+50)
{
  plinkos.push(new plinko(i,180));

}
for (var i=40;i<=width-10;i=i+50)
{
  plinkos.push(new plinko(i,280));

}
for (var i=15;i<=width-10;i=i+50)
{
  plinkos.push(new plinko(i,380));

}

  
}
function draw()
  {
  background("black");
  Engine.update(engine);  
  groundbody.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  for (var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  if (frameCount%60===0)
{
  particles.push(new particle(random(100,400),10,10));
}

  for (var k=0; k< particles.length; k++)
{
  particles[k].display();
}
  
  }