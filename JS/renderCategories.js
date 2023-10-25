

const renderCategories = ()=> {

    const salida = `
             

            <div class="remeras category">
                <img src="./ASSETS/categoriaRemeras.jpg" alt="" >

    
            <div class="skewCategories"></div>

            <div class="textYbtn">
                <h2>REMERAS</h2>
                <button>VER MÁS</button>
            </div>
    
        </div>

        <div class="buzosYcamperas category">
            <img src="./ASSETS/categoriaBuzosYcamperas.jpg" alt="" >

            <div class="skewCategories"></div>
            
            <div class="textYbtn">
                <h2>BUZOS Y CAMPERAS</h2>
                <button>VER MÁS</button>
            </div>

        </div>
                    `
            document.getElementById("categories").innerHTML = salida;
        
        }