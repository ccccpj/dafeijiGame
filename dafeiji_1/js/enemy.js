
class Enemy{
	constructor(type){
		this.ele=null;
		this.hp=1;
		this.speed=5;
		this.dieImgs=[];
		this.score=0;
		this.type=type;
	}
	
	init(){
		this.ele=document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		gameEngine.enemys.push(this);
		
		switch(this.type){
			case this.ENEMY_TYPE_LARGE:
				this.ele.className="enemy-large";
				this.hp=this.ENEMY_HP_LARGE;
				this.speed=this.ENEMY_SPEED_LARGE;
				this.dieImgs=["images2/plane3_die1.png", "images2/plane3_die2.png", "images2/plane3_die3.png", "images2/plane3_die4.png", "images2/plane3_die5.png", "images2/plane3_die6.png"];
				this.score=30;
				break;
				
			case this.ENEMY_TYPE_MIDDLE:
				this.ele.className="enemy-middle";
				this.hp=this.ENEMY_HP_MIDDLE;
				this.speed=this.ENEMY_SPEED_MIDDLE;		
				this.dieImgs=["images2/plane2_die1.png", "images2/plane2_die2.png", "images2/plane2_die3.png", "images2/plane2_die4.png"];
				this.score=20;
				break;
				
			case this.ENEMY_TYPE_SMALL:
				this.ele.className="enemy-small";
				this.hp=this.ENEMY_HP_SMALL;
				this.speed=this.ENEMY_SPEED_SMALL;
				this.dieImgs=["images2/plane1_die1.png", "images2/plane1_die2.png", "images2/plane1_die3.png"];
				this.score=10;
				break;
				
			default:console.log("没有该类型的飞机");
		}
		
		this.ele.style.left=parseInt(Math.random()*(gameEngine.ele.offsetWidth-this.ele.offsetWidth))+"px";
		this.ele.style.top=-this.ele.offsetHeight+"px";
		
		
		return this;
	}
	
	move(){
		let that=this;
		this.timer=setInterval(()=>{
			if(that.ele.offsetTop>=gameEngine.ele.offsetHeight){
				clearInterval(that.timer);
				gameEngine.ele.appendChild(that.ele);
				gameEngine.enemys.splice(gameEngine.enemys.indexOf(that),1);
			}else{
				that.ele.style.top=that.ele.offsetTop+that.speed+"px"				
			}

		},20);
	}
	hurt(){
		this.hp--;
		if(this.hp==0){
			gameEngine.totalScore+=this.score;
			this.boom();
		}
		
	}
	boom(){
		clearInterval(this.timer);		
		let that=this;
		let i=0;
		let dieTimer=setInterval(()=>{
			if(i>=that.dieImgs.length-1){
				clearInterval(dieTimer);
				gameEngine.ele.removeChild(that.ele);
				gameEngine.enemys.splice(gameEngine.enemys.indexOf(that),1);
				
			}else{				
				that.ele.style.background="url("+that.dieImgs[++i]+") no-repeat";
			}
		},50);
	}
	
	
}

Enemy.prototype.ENEMY_TYPE_LARGE=1;
Enemy.prototype.ENEMY_TYPE_MIDDLE=2;
Enemy.prototype.ENEMY_TYPE_SMALL=3;

Enemy.prototype.ENEMY_HP_LARGE=8;
Enemy.prototype.ENEMY_HP_MIDDLE=3;
Enemy.prototype.ENEMY_HP_SMALL=1;

Enemy.prototype.ENEMY_SPEED_LARGE=2;
Enemy.prototype.ENEMY_SPEED_MIDDLE=5;
Enemy.prototype.ENEMY_SPEED_SMALL=8;



