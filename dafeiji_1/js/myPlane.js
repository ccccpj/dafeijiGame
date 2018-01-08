

let myPlane={
	
	ele:null,
	fireInterval:300,
	
	
	init(){
		this.ele=document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		this.ele.className="myplane";
		this.ele.style.top=gameEngine.ele.offsetHeight-this.ele.offsetHeight+"px";
		this.ele.style.left=gameEngine.ele.offsetWidth/2-this.ele.offsetWidth/2+"px";
		
		return this;
	},
	
	fire(){
		let timer=setInterval(()=>{
			new Bullet().init().move();			
		},this.fireInterval)
		
	},
	
	move(){
		myPlane.ele.onmousedown=e=>{
			e=e||event;
			let divx=e.offsetX;
			let divy=e.offsetY;
			
			document.onmousemove=e=>{
				e=e||event;
				let x = e.pageX-divx-gameEngine.ele.offsetLeft;
				if(x<=0){
					x=0;
				}else if(x>=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth){
					x=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth;
				}
				//console.log(divx)
				myPlane.ele.style.left=x+"px";
				myPlane.ele.style.top=e.pageY-divy+"px";
			}
			document.onmouseup=()=>{
				document.onmousemove=document.onmouseup=null;
			}			
		}
	},
	boom(){
		let that=this;
		let i = 0;
		let dieImgs=["images2/me_die1.png", "images2/me_die2.png", "images2/me_die3.png", "images2/me_die4.png"];
		let dieTimer=setInterval(()=>{
			if(i>=1){
				clearTimeout(dieTimer);
				gameEngine.ele.removeChild(that.ele);
			}else{
				that.ele.style.background="url("+dieImgs[++i]+") no-repeat";
			}
		},50)
	}
	
	
	
}








