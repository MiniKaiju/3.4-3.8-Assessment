AFRAME.registerComponent("designroom", {       
  
  init: function () {  
  let redirect = () => {
  window.location.href = "designRoom.html";
  }; //link


  this.el.addEventListener('click', redirect);            
  } //innit  
}); //end



AFRAME.registerComponent("homeroom", {       
  
  init: function () {  
  let redirect = () => {
  window.location.href = "index.html";
  }; //link


  this.el.addEventListener('click', redirect);            
  } //innit  
}); //end



AFRAME.registerComponent("dvcroom", {       
  
  init: function () {  
  let redirect = () => {
  window.location.href = "dvcRoom.html";
  }; //link


  this.el.addEventListener('click', redirect);            
  } //innit  
}); //end



AFRAME.registerComponent("paintroom", {       
  
  init: function () {  
  let redirect = () => {
  window.location.href = "paintingRoom.html";
  }; //link


  this.el.addEventListener('click', redirect);            
  } //innit  
}); //end



AFRAME.registerComponent("photoroom", {       
  
  init: function () {  
  let redirect = () => {
  window.location.href = "photoRoom.html";
  }; //link


  this.el.addEventListener('click', redirect);            
  } //innit  
}); //end