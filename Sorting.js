let arr = [];
let len = 5;
let size;
let sortSel = 0;

let min = 0;
let index = 0;

//////////////////////////////

function setup() {
	frameRate(5);
	createCanvas(900,600);
	for(i=0; i<len; i++)
		arr[i] = random();
	size = width*0.8/len;
	strokeWeight(5);
	stroke(50);

  	createButtons();

  	SS.mousePressed(sSort);
  	IS.mousePressed(iSort);
  	MS.mousePressed(mSort);
  	BS.mousePressed(bSort);
}

function draw() {
	background(200);
	drawArr();
	sorting();
}

//////////////////////////


drawArr = function() {
	translate(0, height);
	scale(1,-1);
	for(i=0; i<len; i++) {
		if(i == min)
			stroke('red');
		else if(i == index)
			stroke('green');
		else
			stroke(50);

		line(0.1*width + size*i, 0.1*height, 
			 0.1*width + size*i, 0.1*height + arr[i]*0.8*height);
	}
}


createButtons = function() {
	SS = createButton('Selection Sort');
  	IS = createButton('Insertion Sort');
  	MS = createButton('Merge Sort');
  	BS = createButton('BogoSort');
  	
  	SS.position(10, 10);
  	IS.position(10, 40);
  	MS.position(10, 70);
  	BS.position(10, 100);

}


sorting = function() {
	if(sortSel == 1)
		sortS();
	if(sortSel == 2)
		sortI();
	if(sortSel == 3)
		sortM();
	if(sortSel == 4)
		sortB();
}




/////////////////////

sSort = function() {
	if(sortSel == 0)
		sortSel = 1;	}

iSort = function() {
	if(sortSel == 0)
		sortSel = 2;	}

mSort = function() {
	if(sortSel == 0)
		sortSel = 3;	}

bSort = function() {
	if(sortSel == 0)
		sortSel = 4;	}

///////////////////////

sortS = function() {
	let temp = arr[min]
	index = min
	for(i=min+1; i<len; i++)
		if(arr[i] < temp) {
			temp = arr[i];
			index = i;
		}
	arr[index] = arr[min];
	arr[min] = temp;
	min++;
}


sortI = function() {
	let temp = arr[min]
	index = min
	
	for(i=0; i<min; i++)
		if(arr[i] > temp) {
			index = i;
			break;}

	for(i=min; i>index-1; i--)
		arr[i]=arr[i-1];

	arr[index] = temp;
	min++;
}


sortM = function() {
	return;///////////////////////////////////////////
	index++;
	let subsize = index;
	let arrNum = len/index;
	for(i=0; i<arrNum; i*=2)
		merge(i, subsize, arrNum);
}

merge = function(i, ssize, n) {
	let x=i*ssize;
	let y=(i+1)*ssize;
	if(y>len) y = len;
	let m = x+(x+y)/2
	let z=ceil(m);
	while(x<m || z<y)
	{
		if(arr[x] < arr[])
	}
}

sortB = function() {
	let cnt = 0
	for(i=0; i<len-1; i++) {
		if(arr[i] < arr[i+1])
			cnt++;
	}

	if(cnt == len-1)
		return;

	let temp;
	let r;
	for(i=0; i<len; i++) {
		r = ceil(random(i, len))
		temp = arr[i];
		arr[i] = arr[r];
		arr[r] = temp;
	}

}