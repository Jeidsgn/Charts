# Recopilación de gráficas con D3.js

Este repositorio contiene gráficas interactivas desarrolladas utilizando la biblioteca D3.js. Estas visualizaciones de datos están diseñadas para ser utilizadas como plantillas en un dashboard para una página web.
Se pueden ver aquí: https://jeidsgn.github.io/Charts/

- [Recopilación de gráficas con D3.js](#recopilación-de-gráficas-con-d3js)
  - [Descripción General](#descripción-general)
  - [Configuración del SVG](#configuración-del-svg)
      - [Configuración de las Gráficas](#configuración-de-las-gráficas)
  - [Gráficas Disponibles](#gráficas-disponibles)
    - [Curve](#curve)
      - [Creación de la Gráfica](#creación-de-la-gráfica)
      - [Interacción y Texto](#interacción-y-texto)
    - [Cake](#cake)
      - [Procesamiento de Datos](#procesamiento-de-datos)
      - [Configuración de la Gráfica](#configuración-de-la-gráfica)
      - [Creación de la Gráfica](#creación-de-la-gráfica-1)
    - [Spider](#spider)
      - [Procesamiento de Datos](#procesamiento-de-datos-1)
      - [Configuración de la Gráfica](#configuración-de-la-gráfica-1)
      - [Creación de la Gráfica](#creación-de-la-gráfica-2)
    - [Stacked column](#stacked-column)
      - [Procesamiento de Datos](#procesamiento-de-datos-2)
    - [Configuración de la Gráfica](#configuración-de-la-gráfica-2)
    - [Creación de la Gráfica](#creación-de-la-gráfica-3)
    - [Gauss](#gauss)
      - [Procesamiento de Datos](#procesamiento-de-datos-3)
      - [Configuración de la Gráfica](#configuración-de-la-gráfica-3)
      - [Creación de la Gráfica](#creación-de-la-gráfica-4)
      - [Interacción y Texto](#interacción-y-texto-1)
  - [Referencias](#referencias)

## Descripción General

El objetivo de este proyecto es proporcionar una colección de plantillas de gráficas que pueden utilizar para mostrar datos de manera efectiva y atractiva utilizando javascript.

![Alt text](image.png)

## Configuración del SVG

SVG es una forma de renderizar imágenes en la página web. SVG no es una imagen directa, sino solo una forma de crear imágenes usando texto. Las visualizaciones de datos son representaciones visuales y es conveniente usar SVG para representar visualizaciones usando D3.js. SVG es como el lienzo en el que podemos pintar diferentes formas.

- **width** y **height**: Establecen el ancho y la altura del SVG.
- **svg**: Selecciona el elemento con el ID "chart" y crea el contenedor SVG para la gráfica.
- **radius**: Calcula el radio de una gráfica circular como la mitad del valor mínimo entre el ancho y la altura del SVG. Esto asegura que la gráfica tenga un tamaño adecuado y se ajuste dentro del SVG.

#### Configuración de las Gráficas

- **xScale:** Permite ajustar la posición horizontal de los puntos.
- **yScale:** Permite ajustar la posición vertical de los puntos.

## Gráficas Disponibles

---

### Curve

curve.html: Una gráfica de línea suavizada. Ideal para representar tendencias o patrones en los datos a lo largo del tiempo u otro tipo de variable continua.

![Alt text](image-1.png)

#### Creación de la Gráfica

- **d3.line()** La curva suave que conecta los puntos de datos en la gráfica. Los puntos de la curva se colocan en función de sus fechas (eje x) y el índice correspondiente en el conjunto de datos (eje y).
- **d3.area()** Área rellena bajo la curva.
- El degradado lineal se crea mediante el elemento **linearGradient** en el bloque _defs_. Este degradado se utiliza para colorear el área bajo la curva.

#### Interacción y Texto

- **hoverLine:** Línea vertical que se muestra al hacer hover sobre la gráfica. Se coloca en la posición del mouse en el eje x y se extiende desde el eje y hasta el punto de la curva más cercano al mouse. Permite visualizar la fecha y cantidad de usuarios en un momento específico.
- **infoGroup:** Grupo que contiene dos elementos de texto que muestran la fecha y la cantidad de usuarios registrados correspondientes al punto de la curva más cercano al mouse.

_Nota: Si utilizas tus propios datos, asegúrate de que el formato de fecha en el archivo CSV sea reconocible por la función d3.timeParse(). De lo contrario, es posible que debas ajustar la lógica de procesamiento de fechas en el código._

---

### Cake

![Alt text](image-2.png)

cake.html: Un gráfico de pastel que muestra la proporción de diferentes categorías en un conjunto de datos. Útil para resaltar la composición relativa de elementos.

#### Procesamiento de Datos

Antes de crear la gráfica, el archivo realiza un procesamiento de datos para obtener los porcentajes.

#### Configuración de la Gráfica

- **pie**: Calcula los ángulos y tamaños de los arcos según los valores de conteo de idiomas.
- **arc**: Define el tamaño y forma de cada arco en la gráfica.
- **color**: Asigna colores a cada idioma en función de la configuración de colores especificada en el código. Cada idioma único en el conjunto de datos tiene asignado un color específico.

#### Creación de la Gráfica

- Grupo (g) en el centro del SVG mediante `svg.append("g")` como contenedor para los elementos de la gráfica.
- Se crean los arcos para cada idioma y se agregan al grupo (g) mediante `g.selectAll(".arc")`.
- A cada arco se le asigna un color específico mediante el atributo "fill" que se obtiene de la función `color(d.data.language)`.
- La posición de las etiquetas de texto se ajusta mediante la función `arc.centroid(d)` para que queden arriba de los arcos.

---

### Spider

![Alt text](image-3.png)

spider.html: Una gráfica de radar o araña que permite comparar múltiples variables en diferentes categorías. Es ideal para mostrar perfiles multivariables. Muestra la distribución de países más repetidos en un conjunto de datos y representa la cantidad de repeticiones de cada país en forma de "telaraña" con ejes radiales y círculos tangenciales.

#### Procesamiento de Datos

Antes de crear la gráfica, el archivo realiza un procesamiento de datos para obtener los conteos de países repetidos en el conjunto de datos y determinar los 10 países más repetidos (top 10).

#### Configuración de la Gráfica

- **angleScale**: Calcula los ángulos de los ejes radiales.
- **radiusScale**: Calcula el radio de los ejes radiales y los círculos tangenciales en función de la cantidad de repeticiones. El radio es proporcional a la cantidad de repeticiones y se ajusta para que los valores se muestren adecuadamente dentro del área de la gráfica.

#### Creación de la Gráfica

- Los ejes radiales mediante elementos `<line>` representan los países seleccionados en el top 10. Cada eje tiene una longitud proporcional a la cantidad de repeticiones del país en cuestión.
- Los ejes circulares mediante elementos `<circle>` representan el porcentaje. Estos círculos dividen el área de la gráfica en segmentos iguales.
- Se crea el área sombreada que une los países mediante el uso de la función `d3.areaRadial()`.
- Se agregan etiquetas de texto en forma de emojis que muestran el país correspondiente a cada eje radial. Los emojis son seleccionados del objeto `emojis`.

_Nota: Puedes modificar los emojis proporcionados en el objeto `emojis` para representar los países seleccionados en tu conjunto de datos._

---

### Stacked column

![Alt text](image-4.png)

stacked_column.html: Contiene una visualización de una gráfica de barras apiladas horizontal. La gráfica muestra la distribución de usuarios en diferentes grupos de edades.

#### Procesamiento de Datos

Antes de crear la gráfica, el archivo realiza un procesamiento de datos para obtener la cantidad de usuarios en cada grupo de edades. Los grupos de edades se definen como "-17", "18-24", "25-34", "35-44" y "+44".

### Configuración de la Gráfica

- **xScale**: La escala va desde 0 hasta el total de usuarios y un rango que va desde 0 hasta el ancho del SVG. Es una escala lineal utilizada para calcular la posición horizontal de cada barra en función de la cantidad de usuarios en cada grupo de edades.

### Creación de la Gráfica

- Se crean los elementos `<rect>` para representar cada barra apilada. Cada barra tiene una posición y altura fija y su ancho es proporcional a la cantidad de usuarios en el grupo de edades correspondiente. Se utiliza la función `getGroupColor` para asignar un color a cada barra según el grupo de edades.
- Se crean etiquetas de texto (`<text>`) para mostrar los nombres de cada grupo de edades. Las etiquetas se colocan en el centro de cada barra apilada y muestran el nombre del grupo de edades.
- Se utiliza la función `calculateAge` para calcular la edad a partir de la fecha de nacimiento de cada usuario en el conjunto de datos.

---

### Gauss

![Alt text](image-5.png)

gauss.html: Una visualización que representa una distribución de datos utilizando una gráfica de campana (distribución gaussiana). Perfecta para mostrar la distribución de valores en un conjunto de datos.

#### Procesamiento de Datos

Antes de crear la gráfica, el archivo realiza un procesamiento de datos para obtener el promedio y el valor máximo, además de ajustar la campana de Gauss a estos datos.

#### Configuración de la Gráfica

- **ScaleGaussian:** Es una escala lineal adicional que mapea la densidad de la curva de Gauss a posiciones a lo largo del eje y del SVG. Permite ajustar la posición vertical de los puntos en función de la densidad de probabilidad de la curva de Gauss.

#### Creación de la Gráfica

- **curveData:** Es un arreglo de puntos utilizados para generar la curva de Gauss.
- **d3.area()** Área rellena bajo la curva de Gauss.
- Se crea un gradiente lineal utilizando el elemento **linearGradient** en el bloque _defs_. Este gradiente se utiliza para colorear el área bajo la curva de Gauss.

#### Interacción y Texto

- **averageLine:** Línea vertical que muestra la posición del _promedio_ de los puntajes en la distribución.
- **maxLine:** Línea vertical que muestra la posición del puntaje _máximo_ en la distribución.
- **Marcadores:** Permiten agregar elementos decorativos en los extremos de la línea. En este caso, se utiliza el marcador de flecha (#arrow) en el extremo superior de la línea y el de circulo (#circle) en el inferior. El marcador se define previamente en el bloque _defs_ y está configurado para tener una forma especifica.

---

## Referencias

Si deseas aprender más sobre D3.js te recomiendo consultar la documentación oficial en el siguiente enlace: https://d3js.org/.

Nota: Este archivo README.md proporciona una descripción general del contenido del repositorio y cómo utilizar las plantillas de gráficas. Para obtener información detallada sobre cada gráfica individual, consulta el contenido de los archivos HTML correspondientes.
