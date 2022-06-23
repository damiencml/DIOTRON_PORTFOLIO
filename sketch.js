var myBoolean = false;
var zoom1 = 0.2
var zoom2 = 100;
var Radius = 200;
var strenght = -20;

var nodeDiameterxa;
var nodeDiameterya;
var nodeDiameterxb;
var nodeDiameteryb;
var nodeDiameterxc;
var nodeDiameteryc;
var nodeDiameterxd;
var nodeDiameteryd;
var nodeDiameterxe;
var nodeDiameterye;

var textsize;
var textsize2;
var font;
var texthide;
var textvu;
var back;

var strokenode = 10;
//=======================================
//=======================================
var auxétisme = 'Auxetisme'; //0
var spr1 = 'PA';
var tenségrité = 'Tensegrité'; //1
var spr2 = 'PB';
var jamming = 'Jamming'; //2
var spr3 = 'PC';
var système = 'Système'; //3
var spr4 = 'PD';
var pneumatique = 'pneumatique';
var motif = 'Motif'; //4
var spr5 = 'PE';
var procédural = 'procédurale';
var mémoire = 'Mémoire'; //5
var spr6 = 'PF';
var deforme = 'de forme';
var surface = 'Surface'; //6
var spr7 = 'PG';
var entension = 'en tension';
var motif2 = 'Motif'; //7
var spr8 = 'PH';
var céllulaire = 'céllulaire';
var courbes = 'Courbe'; //8
var polynomiales = 'polynomiale';
var déformation = 'déformation'; //9
var différentielle = 'différentielles';
var matière = 'Matière'; //10
var granulaire = 'granulaire';
var abrasion = 'Abrasion'; //11
var turbulence = 'Turbulence'; //12
var réflexion = 'Réflexion'; //13
var portance = 'Portance'; //14
var écoulement = 'Ecoulement'; //15
var laminaire = 'laminaire';
var spr15;
var a = 0.0;


//=======================================
//          SKETCH START HERE
//=======================================


var sketch = function(p) {
  // an array for the nodes
var nodeCount = 69;
var nodes = [];
  // an array for the springs
var springs = [];
  // dragged node
var selectedNode = null;
var nodeDiameter = 16;

p.setup = function() {
p.createCanvas(p.windowWidth, p.windowHeight);
textsize = p.textSize(20);
textsize2 = p.textSize(20);
texthide = p.color(25,32,43);
textvu = p.color(116,164,141);
back = p.color(22,17,0);
p.smooth();
p.frameRate(50);
font = p.loadFont('/users/damie/AppData/Local/Microsoft/Windows/Fonts/SpaceGrotesk-SemiBold.otf',1);
p.textFont(font);
p.textAlign(p.CENTER, p.CENTER);
console.log();
p.noStroke();
initNodesAndSprings();


};

var initNodesAndSprings = function() {

var rad = nodeDiameterxb/2;
nodes[0] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
nodes[0].minX = rad;
nodes[0].minY = rad;
nodes[0].maxX = p.width - rad;
nodes[0].maxY = p.height - rad;
nodes[0].radius = Radius;
nodes[0].strength = strenght;
nodes[1] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
nodes[1].minX = rad;
nodes[1].minY = rad;
nodes[1].maxX = p.width - rad;
    nodes[1].maxY = p.height - rad;
    nodes[1].radius = Radius;
    nodes[1].strength = strenght;
    nodes[2] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[2].minX = rad;
    nodes[2].minY = rad;
    nodes[2].maxX = p.width - rad;
    nodes[2].maxY = p.height - rad;
    nodes[2].radius = Radius;
    nodes[2].strength = strenght;
    nodes[3] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[3].minX = rad;
    nodes[3].minY = rad;
    nodes[3].maxX = p.width - rad;
    nodes[3].maxY = p.height - rad;
    nodes[3].radius = Radius;
    nodes[3].strength = strenght;
    nodes[4] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100,100));
    nodes[4].minX = rad;
    nodes[4].minY = rad;
    nodes[4].maxX = p.width - rad;
    nodes[4].maxY = p.height - rad;
    nodes[4].radius = Radius;
    nodes[4].strength = strenght;
    nodes[5] = new Node(p.width/2+p.random(-100,100), p.height/2+p.random(-100, 100));
    nodes[5].minX = rad;
    nodes[5].minY = rad;
    nodes[5].maxX = p.width - rad;
    nodes[5].maxY = p.height - rad;
    nodes[5].radius = Radius;
    nodes[5].strength = strenght;
    nodes[6] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100,100));
    nodes[6].minX = rad;
    nodes[6].minY = rad;
    nodes[6].maxX = p.width - rad;
    nodes[6].maxY = p.height - rad;
    nodes[6].radius = Radius;
    nodes[6].strength = strenght;
    nodes[7] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[7].minX = rad;
    nodes[7].minY = rad;
    nodes[7].maxX = p.width - rad;
    nodes[7].maxY = p.height - rad;
    nodes[7].radius = Radius;
    nodes[7].strength = strenght;
    nodes[8] = new Node(p.width/2+p.random(-100,100), p.height/2+p.random(-100, 100));
    nodes[8].minX = rad;
    nodes[8].minY = rad;
    nodes[8].maxX = p.width - rad;
    nodes[8].maxY = p.height - rad;
    nodes[8].radius = Radius;
    nodes[8].strength = strenght;
    nodes[9] = new Node(p.width/2+p.random(-100,100), p.height/2+p.random(-100, 100));
    nodes[9].minX = rad;
    nodes[9].minY = rad;
    nodes[9].maxX = p.width - rad;
    nodes[9].maxY = p.height - rad;
    nodes[9].radius = Radius;
    nodes[9].strength = strenght;
    nodes[10] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[10].minX = rad;
    nodes[10].minY = rad;
    nodes[10].maxX = p.width - rad;
    nodes[10].maxY = p.height - rad;
    nodes[10].radius = Radius;
    nodes[10].strength = strenght;
    nodes[11] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[11].minX = rad;
    nodes[11].minY = rad;
    nodes[11].maxX = p.width - rad;
    nodes[11].maxY = p.height - rad;
    nodes[11].radius = Radius;
    nodes[11].strength = strenght;
    nodes[12] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[12].minX = rad;
    nodes[12].minY = rad;
    nodes[12].maxX = p.width - rad;
    nodes[12].maxY = p.height - rad;
    nodes[12].radius = Radius;
    nodes[12].strength = strenght;
    nodes[13] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[13].minX = rad;
    nodes[13].minY = rad;
    nodes[13].maxX = p.width - rad;
    nodes[13].maxY = p.height - rad;
    nodes[13].radius = Radius;
    nodes[13].strength = strenght;
    nodes[14] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[14].minX = rad;
    nodes[14].minY = rad;
    nodes[14].maxX = p.width - rad;
    nodes[14].maxY = p.height - rad;
    nodes[14].radius = Radius;
    nodes[14].strength = strenght;
    nodes[15] = new Node(p.width/2+p.random(-100, 100), p.height/2+p.random(-100, 100));
    nodes[15].minX = rad;
    nodes[15].minY = rad;
    nodes[15].maxX = p.width - rad;
    nodes[15].maxY = p.height - rad;
    nodes[15].radius = Radius;
    nodes[15].strength = strenght;

if(p.key=='r' ||p.key=='R') {
        nodes[0] = new Node(p.width/2+p.random(-94, 0), p.height/2+p.random(-125, 0));
        nodes[0].minX = rad;
        nodes[0].minY = rad;
        nodes[0].maxX = p.width - rad;
        nodes[0].maxY = p.height - rad;
        nodes[0].radius = Radius;
        nodes[0].strength = strenght;

        nodes[1] = new Node(p.width/2+p.random(-282, -188), p.height/2+p.random(-250, -125));
        nodes[1].minX = rad;
        nodes[1].minY = rad;
        nodes[1].maxX = p.width - rad;
        nodes[1].maxY = p.height - rad;
        nodes[1].radius = Radius;
        nodes[1].strength = strenght;

        nodes[2] = new Node(p.width/2+p.random(0, 94), p.height/2+p.random(0, 125));
        nodes[2].minX = rad;
        nodes[2].minY = rad;
        nodes[2].maxX = p.width - rad;
        nodes[2].maxY = p.height - rad;
        nodes[2].radius = Radius;
        nodes[2].strength = strenght;

        nodes[3] = new Node(p.width/2+p.random(282, 376), p.height/2+p.random(-250, -125));
        nodes[3].minX = rad;
        nodes[3].minY = rad;
        nodes[3].maxX = p.width - rad;
        nodes[3].maxY = p.height - rad;
        nodes[3].radius = Radius;
        nodes[3].strength = strenght;

        nodes[4] = new Node(p.width/2+p.random(-94, 0), p.height/2+p.random(-250,-125));
        nodes[4].minX = rad;
        nodes[4].minY = rad;
        nodes[4].maxX = p.width - rad;
        nodes[4].maxY = p.height - rad;
        nodes[4].radius = Radius;
        nodes[4].strength = strenght;

        nodes[5] = new Node(p.width/2+p.random(-188,-94), p.height/2+p.random(-125, 0));
        nodes[5].minX = rad;
        nodes[5].minY = rad;
        nodes[5].maxX = p.width - rad;
        nodes[5].maxY = p.height - rad;
        nodes[5].radius = Radius;
        nodes[5].strength = strenght;

        nodes[6] = new Node(p.width/2+p.random(0, 94), p.height/2+p.random(-375,-250));
        nodes[6].minX = rad;
        nodes[6].minY = rad;
        nodes[6].maxX = p.width - rad;
        nodes[6].maxY = p.height - rad;
        nodes[6].radius = Radius;
        nodes[6].strength = strenght;

        nodes[7] = new Node(p.width/2+p.random(94, 188), p.height/2+p.random(-250, -125));
        nodes[7].minX = rad;
        nodes[7].minY = rad;
        nodes[7].maxX = p.width - rad;
        nodes[7].maxY = p.height - rad;
        nodes[7].radius = Radius;
        nodes[7].strength = strenght;

        nodes[8] = new Node(p.width/2+p.random(0,94), p.height/2+p.random(125, 250));
        nodes[8].minX = rad;
        nodes[8].minY = rad;
        nodes[8].maxX = p.width - rad;
        nodes[8].maxY = p.height - rad;
        nodes[8].radius = Radius;
        nodes[8].strength = strenght;

        nodes[9] = new Node(p.width/2+p.random(-376,-282), p.height/2+p.random(0, 125));
        nodes[9].minX = rad;
        nodes[9].minY = rad;
        nodes[9].maxX = p.width - rad;
        nodes[9].maxY = p.height - rad;
        nodes[9].radius = Radius;
        nodes[9].strength = strenght;

        nodes[10] = new Node(p.width/2+p.random(188, 282), p.height/2+p.random(-125, 0));
        nodes[10].minX = rad;
        nodes[10].minY = rad;
        nodes[10].maxX = p.width - rad;
        nodes[10].maxY = p.height - rad;
        nodes[10].radius = Radius;
        nodes[10].strength = strenght;

        nodes[11] = new Node(p.width/2+p.random(188, 282), p.height/2+p.random(0, 125));
        nodes[11].minX = rad;
        nodes[11].minY = rad;
        nodes[11].maxX = p.width - rad;
        nodes[11].maxY = p.height - rad;
        nodes[11].radius = Radius;
        nodes[11].strength = strenght;

        nodes[12] = new Node(p.width/2+p.random(-282, -188), p.height/2+p.random(125, 250));
        nodes[12].minX = rad;
        nodes[12].minY = rad;
        nodes[12].maxX = p.width - rad;
        nodes[12].maxY = p.height - rad;
        nodes[12].radius = Radius;
        nodes[12].strength = strenght;

        nodes[13] = new Node(p.width/2+p.random(-94, 0), p.height/2+p.random(250, 375));
        nodes[13].minX = rad;
        nodes[13].minY = rad;
        nodes[13].maxX = p.width - rad;
        nodes[13].maxY = p.height - rad;
        nodes[13].radius = Radius;
        nodes[13].strength = strenght;

        nodes[14] = new Node(p.width/2+p.random(94, 188), p.height/2+p.random(250, 375));
        nodes[14].minX = rad;
        nodes[14].minY = rad;
        nodes[14].maxX = p.width - rad;
        nodes[14].maxY = p.height - rad;
        nodes[14].radius = Radius;
        nodes[14].strength = strenght;

        nodes[15] = new Node(p.width/2+p.random(282, 376), p.height/2+p.random(125, 250));
        nodes[15].minX = rad;
        nodes[15].minY = rad;
        nodes[15].maxX = p.width - rad;
        nodes[15].maxY = p.height - rad;
        nodes[15].radius = Radius;
        nodes[15].strength = strenght;
      }

  };

p.draw = function() {
if (p.myBoolean) beginRecord(p.PDF, timestamp()+'.pdf');
p.background(back);
var gridSize = 90;
for (var x = gridSize; x <= p.width - gridSize; x += gridSize) {
for (var y = gridSize; y <= p.height - gridSize; y += gridSize) {
p.fill(texthide);
p.noStroke();
p.rect(x-1, y-1, 5, 5, 72);
}
}

   nodes[0].attract(nodes[1]);    nodes[0].attract(nodes[2]);    nodes[0].attract(nodes[3]);    nodes[0].attract(nodes[4]);    nodes[0].attract(nodes[5]); nodes[0].attract(nodes[6]); nodes[0].attract(nodes[7]); nodes[0].attract(nodes[8]); nodes[0].attract(nodes[9]); nodes[0].attract(nodes[10]); nodes[0].attract(nodes[11]); nodes[0].attract(nodes[12]); nodes[0].attract(nodes[13]); nodes[0].attract(nodes[14]); nodes[0].attract(nodes[15]);
   nodes[1].attract(nodes[0]);    nodes[1].attract(nodes[2]);    nodes[1].attract(nodes[3]);    nodes[1].attract(nodes[4]);    nodes[1].attract(nodes[5]); nodes[1].attract(nodes[6]); nodes[1].attract(nodes[7]); nodes[1].attract(nodes[8]); nodes[1].attract(nodes[9]); nodes[1].attract(nodes[10]); nodes[1].attract(nodes[11]); nodes[1].attract(nodes[12]); nodes[1].attract(nodes[13]); nodes[1].attract(nodes[14]); nodes[1].attract(nodes[15]);
   nodes[2].attract(nodes[0]);    nodes[2].attract(nodes[1]);    nodes[2].attract(nodes[3]);    nodes[2].attract(nodes[4]);    nodes[2].attract(nodes[5]); nodes[2].attract(nodes[6]); nodes[2].attract(nodes[7]); nodes[2].attract(nodes[8]); nodes[2].attract(nodes[9]); nodes[2].attract(nodes[10]); nodes[2].attract(nodes[11]); nodes[2].attract(nodes[12]); nodes[2].attract(nodes[13]); nodes[2].attract(nodes[14]); nodes[2].attract(nodes[15]);
   nodes[3].attract(nodes[0]);    nodes[3].attract(nodes[1]);    nodes[3].attract(nodes[2]);    nodes[3].attract(nodes[4]);    nodes[3].attract(nodes[5]); nodes[3].attract(nodes[6]); nodes[3].attract(nodes[7]); nodes[3].attract(nodes[8]); nodes[3].attract(nodes[9]); nodes[3].attract(nodes[10]); nodes[3].attract(nodes[11]); nodes[3].attract(nodes[12]); nodes[3].attract(nodes[13]); nodes[3].attract(nodes[14]); nodes[3].attract(nodes[15]);
   nodes[4].attract(nodes[0]);    nodes[4].attract(nodes[1]);    nodes[4].attract(nodes[2]);    nodes[4].attract(nodes[3]);    nodes[4].attract(nodes[5]); nodes[4].attract(nodes[6]); nodes[4].attract(nodes[7]); nodes[4].attract(nodes[8]); nodes[4].attract(nodes[9]); nodes[4].attract(nodes[10]); nodes[4].attract(nodes[11]); nodes[4].attract(nodes[12]); nodes[4].attract(nodes[13]); nodes[4].attract(nodes[14]); nodes[4].attract(nodes[15]);
   nodes[5].attract(nodes[0]);    nodes[5].attract(nodes[1]);    nodes[5].attract(nodes[2]);    nodes[5].attract(nodes[3]);    nodes[5].attract(nodes[4]); nodes[5].attract(nodes[6]); nodes[5].attract(nodes[7]); nodes[5].attract(nodes[8]); nodes[5].attract(nodes[9]); nodes[5].attract(nodes[10]); nodes[5].attract(nodes[11]); nodes[5].attract(nodes[12]); nodes[5].attract(nodes[13]); nodes[5].attract(nodes[14]); nodes[5].attract(nodes[15]);
   nodes[6].attract(nodes[0]);    nodes[6].attract(nodes[1]);    nodes[6].attract(nodes[2]);    nodes[6].attract(nodes[3]);    nodes[6].attract(nodes[4]); nodes[6].attract(nodes[5]); nodes[6].attract(nodes[7]); nodes[6].attract(nodes[8]); nodes[6].attract(nodes[9]); nodes[6].attract(nodes[10]); nodes[6].attract(nodes[11]); nodes[6].attract(nodes[12]); nodes[6].attract(nodes[13]); nodes[6].attract(nodes[14]); nodes[6].attract(nodes[15]);
   nodes[7].attract(nodes[0]);    nodes[7].attract(nodes[1]);    nodes[7].attract(nodes[2]);    nodes[7].attract(nodes[3]);    nodes[7].attract(nodes[4]); nodes[7].attract(nodes[5]); nodes[7].attract(nodes[6]); nodes[7].attract(nodes[8]); nodes[7].attract(nodes[9]); nodes[7].attract(nodes[10]); nodes[7].attract(nodes[11]); nodes[7].attract(nodes[12]); nodes[7].attract(nodes[13]); nodes[7].attract(nodes[14]); nodes[7].attract(nodes[15]);
   nodes[8].attract(nodes[0]);    nodes[8].attract(nodes[1]);    nodes[8].attract(nodes[2]);    nodes[8].attract(nodes[3]);    nodes[8].attract(nodes[4]); nodes[8].attract(nodes[5]); nodes[8].attract(nodes[6]); nodes[8].attract(nodes[7]); nodes[8].attract(nodes[9]); nodes[8].attract(nodes[10]); nodes[8].attract(nodes[11]); nodes[8].attract(nodes[12]); nodes[8].attract(nodes[13]); nodes[8].attract(nodes[14]); nodes[8].attract(nodes[15]);
   nodes[9].attract(nodes[0]);    nodes[9].attract(nodes[1]);    nodes[9].attract(nodes[2]);    nodes[9].attract(nodes[3]);    nodes[9].attract(nodes[4]); nodes[9].attract(nodes[5]); nodes[9].attract(nodes[6]); nodes[9].attract(nodes[7]); nodes[9].attract(nodes[8]); nodes[9].attract(nodes[10]); nodes[9].attract(nodes[11]); nodes[9].attract(nodes[12]); nodes[9].attract(nodes[13]); nodes[9].attract(nodes[14]); nodes[9].attract(nodes[15]);
   nodes[10].attract(nodes[0]);    nodes[10].attract(nodes[1]);    nodes[10].attract(nodes[2]);    nodes[10].attract(nodes[3]);    nodes[10].attract(nodes[4]); nodes[10].attract(nodes[5]); nodes[10].attract(nodes[6]); nodes[10].attract(nodes[7]); nodes[10].attract(nodes[8]); nodes[10].attract(nodes[9]); nodes[10].attract(nodes[11]); nodes[10].attract(nodes[12]); nodes[10].attract(nodes[13]); nodes[10].attract(nodes[14]); nodes[10].attract(nodes[15]);
   nodes[11].attract(nodes[0]);    nodes[11].attract(nodes[1]);    nodes[11].attract(nodes[2]);    nodes[11].attract(nodes[3]);    nodes[11].attract(nodes[4]); nodes[11].attract(nodes[5]); nodes[11].attract(nodes[6]); nodes[11].attract(nodes[7]); nodes[11].attract(nodes[8]); nodes[11].attract(nodes[9]); nodes[11].attract(nodes[10]); nodes[11].attract(nodes[12]); nodes[11].attract(nodes[13]); nodes[11].attract(nodes[14]); nodes[11].attract(nodes[15]);
   nodes[12].attract(nodes[0]);    nodes[12].attract(nodes[1]);    nodes[12].attract(nodes[2]);    nodes[12].attract(nodes[3]);    nodes[12].attract(nodes[4]); nodes[12].attract(nodes[5]); nodes[12].attract(nodes[6]); nodes[12].attract(nodes[7]); nodes[12].attract(nodes[8]); nodes[12].attract(nodes[9]); nodes[12].attract(nodes[10]); nodes[12].attract(nodes[11]); nodes[12].attract(nodes[13]); nodes[12].attract(nodes[14]); nodes[12].attract(nodes[15]);
   nodes[13].attract(nodes[0]);    nodes[13].attract(nodes[1]);    nodes[13].attract(nodes[2]);    nodes[13].attract(nodes[3]);    nodes[13].attract(nodes[4]); nodes[13].attract(nodes[5]); nodes[13].attract(nodes[6]); nodes[13].attract(nodes[7]); nodes[13].attract(nodes[8]); nodes[13].attract(nodes[9]); nodes[13].attract(nodes[10]); nodes[13].attract(nodes[11]); nodes[13].attract(nodes[12]); nodes[13].attract(nodes[14]); nodes[13].attract(nodes[15]);
   nodes[14].attract(nodes[0]);    nodes[14].attract(nodes[1]);    nodes[14].attract(nodes[2]);    nodes[14].attract(nodes[3]);    nodes[14].attract(nodes[4]); nodes[14].attract(nodes[5]); nodes[14].attract(nodes[6]); nodes[14].attract(nodes[7]); nodes[14].attract(nodes[8]); nodes[14].attract(nodes[9]); nodes[14].attract(nodes[10]); nodes[14].attract(nodes[11]); nodes[14].attract(nodes[12]); nodes[14].attract(nodes[13]); nodes[14].attract(nodes[15]);
   nodes[15].attract(nodes[0]);    nodes[15].attract(nodes[1]);    nodes[15].attract(nodes[2]);    nodes[15].attract(nodes[3]);    nodes[15].attract(nodes[4]); nodes[15].attract(nodes[5]); nodes[15].attract(nodes[6]); nodes[15].attract(nodes[7]); nodes[15].attract(nodes[8]); nodes[15].attract(nodes[9]); nodes[15].attract(nodes[10]); nodes[15].attract(nodes[11]); nodes[15].attract(nodes[12]); nodes[15].attract(nodes[13]); nodes[15].attract(nodes[14]);


 for (var i = 0 ; i < 16; i++) {
   nodes[i].update();
 }
 // for (var i = 0; i < springs.length; i++) {
 //   springs[i].update();
 // }

 if (selectedNode != null) {
    // if (p.key == 'E'|| p.key == 'e') {
   selectedNode.x = p.mouseX;
   selectedNode.y = p.mouseY;
 // }
}

 p.stroke(119,138,164);
    p.strokeWeight(1);
  var line1 = p.line(nodes[0].x, nodes[0].y, nodes[1].x, nodes[1].y);
  var line2 = p.line(nodes[0].x, nodes[0].y, nodes[2].x, nodes[2].y);
  var line3 = p.line(nodes[0].x, nodes[0].y, nodes[3].x, nodes[3].y);
  var line4 = p.line(nodes[0].x, nodes[0].y, nodes[4].x, nodes[4].y);
  var line5 = p.line(nodes[0].x, nodes[0].y, nodes[5].x, nodes[5].y);
  var line6 = p.line(nodes[1].x, nodes[1].y, nodes[6].x, nodes[6].y);
  var line7 = p.line(nodes[4].x, nodes[4].y, nodes[7].x, nodes[7].y);
  var line8 = p.line(nodes[6].x, nodes[6].y, nodes[7].x, nodes[7].y);
  var line9 = p.line(nodes[3].x, nodes[3].y, nodes[6].x, nodes[6].y);
  var line10 = p.line(nodes[1].x, nodes[1].y, nodes[5].x, nodes[5].y);
  var line11 = p.line(nodes[2].x, nodes[2].y, nodes[8].x, nodes[8].y);
  var line12 = p.line(nodes[1].x, nodes[1].y, nodes[9].x, nodes[9].y);
  var line12 = p.line(nodes[5].x, nodes[5].y, nodes[9].x, nodes[9].y);
  var line14 = p.line(nodes[2].x, nodes[2].y, nodes[9].x, nodes[9].y);
  var line15 = p.line(nodes[8].x, nodes[8].y, nodes[9].x, nodes[9].y);
  var line16 = p.line(nodes[2].x, nodes[2].y, nodes[10].x, nodes[10].y);
  var line17 = p.line(nodes[10].x, nodes[10].y, nodes[11].x, nodes[11].y);
  var line18 = p.line(nodes[8].x, nodes[8].y, nodes[12].x, nodes[12].y);
  var line19 = p.line(nodes[12].x, nodes[12].y, nodes[13].x, nodes[13].y);
  var line20 = p.line(nodes[8].x, nodes[8].y, nodes[14].x, nodes[14].y);
  var line21 = p.line(nodes[14].x, nodes[14].y, nodes[15].x, nodes[15].y);
  var line22 = p.line(nodes[8].x, nodes[8].y, nodes[15].x, nodes[15].y);


  // p.update(line1);
  // p.update(line2);
  // p.update(line3);
  // p.update(line4);
  // p.update(line5);
  // p.update(line6);
  // p.update(line7);
  // p.update(line8);
  // p.update(line9);
  // p.update(line10);
  // p.update(line11);
  // p.update(line12);
  // p.update(line13);
  // p.update(line14);
  // p.update(line15);
  // p.update(line16);
  // p.update(line17);
  // p.update(line18);
  // p.update(line19);
  // p.update(line20);
  // p.update(line21);
  //
  // line1.update();
  // line2.update();
  // line3.update();
  // line4.update();
  // line5.update();
  // line6.update();
  // line7.update();
  // line8.update();
  // line9.update();
  // line10.update();
  // line11.update();
  // line12.update();
  // line13.update();
  // line14.update();
  // line15.update();
  // line16.update();

  if (myBoolean) {
        myBoolean = false;
        p.println('saving to pdf – finishing');
        p.endRecord();
      }
      a = a + 0.04;
       nodeDiameterxd=p.sq(a-3);
       nodeDiameterxd= nodeDiameterxd+1;
       nodeDiameterxd= p.sqrt(nodeDiameterxd);
       nodeDiameterxd=-a/nodeDiameterxd*15;
       nodeDiameteryd=p.sq(a-3);
       nodeDiameteryd= nodeDiameteryd+1;
       nodeDiameteryd= p.sqrt(nodeDiameteryd);
       nodeDiameteryd=-a/nodeDiameteryd*15;
       nodeDiameteryc=p.sq(a-2);
       nodeDiameteryc= nodeDiameteryc+1;
       nodeDiameteryc= p.sqrt(nodeDiameteryc);
       nodeDiameteryc=-a/nodeDiameteryc*30;
       nodeDiameterxc=p.sq(a-2);
       nodeDiameterxc= nodeDiameterxc+1;
       nodeDiameterxc= p.sqrt(nodeDiameterxc);
       nodeDiameterxc=-a/nodeDiameterxc*30;
       nodeDiameteryb=p.sq(a-1.5);
       nodeDiameteryb= nodeDiameteryb+1;
       nodeDiameteryb= p.sqrt(nodeDiameteryb);
       nodeDiameteryb=-a/nodeDiameteryb*50;
       nodeDiameterxb=p.sq(a-1.5);
       nodeDiameterxb= nodeDiameterxb+1;
       nodeDiameterxb= p.sqrt(nodeDiameterxb);
       nodeDiameterxb=-a/nodeDiameterxb*50;
       nodeDiameterya=p.sq(a-1);
       nodeDiameterya= nodeDiameterya+1;
       nodeDiameterya= p.sqrt(nodeDiameterya);
       nodeDiameterya=-a/nodeDiameterya*70;
       nodeDiameterxa=p.sq(a-1);
       nodeDiameterxa= nodeDiameterxa+1;
       nodeDiameterxa= p.sqrt(nodeDiameterxa);
       nodeDiameterxa=-a/nodeDiameterxa*70;
       nodeDiameterye=p.sq(a-1);
       nodeDiameterye= nodeDiameterye+1;
       nodeDiameterye= p.sqrt(nodeDiameterye);
       nodeDiameterye=-a/nodeDiameterye*90;
       nodeDiameterxe=p.sq(a-1);
       nodeDiameterxe= nodeDiameterxe+1;
       nodeDiameterxe= p.sqrt(nodeDiameterxe);
       nodeDiameterxe=-a/nodeDiameterxe*90;

p.strokeWeight(2);
p.fill(64,40,43);
p.stroke(91,21,15);
    p.ellipse(nodes[0].x, nodes[0].y, nodeDiameterxe, nodeDiameterye);
    p.ellipse(nodes[8].x, nodes[8].y, nodeDiameterxe, nodeDiameterye);
p.stroke(78,25,20);
    p.ellipse(nodes[1].x, nodes[1].y, nodeDiameterxa, nodeDiameterya);
    p.ellipse(nodes[2].x, nodes[2].y, nodeDiameterxa, nodeDiameterya);
    p.ellipse(nodes[9].x, nodes[9].y, nodeDiameterxa, nodeDiameterya);
p.stroke(67,26,20);
    p.ellipse(nodes[5].x, nodes[5].y, nodeDiameterxb, nodeDiameteryb);
    p.ellipse(nodes[6].x, nodes[6].y, nodeDiameterxb, nodeDiameteryb);
p.stroke(55,23,18);
    p.ellipse(nodes[3].x, nodes[3].y, nodeDiameterxc, nodeDiameteryc);
    p.ellipse(nodes[4].x, nodes[4].y, nodeDiameterxc, nodeDiameteryc);
    p.ellipse(nodes[10].x, nodes[10].y, nodeDiameterxc, nodeDiameteryc);
    p.ellipse(nodes[12].x, nodes[12].y, nodeDiameterxc, nodeDiameteryc);
    p.ellipse(nodes[14].x, nodes[14].y, nodeDiameterxc, nodeDiameteryc);
    p.ellipse(nodes[15].x, nodes[15].y, nodeDiameterxc, nodeDiameteryc);
    p.ellipse(nodes[7].x, nodes[7].y, nodeDiameterxc, nodeDiameteryc);
p.stroke(21,19,12);
    p.ellipse(nodes[11].x, nodes[11].y, nodeDiameterxd, nodeDiameteryd);
    p.ellipse(nodes[13].x, nodes[13].y, nodeDiameterxd, nodeDiameteryd);

    p.fill(back);

  p.noStroke();
        p.ellipse(nodes[0].x, nodes[0].y, nodeDiameterxe+strokenode, nodeDiameterye+strokenode);
        p.ellipse(nodes[8].x, nodes[8].y, nodeDiameterxe+strokenode, nodeDiameterye+strokenode);

  p.noStroke();
        p.ellipse(nodes[1].x, nodes[1].y, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
        p.ellipse(nodes[2].x, nodes[2].y, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);
        p.ellipse(nodes[9].x, nodes[9].y, nodeDiameterxa+strokenode, nodeDiameterya+strokenode);

  p.noStroke();
        p.ellipse(nodes[5].x, nodes[5].y, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);
        p.ellipse(nodes[6].x, nodes[6].y, nodeDiameterxb+strokenode, nodeDiameteryb+strokenode);

  p.noStroke();
        p.ellipse(nodes[3].x, nodes[3].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
        p.ellipse(nodes[4].x, nodes[4].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
        p.ellipse(nodes[10].x, nodes[10].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
        p.ellipse(nodes[12].x, nodes[12].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
        p.ellipse(nodes[14].x, nodes[14].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
        p.ellipse(nodes[15].x, nodes[15].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);
        p.ellipse(nodes[7].x, nodes[7].y, nodeDiameterxc+strokenode, nodeDiameteryc+strokenode);

  p.noStroke();
        p.ellipse(nodes[11].x, nodes[11].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);
        p.ellipse(nodes[13].x, nodes[13].y, nodeDiameterxd+strokenode, nodeDiameteryd+strokenode);

        if (p.mouseIsPressed == true){
         if ((nodes[0].x-50 < p.mouseX && nodes[0].x+50 > p.mouseX) && (nodes[0].y-50 < p.mouseY && nodes[0].y+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize+10);
          p.text(auxétisme, nodes[0].x, nodes[0].y);
          if (p.mouseIsPressed == true){
            // if (p.mouseButton == RIGHT){
            window.open("https://www.cjoint.com/doc/22_06/LFxjUhzUDsD_BOOK-WEB-2.pdf");
            p.mouseReleased();
          // }
        }
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
            p.text(auxétisme, nodes[0].x, nodes[0].y);
         }
        } else {
          if ((nodes[0].x-50 < p.mouseX && nodes[0].x+50 > p.mouseX) && (nodes[0].y-50 < p.mouseY && nodes[0].y+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize+10);
          p.text(auxétisme, nodes[0].x, nodes[0].y);
          if (p.mouseIsPressed == true){
            // if (p.mouseButton == RIGHT){
            window.open("https://www.cjoint.com/doc/22_06/LFxjUhzUDsD_BOOK-WEB-2.pdf");
            p.mouseReleased();
          // }
        }
        } else {
          p.fill(texthide);
          p.textSize(textsize+10);
          p.text(auxétisme, nodes[0].x, nodes[0].y);
          }
        }


        if (p.mouseIsPressed == true){
          if ((nodes[1].x-50 < p.mouseX && nodes[1].x+50 > p.mouseX) && (nodes[1].y-50 < p.mouseY && nodes[1].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
             p.text(tenségrité, nodes[1].x, nodes[1].y);
             if (p.mouseIsPressed == true){
               // if (p.mouseButton == RIGHT){
               window.open("https://www.cjoint.com/doc/22_06/LFxjUhzUDsD_BOOK-WEB-2.pdf");
               p.mouseReleased();
             // }
           }
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(tenségrité, nodes[1].x, nodes[1].y);
          }
             } else {
        if ((nodes[1].x-50 < p.mouseX && nodes[1].x+50 > p.mouseX) && (nodes[1].y-50 < p.mouseY && nodes[1].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
             p.text(tenségrité, nodes[1].x, nodes[1].y);
             if (p.mouseIsPressed == true){
               // if (p.mouseButton == RIGHT){
               window.open("https://www.cjoint.com/doc/22_06/LFxjUhzUDsD_BOOK-WEB-2.pdf");
               p.mouseReleased();
             // }
           }
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(tenségrité, nodes[1].x, nodes[1].y);
          }
          }


        if (p.mouseIsPressed == true){
        if ((nodes[2].x-50 < p.mouseX && nodes[2].x+50 > p.mouseX) && (nodes[2].y-50 < p.mouseY && nodes[2].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
             p.text(jamming, nodes[2].x, nodes[2].y);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(jamming, nodes[2].x, nodes[2].y);
          }
             } else {
        if ((nodes[2].x-50 < p.mouseX && nodes[2].x+50 > p.mouseX) && (nodes[2].y-50 < p.mouseY && nodes[2].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
             p.text(jamming, nodes[2].x, nodes[2].y);
         } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(jamming, nodes[2].x, nodes[2].y);
          }
             }


         if (p.mouseIsPressed == true){
        if ((nodes[3].x-50 < p.mouseX && nodes[3].x+50 > p.mouseX) && (nodes[3].y-50 < p.mouseY && nodes[3].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(système, nodes[3].x, nodes[3].y-10);
            p.text(pneumatique, nodes[3].x , nodes[3].y+10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(système, nodes[3].x, nodes[3].y-10);
            p.text(pneumatique, nodes[3].x , nodes[3].y+10);
          }
            } else {
        if ((nodes[3].x-50 < p.mouseX && nodes[3].x+50 > p.mouseX) && (nodes[3].y-50 < p.mouseY && nodes[3].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(système, nodes[3].x, nodes[3].y-10);
            p.text(pneumatique, nodes[3].x , nodes[3].y+10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(système, nodes[3].x, nodes[3].y-10);
            p.text(pneumatique, nodes[3].x , nodes[3].y+10);
          }
            }


          if (p.mouseIsPressed == true){
            if ((nodes[4].x-50 < p.mouseX && nodes[4].x+50 > p.mouseX) && (nodes[4].y-50 < p.mouseY && nodes[4].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(motif, nodes[4].x, nodes[4].y -10);
           p.text(procédural, nodes[4].x , nodes[4].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(motif, nodes[4].x, nodes[4].y -10);
           p.text(procédural, nodes[4].x , nodes[4].y +10);
          }
           } else {
        if ((nodes[4].x-50 < p.mouseX && nodes[4].x+50 > p.mouseX) && (nodes[4].y-50 < p.mouseY && nodes[4].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(motif, nodes[4].x, nodes[4].y -10);
           p.text(procédural, nodes[4].x , nodes[4].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(motif, nodes[4].x, nodes[4].y -10);
           p.text(procédural, nodes[4].x , nodes[4].y +10);
          }
           }


          if (p.mouseIsPressed == true){
            if ((nodes[5].x-50 < p.mouseX && nodes[5].x+50 > p.mouseX) && (nodes[5].y-50 < p.mouseY && nodes[5].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(mémoire, nodes[5].x, nodes[5].y -10);
             p.text(deforme, nodes[5].x , nodes[5].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(mémoire, nodes[5].x, nodes[5].y -10);
             p.text(deforme, nodes[5].x , nodes[5].y +10);
          }
           } else {
        if ((nodes[5].x-50 < p.mouseX && nodes[5].x+50 > p.mouseX) && (nodes[5].y-50 < p.mouseY && nodes[5].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(mémoire, nodes[5].x, nodes[5].y -10);
             p.text(deforme, nodes[5].x , nodes[5].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(mémoire, nodes[5].x, nodes[5].y -10);
             p.text(deforme, nodes[5].x , nodes[5].y +10);
          }
           }


          if (p.mouseIsPressed == true){
            if ((nodes[6].x-50 < p.mouseX && nodes[6].x+50 > p.mouseX) && (nodes[6].y-50 < p.mouseY && nodes[6].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(surface, nodes[6].x, nodes[6].y -10);
           p.text(entension, nodes[6].x, nodes[6].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(surface, nodes[6].x, nodes[6].y -10);
           p.text(entension, nodes[6].x, nodes[6].y +10);
          }
           } else {
        if ((nodes[6].x-50 < p.mouseX && nodes[6].x+50 > p.mouseX) && (nodes[6].y-50 < p.mouseY && nodes[6].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(surface, nodes[6].x, nodes[6].y -10);
           p.text(entension, nodes[6].x, nodes[6].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(surface, nodes[6].x, nodes[6].y -10);
           p.text(entension, nodes[6].x, nodes[6].y +10);
          }
           }


         if (p.mouseIsPressed == true){
           if ((nodes[7].x-50 < p.mouseX && nodes[7].x+50 > p.mouseX) && (nodes[7].y-50 < p.mouseY && nodes[7].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(motif, nodes[7].x, nodes[7].y -10);
           p.text(céllulaire, nodes[7].x , nodes[7].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(motif, nodes[7].x, nodes[7].y -10);
           p.text(céllulaire, nodes[7].x , nodes[7].y +10);
          }
           } else {
        if ((nodes[7].x-50 < p.mouseX && nodes[7].x+50 > p.mouseX) && (nodes[7].y-50 < p.mouseY && nodes[7].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(motif, nodes[7].x, nodes[7].y -10);
           p.text(céllulaire, nodes[7].x , nodes[7].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(motif, nodes[7].x, nodes[7].y -10);
           p.text(céllulaire, nodes[7].x , nodes[7].y +10);
          }
           }


         if (p.mouseIsPressed == true){
         if ((nodes[8].x-50 < p.mouseX && nodes[8].x+50 > p.mouseX) && (nodes[8].y-50 < p.mouseY && nodes[8].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(courbes, nodes[8].x, nodes[8].y -10);
           p.text(polynomiales, nodes[8].x , nodes[8].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(courbes, nodes[8].x, nodes[8].y -10);
           p.text(polynomiales, nodes[8].x , nodes[8].y +10);
          }
          } else {
        if ((nodes[8].x-50 < p.mouseX && nodes[8].x+50 > p.mouseX) && (nodes[8].y-50 < p.mouseY && nodes[8].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
              p.text(courbes, nodes[8].x, nodes[8].y -10);
           p.text(polynomiales, nodes[8].x , nodes[8].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
             p.text(courbes, nodes[8].x, nodes[8].y -10);
           p.text(polynomiales, nodes[8].x , nodes[8].y +10);
          }
          }


        if (p.mouseIsPressed == true){
          if ((nodes[9].x-50 < p.mouseX && nodes[9].x+50 > p.mouseX) && (nodes[9].y-50 < p.mouseY && nodes[9].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(déformation, nodes[9].x, nodes[9].y -10);
           p.text(différentielle, nodes[9].x , nodes[9].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(déformation, nodes[9].x, nodes[9].y -10);
           p.text(différentielle, nodes[9].x , nodes[9].y +10);
          }
        } else {
        if ((nodes[9].x-50 < p.mouseX && nodes[9].x+50 > p.mouseX) && (nodes[9].y-50 < p.mouseY && nodes[9].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(déformation, nodes[9].x, nodes[9].y -10);
           p.text(différentielle, nodes[9].x , nodes[9].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(déformation, nodes[9].x, nodes[9].y -10);
           p.text(différentielle, nodes[9].x, nodes[9].y +10);
          }
          }


        if (p.mouseIsPressed == true){
         if ((nodes[10].x-50 < p.mouseX && nodes[10].x+50 > p.mouseX) && (nodes[10].y-50 < p.mouseY && nodes[10].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(matière, nodes[10].x, nodes[10].y -10);
           p.text(granulaire, nodes[10].x, nodes[10].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(matière, nodes[10].x, nodes[10].y -10);
           p.text(granulaire, nodes[10].x , nodes[10].y +10);
          }
          } else {
        if ((nodes[10].x-50 < p.mouseX && nodes[10].x+50 > p.mouseX) && (nodes[10].y-50 < p.mouseY && nodes[10].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(matière, nodes[10].x, nodes[10].y -10);
           p.text(granulaire, nodes[10].x, nodes[10].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(matière, nodes[10].x, nodes[10].y -10);
           p.text(granulaire, nodes[10].x , nodes[10].y +10);
          }
          }


        if (p.mouseIsPressed == true){
         if ((nodes[11].x-50 < p.mouseX && nodes[11].x+50 > p.mouseX) && (nodes[11].y-50 < p.mouseY && nodes[11].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(abrasion, nodes[11].x, nodes[11].y );
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(abrasion, nodes[11].x, nodes[11].y );
          }
          } else {
        if ((nodes[11].x-50 < p.mouseX && nodes[11].x+50 > p.mouseX) && (nodes[11].y-50 < p.mouseY && nodes[11].y+50 > p.mouseY)) {
               p.fill(textvu);
            p.textSize(textsize+10);
               p.text(abrasion, nodes[11].x, nodes[11].y );
        } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(abrasion, nodes[11].x, nodes[11].y );
          }
          }


        if (p.mouseIsPressed == true){
          if ((nodes[12].x-50 < p.mouseX && nodes[12].x+50 > p.mouseX) && (nodes[12].y-50 < p.mouseY && nodes[12].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(turbulence, nodes[12].x, nodes[12].y);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(turbulence, nodes[12].x, nodes[12].y);
          }
          } else {
        if ((nodes[12].x-50 < p.mouseX && nodes[12].x+50 > p.mouseX) && (nodes[12].y-50 < p.mouseY && nodes[12].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(turbulence, nodes[12].x, nodes[12].y);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(turbulence, nodes[12].x, nodes[12].y);
          }
          }


         if (p.mouseIsPressed == true){
           if ((nodes[13].x-50 < p.mouseX && nodes[13].x+50 > p.mouseX) && (nodes[13].y-50 < p.mouseY && nodes[13].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(réflexion, nodes[13].x, nodes[13].y);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(réflexion, nodes[13].x, nodes[13].y);
          }
          } else {
        if ((nodes[13].x-50 < p.mouseX && nodes[13].x+50 > p.mouseX) && (nodes[13].y-50 < p.mouseY && nodes[13].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(réflexion, nodes[13].x, nodes[13].y);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(réflexion, nodes[13].x, nodes[13].y);
          }
          }


        if (p.mouseIsPressed == true){
          if ((nodes[14].x-50 < p.mouseX && nodes[14].x+50 > p.mouseX) && (nodes[14].y-50 < p.mouseY && nodes[14].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(portance, nodes[14].x, nodes[14].y);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(portance, nodes[14].x, nodes[14].y);
          }
          } else {
        if ((nodes[14].x-50 < p.mouseX && nodes[14].x+50 > p.mouseX) && (nodes[14].y-50 < p.mouseY && nodes[14].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(portance, nodes[14].x, nodes[14].y);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(portance, nodes[14].x, nodes[14].y);
          }
          }


        if (p.mouseIsPressed == true){
          if ((nodes[15].x-50 < p.mouseX && nodes[15].x+50 > p.mouseX) && (nodes[15].y-50 < p.mouseY && nodes[15].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(écoulement, nodes[15].x, nodes[15].y -10);
           p.text(laminaire, nodes[15].x , nodes[15].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(écoulement, nodes[15].x, nodes[15].y -10);
           p.text(laminaire, nodes[15].x, nodes[15].y +10);
          }
          } else {
        if ((nodes[15].x-50 < p.mouseX && nodes[15].x+50 > p.mouseX) && (nodes[15].y-50 < p.mouseY && nodes[15].y+50 > p.mouseY)) {
              p.fill(textvu);
            p.textSize(textsize+10);
               p.text(écoulement, nodes[15].x, nodes[15].y -10);
           p.text(laminaire, nodes[15].x, nodes[15].y +10);
          } else {
            p.fill(texthide);
            p.textSize(textsize+10);
              p.text(écoulement, nodes[15].x, nodes[15].y -10);
           p.text(laminaire, nodes[15].x, nodes[15].y +10);
          }
        }




        if (p.mouseIsPressed == true){
          if ((nodes[0].x*0.5+nodes[1].x*0.5-50 < p.mouseX && nodes[0].x*0.5+nodes[1].x*0.5+50 > p.mouseX) && ( nodes[0].y*0.5+nodes[1].y*0.5-50 < p.mouseY &&  nodes[0].y*0.5+nodes[1].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[1].x*0.5, nodes[0].y*0.5+nodes[1].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[1].x*0.5, nodes[0].y*0.5+nodes[1].y*0.5);
         }
             } else {
        if ((nodes[0].x*0.5+nodes[1].x*0.5-50 < p.mouseX && nodes[0].x*0.5+nodes[1].x*0.5+50 > p.mouseX) && ( nodes[0].y*0.5+nodes[1].y*0.5-50 < p.mouseY &&  nodes[0].y*0.5+nodes[1].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[1].x*0.5, nodes[0].y*0.5+nodes[1].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[1].x*0.5, nodes[0].y*0.5+nodes[1].y*0.5);
         }
          }

        if (p.mouseIsPressed == true){
          if ((nodes[0].x*0.5+nodes[2].x*0.5-50 < p.mouseX && nodes[0].x*0.5+nodes[2].x*0.5+50 > p.mouseX) && (  nodes[0].y*0.5+nodes[2].y*0.5-50 < p.mouseY &&   nodes[0].y*0.5+nodes[2].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[2].x*0.5,  nodes[0].y*0.5+nodes[2].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[2].x*0.5,  nodes[0].y*0.5+nodes[2].y*0.5);
         }
             } else {
        if ((nodes[0].x*0.5+nodes[2].x*0.5-50 < p.mouseX && nodes[0].x*0.5+nodes[2].x*0.5+50 > p.mouseX) && (  nodes[0].y*0.5+nodes[2].y*0.5-50 < p.mouseY &&   nodes[0].y*0.5+nodes[2].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[2].x*0.5,  nodes[0].y*0.5+nodes[2].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[2].x*0.5,  nodes[0].y*0.5+nodes[2].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if ((nodes[0].x*0.5+nodes[3].x*0.5-50 < p.mouseX && nodes[0].x*0.5+nodes[3].x*0.5+50 > p.mouseX) && (nodes[0].y*0.5+nodes[3].y*0.5-50 < p.mouseY && nodes[0].y*0.5+nodes[3].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[3].x*0.5,  nodes[0].y*0.5+nodes[3].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[3].x*0.5,  nodes[0].y*0.5+nodes[3].y*0.5);
         }
             } else {
        if ((nodes[0].x*0.5+nodes[3].x*0.5-50 < p.mouseX && nodes[0].x*0.5+nodes[3].x*0.5+50 > p.mouseX) && (nodes[0].y*0.5+nodes[3].y*0.5-50 < p.mouseY && nodes[0].y*0.5+nodes[3].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[3].x*0.5,  nodes[0].y*0.5+nodes[3].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[3].x*0.5,  nodes[0].y*0.5+nodes[3].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if (( nodes[0].x*0.5+nodes[4].x*0.5 < p.mouseX &&  nodes[0].x*0.5+nodes[4].x*0.5+50 > p.mouseX) && ( nodes[0].y*0.5+nodes[4].y*0.5-50 < p.mouseY &&  nodes[0].y*0.5+nodes[4].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[4].x*0.5+15,   nodes[0].y*0.5+nodes[4].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[4].x*0.5+15,   nodes[0].y*0.5+nodes[4].y*0.5);
         }
             } else {
        if (( nodes[0].x*0.5+nodes[4].x*0.5 < p.mouseX &&  nodes[0].x*0.5+nodes[4].x*0.5+50 > p.mouseX) && ( nodes[0].y*0.5+nodes[4].y*0.5-50 < p.mouseY &&  nodes[0].y*0.5+nodes[4].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[4].x*0.5+15,   nodes[0].y*0.5+nodes[4].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[4].x*0.5+15,   nodes[0].y*0.5+nodes[4].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if (( nodes[0].x*0.5+nodes[4].x*0.5-50 < p.mouseX &&   nodes[0].x*0.5+nodes[4].x*0.5 > p.mouseX) && (  nodes[0].y*0.5+nodes[4].y*0.5-50 < p.mouseY &&   nodes[0].y*0.5+nodes[4].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,  nodes[0].x*0.5+nodes[4].x*0.5-15,   nodes[0].y*0.5+nodes[4].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[4].x*0.5-15,   nodes[0].y*0.5+nodes[4].y*0.5);
         }
             } else {
        if (( nodes[0].x*0.5+nodes[4].x*0.5-50 < p.mouseX &&   nodes[0].x*0.5+nodes[4].x*0.5 > p.mouseX) && (  nodes[0].y*0.5+nodes[4].y*0.5-50 < p.mouseY &&   nodes[0].y*0.5+nodes[4].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,  nodes[0].x*0.5+nodes[4].x*0.5-15,   nodes[0].y*0.5+nodes[4].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[4].x*0.5-15,   nodes[0].y*0.5+nodes[4].y*0.5);
         }
        }

        if (p.mouseIsPressed == true){
          if (( nodes[0].x*0.5+nodes[5].x*0.5 < p.mouseX &&  nodes[0].x*0.5+nodes[5].x*0.5+50 > p.mouseX) && ( nodes[0].y*0.5+nodes[5].y*0.5-50 < p.mouseY &&  nodes[0].y*0.5+nodes[5].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[5].x*0.5+15, nodes[0].y*0.5+nodes[5].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[5].x*0.5+15, nodes[0].y*0.5+nodes[5].y*0.5);
         }
             } else {
        if (( nodes[0].x*0.5+nodes[5].x*0.5 < p.mouseX &&  nodes[0].x*0.5+nodes[5].x*0.5+50 > p.mouseX) && ( nodes[0].y*0.5+nodes[5].y*0.5-50 < p.mouseY &&  nodes[0].y*0.5+nodes[5].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[5].x*0.5+15, nodes[0].y*0.5+nodes[5].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, nodes[0].x*0.5+nodes[5].x*0.5+15, nodes[0].y*0.5+nodes[5].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if ((nodes[0].x*0.5+nodes[5].x*0.5-50 < p.mouseX &&  nodes[0].x*0.5+nodes[5].x*0.5 > p.mouseX) && (  nodes[0].y*0.5+nodes[5].y*0.5-50 < p.mouseY &&    nodes[0].y*0.5+nodes[5].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[5].x*0.5-15,  nodes[0].y*0.5+nodes[5].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[5].x*0.5-15,  nodes[0].y*0.5+nodes[5].y*0.5);
         }
             } else {
         if ((nodes[0].x*0.5+nodes[5].x*0.5-50 < p.mouseX &&  nodes[0].x*0.5+nodes[5].x*0.5 > p.mouseX) && (  nodes[0].y*0.5+nodes[5].y*0.5-50 < p.mouseY &&    nodes[0].y*0.5+nodes[5].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[5].x*0.5-15,  nodes[0].y*0.5+nodes[5].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6, nodes[0].x*0.5+nodes[5].x*0.5-15,  nodes[0].y*0.5+nodes[5].y*0.5);
         }
        }

        if (p.mouseIsPressed == true){
          if ((  nodes[3].x*0.5+nodes[6].x*0.5 < p.mouseX &&   nodes[3].x*0.5+nodes[6].x*0.5+50 > p.mouseX) && ( nodes[3].y*0.5+nodes[6].y*0.5-50 < p.mouseY &&  nodes[3].y*0.5+nodes[6].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,  nodes[3].x*0.5+nodes[6].x*0.5+15, nodes[3].y*0.5+nodes[6].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6,  nodes[3].x*0.5+nodes[6].x*0.5+15, nodes[3].y*0.5+nodes[6].y*0.5);
         }
             } else {
        if ((  nodes[3].x*0.5+nodes[6].x*0.5 < p.mouseX &&   nodes[3].x*0.5+nodes[6].x*0.5+50 > p.mouseX) && ( nodes[3].y*0.5+nodes[6].y*0.5-50 < p.mouseY &&  nodes[3].y*0.5+nodes[6].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,  nodes[3].x*0.5+nodes[6].x*0.5+15, nodes[3].y*0.5+nodes[6].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6,  nodes[3].x*0.5+nodes[6].x*0.5+15, nodes[3].y*0.5+nodes[6].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if ((nodes[3].x*0.5+nodes[6].x*0.5-50 < p.mouseX &&  nodes[3].x*0.5+nodes[6].x*0.5 > p.mouseX) && (  nodes[3].y*0.5+nodes[6].y*0.5-50 < p.mouseY &&  nodes[3].y*0.5+nodes[6].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8, nodes[3].x*0.5+nodes[6].x*0.5-15, nodes[3].y*0.5+nodes[6].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8, nodes[3].x*0.5+nodes[6].x*0.5-15, nodes[3].y*0.5+nodes[6].y*0.5);
         }
             } else {
         if ((nodes[3].x*0.5+nodes[6].x*0.5-50 < p.mouseX &&  nodes[3].x*0.5+nodes[6].x*0.5 > p.mouseX) && (  nodes[3].y*0.5+nodes[6].y*0.5-50 < p.mouseY &&  nodes[3].y*0.5+nodes[6].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8, nodes[3].x*0.5+nodes[6].x*0.5-15, nodes[3].y*0.5+nodes[6].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8, nodes[3].x*0.5+nodes[6].x*0.5-15, nodes[3].y*0.5+nodes[6].y*0.5);
         }
        }

        if (p.mouseIsPressed == true){
          if ((  nodes[1].x*0.5+nodes[5].x*0.5 < p.mouseX &&   nodes[1].x*0.5+nodes[5].x*0.5+50 > p.mouseX) && ( nodes[1].y*0.5+nodes[5].y*0.5-50 < p.mouseY &&  nodes[1].y*0.5+nodes[5].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,  nodes[1].x*0.5+nodes[5].x*0.5+15, nodes[1].y*0.5+nodes[5].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,  nodes[1].x*0.5+nodes[5].x*0.5+15, nodes[1].y*0.5+nodes[5].y*0.5);
         }
             } else {
         if ((  nodes[1].x*0.5+nodes[5].x*0.5 < p.mouseX &&   nodes[1].x*0.5+nodes[5].x*0.5+50 > p.mouseX) && ( nodes[1].y*0.5+nodes[5].y*0.5-50 < p.mouseY &&  nodes[1].y*0.5+nodes[5].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,  nodes[1].x*0.5+nodes[5].x*0.5+15, nodes[1].y*0.5+nodes[5].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,  nodes[1].x*0.5+nodes[5].x*0.5+15, nodes[1].y*0.5+nodes[5].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if ((nodes[1].x*0.5+nodes[5].x*0.5-50 < p.mouseX &&  nodes[1].x*0.5+nodes[5].x*0.5 > p.mouseX) && (  nodes[1].y*0.5+nodes[5].y*0.5-50 < p.mouseY &&  nodes[1].y*0.5+nodes[5].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr3,nodes[1].x*0.5+nodes[5].x*0.5-15, nodes[1].y*0.5+nodes[5].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr3,nodes[1].x*0.5+nodes[5].x*0.5-15, nodes[1].y*0.5+nodes[5].y*0.5);
         }
             } else {
         if ((nodes[1].x*0.5+nodes[5].x*0.5-50 < p.mouseX &&  nodes[1].x*0.5+nodes[5].x*0.5 > p.mouseX) && (  nodes[1].y*0.5+nodes[5].y*0.5-50 < p.mouseY &&  nodes[1].y*0.5+nodes[5].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr3,nodes[1].x*0.5+nodes[5].x*0.5-15, nodes[1].y*0.5+nodes[5].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr3,nodes[1].x*0.5+nodes[5].x*0.5-15, nodes[1].y*0.5+nodes[5].y*0.5);
         }
        }

        if (p.mouseIsPressed == true){
          if ((  nodes[8].x*0.5+nodes[9].x*0.5 < p.mouseX &&   nodes[8].x*0.5+nodes[9].x*0.5+50 > p.mouseX) && (  nodes[8].y*0.5+nodes[9].y*0.5-50 < p.mouseY &&  nodes[8].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,  nodes[8].x*0.5+nodes[9].x*0.5+15, nodes[8].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,  nodes[8].x*0.5+nodes[9].x*0.5+15, nodes[8].y*0.5+nodes[9].y*0.5);
         }
             } else {
          if ((  nodes[8].x*0.5+nodes[9].x*0.5 < p.mouseX &&   nodes[8].x*0.5+nodes[9].x*0.5+50 > p.mouseX) && (  nodes[8].y*0.5+nodes[9].y*0.5-50 < p.mouseY &&  nodes[8].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,  nodes[8].x*0.5+nodes[9].x*0.5+15, nodes[8].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,  nodes[8].x*0.5+nodes[9].x*0.5+15, nodes[8].y*0.5+nodes[9].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if ((nodes[8].x*0.5+nodes[9].x*0.5-50 < p.mouseX &&  nodes[8].x*0.5+nodes[9].x*0.5 > p.mouseX) && ( nodes[8].y*0.5+nodes[9].y*0.5-50 < p.mouseY && nodes[8].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8,nodes[8].x*0.5+nodes[9].x*0.5-15, nodes[8].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8,nodes[8].x*0.5+nodes[9].x*0.5-15, nodes[8].y*0.5+nodes[9].y*0.5);
         }
             } else {
         if ((nodes[8].x*0.5+nodes[9].x*0.5-50 < p.mouseX &&  nodes[8].x*0.5+nodes[9].x*0.5 > p.mouseX) && ( nodes[8].y*0.5+nodes[9].y*0.5-50 < p.mouseY && nodes[8].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8,nodes[8].x*0.5+nodes[9].x*0.5-15, nodes[8].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8,nodes[8].x*0.5+nodes[9].x*0.5-15, nodes[8].y*0.5+nodes[9].y*0.5);
         }
        }

        if (p.mouseIsPressed == true){
          if (( nodes[2].x*0.5+nodes[10].x*0.5 < p.mouseX && nodes[2].x*0.5+nodes[10].x*0.5+50 > p.mouseX) && ( nodes[2].y*0.5+nodes[10].y*0.5-50 < p.mouseY &&  nodes[2].y*0.5+nodes[10].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8, nodes[2].x*0.5+nodes[10].x*0.5+15, nodes[2].y*0.5+nodes[10].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8, nodes[2].x*0.5+nodes[10].x*0.5+15, nodes[2].y*0.5+nodes[10].y*0.5);
         }
             } else {
          if (( nodes[2].x*0.5+nodes[10].x*0.5 < p.mouseX && nodes[2].x*0.5+nodes[10].x*0.5+50 > p.mouseX) && ( nodes[2].y*0.5+nodes[10].y*0.5-50 < p.mouseY &&  nodes[2].y*0.5+nodes[10].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8, nodes[2].x*0.5+nodes[10].x*0.5+15, nodes[2].y*0.5+nodes[10].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8, nodes[2].x*0.5+nodes[10].x*0.5+15, nodes[2].y*0.5+nodes[10].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if ((nodes[2].x*0.5+nodes[10].x*0.5-50 < p.mouseX &&  nodes[2].x*0.5+nodes[10].x*0.5 > p.mouseX) && ( nodes[2].y*0.5+nodes[10].y*0.5-50 < p.mouseY && nodes[2].y*0.5+nodes[10].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,nodes[2].x*0.5+nodes[10].x*0.5-15, nodes[2].y*0.5+nodes[10].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6,nodes[2].x*0.5+nodes[10].x*0.5-15, nodes[2].y*0.5+nodes[10].y*0.5);
         }
             } else {
         if ((nodes[2].x*0.5+nodes[10].x*0.5-50 < p.mouseX &&  nodes[2].x*0.5+nodes[10].x*0.5 > p.mouseX) && ( nodes[2].y*0.5+nodes[10].y*0.5-50 < p.mouseY && nodes[2].y*0.5+nodes[10].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,nodes[2].x*0.5+nodes[10].x*0.5-15, nodes[2].y*0.5+nodes[10].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6,nodes[2].x*0.5+nodes[10].x*0.5-15, nodes[2].y*0.5+nodes[10].y*0.5);
         }
        }

        if (p.mouseIsPressed == true){
          if (( nodes[1].x*0.5+nodes[6].x*0.5-50 < p.mouseX &&  nodes[1].x*0.5+nodes[6].x*0.5+50 > p.mouseX) && ( nodes[1].y*0.5+nodes[6].y*0.5-50 < p.mouseY && nodes[1].y*0.5+nodes[6].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,  nodes[1].x*0.5+nodes[6].x*0.5, nodes[1].y*0.5+nodes[6].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,  nodes[1].x*0.5+nodes[6].x*0.5, nodes[1].y*0.5+nodes[6].y*0.5);
         }
             } else {
        if (( nodes[1].x*0.5+nodes[6].x*0.5-50 < p.mouseX &&  nodes[1].x*0.5+nodes[6].x*0.5+50 > p.mouseX) && ( nodes[1].y*0.5+nodes[6].y*0.5-50 < p.mouseY && nodes[1].y*0.5+nodes[6].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,  nodes[1].x*0.5+nodes[6].x*0.5, nodes[1].y*0.5+nodes[6].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,  nodes[1].x*0.5+nodes[6].x*0.5, nodes[1].y*0.5+nodes[6].y*0.5);
         }
          }

        if (p.mouseIsPressed == true){
          if ((  nodes[4].x*0.5+nodes[7].x*0.5-50 < p.mouseX &&  nodes[4].x*0.5+nodes[7].x*0.5+50 > p.mouseX) && ( nodes[4].y*0.5+nodes[7].y*0.5-50 < p.mouseY && nodes[4].y*0.5+nodes[7].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr5,   nodes[4].x*0.5+nodes[7].x*0.5, nodes[4].y*0.5+nodes[7].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr5,   nodes[4].x*0.5+nodes[7].x*0.5, nodes[4].y*0.5+nodes[7].y*0.5);
         }
             } else {
        if ((  nodes[4].x*0.5+nodes[7].x*0.5-50 < p.mouseX &&  nodes[4].x*0.5+nodes[7].x*0.5+50 > p.mouseX) && ( nodes[4].y*0.5+nodes[7].y*0.5-50 < p.mouseY && nodes[4].y*0.5+nodes[7].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr5,   nodes[4].x*0.5+nodes[7].x*0.5, nodes[4].y*0.5+nodes[7].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr5,   nodes[4].x*0.5+nodes[7].x*0.5, nodes[4].y*0.5+nodes[7].y*0.5);
         }
          }

        if (p.mouseIsPressed == true){
          if ((  nodes[6].x*0.5+nodes[7].x*0.5-50 < p.mouseX &&   nodes[6].x*0.5+nodes[7].x*0.5+50 > p.mouseX) && (nodes[6].y*0.5+nodes[7].y*0.5-50 < p.mouseY && nodes[6].y*0.5+nodes[7].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr5,  nodes[6].x*0.5+nodes[7].x*0.5,nodes[6].y*0.5+nodes[7].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr5,  nodes[6].x*0.5+nodes[7].x*0.5,nodes[6].y*0.5+nodes[7].y*0.5);
         }
             } else {
        if ((  nodes[6].x*0.5+nodes[7].x*0.5-50 < p.mouseX &&   nodes[6].x*0.5+nodes[7].x*0.5+50 > p.mouseX) && (nodes[6].y*0.5+nodes[7].y*0.5-50 < p.mouseY && nodes[6].y*0.5+nodes[7].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr5,  nodes[6].x*0.5+nodes[7].x*0.5,nodes[6].y*0.5+nodes[7].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr5,  nodes[6].x*0.5+nodes[7].x*0.5,nodes[6].y*0.5+nodes[7].y*0.5);
         }
          }

        if (p.mouseIsPressed == true){
          if (( nodes[2].x*0.5+nodes[8].x*0.5-50 < p.mouseX && nodes[2].x*0.5+nodes[8].x*0.5+50 > p.mouseX) && ( nodes[2].y*0.5+nodes[8].y*0.5-50 < p.mouseY &&  nodes[2].y*0.5+nodes[8].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8,nodes[2].x*0.5+nodes[8].x*0.5, nodes[2].y*0.5+nodes[8].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8,nodes[2].x*0.5+nodes[8].x*0.5, nodes[2].y*0.5+nodes[8].y*0.5);
         }
             } else {
        if (( nodes[2].x*0.5+nodes[8].x*0.5-50 < p.mouseX && nodes[2].x*0.5+nodes[8].x*0.5+50 > p.mouseX) && ( nodes[2].y*0.5+nodes[8].y*0.5-50 < p.mouseY &&  nodes[2].y*0.5+nodes[8].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8,nodes[2].x*0.5+nodes[8].x*0.5, nodes[2].y*0.5+nodes[8].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8,nodes[2].x*0.5+nodes[8].x*0.5, nodes[2].y*0.5+nodes[8].y*0.5);
         }
          }

        if (p.mouseIsPressed == true){
          if ((  nodes[1].x*0.5+nodes[9].x*0.5-50 < p.mouseX &&  nodes[1].x*0.5+nodes[9].x*0.5+50 > p.mouseX) && ( nodes[1].y*0.5+nodes[9].y*0.5-50 < p.mouseY && nodes[1].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, nodes[1].x*0.5+nodes[9].x*0.5, nodes[1].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, nodes[1].x*0.5+nodes[9].x*0.5, nodes[1].y*0.5+nodes[9].y*0.5);
         }
             } else {
         if ((  nodes[1].x*0.5+nodes[9].x*0.5-50 < p.mouseX &&  nodes[1].x*0.5+nodes[9].x*0.5+50 > p.mouseX) && ( nodes[1].y*0.5+nodes[9].y*0.5-50 < p.mouseY && nodes[1].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7, nodes[1].x*0.5+nodes[9].x*0.5, nodes[1].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7, nodes[1].x*0.5+nodes[9].x*0.5, nodes[1].y*0.5+nodes[9].y*0.5);
         }
          }

        if (p.mouseIsPressed == true){
          if ((nodes[5].x*0.5+nodes[9].x*0.5-50 < p.mouseX && nodes[5].x*0.5+nodes[9].x*0.5+50 > p.mouseX) && ( nodes[5].y*0.5+nodes[9].y*0.5-50 < p.mouseY && nodes[5].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,nodes[5].x*0.5+nodes[9].x*0.5,nodes[5].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,nodes[5].x*0.5+nodes[9].x*0.5,nodes[5].y*0.5+nodes[9].y*0.5);
         }
             } else {
         if ((nodes[5].x*0.5+nodes[9].x*0.5-50 < p.mouseX && nodes[5].x*0.5+nodes[9].x*0.5+50 > p.mouseX) && ( nodes[5].y*0.5+nodes[9].y*0.5-50 < p.mouseY && nodes[5].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr7,nodes[5].x*0.5+nodes[9].x*0.5,nodes[5].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr7,nodes[5].x*0.5+nodes[9].x*0.5,nodes[5].y*0.5+nodes[9].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if ((nodes[2].x*0.5+nodes[9].x*0.5-50 < p.mouseX && nodes[2].x*0.5+nodes[9].x*0.5+50 > p.mouseX) && (nodes[2].y*0.5+nodes[9].y*0.5-50 < p.mouseY && nodes[2].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8,nodes[2].x*0.5+nodes[9].x*0.5,nodes[2].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8,nodes[2].x*0.5+nodes[9].x*0.5,nodes[2].y*0.5+nodes[9].y*0.5);
         }
             } else {
        if ((nodes[2].x*0.5+nodes[9].x*0.5-50 < p.mouseX && nodes[2].x*0.5+nodes[9].x*0.5+50 > p.mouseX) && (nodes[2].y*0.5+nodes[9].y*0.5-50 < p.mouseY && nodes[2].y*0.5+nodes[9].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr8,nodes[2].x*0.5+nodes[9].x*0.5,nodes[2].y*0.5+nodes[9].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr8,nodes[2].x*0.5+nodes[9].x*0.5,nodes[2].y*0.5+nodes[9].y*0.5);
         }
         }

          if (p.mouseIsPressed == true){
          if ((nodes[10].x*0.5+nodes[11].x*0.5-50 < p.mouseX && nodes[10].x*0.5+nodes[11].x*0.5+50 > p.mouseX) && (nodes[10].y*0.5+nodes[11].y*0.5-50 < p.mouseY && nodes[10].y*0.5+nodes[11].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,nodes[10].x*0.5+nodes[11].x*0.5,nodes[10].y*0.5+nodes[11].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6,nodes[10].x*0.5+nodes[11].x*0.5,nodes[10].y*0.5+nodes[11].y*0.5);
         }
             } else {
        if ((nodes[10].x*0.5+nodes[11].x*0.5-50 < p.mouseX && nodes[10].x*0.5+nodes[11].x*0.5+50 > p.mouseX) && (nodes[10].y*0.5+nodes[11].y*0.5-50 < p.mouseY && nodes[10].y*0.5+nodes[11].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr6,nodes[10].x*0.5+nodes[11].x*0.5,nodes[10].y*0.5+nodes[11].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr6,nodes[10].x*0.5+nodes[11].x*0.5,nodes[10].y*0.5+nodes[11].y*0.5);
         }
         }

         if (p.mouseIsPressed == true){
          if ((nodes[8].x*0.5+nodes[12].x*0.5-50 < p.mouseX && nodes[8].x*0.5+nodes[12].x*0.5+50 > p.mouseX) && ( nodes[8].y*0.5+nodes[12].y*0.5-50 < p.mouseY &&  nodes[8].y*0.5+nodes[12].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr2,nodes[8].x*0.5+nodes[12].x*0.5,nodes[10].y*0.5+nodes[11].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr2,nodes[10].x*0.5+nodes[11].x*0.5,nodes[10].y*0.5+nodes[11].y*0.5);
         }
             } else {
        if ((nodes[10].x*0.5+nodes[11].x*0.5-50 < p.mouseX && nodes[10].x*0.5+nodes[11].x*0.5+50 > p.mouseX) && (nodes[10].y*0.5+nodes[11].y*0.5-50 < p.mouseY && nodes[10].y*0.5+nodes[11].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr2,nodes[10].x*0.5+nodes[11].x*0.5,nodes[10].y*0.5+nodes[11].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr2,nodes[10].x*0.5+nodes[11].x*0.5,nodes[10].y*0.5+nodes[11].y*0.5);
         }
         }

         if (p.mouseIsPressed == true){
          if (( nodes[12].x*0.5+nodes[13].x*0.5-50 < p.mouseX &&  nodes[12].x*0.5+nodes[13].x*0.5+50 > p.mouseX) && ( nodes[12].y*0.5+nodes[13].y*0.5-50 < p.mouseY &&  nodes[12].y*0.5+nodes[13].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr1, nodes[12].x*0.5+nodes[13].x*0.5,nodes[12].y*0.5+nodes[13].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr1, nodes[12].x*0.5+nodes[13].x*0.5,nodes[12].y*0.5+nodes[13].y*0.5);
         }
             } else {
        if (( nodes[12].x*0.5+nodes[13].x*0.5-50 < p.mouseX &&  nodes[12].x*0.5+nodes[13].x*0.5+50 > p.mouseX) && ( nodes[12].y*0.5+nodes[13].y*0.5-50 < p.mouseY &&  nodes[12].y*0.5+nodes[13].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr1, nodes[12].x*0.5+nodes[13].x*0.5,nodes[12].y*0.5+nodes[13].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr1, nodes[12].x*0.5+nodes[13].x*0.5,nodes[12].y*0.5+nodes[13].y*0.5);
         }
         }


        if (p.mouseIsPressed == true){
          if ((  nodes[8].x*0.5+nodes[14].x*0.5-50 < p.mouseX &&  nodes[8].x*0.5+nodes[14].x*0.5+50 > p.mouseX) && ( nodes[8].y*0.5+nodes[14].y*0.5-50 < p.mouseY &&  nodes[8].y*0.5+nodes[14].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr4,  nodes[8].x*0.5+nodes[14].x*0.5,nodes[8].y*0.5+nodes[14].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr4,  nodes[8].x*0.5+nodes[14].x*0.5,nodes[8].y*0.5+nodes[14].y*0.5);
         }
             } else {
        if ((  nodes[8].x*0.5+nodes[14].x*0.5-50 < p.mouseX &&  nodes[8].x*0.5+nodes[14].x*0.5+50 > p.mouseX) && ( nodes[8].y*0.5+nodes[14].y*0.5-50 < p.mouseY &&  nodes[8].y*0.5+nodes[14].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr4,  nodes[8].x*0.5+nodes[14].x*0.5,nodes[8].y*0.5+nodes[14].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr4,  nodes[8].x*0.5+nodes[14].x*0.5,nodes[8].y*0.5+nodes[14].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if ((nodes[14].x*0.5+nodes[15].x*0.5-50 < p.mouseX &&  nodes[14].x*0.5+nodes[15].x*0.5+50 > p.mouseX) && ( nodes[14].y*0.5+nodes[15].y*0.5-50 < p.mouseY && nodes[14].y*0.5+nodes[15].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr4,nodes[14].x*0.5+nodes[15].x*0.5,nodes[14].y*0.5+nodes[15].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr4,nodes[14].x*0.5+nodes[15].x*0.5,nodes[14].y*0.5+nodes[15].y*0.5);
         }
             } else {
         if ((nodes[14].x*0.5+nodes[15].x*0.5-50 < p.mouseX &&  nodes[14].x*0.5+nodes[15].x*0.5+50 > p.mouseX) && ( nodes[14].y*0.5+nodes[15].y*0.5-50 < p.mouseY && nodes[14].y*0.5+nodes[15].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.p.text(spr4,nodes[14].x*0.5+nodes[15].x*0.5,nodes[14].y*0.5+nodes[15].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr4,nodes[14].x*0.5+nodes[15].x*0.5,nodes[14].y*0.5+nodes[15].y*0.5);
         }
         }

        if (p.mouseIsPressed == true){
          if (( nodes[8].x*0.5+nodes[15].x*0.5-50 < p.mouseX &&   nodes[8].x*0.5+nodes[15].x*0.5+50 > p.mouseX) && (nodes[8].y*0.5+nodes[15].y*0.5-50 < p.mouseY && nodes[8].y*0.5+nodes[15].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr4, nodes[8].x*0.5+nodes[15].x*0.5,nodes[8].y*0.5+nodes[15].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr4, nodes[8].x*0.5+nodes[15].x*0.5,nodes[8].y*0.5+nodes[15].y*0.5);
         }
             } else {
          if (( nodes[8].x*0.5+nodes[15].x*0.5-50 < p.mouseX &&   nodes[8].x*0.5+nodes[15].x*0.5+50 > p.mouseX) && (nodes[8].y*0.5+nodes[15].y*0.5-50 < p.mouseY && nodes[8].y*0.5+nodes[15].y*0.5+50 > p.mouseY)) {
          p.fill(textvu);
          p.textSize(textsize2);
          p.text(spr4, nodes[8].x*0.5+nodes[15].x*0.5,nodes[8].y*0.5+nodes[15].y*0.5);
          } else {
            p.fill(texthide);
          p.textSize(textsize2);
          p.text(spr4, nodes[8].x*0.5+nodes[15].x*0.5,nodes[8].y*0.5+nodes[15].y*0.5);
         }
         }

};

p.mousePressed = function(){
var maxDist = 50;
for (var i = 0; i < nodes.length; i++) {
var checkNode = nodes[i];
var d = p.dist(p.mouseX, p.mouseY, checkNode.x, checkNode.y);
if (d < maxDist) {
selectedNode = checkNode;
maxDist = d;
}
}
}
p.mouseReleased = function() {
if (selectedNode != null) {
selectedNode = null;
}
};

p.keyPressed = function() {
if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
if (p.key=='p' || p.key=='P') {
myBoolean = true;
p.println('saving to pdf - starting (this may take some time)');
}
if (p.key == 'r' || p.key == 'R') {
p.background(255);
initNodesAndSprings();
}
};
};

var myp5 = new p5(sketch);
