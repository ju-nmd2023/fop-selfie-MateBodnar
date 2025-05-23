let beanieTopColor = [30, 30, 30]; 
let beanieBottomColor = [20, 20, 20]; 

scale(1.1);

background(255,255,255);

translate(100, 50);

noStroke();

//beanie top
fill(beanieTopColor);
ellipse(200,200,400);

//beanie bottom
fill(beanieBottomColor);
ellipse(200,280,410,460);

//beanie bottom cover
fill(255,255,255);
ellipse(200,350,410,400);

//face top
fill(255,200,140);
ellipse(200,340,410,380);

//face top covered unwanted skin1
fill(255,255,255);
triangle(-4,312,76,490,-50,450);

//face top covered unwanted skin2
triangle(403,312,476,490,300,550);

//face bottom
fill(255,200,140);
ellipse(200,380,300,400);

//ear1
push();
translate(14,340);
rotate(radians(-15));
ellipse(0,0,50,90);
pop();

//ear2
push();
translate(386,340);
rotate(radians(15));
ellipse(0,0,50,90);
pop();

//eyebrow1
fill(100,50,5);
quad(80, 260, 160, 250, 150, 230, 50, 250);

//eyebrow2
fill(100,50,5);
quad(320, 260, 240, 250, 250, 230, 350, 250);

//eye1
fill(255,255,255);
quad(90, 320, 160, 320, 170, 280, 60, 280);

//eye2
quad(310, 320, 240, 320, 230, 280, 340, 280);

//pupil1
fill(0,0,0);
ellipse(125,290,40);

//pupil2
fill(0,0,0);
ellipse(275,290,40);

//pupil1,2 cover
fill(255,200,140);
rect(100,280,280,-10);

//mouth base
fill(139,0,0);
ellipse(200,430,170,150);

//teeth
fill(255,255,255);
ellipse(200,430,170,80);

//teeth cover1
fill(255,200,140);
ellipse(200,420,180,70);

//teeth cover2
fill(255,200,140);
ellipse(200,390,180,70);

//nose1 left
fill(0,0,0);
ellipse(178,400,8);

//nose2 left
triangle(181,397,191,405,179,404);

//nose1 right
ellipse(222,400,8);

//nose2 right
triangle(219,397,209,405,221,404);