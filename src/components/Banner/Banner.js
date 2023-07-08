setInterval(()=>{
    if(document.getElementsByClassName("slider-item")[0].classList.contains("active")){
      document.getElementsByClassName("slider-item")[0].classList.remove("active");
      document.getElementsByClassName("slider-item")[1].classList.add("active");
    }else if(document.getElementsByClassName("slider-item")[1].classList.contains("active")){
      document.getElementsByClassName("slider-item")[1].classList.remove("active");
      document.getElementsByClassName("slider-item")[2].classList.add("active");
    }else if(document.getElementsByClassName("slider-item")[2].classList.contains("active")){
      document.getElementsByClassName("slider-item")[2].classList.remove("active")
      document.getElementsByClassName("slider-item")[3].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[3].classList.contains("active")){
      document.getElementsByClassName("slider-item")[3].classList.remove("active")
      document.getElementsByClassName("slider-item")[4].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[4].classList.contains("active")){
      document.getElementsByClassName("slider-item")[4].classList.remove("active")
      document.getElementsByClassName("slider-item")[5].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[5].classList.contains("active")){
      document.getElementsByClassName("slider-item")[5].classList.remove("active")
      document.getElementsByClassName("slider-item")[6].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[6].classList.contains("active")){
      document.getElementsByClassName("slider-item")[6].classList.remove("active")
      document.getElementsByClassName("slider-item")[7].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[7].classList.contains("active")){
      document.getElementsByClassName("slider-item")[7].classList.remove("active")
      document.getElementsByClassName("slider-item")[8].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[8].classList.contains("active")){
      document.getElementsByClassName("slider-item")[8].classList.remove("active")
      document.getElementsByClassName("slider-item")[9].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[9].classList.contains("active")){
      document.getElementsByClassName("slider-item")[9].classList.remove("active")
      document.getElementsByClassName("slider-item")[10].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[10].classList.contains("active")){
      document.getElementsByClassName("slider-item")[10].classList.remove("active")
      document.getElementsByClassName("slider-item")[11].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[11].classList.contains("active")){
      document.getElementsByClassName("slider-item")[11].classList.remove("active")
      document.getElementsByClassName("slider-item")[12].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[12].classList.contains("active")){
      document.getElementsByClassName("slider-item")[12].classList.remove("active")
      document.getElementsByClassName("slider-item")[13].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[13].classList.contains("active")){
      document.getElementsByClassName("slider-item")[13].classList.remove("active")
      document.getElementsByClassName("slider-item")[14].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[14].classList.contains("active")){
      document.getElementsByClassName("slider-item")[14].classList.remove("active")
      document.getElementsByClassName("slider-item")[15].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[15].classList.contains("active")){
      document.getElementsByClassName("slider-item")[15].classList.remove("active")
      document.getElementsByClassName("slider-item")[16].classList.add("active")
    }else if(document.getElementsByClassName("slider-item")[16].classList.contains("active")){
      document.getElementsByClassName("slider-item")[16].classList.remove("active")
      document.getElementsByClassName("slider-item")[0].classList.add("active")
    }
  },1000)
  

  var body=document.querySelector("body")
  function bubble(){
    var i=0;
    var count=200;
  while(i<count){
    var bubbles=document.createElement("i");
    var size=Math.random();
    bubbles.style.width = 1+size+'px';
    bubbles.style.height = 1+size+'px';
    bubbles.style.top =Math.atan2(100,200)+Math.random()*window.innerHeight+'px';
    bubbles.style.left=Math.atan2(100,200)+Math.random()*window.innerWidth+'px';
    bubbles.animationDirection = 'alternate-reverse'
    bubbles.animationDuration = '1s'
    bubbles.innerText="😀";
    body.appendChild(bubbles)
  i++;
  }
  }
  bubble()