function  calcularTotal ( )  {
    var  cant Entradas ,
      total ,
      categoría ,
      entradaEstudiante ,
      entradaTrainee ,
      entradaJr ,
      generales ;
  
    console.log ('categoria.value' );
    console.log (cantidaddeentradas.value)
    cantidad de entradas.value
    cantEntradas=  documento.getElementById ( 'inputCantidad' ) .valor ;
    categoria  =  documento.getElementById ( 'categoría de entrada' ) .valor ;
  
    console.log ( 'cant entradas'  +  cantEntradas  +  'categoria'  +  categoria ) ;
  
    entradaEstudiante=  200-(200*80)/100 ;
    entradaAprendiz=  200-(200*50)/100 ;
    entradaJr=  200-(200*15)/100 ;
    generales=  200;
  
    /*verifico si el valor ingresado es mayor a cero y si es un numero*/
    if  ( cantEntradas  >  0  &&  ! isNaN ( cantEntradas )  &&  cantEntradas  %  1  ==  0 )  {
      //verifico el tipo de entrada que es (estudiante, trainee y jr para poder mostrar el monto)
      if  ( categoria  ==  'Estudiante' )  {
        total  =  entradaEstudiante  *  cantEntradas ;
        documento _ getElementById ( 'importeTotal' ) .HTML interno=
          'Total a Pagar: \u0024'  +  total ;
      }  else  if  ( categoria  ==  'Aprendiz' )  {
        total  =  entradaAprendiz  *  cantEntradas ;
        documento _ getElementById ( 'importeTotal' ) .HTML interno=
          'Total a Pagar: \u0024'  +  total ;
      }  else  if  ( categoría  ==  'Junior' )  {
        total  =  entradaJr  *  cantEntradas ;
        documento _ getElementById ( 'importeTotal' ) .HTML interno=
          'Total a Pagar: \u0024'  +  total ;
      }  else  if  ( categoría  ==  'General' )  {
        total  =  general  *  cantEntradas ;
        documento _ getElementById ( 'importeTotal' ) .HTML interno=
          'Total a Pagar: \u0024'  +  total ;
      }
    }  más  {
      ventana.alert ( 'Debe ingresar la cantidad de entradas en números enteros') ;
    }
  }
  
  función  borrar ( )  {
    documento.getElementById ( ' nombre de entrada ' ) .valor=' ' ;
    documento.getElementById ( 'inputApellido' ) . valor=' ' ;
    documento.getElementById ( 'correo electrónico de entrada') .valor=' ' ;
    documento.getElementById ( 'inputCantidad' ) . valor=  ' ' ;
    documento.getElementById ( 'categoría de entrada' ) .valor='Estudiante' ;
    documento.getElementById ( 'importeTotal' ) . innerHTML='Total a Pagar: \u0024' ;
  }