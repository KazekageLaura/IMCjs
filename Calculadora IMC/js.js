let calcular = document.querySelector("#calcular");
var ordem=0;
var tbody=document.querySelector("tbody");

    function calculo () {
        let nome = document.querySelector("#nome").value;
        let altura = document.querySelector("#altura").value;
        let peso = document.querySelector("#peso").value;
        let imc = (peso / (altura * altura)).toFixed(1);

        let tr = document.createElement("tr");
        let tdOrdem=document.createElement("td");
        
        tr.append(tdOrdem);
        let tdnome=document.createElement("td");
        tdnome.append(
            document.createTextNode(nome)
            );
        tr.append(tdnome)

        let tdaltura=document.createElement("td");
        tdaltura.append(
            document.createTextNode(altura)
            );
            tr.append(tdaltura)

        let tdpeso=document.createElement("td");
        tdpeso.append(
            document.createTextNode(peso)
            );
            tr.append(tdpeso)

        let tdimc=document.createElement("td");
        tdimc.append(
            document.createTextNode(imc)
            ); 
            tr.append(tdimc)

        tbody.append(tr)
    }
        document.querySelector("#limpar").onclick = function(){
            location.reload();  
        }