Una persona necesita calcular su salario semanal, el cual se obtiene de la
siguiente manera:

Si trabaja 40 horas o menos se le paga a $16.000 por hora
Si trabaja más de 40 horas se le paga $16.000 por cada una de las primeras
40 horas y $20.000 por cada hora extra.

Solucion con algoritmo:

declarar variables:
horas_trabajadas
solicitar introducir las horas_trabajadas
pago=0
horas_extra=0

si horas_trabajadas es igual o menor a 40
pago = 16.000*horas_trabajadas

si horas_trabajadas es mayor a 40
horas_extra = horas_trabajadas - 40
pago = 16.000 * 40 + horas_extra * 20.000

mostrar pago 


