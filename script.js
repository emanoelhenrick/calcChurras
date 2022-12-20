
const Main = {
    init: function(){
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function(){

        this.$adultosInput = document.getElementById('adultos')
        this.$criancasInput = document.getElementById('criancas')
        this.$duracaoInput = document.getElementById('duracao')
        this.$buttonInput = document.getElementById('calc')
        this.$List = document.getElementById('result')

    },

    bindEvents: function(){

        this.$buttonInput.onclick = this.EventsFn.button_calc
    },

    EventsFn: {
        button_calc: function(){

            let adult = parseInt(Main.$adultosInput.value)
            let kid = parseInt(Main.$criancasInput.value)
            let time = parseInt(Main.$duracaoInput.value)

            if(time < 6){
                Main.carneTotal = ((400 * adult) + (400 * (kid / 2)))/1000 //agr ta em kilos
                console.log(Main.carneTotal);
                Main.cervejaTotal = Math.round((1200 * adult)/350) //agr ta em latas
                Main.refrigeranteTotal = Math.round(((1000 * adult) + (1000 * (kid/2)))/2000) // agr ta em 2L
            } else {
                Main.carneTotal = ((650 * adult) + (650 * (kid/2)))/1000
                Main.cervejaTotal = Math.round((2000 * adult)/350)
                Main.refrigeranteTotal = Math.round(((1500 * adult) + (1500 * (kid/2)))/2000)
            }

            Main.EventsFn.show_result()


        },

        show_result: function(){

            Main.$List.innerHTML = `
                <li>
                    ${Main.carneTotal} Kg de Carne
                </li>
                <li>
                    ${Main.cervejaTotal} Latas de Cerveja
                </li>
                <li>
                    ${Main.refrigeranteTotal} Garrafas de 2L de bebida
                </li>
            `    
        }
    }
}

Main.init()