const mask= {
    periodo(value){
      const first =['2','3','4','5','6','7','8','9']
        if(value.length ==1){
            first.forEach(substituir)
            function substituir(item){
                value.replace(item,"")
                value = value.replace(item,'')
                sdig = value
                
            }
          }
        if(value.length ==2){
          const second =['3','4','5','6','7','8','9']
          if(sdig==1){
            second.forEach(substituir)
            function substituir(item){
              value = value.replace(item," ")
            }
          }
        }
        return(value)
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, '$1/$2')
      },
    numero(value){
        return(value)
        .replace(/\D/g, "")
    },
    cnpj (value){
      return(value)
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
    },
    cpf(value){
        return(value)
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1-$2')
    },
    text(){}
  }

  document.querySelectorAll('input').forEach(($input) =>{
  const field = $input.dataset.js
  $input.addEventListener('input', (e) => {
    e.target.value =mask[field](e.target.value)
   },false)
})
function geraponto(){
  
  let pontos =pontoarray()
  if( pontos.indexOf(document.getElementById("periodo").value)!= -1){
    window.alert("Este mês já foi calculado")
    
  }else{

  
  document.getElementById('geraponto2').setAttribute('hidden','true')
  if(document.getElementById('tbponto')){
  }
  else{
    let feriados =feriadosarray()
    var x = document.createElement("INPUT");
    x.setAttribute("type", "button");
    x.setAttribute("value", "Calcula");
    x.setAttribute('id','btncalcula')
    x.setAttribute('class','submitponto')
    document.body.appendChild(x);
    x.setAttribute("onclick","calcula(2)");
    let mesano = document.getElementById("periodo").value
    let smesano = mesano.split("/");
    let mes = smesano[0];
    let ano = smesano[1];
    ultimodia = new Date(ano, mes, 0).getDate()
    document.getElementById('ultimodia').value = ultimodia
    var dhead =document.createElement("DIV")
    dhead.setAttribute('id', 'dhead')
    document.getElementById("divponto").appendChild(dhead)
    let tabela = document.createElement("table");
    tabela.setAttribute("id","tbponto")
    document.getElementById("divponto").appendChild(tabela);
    linha("lhead")
    celula("a", "lhead")
    celula("b", "lhead")
    celula("c", "lhead")
    celula("d", "lhead")
    celula("e", "lhead")
    celula("f", "lhead")
    celula("g", "lhead")
    celula("h", "lhead")
    celula("i", "lhead")
    celula("j", "lhead")
    celula("k", "lhead")
    celula("m", "lhead")
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Data");
    x.setAttribute("disabled", "true" )
    document.getElementById("a").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Entrada");
    x.setAttribute("disabled", true )
    document.getElementById("b").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Saida");
    x.setAttribute("size","6" )
    document.getElementById("c").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Entrada");
    x.setAttribute("size","6" )
    document.getElementById("d").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Saida");
    x.setAttribute("disabled", true )
    document.getElementById("e").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("disabled", true )
    x.setAttribute("value", "Trabalhadas");
    document.getElementById("f").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("disabled", true )
    x.setAttribute("value", "Normais");
    document.getElementById("g").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("disabled", true )
    x.setAttribute("value", "50%");
    document.getElementById("h").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("disabled", true )
    x.setAttribute("value", "100%");
    document.getElementById("i").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("disabled", true )
    x.setAttribute("value", "Noturnas");
    document.getElementById("j").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("disabled", true )
    x.setAttribute("value", 'Faltas')
    document.getElementById("k").appendChild(x);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("disabled", true )
    x.setAttribute("value", "Justificativa");
    document.getElementById("m").appendChild(x);
    for(i =1; i<=ultimodia; i++){
      linha("l"+i);
      celula("a"+i,"l"+i);
      celula("b"+i,"l"+i);  
      celula("c"+i,"l"+i);  
      celula("d"+i,"l"+i);  
      celula("e"+i,"l"+i);  
      celula("f"+i,"l"+i);  
      celula("g"+i,"l"+i);
      celula("h"+i,"l"+i);
      celula("i"+i,"l"+i);
      celula("j"+i,"l"+i);
      celula("k"+i,"l"+i);
      celula("m"+i,"l"+i);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "date");
      x.setAttribute("Id", "dia"+i);
      x.setAttribute("name", "data");
      x.setAttribute('tabindex',"-1")
      x.setAttribute('class',"inputdate")
      x.setAttribute('disabled',"true")
      
      if(i<=9){
        x.setAttribute("value", ano +"-"+mes+"-0"+ i)
      }
      else{
        x.setAttribute("value", ano +"-"+mes+"-"+ (i))  
      }
      document.getElementById("a" + i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "time");
      x.setAttribute("Id", "entrada"+i);
      x.setAttribute("name", "entrada");
      document.getElementById("b" + i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "time");
      x.setAttribute("Id", "eintervalo"+i);
      x.setAttribute("name", "eintervalo");
      document.getElementById("c"+i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "time");
      x.setAttribute("Id", "sintervalo"+i);
      x.setAttribute("name", "sintervalo");
      document.getElementById("d"+i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "time");
      x.setAttribute("Id", "saida"+i);
      x.setAttribute("name", "saida");
      document.getElementById("e"+i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute('tabindex',"-1")
      x.setAttribute("type", "time");
      x.setAttribute("Id", "hrtrabalhadas"+i);
      x.setAttribute("name", "hrtrabalhadas");
      document.getElementById("f"+i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "time");
      x.setAttribute("Id", "hrnormais"+i);
      x.setAttribute("name", "hrnormais");
      x.setAttribute('tabindex',"-1")
      document.getElementById("g"+i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "time");
      x.setAttribute("Id", "hr50"+i);
      x.setAttribute("name", "hr50");
      x.setAttribute('tabindex',"-1")
      document.getElementById("h"+i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "time");
      x.setAttribute("Id", "h100"+i);
      x.setAttribute("name", "hr100");
      x.setAttribute('tabindex',"-1")
      document.getElementById("i"+i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "time");
      x.setAttribute("Id", "hrnoturna"+i);
      x.setAttribute("name", "hrnoturna");
      x.setAttribute('tabindex',"-1")
      document.getElementById("j"+i).appendChild(x);
      var x = document.createElement("INPUT");
      x.setAttribute("type", "time");
      x.setAttribute("Id", "Faltas"+i);
      x.setAttribute("name","faltas")
      x.setAttribute('tabindex',"-1")
      document.getElementById("k"+i).appendChild(x);
      var x = document.createElement("SELECT");
      x.setAttribute("Id", "justifica"+i);
      x.setAttribute("name", "justifica");
      document.getElementById("m"+i).appendChild(x);
      var opcoes = ['Normal','Folga', 'Justificada']
      opcoes.forEach(opcao)
      let Data  = new Date(document.getElementById("dia"+i).value)
      document.getElementById('hrnormais'+i).value = document.getElementById('horasnormais:'+(Data.getDay())).value
      document.getElementById("justifica"+i).value = document.getElementById((Data.getDay())+'justificativa').value
      if( feriados.indexOf(document.getElementById("dia"+i).value)!= -1){
        document.getElementById("justifica"+i).value =1
      }
      }
    }
  }
} 
function calcula(dias){
  document.getElementById("resultado2").hidden = false
  document.getElementById('gravaponto').hidden= false
  let data = new Date(document.getElementById("dia1").value)
  var month = data.getMonth(data)+1;
  var year = data.getFullYear(data);
  let utdia = new Date(year, month, 0).getDate()
  for(i=1;i<=ultimodia;i++){
    let eintervalo= document.getElementById("eintervalo"+i).value
    let entrada = document.getElementById("entrada"+i).value
    let sintervalo = document.getElementById("sintervalo"+i).value
    let saida = document.getElementById("saida"+i).value
    let hrtrabalhadas = htrabalhada(eintervalo, entrada,saida, sintervalo)
    document.getElementById("hrtrabalhadas"+i).value = hrtrabalhadas;
    let diasem = new Date(document.getElementById("dia"+i).value)
    let codi =diasem.getDay()
    let eintervalon= document.getElementById("Entradaintervalo:"+codi).value;
    let entradan = document.getElementById("Entrada:"+codi).value;
    let sintervalon = document.getElementById('saidaintervalo:'+codi).value;
    let saidan = document.getElementById("saida:"+codi).value;
    
    let entradas = hrajustada(entrada,entradan)
    let entinterval = hrajustada(eintervalo,eintervalon)
    let sainterval = hrajustada(sintervalo, sintervalon)
    let saidas = hrajustada(saida,saidan)
    
    let hrtrabalhaajustada = htrabalhada(entinterval,entradas,saidas,sainterval)
    let hrnormais = document.getElementById('hrnormais'+i).value
    
    let hrtrabalhadamin = parsetominutos(hrtrabalhaajustada)
    let hrnormaismin = parsetominutos(hrnormais)
    let horasextrasmin = hrtrabalhadamin-hrnormaismin
    
    if(horasextrasmin<0){
      document.getElementById('Faltas'+i).value = parsetohoras(horasextrasmin*-1)
      document.getElementById('hr50'+i).value='00:00'
      document.getElementById('h100'+i).value='00:00'
    }else{
      document.getElementById('Faltas'+i).value = '00:00'
      if(horasextrasmin>(120)){
        document.getElementById('hr50'+i).value ='02:00'
        document.getElementById('h100'+i).value = parsetohoras(horasextrasmin-(120))
      }else{
        document.getElementById('hr50'+i).value = parsetohoras(horasextrasmin)
        document.getElementById('h100'+i).value = '00:00'
      }
    }
    if(document.getElementById('justifica'+i).value==1){
      document.getElementById('Faltas'+i).value = '00:00'
      document.getElementById('hr50'+i).value = '00:00'
      document.getElementById('h100'+i).value = parsetohoras(horasextrasmin)
    }
    if(document.getElementById('justifica'+i).value==2){
      document.getElementById('Faltas'+i).value = '00:00'
      document.getElementById('hr50'+i).value = '00:00'
      document.getElementById('h100'+i).value = '00:00'
    }
    let horasnoturnasmanha
    let horasnoturnastarde
    let horasnoturastotais 

      horasnoturnasmanha=vhrnoturna(entradas,entinterval)
    
      horasnoturnastarde=(vhrnoturna(sainterval,saidas))
    
    horasnoturastotais = ((horasnoturnasmanha+horasnoturnastarde)/52.5)*60
      
      
  

    document.getElementById('hrnoturna'+i).value= parsetohoras(horasnoturastotais)
  
      }
  let totaln =0
  let totalt =0
  let total50 =0
  let total100 =0
  let totalf =0
  let totalnot =0
  for(i = 1; i<=ultimodia; i++){
  
  totaln += parsetominutos(document.getElementById('hrnormais'+i).value)
  document.getElementById('hn').value = parsetohoras(totaln)
  

  totalt += parsetominutos(document.getElementById('hrtrabalhadas'+i).value)
  document.getElementById('ht').value = parsetohoras(totalt)
  

  total50 += parsetominutos(document.getElementById('hr50'+i).value)
  document.getElementById('h50').value = parsetohoras(total50)
  

  total100 += parsetominutos(document.getElementById('h100'+i).value)
  document.getElementById('h100').value = parsetohoras(total100)
  
  
  totalnot += parsetominutos(document.getElementById('Faltas'+i).value)
  document.getElementById('hf').value = parsetohoras(totalnot)
  

  totalf += parsetominutos(document.getElementById('hrnoturna'+i).value)
  document.getElementById('hnot').value = parsetohoras(totalf)
  

  }
  
}
function vhrnoturna(entram,saidam){
  let entrada = parsetominutos(entram)
  let saida = parsetominutos(saidam)
  
  let l1 =  parsetominutos('22:00')
  let l2 = parsetominutos('05:00')
  
  
 if((entrada<saida)&&(entrada<=l1)&&(entrada>=l2)&&(saida<=l1)&&(saida>=l2)||(entrada==saida)){
   return(0)
 }else{
   console.log('horas noturnas')
    if(saida<entrada){  
      l1 =parsetominutos('10:00')
      l2 = parsetominutos('17:00')
      entrada = entrada-(60*12)
      saida = saida +(60*12)
      
      
    }
  if((saida>l1)&&(entrada<l1)){
      entrada= l1
  }
  if((entrada<l2)&&(saida>l2)){
    saida= l2
  }

  console.log("l1 " +parsetohoras(l1) +' l2 '+parsetohoras(l2))
  
  
  console.log('entrada: '+parsetohoras(entrada) + ' saida: ' + parsetohoras(saida))
return(saida-entrada) 
}
}

function opcao(index,item){
  var x = document.createElement("OPTION")
  x.setAttribute("value",item)
  x.text = index
  document.getElementById('justifica'+i).appendChild(x)
  item = item+1
}
function hrajustada(hr,hrnormal){
  hr = parsetominutos(hr)
  hrnormal = parsetominutos(hrnormal) 
 // if((hr<hrnormal+5)&&(hr>hrnormal-5)){
  //return (parsetohoras(hrnormal))
  //}else{
   return parsetohoras(hr)
  //}
}
function parsetohoras(horas){
  let h = Math.trunc(horas/60)
  let m = Math.trunc(horas-(h*60))
  if(h<10){
    h='0'+h
  }
  if(m<10){
    m='0'+m
  }
return(h+':'+m)
}
function parsetominutos(valor){
      
      let horas = valor.slice(0,2)*60
      
      let minutos = valor.slice(3,5)*1
      
      
      return (horas+minutos)
}
function horadif(hora1 , hora2){
    
     let hr1minutos= parsetominutos(hora1)
     let hr2minutos = parsetominutos(hora2)
     let difmin = (hr1minutos - hr2minutos)
     
     let dif
     if (difmin <0){
       
       dif = parsetohoras(difmin+(60*24))
     }else{
       dif = parsetohoras(difmin)
     }
     return dif
    
    
 }

function soma(hora1 , hora2){
    
    //hora 1 é a saída
    let shora1 = hora1.split(":");
    let shora2 = hora2.split(":");
    let hhora1 = parseInt(shora1[0]);
    let mhora1 = parseInt(shora1[1]);
    let hhora2 = parseInt(shora2[0]);
    let mhora2 = parseInt(shora2[1]);
    let tmin = (((hhora2+hhora1)*60)+mhora1+mhora2)%60;
    let thora = hhora1 +hhora2;
    if (thora<10){
      thora ="0"+thora;
    }
    if(tmin<10){
      tmin ="0"+tmin;
    }
    
    let result = thora + ":" + tmin;
    
    return (result)
}
function htrabalhada(hora1 , hora2, hora3, hora4){
      let manha = horadif(hora1, hora2);
  
      let tarde = horadif(hora3, hora4);
  
      let result = soma(manha , tarde);
   
    return (result)
    
}
function celula(id, col){
      let td = document.createElement("td");
      td.setAttribute("id", id);
      document.getElementById(col).appendChild(td);
}
function linha(id){
      let tr = document.createElement("tr");
      tr.setAttribute("id", id);
      document.getElementById("tbponto").appendChild(tr);
}
function myFunction(event) {
        var x = event.code;
        //NumpadEnter
        //enter
        let y = document.getElementById('periodo').value
        if(y.length == 7 && (x == "NumpadEnter" || x == "Enter")){
            geraponto()
        }
        
}
function lookup() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabela_empregados");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
let hornormal= []
function horasarray(){
  let tabela = 'horarios'
  
  for(i=0;i<7;i++){
    
    hornormal.push(document.getElementById(tabela).rows[i].cells[7].innerText)
    
  }
  return hornormal
}
let feriados =[]
function feriadosarray(){
  let tabela = 'tbferiados'
  let nferiados=contarferiados(tabela)
 
  for(i=0;i<nferiados;i++){
    
    feriados.push(document.getElementById(tabela).rows[i].cells[0].innerText)
    
  }
  return feriados
}

function horasarray(){
  let tabela = 'horarios'
  
  for(i=0;i<7;i++){
    
    hornormal.push(document.getElementById(tabela).rows[i].cells[7].innerText)
    
  }
  return hornormal
}
let pontos =[]
function pontoarray(){
  let tabela = 'tbpontos'
  let nrpontos=contarferiados(tabela)

 
  for(i=0;i<nrpontos;i++){
    
    pontos.push(document.getElementById(tabela).rows[i].cells[0].innerText)
     
  }
  return pontos
  
}
function contarferiados(tabela){
  var tabela1 = document.getElementById(tabela)
  return tabela1.getElementsByTagName('tr').length
}
function somatabela(){
  if(document.getElementById('ponto')){

    let table = document.getElementById('ponto')
    
    }
    
  }
  