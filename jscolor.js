let r,g,b;

const red = new brain.NeuralNetwork();

red.train([
    {input: {rojo:0, verde:0, azul:0}, output:{color:1}},
    {input: {rojo:1, verde:1, azul:1}, output:{color:0}}
]);

// -----------------------------------------------------------------------------------------------
// --------------------------------- Funcion de cargue de color ----------------------------------
// -----------------------------------------------------------------------------------------------
window.onload = function() 
{    
    const colorfd = document.getElementById('colorPicker');
    var div1 = document.getElementById('bckcolor');
    
        colorfd.addEventListener('input', function()
        {
            const colorgb = colorfd.value;
            const rgbColor = hexToRgb(colorgb);
            div1.style.backgroundColor = rgbColor;

            var entrada = {
                rojo: (r / 255),
                verde:(g / 255), 
                azul: (b / 255)
            }

            let resultado = red.run(entrada);
            console.log(resultado / 255);
            
            if (resultado > .5) {
                div1.style.color = "white";
            } else{
                div1.style.color = "black";
            }
        }
    );
}

// -----------------------------------------------------------------------------------------------
// --------------------------------- Funcion de cargue de color ----------------------------------
// -----------------------------------------------------------------------------------------------
function hexToRgb(hex) {
    // Elimina el símbolo '#' si está presente
    hex = hex.replace(/^#/, '');

    // Convierte los valores hexadecimales a decimales
    var bigint = parseInt(hex, 16);
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;
    return `rgb(${r},${g},${b})`;
}

// -----------------------------------------------------------------------------------------------