Algoritmo NumeroMayorQue
	Definir Num1, Num2 Como Entero
	
	Mostrar "Ingrese el primer n�mero";
	Leer Num1
	
	Mostrar "Ingrese el segundo n�mero";
	Leer Num2
	
	Si (Num1 = Num2) Entonces
		Mostrar "No se puede determinar cual n�mero es mayor debido a que ambos numeros son iguales";
	SiNo 
		Si (Num1 > Num2) Entonces
		Mostrar "El primer n�mero ingresado es el mayor";
	SiNo
		Mostrar "El segundo n�mero ingresado es el mayor";
	FinSi
FinSi
FinAlgoritmo
