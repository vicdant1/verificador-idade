function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anoForm = document.getElementById("txtano")
    let res = document.getElementById("res")
    let anoMin = 1903

    if(anoForm.value.length == 0 || anoForm.value > ano){
        alert("Dados incompatíveis")
    }
    else if(anoForm.value < anoMin){
        alert("Ninguém é tão velho assim!")
    }
    else{
        let sexForm = document.getElementsByName("radsex")
        let idade = ano - Number(anoForm.value)
        let gen = ''
        let img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(sexForm[0].checked){
            gen = "um homem"
                if(idade >=0 && idade <= 10){
                    img.setAttribute("src", "img/m_bebe.png")
                }
                else  if(idade >10 && idade <=21){ 
                    img.setAttribute("src", "img/m_jovem.png")
                }
                else  if(idade >21 && idade <=60){ 
                    img.setAttribute("src", "img/m_adulto.png")
                }
                else{
                    img.setAttribute("src", "img/m_idoso.png")
                }
        }
        else{
            gen = "uma mulher"
                if(idade >=0 && idade <= 10){
                    img.setAttribute("src", "img/f_bebe.png")
            }
                else  if(idade >10 && idade <=21){ 
                    img.setAttribute("src", "img/f_jovem.png")
            }
                else  if(idade >21 && idade <=60){
                    img.setAttribute("src", "img/f_adulta.png")
            }
                else{
                    img.setAttribute("src", "img/f_idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }

}