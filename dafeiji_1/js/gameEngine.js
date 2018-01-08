


let gameEngine={
	
	ele:null,
	bullets:[],
	enemys:[],
	totalSroce:0,
	
	//初始化
	init(){
		this.ele=document.getElementById("main");
		return this;
	},
	
	start(){
		console.log("游戏开始");
		this.loadding(()=>{
			myPlane.init().move();
			myPlane.fire();
			gameEngine.createEnemy();
			gameEngine.crashListening();
		});
		
		
	},
	
	loadding(cb){
		
		let logo=document.createElement("div");
		gameEngine.ele.appendChild(logo);
		logo.className="logo";
		
		let load=document.createElement("div");
		gameEngine.ele.appendChild(load);
		load.className="load";
		
		let imgs=["images2/loading1.png","images2/loading2.png","images2/loading3.png"];
		let i=0;
		let timer=setInterval(()=>{
			i++;
			if(i>=6){
				clearInterval(timer);
				gameEngine.ele.removeChild(logo);
				gameEngine.ele.removeChild(load);
				if(cb) cb();
				
			}else{
				load.style.background="url("+imgs[i%3]+") no-repeat";
			}
			
		},500)
		
	},
	
	createEnemy(){
		
		setInterval(()=>{
			let b = Math.random()>0.5?true:false;
			if(b){
				let enemy=new Enemy(Enemy.prototype.ENEMY_TYPE_LARGE);
				enemy.init().move();
			}
		},6000)
		
		setInterval(()=>{
			let b = Math.random()>0.5?true:false;
			if(b){
				let enemy=new Enemy(Enemy.prototype.ENEMY_TYPE_MIDDLE);				
				enemy.init().move();
			}
		},4000)
		
		setInterval(()=>{
			let b = Math.random()>0.5?true:false;
			if(b){
				let enemy=new Enemy(Enemy.prototype.ENEMY_TYPE_SMALL);
				enemy.init().move();
			}
		},2000)
		
		
		
	},
	
	crashListening(){
		
		let timer=setInterval(()=>{
			
			for(let i=0;i<gameEngine.enemys.length;i++){
				for(let j=0;j<gameEngine.bullets.length;j++){
					if(isCrash(gameEngine.enemys[i].ele,gameEngine.bullets[j].ele)){
						gameEngine.bullets[j].boom();
						gameEngine.bullets.splice(j--,1);
						gameEngine.enemys[i].hurt();
					}
					if(isCrash(gameEngine.enemys[i].ele,myPlane.ele)){
						clearInterval(timer);
						myPlane.boom();
						console.log("Game Over!")
						break;
					}
				
				}
			}
			
			
		},30);
	}
	
	
	
	
	
	
	
	
}












