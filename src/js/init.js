function init() {
    gender_prefix = ["","a","agender","aporagender","coco","bi","demi","en","gender","non","poly","xeno","andro","inter","trio","quadri","quinti","pan","multi","homo","sapio","skolio","gyno","de","cis","trans","aero","adepto","ambi","biped","quadriped","triped","uniped","anti","anxio","bat","border","chaos","cloud","cocoon","color","crystalo","cyclo","dead","equestriano","existo","exploro","fasci","fem","flower","frost","gemi","gyra","white ","yellow ","mageanta ","red ","light blue ","lime ","blue ","gray ","light gray ","orange ","purple ","red ","cyan ","green ","black ","helio","hydro","illusio","wiki","mercuro","venuso","planeto","moono","marso","jupitero","saturno","uranuso","neptuno","king","lether","bear","masculo","femino","mirro","mystical","music","necro","no","pixel","zodiaco"];
    gender_suffix = ["","gender","flux","gyne","boy","girl","fluid","less","neutral","queer","void","binary","feminine","masculine","sexual","person","male","man","woman","female","genital","eaux","flora","flight","positive","negative","punk","strange","vex","flux"];
    layer_style = ["half_up", "half_down", "half_left", "half_right", "horizontal_stripes", "vertical_stripes", "plain", "cross", "horizontal_center_line", "vertical_center_line", "diagonal_right_line", "diagonal_left_line","triangle_top","triangle_bottom","triangle_left","triangle_right"]
    
    generateSVG()
    displayGenderTitle()
    createFlag()
}

function generateSVG() {
    draw = SVG().addTo('body').size(window.innerWidth, window.innerHeight)
}

function createFlag() {
    addPlain()

    var layer_amount = Math.floor(Math.random()* (layer_style.length))
    if (layer_amount == 0) { layer_amount = 1 }
    var duplicated_layer_style = [];
    selected_layer_style = [];
    for (var i = 0 ; i < layer_style.length ; i++) {
        duplicated_layer_style.push(layer_style[i]);
    }
    for (var i = 0 ; i < layer_amount ; i++) {
        var r = Math.floor(Math.random()* (duplicated_layer_style.length))
        selected_layer_style.push(duplicated_layer_style[r])

        if (selected_layer_style[selected_layer_style.length-1] == "plain") {
            selected_layer_style[selected_layer_style.length-1] = "horizontal_stripes";
        }
    }
    
    

    for (var i = 0 ; i < layer_amount ; i++) {
        console.log(selected_layer_style[i])
        switch (selected_layer_style[i]) {
            case "half_up":
                addUpperHalf();
                break;
            case "half_down":
                addBottomHalf();
                break;
            case "half_left":
                addLeftHalf();
                break;
            case "half_right":
                addRightHalf();
                break;
            case "horizontal_stripes":
                addHorizontalStripes();
                break;
            case "vertical_stripes":
                addVerticalStripes();
                break;
            case "plain":
                addPlain();
                break;
            case "cross":
                addCross();
                break;
            case "horizontal_center_line":
                addHorizontalCenterLine();
                break;
            case "vertical_center_line":
                addVerticalCenterLine();
                break;
            case "diagonal_right_line":
                break;
            case "diagonal_left_line":
                break;
            case "triangle_top":
                addUpperTriangle()
                break;
            case "triangle_bottom":
                addBottomTriangle()
                break;
            case "triangle_left":
                addLeftTriangle()
                break;
            case "triangle_right":
                addRightTriangle()
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
        layer_amount--
    }

    console.log(layer_amount, duplicated_layer_style, selected_layer_style);
}

function addUpperHalf() {
    var rect = draw.rect(window.innerWidth, window.innerHeight/2).attr({ fill: randomColor() }).move(0, 0);
}

function addBottomHalf() {
    var rect = draw.rect(window.innerWidth, window.innerHeight/2).attr({ fill: randomColor() }).move(0, window.innerHeight/2);
}

function addLeftHalf() {
    var rect = draw.rect(window.innerWidth/2, window.innerHeight).attr({ fill: randomColor() }).move(0, 0);
}

function addRightHalf() {
    var rect = draw.rect(window.innerWidth/2, window.innerHeight).attr({ fill: randomColor() }).move(window.innerWidth/2, 0);
}

function addHorizontalStripes() {
    // taille des bandes au hasard > nombre de bandes en foncions de leurs hauteurs
    // celle de la fenêtre
    var band_amount = Math.floor(Math.random()* (window.innerHeight)/50)+2;
    var band_height = Math.floor(window.innerHeight / band_amount);

    for (var i = 0 ; i < band_amount ; i++) {
        var rect = draw.rect(window.innerWidth, band_height).attr({ fill: randomColor() }).move(0, i*band_height)
    }
}
function addVerticalStripes() {
    // taille des bandes au hasard > nombre de bandes en foncions de leurs hauteurs
    // celle de la fenêtre
    var band_amount = Math.floor(Math.random()* (window.innerWidth)/50)+2;
    var band_width = Math.floor(window.innerWidth / band_amount);

    for (var i = 0 ; i < band_amount ; i++) {
        var rect = draw.rect(band_width, window.innerHeight).attr({ fill: randomColor() }).move(i*band_width, 0)
    }
}

function addPlain() {
    var rect = draw.rect(window.innerWidth, window.innerHeight).attr({ fill: randomColor() })
}

function addCross() {
    // taille des bandes au hasard > nombre de bandes en foncions de leurs hauteurs
    // celle de la fenêtre
    var color = randomColor()
    var band_stroke = Math.floor(window.innerWidth/25 + Math.floor(Math.random()* (window.innerWidth)/10)+2);
    var central_vertical_pos = window.innerWidth/2 - band_stroke/2
    var central_horizontal_pos = window.innerHeight/2 - band_stroke/2

    var rect = draw.rect(band_stroke, window.innerHeight).attr({ fill: color }).move(central_vertical_pos, 0)
    var rect = draw.rect(window.innerWidth, band_stroke).attr({ fill: color }).move(0, central_horizontal_pos)
}
function addHorizontalCenterLine() {
    var band_stroke = Math.floor(window.innerWidth/25 + Math.floor(Math.random()* (window.innerWidth)/10)+2);
    var central_horizontal_pos = window.innerHeight/2 - band_stroke/2
    var rect = draw.rect(window.innerWidth, band_stroke).attr({ fill: randomColor() }).move(0, central_horizontal_pos)
}
function addVerticalCenterLine() {
    var band_stroke = Math.floor(window.innerWidth/25 + Math.floor(Math.random()* (window.innerWidth)/10)+2);
    var central_vertical_pos = window.innerWidth/2 - band_stroke/2
    var rect = draw.rect(band_stroke, window.innerHeight).attr({ fill: randomColor() }).move(central_vertical_pos, 0)
}
// PAIN
// function addLeftDiagonalLine() {
//     // var band_stroke = Math.floor(window.innerWidth/25 + Math.floor(Math.random()* (window.innerWidth)/10)+2);
//     var band_stroke = 20;
//     var central_vertical_pos = -(window.innerHeight/2)-band_stroke/1.75
//     var central_horizontal_pos = window.innerWidth/2-band_stroke/1.75
//     var band_lenght = Math.sqrt(window.innerWidth*window.innerWidth+window.innerHeight*window.innerHeight);
//     var angle = Math.tan(window.innerWidth*window.innerHeight)*(360/Math.PI)
//     var rect = draw.rect(band_stroke, band_lenght).attr({ fill: randomColor() }).rotate(-angle, 0, band_stroke/2)

//     console.log(band_stroke, window.innerHeight, window.innerWidth, band_lenght)
// }
function addRightDiagonalLine() {}
function addRightTriangle() {
    var pos1 = window.innerWidth + ",0";
    var pos2 = window.innerWidth/2 + "," + window.innerHeight/2;
    var pos3 = window.innerWidth + "," + window.innerHeight;
    var polygon = draw.polygon(pos1 + " " +pos2 + " " +pos3).fill( randomColor() );
}
function addLeftTriangle() {
    var pos1 = "0,0";
    var pos2 = window.innerWidth/2 + "," + window.innerHeight/2;
    var pos3 = "0," + window.innerHeight;
    var polygon = draw.polygon(pos1 + " " +pos2 + " " +pos3).fill( randomColor() );
}
function addUpperTriangle() {
    var pos1 = "0,0";
    var pos2 = window.innerWidth/2 + "," + window.innerHeight/2;
    var pos3 = window.innerWidth + ",0";
    var polygon = draw.polygon(pos1 + " " +pos2 + " " +pos3).fill( randomColor() );
}
function addBottomTriangle() {
    var pos1 = "0," + window.innerHeight;
    var pos2 = window.innerWidth/2 + "," + window.innerHeight/2;
    var pos3 = window.innerWidth + "," + window.innerHeight;
    var polygon = draw.polygon(pos1 + " " +pos2 + " " +pos3).fill( randomColor() );
}

function displayGenderTitle() {
    document.getElementById("gender").innerHTML = randomGenderGenerator();
    document.getElementById("gender").style = "color:" + randomColor();

}

function randomGenderGenerator() {
    var prefix = gender_prefix[Math.floor(Math.random()*gender_prefix.length)];
    var suffix = gender_suffix[Math.floor(Math.random()*gender_suffix.length)];
    var gender = (prefix + suffix).toUpperCase();

    return gender;
}

function randomColor() {
    var random_color = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
    while (random_color.length != 7) { 
        var random_color = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
    }
    return random_color;
}