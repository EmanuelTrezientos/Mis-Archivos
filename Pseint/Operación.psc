Algoritmo Operaci�n
	Definir numl, num2 como Numerico
	Definir operacion como Texto
	Escribir "Ingrese el primer n�mero : ";
	Leer numl
	Escribir "Ingrese el segundo n�mero : ";
	Leer num2
	Escribir "Ingrese el valor de la operacion a realizar : ";
	Leer operacion
	Segun operacion Hacer
		
		's':
			Escribir "La operacion seleccionada es la suma, el resultado es: ", numl + num2;
		'r':	
			Escribir "La operacion seleccionada es la resta, el resultado es: ", numl - num2;
		'p':	
			Escribir "La operacion seleccionada es el producto, el resultado es: ", numl * num2;
		'd':
			segun num2 hacer
				0:
					Escribir "Error de divisi�n por cero";
				De Otro Modo:
					Escribir "La operacion seleccionada es la divisi�n, el resultado es: ", numl / num2;
			Fin Segun
		De Otro Modo:
			Escribir "El valor ingresado no corresponde a ninguna operaci�n";
	Fin Segun
FinAlgoritmo
