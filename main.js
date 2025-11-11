let starts = document.getElementById("stars");
let moon = document.getElementById("moon2");
let mountain3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat6");
let mountains7 = document.getElementById("mountains7");
let novil = document.getElementById("novil");
document.getElementById("home").onclick = function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
   });
  };
  document.getElementById("projectS").onclick = function () {
  window.scroll({
    top: 1217,
    behavior: "smooth",
   });
  };
    document.getElementById("contacT").onclick = function () {
  window.scroll({
    top: 1710,
    behavior: "smooth",
  });
};
    
  document.getElementById("main").style.background = "linear-gradient(#200016)";

document.getElementById("aboutS").onclick = function () {
  window.scroll({
    top: 542,
    behavior: "smooth",
  });
};
const aboutText = document.querySelector("#about p");
const originalText = aboutText.textContent;
window.onscroll = function () {
  let value = scrollY;
  starts.style.left = value + "px";
  moon.style.bottom = -value * 3 + "px";
  mountain3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  novil.style.fontSize = value + "px";
  // Start typewriter effect after a short delay
  if (value >= 927) {
    document.querySelectorAll(".fade-up").forEach((div, i) => {
      div.style.animation = "fadeUp 0.8s cubic-bezier(0.4,0.2,0.2,1) forwards";
      div.style.animationDelay = i * 0.15 + "s";
    });
  } else {
    document.querySelectorAll(".fade-up").forEach((div, i) => {
      div.style.animation = "";
      div.style.animationDelay = "";
    });
  }
  if (value >= 100) {
    document.getElementById("btn").style.opacity = "1";
    document.getElementById("btn").onclick = function () {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    };
  } else {
    document.getElementById("btn").style.opacity = "0";
  }
  if (value >= 67) {
    novil.style.fontSize = "40px";
    novil.style.position = "fixed";
    if (value >= 380) {
      novil.style.opacity = "0";
    } else {
      novil.style.opacity = "1";
    }
    if (value >= 100) {
            document.getElementById("main").style.background =
            "linear-gradient(#376281,#10001f)";
    }else{
        document.getElementById("main").style.background =
          "linear-gradient(#200016)";
    }
  } 
;
if (value >= 93) {
  document.getElementById("about").style.opacity = "1";
  document.getElementById("about").style.textAlign = "center";
} else {
  document.getElementById("about").style.opacity = "0";
}
if (value >= 498) {
  document.querySelector("nav").style.boxShadow = "black -1px 8px 20px 0px";
  document.querySelector("nav").style.color = "white";
} else {
  document.querySelector("nav").style.boxShadow = "";
}
if (value >= 135) {
  document.getElementById("myimg").style.transform = "translateY(-125px)";
}
if (value >= 567) {
  if (document.body.classList.contains("light-mode")) {
    document.querySelector("nav").style.backgroundColor = "#376281";
  } else {
    document.querySelector("nav").style.backgroundColor = "#200016";
  }
} else {
  document.querySelector("nav").style.backgroundColor = "transparent";
}
}
document.getElementById("myimg").onclick = function () {
  const img = document.getElementById("myimg");
  const overlay = document.getElementById("overlay");

  // إنشاء نسخة جديدة من الصورة
  const newImg = document.createElement("img");
  newImg.src = img.src;
  newImg.style.cssText = `
    width: 200px;
    height: 200px;
    z-index: 9999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0.1);
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 20px 60px rgba(0,0,0,0.8);
    border: 6px solid white;
    filter: brightness(1.2) contrast(1.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  `;
  newImg.id = "enlarged-img";
  document.body.appendChild(newImg);
  
  // إخفاء الصورة الأصلية
  img.style.opacity = "0";
  
  // تفعيل الانتقال بعد إضافة العنصر
  setTimeout(() => {
    newImg.style.width = "500px";
    newImg.style.height = "500px";
    newImg.style.transform = "translate(-50%,-50%) scale(1)";
    newImg.style.opacity = "1";
  }, 10);
  
  // عرض التعتيم
  overlay.style.display = "block";
  overlay.style.zIndex = "997";
  document.body.style.overflow = "hidden";
  
  // إنشاء زر الإغلاق
  const button = document.createElement("button");
  button.textContent = "Close";
  button.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    font-weight: bold;
    font-size: 18px;
    background-color: white;
    color: black;
    transition: all 0.3s ease;
    padding: 10px 20px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    z-index: 10000;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    opacity: 0;
    transform: scale(0.8);
  `;
  button.id = "close-btn";
  document.body.appendChild(button);
  
  // تفعيل الزر بعد إضافته
  setTimeout(() => {
    button.style.opacity = "1";
    button.style.transform = "scale(1)";
  }, 100);

  // حدث الإغلاق
  button.onclick = function () {
    // إغلاق مع transition
    newImg.style.transform = "translate(-50%,-50%) scale(0.1)";
    newImg.style.opacity = "0";
    button.style.opacity = "0";
    button.style.transform = "scale(0.8)";
    
    setTimeout(() => {
      newImg.remove();
      img.style.opacity = "1";
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
      button.remove();
    }, 500);
  };
};

// Typewriter effect for about section
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typewriter effect when page loads
setTimeout(() => {
  typeWriter(aboutText, originalText, 30);
}, 500);

