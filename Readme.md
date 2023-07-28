# Recopilación de gráficas con D3.js 
Este repositorio contiene gráficas interactivas desarrolladas utilizando la biblioteca D3.js. Estas visualizaciones de datos están diseñadas para ser utilizadas como plantillas en un dashboard para una página web en línea.

- [Recopilación de gráficas con D3.js](#recopilación-de-gráficas-con-d3js)
  - [Descripción General](#descripción-general)
  - [Gráficas Disponibles](#gráficas-disponibles)
    - [Curve](#curve)
      - [Escalas](#escalas)
      - [Degradado](#degradado)
      - [Curva y Área](#curva-y-área)
      - [Interacción y Texto](#interacción-y-texto)
      - [Eje X y Eje Y](#eje-x-y-eje-y)
    - [Gauss](#gauss)
      - [Escalas](#escalas-1)
      - [Degradado](#degradado-1)
      - [Interacción y Texto (Marcadores de Líneas)](#interacción-y-texto-marcadores-de-líneas)
      - [Curva y Área](#curva-y-área-1)
      - [Eje X y Eje Y](#eje-x-y-eje-y-1)
    - [Cake](#cake)
    - [Spider](#spider)
    - [Stacked column](#stacked-column)
  - [Referencias](#referencias)


## Descripción General
El objetivo de este proyecto es proporcionar una colección de plantillas de gráficas que pueden utilizar para mostrar datos de manera efectiva y atractiva utilizando javascript.

## Gráficas Disponibles
A continuación, se describen las gráficas disponibles en este repositorio:
***

### Curve
curve.html: Una gráfica de línea suavizada que muestra una serie de datos a lo largo de un eje x e y. Ideal para representar tendencias o patrones en los datos a lo largo del tiempo u otro tipo de variable continua.

#### Escalas
**xScale:** Es una escala de tiempo que mapea las fechas de registro en el conjunto de datos a posiciones a lo largo del eje x del SVG. Permite ajustar la posición horizontal de los puntos en función de las fechas.

**yScale:** Es una escala lineal que mapea el número de usuarios registrados en el conjunto de datos a posiciones a lo largo del eje y del SVG. Permite ajustar la posición vertical de los puntos en función de la cantidad de usuarios.

#### Degradado
El degradado lineal se crea mediante el elemento **linearGradient** en el bloque *defs*. Este degradado se utiliza para colorear el área bajo la curva.

#### Curva y Área
**d3.line()**. Se utiliza para trazar la curva suave que conecta los puntos de datos en la gráfica. Los puntos de la curva se colocan en función de sus fechas (eje x) y el índice correspondiente en el conjunto de datos (eje y).

**d3.area()** Se utiliza para crear un área rellena bajo la curva. Los puntos que conforman el área se colocan en función de sus fechas (eje x) y el índice correspondiente en el conjunto de datos (eje y).

#### Interacción y Texto
**hoverLine:** Es una línea vertical que se muestra al hacer hover sobre la gráfica. Esta línea se coloca en la posición del mouse en el eje x y se extiende desde el eje y hasta el punto de la curva más cercano al mouse. Permite visualizar la fecha y cantidad de usuarios en un momento específico.

**infoGroup:** Es un grupo que contiene dos elementos de texto que muestran la fecha y la cantidad de usuarios registrados correspondientes al punto de la curva más cercano al mouse.

#### Eje X y Eje Y
**xAxis:** Es el eje x de la gráfica. Se crea utilizando la función *d3.axisBottom()* y se escala con *xScale*. En este caso, el eje x muestra solo las líneas, sin etiquetas ni números.

*Nota: Si utilizas tus propios datos, asegúrate de que el formato de fecha en el archivo CSV sea reconocible por la función d3.timeParse(). De lo contrario, es posible que debas ajustar la lógica de procesamiento de fechas en el código.*

***

### Gauss
gauss.html: Una visualización que representa una distribución de datos utilizando una gráfica de campana (distribución gaussiana). Perfecta para mostrar la distribución de valores en un conjunto de datos.

#### Escalas
**xScale:** Es una escala lineal que mapea los puntajes en el conjunto de datos a posiciones a lo largo del eje x del SVG. Permite ajustar la posición horizontal de los puntos en función de los puntajes.

**yScale:** Es una escala lineal que mapea el número de elementos en cada intervalo de puntajes a posiciones a lo largo del eje y del SVG. Permite ajustar la posición vertical de los puntos en función de la densidad de cada intervalo.

**ScaleGaussian:** Es una escala lineal adicional que mapea la densidad de la curva de Gauss a posiciones a lo largo del eje y del SVG. Permite ajustar la posición vertical de los puntos en función de la densidad de probabilidad de la curva de Gauss.

#### Degradado
Se crea un gradiente lineal utilizando el elemento **linearGradient** en el bloque *defs*. Este gradiente se utiliza para colorear el área bajo la curva de Gauss.

#### Interacción y Texto (Marcadores de Líneas)
**averageLine:** Es una línea vertical que muestra la posición del promedio de los puntajes en la distribución.

**maxLine:** Es una línea vertical que muestra la posición del puntaje máximo en la distribución. 

**Marcadores:** Permiten agregar elementos decorativos en los extremos de la línea. En este caso, se utiliza el marcador de flecha (#arrow) en el extremo superior de la línea y el de circulo (#circle) en el inferior. El marcador se define previamente en el bloque *defs* y está configurado para tener una forma especifica.

#### Curva y Área
**curveData:** Es un arreglo de puntos utilizados para generar la curva de Gauss. Cada punto representa un puntaje y su correspondiente densidad de probabilidad, calculada mediante la función gaussian.

**d3.area()** Se utiliza para crear el área rellena bajo la curva de Gauss.

#### Eje X y Eje Y
**xAxis:** Es el eje x de la gráfica. Se crea utilizando la función *d3.axisBottom()* y se escala con *xScale*. En este caso, el eje x muestra solo las líneas, sin etiquetas ni números.

**yAxisGaussian:** Es el eje y para la curva de Gauss. Se crea utilizando la función *d3.axisLeft()* y se escala con *yScaleGaussian*. En este caso, el eje y muestra solo las líneas, sin etiquetas ni números.
***

### Cake
cake.html: Un gráfico de pastel que muestra la proporción de diferentes categorías en un conjunto de datos. Útil para resaltar la composición relativa de elementos.

***

### Spider
spider.html: Una gráfica de radar o araña que permite comparar múltiples variables en diferentes categorías. Es ideal para mostrar perfiles multivariables.

***

### Stacked column
stacked_column.html: Una gráfica de columnas apiladas que muestra la contribución de diferentes componentes en un conjunto de datos. Es especialmente útil para comparar la evolución de varias series a lo largo del tiempo.

***

## Referencias

Si deseas aprender más sobre D3.js te recomiendo consultar la documentación oficial en el siguiente enlace: https://d3js.org/.

Nota: Este archivo README.md proporciona una descripción general del contenido del repositorio y cómo utilizar las plantillas de gráficas. Para obtener información detallada sobre cada gráfica individual, consulta el contenido de los archivos HTML correspondientes.
