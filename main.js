const screen= document.querySelector(".main_screen");
const accumul= document.querySelector(".accum_screen");
const btnNumbers = document.querySelectorAll(".btn");

btnNumbers.forEach(boton => {
    boton.addEventListener("click", () => {
        const btnPressed = boton.textContent;
        let acummulated;
        console.log(btnPressed);
        console.log(screen.textContent);


        if (boton.id === "C") {
            screen.textContent="0";
            accumul.textContent="0";
            return;
        }


        if (boton.id === "del") {
            if (screen.textContent.length === 1 || screen.textContent === "Error") {
                screen.textContent="0";
            } else {
            screen.textContent=screen.textContent.slice(0, -1);
            }
            return;
        }
       
        if(boton.id==="equal"){

          if( screen.textContent === "Error")  {
            screen.textContent="Error";
          } else {
                try{  
                    screen.textContent = eval(screen.textContent);
                }catch{
                    screen.textContent="Error";
                }}
            return;
        }


        if(screen.textContent === "0"|| screen.textContent === "Error") {
            screen.textContent = btnPressed;
        } else {
            screen.textContent += btnPressed;
        }
    });
});
