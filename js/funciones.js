function soloLetras(e)
{
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toLowerCase();
   letras = " áéíóúabcdefghijklmnñopqrstuvwxyz.";
   //especiales = [8,37,39,46];

   tecla_especial = false;

	if(letras.indexOf(tecla)==-1 && !tecla_especial)
	{
		return false;
	}
}
//function soloNumeros(evt)
function soloNumeros(e)
{
	tecla = (document.all) ? e.keyCode : e.which; 
	if (tecla==8) return true; 
	patron =/^[0-9.]+$/;//este acepta punto(.), si se quiere eliminar borrar el punto despues del 9. 
	te = String.fromCharCode(tecla); 
	return patron.test(te);
}

function validaralpha(e) 
{ 
	tecla = (document.all) ? e.keyCode : e.which; 
	if (tecla==8) return true; 
	patron =/[\ w\w.&ñ]/;//este acepta espacios entre medio, si se quiere eliminar los espacios poner [\w] 
	te = String.fromCharCode(tecla); 
	return patron.test(te);
}

function operacion()
{
        document.getElementById('divResultado').style.display="none";  
	var str1=document.getElementById('url').value;       
	
	if(str1=='')
	{
		alert('Debe Ingresar los valores!');
	}
	else
	{

		$.ajax({
		cache: false,
		// puede ser GET, POST
		type: "POST",  							
		// Tipo de retorno
		dataType: "html",
		// pagina php que recibe la llamada
		url: "func/instBuscaImg.php",  							
		// datos, ej: $_POST['data']
		data: {
			url:str1				
		},
		beforeSend: function(){  
                    document.getElementById('divCargando').style.display="block";
                    $("#labelCargando").html('Obteniendo...');              	
		},
		// acciones cuando me retorna algo el PHP
		success: function( msg){
			//console.log(msg);                 
//						{
                        document.getElementById('divResultado').style.display="block";
			$("#labelResultado").html('<br>'+msg);
			document.getElementById('divCargando').style.display="none";		
//			}
		},							
		// acciones cuando hay error en comunicacion el el php
		error: function(xhr, status,msg2 ){
			//alert('4');			
			console.log(xhr);
		}
	});//fin ajax
	}//fin else
	
}

function reiniciar()
{
	document.getElementById('url').value='';
	document.getElementById('divCargando').style.display="none";	
	document.getElementById('divResultado').style.display="none";        
}
