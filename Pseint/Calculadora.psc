Algoritmo Calculadora
	
	Definir Num1, Num2, sum, rest, mult, div Como Real
	
	Escribir"1 Sumar numeros";
	Escribir"2 Restar numeros";
	Escribir"3 Producto/Multiplicacion numeros";
	Escribir"4 Division numeros";
	Escribir"5 Salir";
	
	Repetir
		Escribir "Seleccione la opcion deseada";
		Leer opc;
	Hasta Que (opc > 0) y (opc <= 5) 
	
	Escribir"Ingrese el primer n�mero";
	Leer Num1; 
	
	Escribir"Ingrese el segundo n�mero";
	Leer Num2;
	
	segun opc Hacer
		1: 
			sum = Num1 + Num2;
			Escribir "La suma de los n�meros es",sum;
		2:
			rest = Num1 - Num2;
			Escribir "La resta de los n�meros es", rest;
		3:
			mult = Num1 * Num2;
			Escribir "La multiplicaci�n de los n�meros es", mult;
		5:
			Escribir "Saliendo del sistema";
		4:
			si(num1 = 0) Entonces
				Escribir "No se puede realizar la operacion";
			SiNo
				div = Num1 / Num2;
				Escribir "La divisi�n de los n�meros es", div;			
			FinSi	
	FinSegun
	
FinAlgoritmo
