let images =document.querySelectorAll('.thumbnails img');

let LargeImage = document.createElement('img');

let viewer =document.querySelector('.viewer');

viewer.appendChild(LargeImage);

let caption= document.createElement('p')
viewer.appendChild(caption);


images.forEach(function(image){
	image.onclick = function click(event){
		 let img = event.target;


		LargeImage.src =img.src;

		let captionText = image.getAttribute('data-caption')
        caption.innerHTML=captionText;
  
	  }       
})