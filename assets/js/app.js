window.onscroll = function(){
	mobVidCall();
	mobParrotCall();
	webDevelopmentReveal();
	purpleScreens();
}

// webDevelopment text anim;
// webDevelopment text anim;
// webDevelopment text anim;
var webDevelopment = document.getElementsByClassName('webDevelopment')[0];
function webDevelopmentReveal(){
	if(webDevelopment.getBoundingClientRect().y < window.innerHeight/100 *90){
		webDevelopment.style.left = '8vw'
	}
}

window.onload = function(){
  // revealOnLoad();
}

// videoText anim Chnage text on time interval
// videoText anim Chnage text on time interval
// videoText anim Chnage text on time interval
var animQuot = document.getElementsByClassName('animQuot');
var quot = 0;
setInterval(function () {
	if(quot%5 === 0 ){
		animQuot[0].style.opacity = '0';
		animQuot[2].style.opacity = '0';
		animQuot[3].style.opacity = '0';
		animQuot[4].style.opacity = '0';
		setTimeout(function(){
			animQuot[1].style.display = 'block';
			animQuot[1].style.opacity = '1';
		},1000)
	}
	if(quot%5 === 2 ){
		animQuot[1].style.opacity = '0';
		animQuot[2].style.opacity = '0';
		animQuot[3].style.opacity = '0';
		animQuot[4].style.opacity = '0';
		setTimeout(function(){
			animQuot[0].style.display = 'block';
			animQuot[0].style.opacity = '1';
		},1000)
	}
	if(quot%5 === 1 ){
		animQuot[0].style.opacity = '0';
		animQuot[1].style.opacity = '0';
		animQuot[3].style.opacity = '0';
		animQuot[4].style.opacity = '0';
		setTimeout(function(){
			animQuot[2].style.display = 'block';
			animQuot[2].style.opacity = '1';
		},1000)
	}
	if(quot%5 === 3 ){
		animQuot[0].style.opacity = '0';
		animQuot[1].style.opacity = '0';
		animQuot[2].style.opacity = '0';
		animQuot[4].style.opacity = '0';
		setTimeout(function(){
			animQuot[3].style.display = 'block';
			animQuot[3].style.opacity = '1';
		},1000)
	}
	if(quot%5 === 4 ){
		animQuot[0].style.opacity = '0';
		animQuot[1].style.opacity = '0';
		animQuot[2].style.opacity = '0';
		animQuot[3].style.opacity = '0';
		setTimeout(function(){
			animQuot[4].style.display = 'block';
			animQuot[4].style.opacity = '1';
		},1000)
	}
	quot++;
}, 5000);

// mobile paralax anim
// mobile paralax anim
// mobile paralax anim
var mobileVid = document.getElementsByClassName("mobileVid")[0];
function mobVidCall(){
	if (parseInt(window.getComputedStyle(mobileVid).bottom) > -(window.innerWidth/100 *36) ) {
    mobileVid.style.bottom = parseInt(window.getComputedStyle(mobileVid).bottom) - window.scrollY/130 + 'px';
  }
}
var mobileParrot = document.getElementsByClassName("mobileParrot")[0];
function	mobParrotCall(){
	if (parseInt(window.getComputedStyle(mobileParrot).bottom) > -(window.innerWidth/100 *18) ) {
    mobileParrot.style.bottom = parseInt(window.getComputedStyle(mobileParrot).bottom) - window.scrollY/150 + 'px';
  }
}
// video slider anim
// video slider anim
// video slider anim
var arrow = document.getElementsByClassName('arrow')[0];
var videoSlider = document.getElementsByClassName('videoSlider')[0];
var vidModulo =1;
arrow.addEventListener('click',function(){
  if(vidModulo % 2 === 0){
    videoSlider.style.width = '0';
  }
  if(vidModulo % 2 === 1){
    videoSlider.style.width = '56vw';
  }
  vidModulo++;
});


// burger menu hover anim
// burger menu hover anim
// burger menu hover anim
var burgerMenu = document.getElementsByClassName('burgerMenu')[0];
var burgerLine = document.getElementsByClassName('burgerLine');
burgerMenu.addEventListener('mouseenter',()=>{
  burgerLine[0].style.left = '0';
  burgerLine[1].style.left = '0';
  burgerLine[2].style.left = '0';
  burgerLine[0].style.backgroundColor = 'rgb(253,216,47)';
  burgerLine[1].style.backgroundColor = 'rgb(253,216,47)';
  burgerLine[2].style.backgroundColor = 'rgb(253,216,47)';
});

burgerMenu.addEventListener('mouseleave',()=>{
  burgerLine[0].style.left = '42%';
  burgerLine[1].style.left = '0vw';
  burgerLine[2].style.left = '25%';
  burgerLine[0].style.backgroundColor = 'white';
  burgerLine[1].style.backgroundColor = 'white';
  burgerLine[2].style.backgroundColor = 'white';
});

// .appMenu STICKY ON / OFF
// .appMenu STICKY ON / OFF
// .appMenu STICKY ON / OFF
var appMenu = document.getElementsByClassName('appMenu')[0];
var content = document.getElementsByClassName('content')[0];
function appMenuSticky(){
  if(content.getBoundingClientRect().top <= 0){
    console.log('zxczxc');
    appMenu.style.position = 'fixed';
  }
  if(content.getBoundingClientRect().top > 1){
    appMenu.style.position = 'absolute';
    console.log('im absolute');
  }
}

//Dev Anim
// var devIcon = document.getElementsByClassName('devIcon')[0];
// var devText = document.getElementsByClassName('devText')[0];
// var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');
//
// appMenuOptionsDiv[0].addEventListener('mouseenter',function(){
//   devIcon.style.marginLeft = '18%';
//   devIcon.style.transform = 'rotate(360deg)'
//   setTimeout(function(){
//     devText.style.opacity = '1';
//   },1);
// });
//
// appMenuOptionsDiv[0].addEventListener('mouseleave',function(){
//   devIcon.style.marginLeft = '50%';
//   devText.style.opacity = '0';
//   devIcon.style.transform = 'rotate(0deg)'
// });
//CMS anim
// var cmsIcon = document.getElementsByClassName('cmsIcon')[0];
// var cmsText = document.getElementsByClassName('cmsText')[0];
// var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');
//
// appMenuOptionsDiv[1].addEventListener('mouseenter',function(){
//   cmsIcon.style.marginLeft = '18%';
//   setTimeout(function(){
//     cmsText.style.opacity = '1';
//   },10);
// });
//
// appMenuOptionsDiv[1].addEventListener('mouseleave',function(){
//   cmsIcon.style.marginLeft = '50%';
//   cmsText.style.opacity = '0';
// });
//Speed Anim
// var speedIcon = document.getElementsByClassName('speedIcon')[0];
// var speedText = document.getElementsByClassName('speedText')[0];
// var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');
//
// appMenuOptionsDiv[2].addEventListener('mouseenter',function(){
//   speedIcon.style.marginLeft = '18%';
//   setTimeout(function(){
//     speedText.style.opacity = '1';
//   },10);
// });
//
// appMenuOptionsDiv[2].addEventListener('mouseleave',function(){
//   speedIcon.style.marginLeft = '50%';
//   speedText.style.opacity = '0';
// });
//contact Anim
// var contactIcon = document.getElementsByClassName('contactIcon')[0];
// var contactText = document.getElementsByClassName('contactText')[0];
// var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');
//
// appMenuOptionsDiv[3].addEventListener('mouseenter',function(){
//   contactIcon.style.marginLeft = '18%';
//   setTimeout(function(){
//     contactText.style.opacity = '1';
//   },10);
// });
//
// appMenuOptionsDiv[3].addEventListener('mouseleave',function(){
//   contactIcon.style.marginLeft = '50%';
//   contactText.style.opacity = '0';
// });
// appMenu Selection
// appMenu Selection
// var appMenuOptionsDiv existing in code
// var contentOne = document.getElementsByClassName('contentOne')[0];
// var contentTwo = document.getElementsByClassName('contentTwo')[0];
// var contentThree = document.getElementsByClassName('contentThree')[0];
// var contentFour = document.getElementsByClassName('contentFour')[0];
// var headingTop = document.getElementsByClassName('headingTop')[0];
// var headingBot = document.getElementsByClassName('headingBot')[0];
//
// appMenuOptionsDiv[0].addEventListener('click',function(){
//   contentOne.style.display = 'block';
//   contentTwo.style.display = 'none';
//   contentThree.style.display = 'none';
//   contentFour.style.display = 'none';
//   // resetReavealForClick();
//   // revealOnSelect();
//   setTimeout(function(){
//     headingTop.innerHTML = 'WEB';
//     headingBot.innerHTML = 'DEVELOPMENT';
//   },1);
// });
//
// appMenuOptionsDiv[1].addEventListener('click',function(){
//   contentOne.style.display = 'none';
//   contentTwo.style.display = 'block';
//   contentThree.style.display = 'none';
//   contentFour.style.display = 'none';
//   // resetReavealForClick();
//   // revealOnSelect();
//   setTimeout(function(){
//     headingTop.innerHTML = 'CMS';
//     headingBot.innerHTML = 'DEVELOPMENT';
//   },1);
// });
//
// appMenuOptionsDiv[2].addEventListener('click',function(){
//   contentOne.style.display = 'none';
//   contentTwo.style.display = 'none';
//   contentThree.style.display = 'block';
//   contentFour.style.display = 'none';
//   // resetReavealForClick();
//   // revealOnSelect();
//   setTimeout(function(){
//     headingTop.innerHTML = 'PERFORMANCE';
//     headingBot.innerHTML = 'OPTIMIZATION';
//   },1);
// });
//
// appMenuOptionsDiv[3].addEventListener('click',function(){
//   contentOne.style.display = 'none';
//   contentTwo.style.display = 'none';
//   contentThree.style.display = 'none';
//   contentFour.style.display = 'block';
//   // resetReavealForClick();
//   // revealOnSelect();
//   setTimeout(function(){
//     headingTop.innerHTML = '&nbsp';
//     headingBot.innerHTML = 'CONTACT US';
//   },1);
// });

// animated Heading reveal
// animated Heading reveal
// animated Heading reveal
// var animatedHeading = document.getElementsByClassName('animatedHeading')[0];
//
// function revealOnLoad(){
//   animatedHeading.style.height = '0%';
// }
//
// function revealOnSelect(){
//   animatedHeading.style.transition = '0s';
//   animatedHeading.style.top = '0%';
//   setTimeout(function(){
//   animatedHeading.style.transition = '0.5s';
//   animatedHeading.style.height = '100%';
//   animatedHeading.style.top = '0%';
//     setTimeout(function(){
//       animatedHeading.style.height = '0%';
//       animatedHeading.style.top = '100%';
//     },500);
//   },5);
// }

// reveal anim Images Text
// reveal anim Images Text
// reveal anim Images Text
var screenVar = document.getElementsByClassName('screen');
var text = document.getElementsByClassName('text');
var images = document.getElementsByClassName('images');

// function screenReveal(){
//   for (var i = 0; i < screenVar.length; i++) {
//     screenVar[i].style.right = '0';
//   }
// }

function textReveal(){
  for (var i = 0; i < text.length; i++) {
    if(text[i].childNodes[1].getBoundingClientRect().top < (window.innerHeight / 100) *95){
      text[i].style.left = '0';
    }
    // text[i].style.left = '0';
  }
}

function imageReveal(){
  setTimeout(function(){
    for (var i = 0; i < images.length; i++) {
      if(images[i].childNodes[1].getBoundingClientRect().top < (window.innerHeight / 100) *95){
        images[i].childNodes[1].style.right = '0vw';
      }
      // images[i].childNodes[1].style.right = '0vw';
    }
  },500)
}

var OptimizedAnimBox = document.getElementsByClassName('OptimizedAnimBox')[0];
function optimizationSectionReveal(){
  if(OptimizedAnimBox.getBoundingClientRect().top < (window.innerHeight / 100) *95){
    OptimizedAnimBox.style.right = '0vw';
  }
}

// appmenu on click goes gray
// appmenu on click goes gray
// appmenu on click goes gray
// appMenuOptionsDiv[0].addEventListener('click',function(){
//   appMenuOptionsDiv[0].style.background = "rgb(124,105,193)";
//   appMenuOptionsDiv[1].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[2].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[3].style.background = "rgb(36,34,40)";
// });
// appMenuOptionsDiv[1].addEventListener('click',function(){
//   appMenuOptionsDiv[1].style.background = "rgb(124,105,193)";
//   appMenuOptionsDiv[0].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[2].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[3].style.background = "rgb(36,34,40)";
// });
// appMenuOptionsDiv[2].addEventListener('click',function(){
//   appMenuOptionsDiv[2].style.background = "rgb(124,105,193)";
//   appMenuOptionsDiv[1].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[0].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[3].style.background = "rgb(36,34,40)";
// });
// appMenuOptionsDiv[3].addEventListener('click',function(){
//   appMenuOptionsDiv[3].style.background = "rgb(124,105,193)";
//   appMenuOptionsDiv[1].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[2].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[0].style.background = "rgb(36,34,40)";
// });

// searchLayer anim
// searchLayer anim
// searchLayer anim
var searchIcon = document.getElementsByClassName('searchIcon')[0];
var SearchDivLayer = document.getElementsByClassName('SearchDivLayer')[0];
var exitButton = document.getElementsByClassName('exitButton')[0];

searchIcon.addEventListener('click',function(){
  SearchDivLayer.className += ' SearchDivLayerAnimOpen';
  setTimeout(function(){
     SearchDivLayer.style.width = '100%';
     SearchDivLayer.className = ' SearchDivLayer';
   }, 1000);
})

exitButton.addEventListener('click',function(){
  SearchDivLayer.className += ' SearchDivLayerAnimClose';
  setTimeout(function(){
     SearchDivLayer.style.width = '0';
     SearchDivLayer.className = ' SearchDivLayer';
   }, 1000);
})


// recent project hover
// recent project hover
// recent project hover
var imgBox = document.getElementsByClassName('imgBox');
var recentWorkImages = document.getElementsByClassName('recentWorkImages');
imgBox[0].addEventListener('mouseenter',()=>{
  recentWorkImages[0].style.height = '95%';
  recentWorkImages[0].style.width = '95%';
  recentWorkImages[0].style.marginTop = '1.25%';
  recentWorkImages[0].style.marginLeft = '2.5%';
});

imgBox[0].addEventListener('mouseleave',()=>{
  recentWorkImages[0].style.height = '100%';
  recentWorkImages[0].style.width = '100%';
  recentWorkImages[0].style.marginTop = '0%';
  recentWorkImages[0].style.marginLeft = '0%';
});

imgBox[1].addEventListener('mouseenter',()=>{
  recentWorkImages[1].style.height = '95%';
  recentWorkImages[1].style.width = '95%';
  recentWorkImages[1].style.marginTop = '1.25%';
  recentWorkImages[1].style.marginLeft = '2.5%';
});

imgBox[1].addEventListener('mouseleave',()=>{
  recentWorkImages[1].style.height = '100%';
  recentWorkImages[1].style.width = '100%';
  recentWorkImages[1].style.marginTop = '0%';
  recentWorkImages[1].style.marginLeft = '0%';
});

imgBox[2].addEventListener('mouseenter',()=>{
  recentWorkImages[2].style.height = '95%';
  recentWorkImages[2].style.width = '95%';
  recentWorkImages[2].style.marginTop = '1.25%';
  recentWorkImages[2].style.marginLeft = '2.5%';
});

imgBox[2].addEventListener('mouseleave',()=>{
  recentWorkImages[2].style.height = '100%';
  recentWorkImages[2].style.width = '100%';
  recentWorkImages[2].style.marginTop = '0%';
  recentWorkImages[2].style.marginLeft = '0%';
});
// 4image grid hover
// 4image grid hover
// 4image grid hover
var gridImgBox = document.getElementsByClassName('gridImgBox');
var gridParaFont = document.getElementsByClassName('gridParaFont');
var gridParaFontOne = document.getElementsByClassName('gridParaFontOne');
  gridImgBox[0].addEventListener('mouseenter',function(){
      gridImgBox[0].style.width = '95%';
      gridImgBox[0].style.height = '95%';
      gridImgBox[0].style.marginTop = '2.5%';
      gridImgBox[0].style.marginLeft = '2.5%';
			blackTestlayerFun();
    });

  gridImgBox[0].addEventListener('mouseleave',function(){
      gridImgBox[0].style.width = '100%';
      gridImgBox[0].style.height = '100%';
      gridImgBox[0].style.marginTop = '0%';
      gridImgBox[0].style.marginLeft = '0%';
			blackTestlayerMouseOfFun();
    });


    gridImgBox[1].addEventListener('mouseenter',function(){
        gridImgBox[1].style.width = '96%';
        gridImgBox[1].style.height = '96%';
        gridImgBox[1].style.marginTop = '3%';
        gridImgBox[1].style.marginLeft = '3%';
				blackTestlayerFunTwo();
      });

    gridImgBox[1].addEventListener('mouseleave',function(){
        gridImgBox[1].style.width = '100%';
        gridImgBox[1].style.height = '100%';
        gridImgBox[1].style.marginTop = '0%';
        gridImgBox[1].style.marginLeft = '0%';
				blackTestlayerMouseOfFunTwo();
      });


      gridImgBox[2].addEventListener('mouseenter',function(){
          gridImgBox[2].style.width = '95%';
          gridImgBox[2].style.height = '95%';
          gridImgBox[2].style.marginTop = '2.5%';
          gridImgBox[2].style.marginLeft = '2.5%';
					blackTestlayerFunthree();
        });

      gridImgBox[2].addEventListener('mouseleave',function(){
          gridImgBox[2].style.width = '100%';
          gridImgBox[2].style.height = '100%';
          gridImgBox[2].style.marginTop = '0%';
          gridImgBox[2].style.marginLeft = '0%';
					blackTestlayerMouseOfFunThree();
        });


        gridImgBox[3].addEventListener('mouseenter',function(){
            gridImgBox[3].style.width = '95%';
            gridImgBox[3].style.height = '95%';
            gridImgBox[3].style.marginTop = '2.5%';
            gridImgBox[3].style.marginLeft = '2.5%';
						blackTestlayerFunFour();
          });

        gridImgBox[3].addEventListener('mouseleave',function(){
            gridImgBox[3].style.width = '100%';
            gridImgBox[3].style.height = '100%';
            gridImgBox[3].style.marginTop = '0%';
            gridImgBox[3].style.marginLeft = '0%';
						blackTestlayerMouseOfFunFour();
          });
// black layer text anim hover
var blackTextLayer = document.getElementsByClassName('blackTextLayer');
var blackLayerInside = document.getElementsByClassName('blackLayerInside');
function blackTestlayerFun(){
	blackTextLayer[0].style.width = '90%';
	blackTextLayer[0].style.height = '90%';
	blackTextLayer[0].style.left = '5%';
	blackTextLayer[0].style.top = '5%';
	blackTextLayer[0].style.backgroundColor = 'rgb(0,0,0,0.8)';
	blackLayerInside[0].style.opacity = '1';
}
function blackTestlayerMouseOfFun(){
	blackTextLayer[0].style.width = '100%';
	blackTextLayer[0].style.height = '100%';
	blackTextLayer[0].style.left = '0%';
	blackTextLayer[0].style.top = '0%';
	blackTextLayer[0].style.backgroundColor = 'rgb(0,0,0,0)';
	blackLayerInside[0].style.opacity = '0';
}

function blackTestlayerFunTwo(){
	blackTextLayer[1].style.width = '90%';
	blackTextLayer[1].style.height = '90%';
	blackTextLayer[1].style.left = '5%';
	blackTextLayer[1].style.top = '5%';
	blackTextLayer[1].style.backgroundColor = 'rgb(0,0,0,0.8)';
	blackLayerInside[1].style.opacity = '1';
}
function blackTestlayerMouseOfFunTwo(){
	blackTextLayer[1].style.width = '100%';
	blackTextLayer[1].style.height = '100%';
	blackTextLayer[1].style.left = '0%';
	blackTextLayer[1].style.top = '0%';
	blackTextLayer[1].style.backgroundColor = 'rgb(0,0,0,0)';
	blackLayerInside[1].style.opacity = '0';
}

function blackTestlayerFunthree(){
	blackTextLayer[2].style.width = '90%';
	blackTextLayer[2].style.height = '90%';
	blackTextLayer[2].style.left = '5%';
	blackTextLayer[2].style.top = '5%';
	blackTextLayer[2].style.backgroundColor = 'rgb(0,0,0,0.8)';
	blackLayerInside[2].style.opacity = '1';
}
function blackTestlayerMouseOfFunThree(){
	blackTextLayer[2].style.width = '100%';
	blackTextLayer[2].style.height = '100%';
	blackTextLayer[2].style.left = '0%';
	blackTextLayer[2].style.top = '0%';
	blackTextLayer[2].style.backgroundColor = 'rgb(0,0,0,0)';
	blackLayerInside[2].style.opacity = '0';
}

function blackTestlayerFunFour(){
	blackTextLayer[3].style.width = '90%';
	blackTextLayer[3].style.height = '90%';
	blackTextLayer[3].style.left = '5%';
	blackTextLayer[3].style.top = '5%';
	blackTextLayer[3].style.backgroundColor = 'rgb(0,0,0,0.8)';
	blackLayerInside[3].style.opacity = '1';
}
function blackTestlayerMouseOfFunFour(){
	blackTextLayer[3].style.width = '100%';
	blackTextLayer[3].style.height = '100%';
	blackTextLayer[3].style.left = '0%';
	blackTextLayer[3].style.top = '0%';
	blackTextLayer[3].style.backgroundColor = 'rgb(0,0,0,0)';
	blackLayerInside[3].style.opacity = '0';
}
// read more line anim
// read more line anim
// read more line anim
var readMoreDiv = document.getElementsByClassName('readMoreDiv');
var readMoreAnimDiv = document.getElementsByClassName('readMoreAnimDiv');
readMoreDiv[0].addEventListener('mouseenter',function(){
	readMoreAnimDiv[0].style.width = '100%';
})
readMoreDiv[0].addEventListener('mouseleave',function(){
	readMoreAnimDiv[0].style.width = '40%';
})

readMoreDiv[1].addEventListener('mouseenter',function(){
	readMoreAnimDiv[1].style.width = '100%';
})
readMoreDiv[1].addEventListener('mouseleave',function(){
	readMoreAnimDiv[1].style.width = '40%';
})

readMoreDiv[2].addEventListener('mouseenter',function(){
	readMoreAnimDiv[2].style.width = '100%';
})
readMoreDiv[2].addEventListener('mouseleave',function(){
	readMoreAnimDiv[2].style.width = '40%';
})

readMoreDiv[3].addEventListener('mouseenter',function(){
	readMoreAnimDiv[3].style.width = '100%';
})
readMoreDiv[3].addEventListener('mouseleave',function(){
	readMoreAnimDiv[3].style.width = '40%';
})
// contact us line anim
// contact us line anim
// contact us line anim
var contactUsMaintenance = document.getElementsByClassName('contactUsMaintenance')[0];
var maintenanceLineAnim = document.getElementsByClassName('maintenanceLineAnim')[0];
var svgArrow = document.getElementsByClassName('svgArrow')[0];
contactUsMaintenance.addEventListener('mouseenter',function(){
	maintenanceLineAnim.style.width = '100%';
	svgArrow.style.filter = 'brightness(120%)';
});
contactUsMaintenance.addEventListener('mouseleave',function(){
	maintenanceLineAnim.style.width = '40%';
	svgArrow.style.filter = 'brightness(100%)';
});

// technologies Line Anim
// technologies Line Anim
// technologies Line Anim
var technologiesReadMoreDiv = document.getElementsByClassName('technologiesReadMoreDiv')[0];
var technoLineAnim = document.getElementsByClassName('technoLineAnim')[0];
technologiesReadMoreDiv.addEventListener('mouseenter',function(){
	technoLineAnim.style.width = '100%';
});
technologiesReadMoreDiv.addEventListener('mouseleave',function(){
	technoLineAnim.style.width = '40%';
});
//purple screen anim
//purple screen anim
//purple screen anim
var purpScreenDiv = document.getElementsByClassName('purpScreenDiv')[0];
var purpTabletDiv = document.getElementsByClassName('purpTabletDiv')[0];
var purpleScreen = document.getElementsByClassName('purpScreen')[0];

function purpleScreens(){
	if (purpleScreen.getClientRects()[0].top < window.innerHeight / 100 * 30) {
		purpScreenDiv.style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
		purpTabletDiv.style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
	}
}
