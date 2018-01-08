

class Bullet{
	constructor(){
		this.ele=null;
	}

	init(){
		this.ele=document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		this.ele.className="bullet";
		this.ele.style.top=myPlane.ele.offsetTop-this.ele.offsetHeight+"px";
		this.ele.style.left=myPlane.ele.offsetLeft+myPlane.ele.offsetWidth/2-this.ele.offsetWidth/2+"px";
		gameEngine.bullets.push(this);
		
		return this;
	}
	move(){
		let that=this;
	
		this.timer=setInterval(()=>{
			if(that.ele.offsetTop <= -18){
				clearInterval(that.timer);
				gameEngine.ele.removeChild(that.ele);
				gameEngine.bullets.splice(gameEngine.bullets.indexOf(that),1);
			}
			else{
				that.ele.style.top=that.ele.offsetTop-10+"px";
			}
			
		},30)
	}
	
	boom(){
		
		clearInterval(this.timer);
		this.ele.className="bullet-die";
		
		let that=this;
		let dieImgs=["images2/die1.png","images2/die2.png"];
		let i =0;
		let dieTimer = setInterval(()=>{
			if(i>=1){
				clearInterval(dieTimer);
				gameEngine.ele.removeChild(that.ele);
			}else{
				that.ele.style.background="url("+dieImgs[++i]+") no-repeat"
			}
		},100)
		
	}

	
}









