// Inicializar el mapa con una vista central (setview) y un zoom (3)
var map = L.map('map').setView([-34.852121, -58.355234], 12, );
//Agregar mapa base de IGN
var ign_clasico = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
    attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>',
    minZoom: 10,
    maxZoom: 18,
   }).addTo(map);


var esri_sat = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
    attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="https://www.google.com/maps" target="_blank">www.google.com/map</a>',
    minZoom: 3,
    maxZoom: 18
}); 

//Estilo de estaciones de trenes

function createCustomIcon (feature, latlng) {
	let myIcon = L.icon({
	  iconUrl: 'https://descubriurbana.ar/wp-content/uploads/2023/09/Diseno-sin-titulo-7.png',
	  iconSize:     [20, 20], // width and height of the image in pixels
	  shadowSize:   [35, 20], // width, height of optional shadow image
	  iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
	  shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
	  popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	})
	return L.marker(latlng, { icon: myIcon })
  }
  
 
// ZOOM A MARCADOR
var xxy = function(e){
    var coord = e.latlng.toString().split(',');
    var lat = coord[0].split('(');
    var lng = coord[1].split(')');
    console.log("You clicked the map at latitude: " + lat[1] + " and longitude:" + lng[0]);
    map.flyTo([lat[1], lng[0]], 16, {animate: true,duration: 2 });}

var azul = L.icon
		({
		iconUrl: 'https://descubriurbana.ar/wp-content/uploads/2023/09/Diseno-sin-titulo-7.png',
		shadowUrl: '',
		iconSize: [30, 30], //recomendado
		iconAnchor: [5, 10], //la itad e igual
		popupAnchor: [0, -10],
		//shadowSize: [50, 50] // igual a icono
		});



	var BURZAPO = L.marker([-34.8333125, -58.40168749], {icon: azul},13).bindPopup("<strong>Burzapo<strong>" + "<br/>" + "Direccion: 25 de Mayo 1208,Ministro Rivadavia" + "<br/>" + "<br/>" +"INSTAGRAM: @ BURZAPOSKATESHOP ").on('click', xxy);
	var SKATEPARK_GLEW = L.marker([-34.88306, -58.38406], {icon: azul},13).bindPopup("<strong>Skatepark Glew<strong>" + "<br/>" + "Direccion: Jorge Newbery y Paz" + "<br/>" + "<br/>" +"INSTAGRAM: @skatepark_glew ").on('click', xxy);
	var SKATEPARK_ELPLAYON = L.marker([-34.82268, -58.39143], {icon: azul},13).bindPopup("<strong>Skatepark El Playon<strong>" + "<br/>" + "Direccion: Pellegrini y 9 de Julio, Burzaco").on('click', xxy);
	var SKATEPARK_CLAYPOLE = L.marker([-34.80056, -58.33956], {icon: azul},13).bindPopup("<strong>Skatepark Claypole<strong>" + "<br/>" + "Direccion: Av. 17 de ocubre 442, Claypole").on('click', xxy);	
	var ESCUELA_DE_CALISTENIA_ALMIRANTE_BROWN = L.marker([-34.84268, -58.37206], {icon: azul},13).bindPopup("<strong>Escuela de Calistenia Brown<strong>" + "<br/>" + "Direccion: 25 de Mayo y Camila Quiroga" + "<br/>" +"INSTAGRAM: @ INSTITUTODELDEPORTEALTEBROWN").on('click', xxy);
	var CIRCUITO_DE_CALISTENIA_POLIDEPORTIVO_ALMIRANTE_BROWN= L.marker([-34.84268, -58.37206], {icon: azul},13).bindPopup("<strong>Circuito de Calistenia Brown<strong>" + "<br/>" + "Direccion: 25 de Mayo y Camila Quiroga" +"<br/>" + "INSTAGRAM: @ INSTITUTODELDEPORTEALTEBROWN").on('click', xxy);
	var CIRCUITODECALISTENIAPLAZAPUERTOARGENTINO = L.marker([-34.81656, -58.41793], {icon: azul},13).bindPopup("<strong>CIRCUITO DE CALISTENIA PLAZA PUERTO ARGENTINO<strong>" + "<br/>" + "Direccion: PEDRO ECHAGÜE 299").on('click', xxy);
	var CIRCUITO_CALISTENIA_MANZANA_1 = L.marker([-34.81856, -58.35318], {icon: azul},13).bindPopup("<strong>CIRCUITO CALISTENIA MANZANA 1 <strong>" + "<br/>" + "Direccion: AV. MONTEVERDE Y FIGUEROA").on('click', xxy);
	var CIRCUITO_CALISTENIA_LONGCHAMPS= L.marker([-34.86118, -58.38743], {icon: azul},13).bindPopup("<strong>CIRCUITO CALISTENIA LONGCHAMPS<strong>" + "<br/>" + "Direccion: AV. LA AVIACIÓN 889").on('click', xxy);
	var ENTER_CLUB= L.marker([-34.79931, -58.39206], {icon: azul},13).bindPopup("<strong>ENTER CLUB<strong>" + "<br/>" + "Direccion: SPIRO 1022").on('click', xxy);
	var EL_TIO_BIZARRO= L.marker([-34.82581, -58.39031], {icon: azul},13).bindPopup("<strong>EL TIO BIZARRO<strong>" + "<br/>" + "Direccion: CARLOS PELLEGRINI 800").on('click', xxy);
	var EL_AMPARO= L.marker([-34.82581, -58.39031], {icon: azul},13).bindPopup("<strong>EL AMPARO<strong>" + "<br/>" + "Direccion: CARLOS PELLEGRINI 788").on('click', xxy);
	var HUELGABAR= L.marker([-34.79643, -58.39031], {icon: azul},13).bindPopup("<strong>HUELGA BAR<strong>" + "<br/>" + "Direccion: BARTOLOMÉ MITRE 1299" + "<br/>" +"INSTAGRAM: @HUELGABAR").on('click', xxy);
	var THEHOUSEBAR= L.marker([-34.79793, -58.38768], {icon: azul},13).bindPopup("<strong> THE HOUSE BAR  <strong>" + "<br/>" + "Direccion: BARTOLOMÉ CERRETTI 831" + "<br/>" +"IINSTAGRAM: @ THEHOUSEBARFOOD").on('click', xxy);
	var GIBSONBAR= L.marker([-34.79681, -58.39143], {icon: azul},13).bindPopup("<strong>  GIBSON BAR    <strong>" + "<br/>" + "Direccion: BENIGNO MACÍAS 589 " +"<br/>" + "INSTAGRAM: @ GIBSONBAR_ADROGUE").on('click', xxy);
	var MEDOBAR= L.marker([-34.79993, -58.39006], {icon: azul},13).bindPopup("<strong> MEDO BAR <strong>" + "<br/>" + "Direccion: PELLERANO 775").on('click', xxy);
	var MOEBIUSBAR= L.marker([-34.79681, -58.39143], {icon: azul},13).bindPopup("<strong> MOEBIUS BAR  <strong>" + "<br/>" + "Direccion: JUAN JOSÉ CASTELLI 1003" +"<br/>" + "INSTAGRAM: @ MOEBIUSBAR").on('click', xxy);
	var MOCCA= L.marker([-34.79818, -58.38531], {icon: azul},13).bindPopup("<strong>  MOCCA  <strong>" + "<br/>" + "Direccion: PLAZA ALMIRANTE BROWN 303" +"<br/>" + "INSTAGRAM: @ MOCCACOFFEEBAR").on('click', xxy);
	var THEMITRE= L.marker([-34.79731, -58.39181], {icon: azul},13).bindPopup("<strong>   THE MITRE  <strong>" + "<br/>" + "Direccion: BARTOLOMÉ MITRE 1171" + "<br/>" +"INSTAGRAM: @ _THEMITRE").on('click', xxy);
	var YUNGA= L.marker([-34.79831, -58.39093], {icon: azul},13).bindPopup("<strong>    YUNGA   <strong>" + "<br/>" + "Direccion: ESTEBAN ADROGUÉ 1151" +"<br/>" + "IINSTAGRAM: @ YUNGABAR").on('click', xxy);
	var LACOLORADA= L.marker([-34.79706, -58.39106], {icon: azul},13).bindPopup("<strong>     LA COLORADA  <strong>" + "<br/>" + "Direccion: BARTOLOMÉ MITRE 1230 " + "<br/>" +"INSTAGRAM: @ LACOLORADACLUB").on('click', xxy);
	var DEBARY  = L.marker([-34.80118, -58.38843], {icon: azul},13).bindPopup("<strong>  DEBARY  <strong>" + "<br/>" + "Direccion: V ESPORA 919").on('click', xxy);
	var EL_BUFET  = L.marker([-34.79868, -58.39143], {icon: azul},13).bindPopup("<strong> EL BUFET  <strong>" + "<br/>" + "Direccion: SPIRO 1093 " +"<br/>" + "INSTAGRAM: @ ELBUFETBAR").on('click', xxy);
	var ROX_CLUB = L.marker([-34.79906, -58.39218], {icon: azul},13).bindPopup("<strong> ROX CLUB <strong>" + "<br/>" + "Direccion: SPIRO 1051" + "<br/>" +"INSTAGRAM: @ROXCLUB.BA").on('click', xxy);
	var EL_PASAJE  = L.marker([-34.79656, -58.39406], {icon: azul},13).bindPopup("<strong> EL PASAJE  <strong>" + "<br/>" + "Direccion: PASAJE ESTRADA 435" + "<br/>" +"INSTAGRAM: @ ELPASAJE.BAR").on('click', xxy);
	var BARRA_VIP  = L.marker([-34.79906, -58.39131], {icon: azul},13).bindPopup("<strong> BARRA VIP  <strong>" + "<br/>" + "Direccion: SPIRO 1075").on('click', xxy);
	var LA_ESTACION_BUENA_BIRRA  = L.marker([-34.79706, -58.38931], {icon: azul},13).bindPopup("<strong> LA ESTACIÓN DE LA BUENA BIRRA  <strong>" + "<br/>" + "Direccion: BARTOLOMÉ MITRE 1230 " +"<br/>" + "INSTAGRAM: @ LAESTACIONDELABUENABIRRA").on('click', xxy);
	var EL_RINCON  = L.marker([-34.79593, -58.38931], {icon: azul},13).bindPopup("<strong> EL RINCÓN  <strong>" + "<br/>" + "Direccion: MITRE E INT. FERRARI" + "<br/>" +"INSTAGRAM: @ RINCONCERVECERIA").on('click', xxy);
	var LOCOS_BIRRA  = L.marker([-34.79731, -58.39031], {icon: azul},13).bindPopup("<strong>  LOCOS POR LA BIRRA  <strong>" + "<br/>" + "Direccion: DIAGONAL ALMIRANTE BROWN 1272 " +"<br/>" + "INSTAGRAM: @ LOCOSPORLABIRRA.ADROGUE").on('click', xxy);
	var DEWEY_BREWING_CO = L.marker([-34.79756, -58.38606], {icon: azul},13).bindPopup("<strong> DEWEY BREWING CO <strong>" + "<br/>" + "Direccion: DIAGONAL ALMIRANTE BROWN 1571 " +"<br/>" + "INSTAGRAM: @ CERVEZADEWEY").on('click', xxy);
	var BAUM = L.marker([-34.79743, -58.39143], {icon: azul},13).bindPopup("<strong>  BAUM ADROGUÉ  <strong>" + "<br/>" + "Direccion: BARTOLOMÉ MITRE 1184 " + "<br/>" +"INSTAGRAM: @ BAUMADROGUE").on('click', xxy);
	var OLTACK  = L.marker([-34.80193, -58.39456], {icon: azul},13).bindPopup("<strong>  ÖL TACK   <strong>" + "<br/>" + "Direccion: CORDERO 759" + "<br/>" +"INSTAGRAM: @ OL.TACKCERVECERIA").on('click', xxy);
	var VANDONI  = L.marker([-34.80606, -58.38568], {icon: azul},13).bindPopup("<strong>  VANDONI  <strong>" + "<br/>" + "Direccion: JOSÉ MURATURE 1135").on('click', xxy);
	var HASKEN  = L.marker([-34.79956, -58.39593], {icon: azul},13).bindPopup("<strong> HASKEN  <strong>" + "<br/>" + "Direccion: SEGUÍ 765" + "<br/>" +"INSTAGRAM: @ HASKENCERVECERIA").on('click', xxy);
	var GUERNICA_BAR  = L.marker([-34.79893, -58.39131], {icon: azul},13).bindPopup("<strong>  GUERNICA BAR  <strong>" + "<br/>" + "Direccion: PELLERANO 706" + "<br/>" +"INSTAGRAM: @ GUERNICABAR").on('click', xxy);
	var SOUTH_SIDE_OF_BEER  = L.marker([-34.79893, -58.39268], {icon: azul},13).bindPopup("<strong> SOUTH SIDE OF BEER  <strong>" + "<br/>" + "SDireccion: OMELLERA 657 " + "<br/>" +"INSTAGRAM: @ SOUTHSIDEOFBEER").on('click', xxy);
	var DE_LA_BARRA = L.marker([-34.82593, -58.39718], {icon: azul},13).bindPopup("<strong> DE LA BARRA <strong>" + "<br/>" + "Direccion: HIPÓLITO YRIGOYEN 14770 " + "<br/>" +"INSTAGRAM: @ DELABARRACERVECERIA").on('click', xxy);
	var CERVECERIA_ALMIRANTE_BROWN  = L.marker([-34.82468, -58.39718], {icon: azul},13).bindPopup("<strong> CERVECERÍA ALMIRANTE BROWN  <strong>" + "<br/>" + "Direccion: HIPÓLITO YRIGOYEN 14687" + "<br/>" +"INSTAGRAM: @ ALTEBROWNCERVECERIA").on('click', xxy);
	var LA_ESQUINA_DE_LA_CERVEZA  = L.marker([-34.82856, -58.39418], {icon: azul},13).bindPopup("<strong>  LA ESQUINA DE LA CERVEZA <strong>" + "<br/>" + "Direccion: ALSINA 595" + "<br/>" +"INSTAGRAM: @ LAESQUINADELACERVEZA").on('click', xxy);
	var DIE_KUNST_1860    = L.marker([-34.83518, -58.37893], {icon: azul},13).bindPopup("<strong> DIE KUNST 1860  <strong>" + "<br/>" + "Direccion: HUGO DEL CARRIL 333" +"<br/>" + "INSTAGRAM: @ DIEKUNST1860_CERVECERIA").on('click', xxy);
	var ALMIRANTE_CERVEZA   = L.marker([-34.78781, -58.37393], {icon: azul},13).bindPopup("<strong> ALMIRANTE DÖNN CERVEZA  <strong>" + "<br/>" + "Direccion: BARTOLOMÉ MITRE 2680" + "<br/>" +"INSTAGRAM: @ ALMIRANTEDONN").on('click', xxy);
	var EL_CLASICO_DE_QUILMES   = L.marker([-34.80831, -58.40106], {icon: azul},13).bindPopup("<strong> EL CLÁSICO DE QUILMES  <strong>" + "<br/>" + "Direccion: AV HIPÓLITO YRIGOYEN 13298").on('click', xxy);
	var BIRRACO  = L.marker([-34.82531, -58.39368], {icon: azul},13).bindPopup("<strong> BIRRACO  <strong>" + "<br/>" + "Direccion: DR. MANUEL QUINTANA 636 " + "<br/>" +"INSTAGRAM: @ BIRRACOBEER").on('click', xxy);
	var LADRAN_SANCHO  = L.marker([-34.86081, -58.38443], {icon: azul},13).bindPopup("<strong> LADRAN SANCHO  <strong>" + "<br/>" + "Direccion: CARLOS DIEHL 1263" + "<br/>" +"INSTAGRAM: @ CERVEZALADRANSANCHO").on('click', xxy);
	var LONGBEER  = L.marker([-34.85968, -58.39018], {icon: azul},13).bindPopup("<strong>  LONGBEER  <strong>" + "<br/>" + "Direccion: MANUEL BELGRANO 1621" + "<br/>" +"INSTAGRAM: @ LONGBEERTAKEAWAY").on('click', xxy);
	var EL_VIEJO_CINE  = L.marker([-34.86006, -58.38981], {icon: azul},13).bindPopup("<strong> EL VIEJO CINE  <strong>" + "<br/>" + "Direccion: AV. HIPÓLITO YRIGOYEN 18335" +"<br/>" + "INSTAGRAM: @ ELVIEJOCINE.CERVECERIA").on('click', xxy);
	var LA_ZORRA_PUB = L.marker([-34.79906, -58.39218], {icon: azul},13).bindPopup("<strong> LA ZORRA PUB <strong>" + "<br/>" + "Direccion: SPIRO 1051 " +"<br/>" + "INSTAGRAM: @ LACOLORADACLUB").on('click', xxy);
	var NEFFER  = L.marker([-34.79356, -58.33656], {icon: azul},13).bindPopup("<strong> NEFFER  <strong>" + "<br/>" + "Direccion: PEDRO CORVERA 640").on('click', xxy);
	var BEER_HOUSE  = L.marker([-34.79743, -58.39156], {icon: azul},13).bindPopup("<strong> BEER HOUSE  <strong>" + "<br/>" + "Direccion: MITRE Y MACIAS" + "<br/>" +"INSTAGRAM: @ BEERHOUSE1973").on('click', xxy);
	var KINGSTON_BEER  = L.marker([-34.79981, -58.33718], {icon: azul},13).bindPopup("<strong>   KINGSTON BEER   <strong>" + "<br/>" + "Direccion: LOBATO 751" + "<br/>" +"INSTAGRAM: @ KINGSTONBEER").on('click', xxy);
	var GLEWERS  = L.marker([-34.88856, -58.38743], {icon: azul},13).bindPopup("<strong> GLEWERS<strong>" + "<br/>" + "Direccion: MARCOS SASTRE 955" + "<br/>" +"INSTAGRAM: @ GLEWERSCERVEZA").on('click', xxy);
	var LA_ESQUINA_BEER  = L.marker([-34.88531, -58.38306], {icon: azul},13).bindPopup("<strong> LA ESQUINA BEER  <strong>" + "<br/>" + "Direccion: JORGE NEWBERY 2898" + "<br/>" +"INSTAGRAM: @ FREENCHRESTOBAR").on('click', xxy);
	var BROOKLYN = L.marker([-34.86093, -58.38968], {icon: azul},13).bindPopup("<strong>  BROOKLYN BEER & COFFEE   <strong>" + "<br/>" + "Direccion: AV HIPÓLITO YRIGOYEN 18391 " + "<br/>" +"INSTAGRAM: @ BROOKLYN_BEER_COFFEE").on('click', xxy);
	var  ESCUELA_DE_SKATE_GLEW   = L.marker([-34.88306, -58.38406], {icon: azul},13).bindPopup("<strong> ESCUELA DE SKATE  GLEW <strong>" + "<br/>" + "Direccion: JORGE NEWBERY Y PAZ" + "<br/>" +"INSTAGRAM: @ ESCUELITASKATEGLEW").on('click', xxy);
	var  ESCUELA_DE_SKATE_CLAYPOLE  = L.marker([-34.80056, -58.33956], {icon: azul},13).bindPopup("<strong>ESCUELA DE SKATE  CLAYPOLE   <strong>" + "<br/>" + "Direccion: AV 17 DE OCTUBRE 422" + "<br/>" +"INSTAGRAM: @ ESCUELADESKATE.CLAYPOLE").on('click', xxy);
	var ESCUELA_DE_SKATE_BURZACO  = L.marker([-34.82268, -58.39143], {icon: azul},13).bindPopup("<strong>ESCUELA DE SKATE  BURZACO  <strong>" + "<br/>" + "Direccion: CARLOS PELLEGRINI Y 9 DE JULIO "  + "<br/>" +"INSTAGRAM: @ PLAYON_SKATEPARK_DIY").on('click', xxy);
	var STUDIOS_1911   = L.marker([-34.86681, -58.38993], {icon: azul},13).bindPopup("<strong> 1911 STUDIOS   <strong>" + "<br/>" + "Dirección: LORENZINI 1911 " + "<br/>" + "INSTAGRAM: @ 1911STUDIOS").on('click', xxy);
	var BOCEPHUS_PRODUCCIONES  = L.marker([-34.86118, -58.39343], {icon: azul},13).bindPopup("<strong>  BOCEPHUS PRODUCCIONES   <strong>" + "<br/>" + "Dirección: JUAN DE GARAY 699 " + "<br/>" + "INSTAGRAM: @ CLAUDIO_PINEIRO_BOCEPHUS").on('click', xxy);
	var LIBRAH_SALA_DE_ENSAYO  = L.marker([-34.81993, -58.42268], {icon: azul},13).bindPopup("<strong>  LIBRAH SALA DE ENSAYO   <strong>" + "<br/>" + "Dirección: INT. ALVARO PINTOS 428 " + "<br/>" + "INSTAGRAM: @ LIBRAH.RECORDS").on('click', xxy);
	var REDO    = L.marker([-34.78381, -58.36718], {icon: azul},13).bindPopup("<strong> REDO   <strong>" + "<br/>" + "Dirección: BARTOLOMÉ MITRE 3199" + "<br/>" + "INSTAGRAM: @ CLAUDIO_PINEIRO_BOCEPHUS").on('click', xxy);
	var DFH_RECORDS  = L.marker([-34.80118, -58.38206], {icon: azul},13).bindPopup("<strong>  DFH RECORDS     <strong>" + "<br/>" + "Dirección: JORGE 1581 " + "<br/>" + "INSTAGRAM: @ DFHSALAESTUDIOADROGUE").on('click', xxy);
	var SALA_ALSINA  = L.marker([-34.82831, -58.39231], {icon: azul},13).bindPopup("<strong> SALA ALSINA  <strong>" + "<br/>" + "Dirección: ADOLFO ALSINA 728" + "<br/>" + "INSTAGRAM: @ SALAALSINA").on('click', xxy);
	var ESTUDIO_MAD  = L.marker([-34.82681, -58.39418], {icon: azul},13).bindPopup("<strong> ESTUDIO MAD  <strong>" + "<br/>" + "Dirección:25 DE MAYO 742" + "<br/>" + "INSTAGRAM: @ ESTUDIO.MAD").on('click', xxy);
	var SALA_HELLFISH  = L.marker([], {icon: azul},13).bindPopup("<strong> SALA HELLFISH  <strong>" + "<br/>" + "Dirección: JUAN LARREA 2375").on('click', xxy);
	var NSR = L.marker([-34.80406, -58.38081], {icon: azul},13).bindPopup("<strong>  BOCEPHUS PRODUCCIONES   <strong>" + "<br/>" + "Dirección: ERASMO OBLIGADO 1451 " ).on('click', xxy);
	var ESTUDIO_QUINTO  = L.marker([-34.79118, -58.38868], {icon: azul},13).bindPopup("<strong>  ESTUDIO QUINTO    <strong>" + "<br/>" + "Dirección: AV. ESPORA 313").on('click', xxy);
	var LA_BRISA  = L.marker([-34.78918, -58.38731], {icon: azul},13).bindPopup("<strong>  LA BRISA  <strong>" + "<br/>" + "Dirección:CONSCRIPTO BERNARDI 1820" + "<br/>" + "INSTAGRAM: @ CLAUDIO_PINEIRO_BOCEPHUS").on('click', xxy);
	var UNPLUGGED_ROCK_HOUSE  = L.marker([-34.79468, -58.38331], {icon: azul},13).bindPopup("<strong> UNPLUGGED ROCK HOUSE    <strong>" + "<br/>" + "Dirección: PLAZA BYNNON 44 " + "<br/>" + "INSTAGRAM: @ UNPLUGGEDROCKHOUSE").on('click', xxy);
	var ARBOL_CAIDO  = L.marker([-34.80331, -58.38568], {icon: azul},13).bindPopup("<strong>  ÁRBOL CAÍDO  <strong>" + "<br/>" + "Dirección: DIAGONAL TOLL 1245 " + "<br/>" + "INSTAGRAM: @ ARBOLCAIDO.SALAS").on('click', xxy);
	var VULKANO  = L.marker([-34.79756, -58.38793], {icon: azul},13).bindPopup("<strong> VULKANO  <strong>" + "<br/>" + "Dirección:PLAZA ESTEBAN ADROGUÉ 48 " + "<br/>" + "INSTAGRAM: @ VULKANOARGENTINA").on('click', xxy);
	var EXIT_ACTION   = L.marker([-34.80031, -58.40793], {icon: azul},13).bindPopup("<strong> EXIT ACTION  <strong>" + "<br/>" + "Dirección: HIPÓLITO YRIGOYEN 12485 " + "<br/>" + "INSTAGRAM: @ EXITACTIONSPORT").on('click', xxy);
	var LOCALS_ONLY  = L.marker([-34.80831, -58.40131], {icon: azul},13).bindPopup("<strong> LOCALS ONLY  <strong>" + "<br/>" + "Dirección: AV. HIPÓLITO YRIGOYEN 13200 " + "<br/>" + "INSTAGRAM: @ LOCALSONLY_ADROGUE").on('click', xxy);
	var ADROGROW  = L.marker([-34.79918, -58.39143], {icon: azul},13).bindPopup("<strong> ADROGROW  <strong>" + "<br/>" + "Dirección: PELLERANO 730" + "INSTAGRAM: @ ADROGROW").on('click', xxy);
	var BURZAKOGROWSHOP = L.marker([-34.82781, -58.38893], {icon: azul},13).bindPopup("<strong> BURZAKO GROWSHOP <strong>" + "<br/>" + "Dirección: ALSINA 1035" + "INSTAGRAM: @ BURZAKOGROWSHOP").on('click', xxy);
	var UNDERGROUNDGROWSHOP    = L.marker([-34.79518, -58.36293], {icon: azul},13).bindPopup("<strong>  UNDERGROUND GROWSHOP   <strong>" + "<br/>" + "Dirección: AV SAN MARTÍN 2936"  + "<br/>"+"INSTAGRAM: @ UNDERGROUND.GROW").on('click', xxy);
	var LABUENAVIDA    = L.marker([-34.79056, -58.37593], {icon: azul},13).bindPopup("<strong> LA BUENA VIDA  <strong>" + "<br/>" + "Dirección: BYNNON 2458"  + "<br/>"+"INSTAGRAM: @ LABUENAVIDAGROW").on('click', xxy);
	var LASBRUJAS  = L.marker([-34.81718, -58.37418], {icon: azul},13).bindPopup("<strong> LAS BRUJAS  <strong>" + "<br/>" + "Dirección: JOAQUIN V. GONZALEZ 2032"  + "<br/>"+"INSTAGRAM: @ LAS_BRUJAS_GROW").on('click', xxy);
	var HH   = L.marker([-34.82406, -58.39431], {icon: azul},13).bindPopup("<strong> HH GROW   <strong>" + "<br/>" + "Dirección: HUMBERTO PRIMO 605"  + "<br/>").on('click', xxy);
	var HALABALUSA= L.marker([-34.80081, -58.34168], {icon: azul},13).bindPopup("<strong>PLAZA HALABALUSA UNDERGROUND<strong>" + "<br/>" + "Dirección:REMEDIOS DE ESCALADA DE SAN MARTIN Y JUAN JOSÉ PASO").on('click', xxy);
	
	var ROSANEGRA= L.marker([-34.79881, -58.39393], {icon: azul},13).bindPopup("<strong>ROSA NEGRA<strong>" + "<br/>" + "Dirección: BARTOLOMÉ MITRE 954 LOC. 5" + "<br/>" + "INSTAGRAM: @ ROSANEGRA_TATTOOSHOP").on('click', xxy);
	var tatoo1950 = L.marker([-34.79893, -58.39156], {icon: azul},13).bindPopup("<strong>1950 TATTOO<strong>" + "<br/>" + "Dirección: SPIRO 1075" + "<br/>" + "INSTAGRAM: @ 1950TATTOOSHOP").on('click', xxy);
	var SHADETATTOO = L.marker([-34.79756, -58.35981], {icon: azul},13).bindPopup("<strong>SHADE TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES" + "<br/>" + "INSTAGRAM: @ SHADETATTOO").on('click', xxy);
	var RAVENTATTOO = L.marker([-34.79431, -58.35993], {icon: azul},13).bindPopup("<strong>RAVEN TATTOO<strong>" + "<br/>" + "Dirección: PRESIDENTE ARTURO ILLIA 3127" + "<br/>" + "INSTAGRAM: @ THERAVEN.TATTOO").on('click', xxy);
	var VIEJOKARMA = L.marker([-34.81893, -58.34918], {icon: azul},13).bindPopup("<strong>SHADE TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES" + "<br/>" + "INSTAGRAM: @ SHADETATTOO").on('click', xxy);
	var PABLOARAGONTATUAJES= L.marker([-34.80393, -58.35731], {icon: azul},13).bindPopup("<strong>PABLO ARAGON TATUAJES<strong>" + "<br/>" + "Dirección: OLEGARIO VICTOR ANDRADE 3415" + "<br/>" + "INSTAGRAM: @ PABLOARAGONTATUAJES").on('click', xxy);
	var ROOTS= L.marker([-34.79518, -58.35906], {icon: azul},13).bindPopup("<strong>ROOTS TATTOO<strong>" + "<br/>" + "Dirección:BERNARDINO RIVADAVIA 3116" + "<br/>" + "INSTAGRAM: @ ROOTSTATTOO.STUDIO").on('click', xxy);
	var LOVEKILLS = L.marker([-34.80818, -58.39606], {icon: azul},13).bindPopup("<strong>LOVE KILLS <strong>" + "<br/>" + "Dirección:HIPÓLITO BOUCHARD 371" + "<br/>" + "INSTAGRAM: @ LOVEKILLSTATTOO").on('click', xxy);
	var TASTETHEPAINT= L.marker([-34.80168, -58.39481], {icon: azul},13).bindPopup("<strong>TASTE THE PAINT<strong>" + "<br/>" + "Dirección:CORDERO 739" + "<br/>" + "INSTAGRAM: @ GONZALO_TASTETHE PAINT").on('click', xxy);
	var ALBURQUERQUE= L.marker([-34.79356, -58.38906], {icon: azul},13).bindPopup("<strong>ALBURQUERQUE<strong>" + "<br/>" + "Dirección: AV ESPORA 428" + "<br/>" + "INSTAGRAM: @ ALBURQUERQUESTUDIO").on('click', xxy);
	var DEBBIETATTOO= L.marker([-34.81393, -58.36106], {icon: azul},13).bindPopup("<strong>DEBBIE TATTOO<strong>" + "<br/>" + "Dirección:SAN FRANCISCO 706").on('click', xxy);
	var REDHANDER= L.marker([-34.79893, -58.39393], {icon: azul},13).bindPopup("<strong>RED HANDER<strong>" + "<br/>" + "Dirección:BARTOLOMÉ MITRE 954 LOC. 7" + "<br/>" + "INSTAGRAM: @ REDHANDER.TATTOO").on('click', xxy);
	var LUKSTATTOO= L.marker([-34.78181, -58.34943], {icon: azul},13).bindPopup("<strong>LUKSTATTOO<strong>" + "<br/>" + "Dirección:PASAJE SAN JUAN 2223" + "<br/>" + "INSTAGRAM: @ LUKS_TATTOOS").on('click', xxy);
	var GRIZZLY= L.marker([-34.79831, -58.39093], {icon: azul},13).bindPopup("<strong>GRIZZLY TATTOO<strong>" + "<br/>" + "Dirección:ESTEBAN ADROGUÉ 1151" + "<br/>" + "INSTAGRAM: @ ANALIAGANGALE").on('click', xxy);
	var LANEGRA =L.marker([-34.79243, -58.37656], {icon: azul},13).bindPopup("<strong>LA NEGRA<strong>" + "<br/>" + "Dirección:JULIO ARIN 939" + "<br/>" + "INSTAGRAM: @ LANEGRAINSUMOSTATTOOO").on('click', xxy);
	var FABITATTOOPIERCING =L.marker([-34.77481, -58.35093], {icon: azul},13).bindPopup("<strong>FABI TATTOO PIERCING<strong>" + "<br/>" + "Dirección:SALTA 1609" + "<br/>" + "INSTAGRAM: @ FABIBOGADOTATTOO").on('click', xxy);
	var IVOTATTOOSTUDIO = L.marker([-34.81368, -58.33293], {icon: azul},13).bindPopup("<strong>SHADE TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES").on('click', xxy);
	var TRUEHATE = L.marker([-34.82268, -58.35143], {icon: azul},13).bindPopup("<strong>TRUE HATE <strong>" + "<br/>" + "Dirección:RÍO QUINTO Y FIGUEROA" + "<br/>" + "INSTAGRAM: @ SHADETATTOO").on('click', xxy);
	var BUENOSMUCHACHOS= L.marker([-34.82818, -58.39056], {icon: azul},13).bindPopup("<strong>BUENOS MUCHACHOS<strong>" + "<br/>" + "Dirección: ALSINA 840 / HIPÓLITO YRIGOYEN 18303 " + "<br/>" + "INSTAGRAM: @BUENOS.MUCHACHOS.BUR / @ BUENOS.MUCHACHOS.LONG").on('click', xxy);
	var SORRYMOM= L.marker([-34.85981, -58.38993], {icon: azul},13).bindPopup("<strong>SORRY MOM TATTOO<strong>" + "<br/>" + "Dirección:RAWSON 750 "+"<br/>" + "INSTAGRAM: @ SORRYMOMTATTOO2.0").on('click', xxy);
	var HOUSE= L.marker([-34.79131, -58.32468], {icon: azul},13).bindPopup("<strong>HOUSE OF ALAN TATTOO INK<strong>" + "<br/>" + "Dirección:PROVINCIA DE BUENOS AIRES 1274" + "<br/>" + "INSTAGRAM: @ TATTOOINKALAN").on('click', xxy);
	var NIKOCORTESE= L.marker([-34.86293, -58.38168], {icon: azul},13).bindPopup("<strong>NIKO CORTESE TATTOO<strong>" + "<br/>" + "Dirección:AV. 2 DE ABRIL 1817" + "<br/>" + "INSTAGRAM: @ NIKOCORTESETATTOO").on('click', xxy);
	var LUCASTATTOO = L.marker([-34.82468, -58.37281], {icon: azul},13).bindPopup("<strong>LUCAS TATTOO<strong>" + "<br/>" + "Dirección:CARLOS PELLEGRINI 974").on('click', xxy);
	var TATTUGO= L.marker([-34.82368, -58.39043], {icon: azul},13).bindPopup("<strong>TATTUGO INK STUDIO<strong>" + "<br/>" + "Dirección:ENRIQUE DE ROSAS 1161" + "<br/>" + "INSTAGRAM: @ TATTUGO_INK").on('click', xxy);
	var BUTTERFLY= L.marker([-34.83718, -58.36381], {icon: azul},13).bindPopup("<strong>BUTTERFLY TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES" + "<br/>" + "INSTAGRAM: @ BUTTERFLY_TATTO").on('click', xxy);
	var THEBIG= L.marker([-34.85206, -58.38968], {icon: azul},13).bindPopup("<strong>THE BIG FAMILY TATTOO<strong>" + "<br/>" + "Dirección:SAN MARTIN 1116").on('click', xxy);
	var BFL= L.marker([-34.86268, -58.38468], {icon: azul},13).bindPopup("<strong>BFL TATTO STUDIO<strong>" + "<br/>" + "Dirección:DR. RAÚL SCALABRINI ORTIZ 1724").on('click', xxy);
	var BANTIERREBARBERIA = L.marker([-34.87056, -58.38481], {icon: azul},13).bindPopup("<strong>SHADE TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES" + "<br/>" + "INSTAGRAM: @ BANTIERRE_BARBERIA_TATTOO").on('click', xxy);
	var IPANEMATATTOO= L.marker([-34.88806, -58.38268], {icon: azul},13).bindPopup("<strong>IPANEMA TATTOO<strong>" + "<br/>" + "Dirección: " + "<br/>" + "INSTAGRAM: @ IPANEMA.TATTOO").on('click', xxy);
	var BARBA= L.marker([-34.89018, -58.38618], {icon: azul},13).bindPopup("<strong>BARBA'S TATTOO<strong>" + "<br/>" + "Dirección:ÁNGEL DELLA VALLE 3598" + "<br/>" + "INSTAGRAM: @BARBASTATTOOS").on('click', xxy);
	var DARUMA= L.marker([-34.88868, -58.36543], {icon: azul},13).bindPopup("<strong>DARUMA TATTOO<strong>" + "<br/>" + "Dirección: HUMAHUACA 611" + "<br/>" + "INSTAGRAM: @ DARUMATRAD94").on('click', xxy);



	var baseMaps = [
			                { 
								groupName : "Mapas Base",
								expanded : true,
								layers    : {
									"Mapa Base": ign_clasico,
									"Satelital": esri_sat,
								
						
								}
					        },

                        ]

var overlays = [
							 {
								groupName : "Transporte publico",
								expanded : true,
								
								layers    : { 
									
									
			
								}	
                             },{
								groupName : "Tiendas especializadas",
								expanded : false,
								layers    : { 
									"BURZAPO": BURZAPO,
									" ÁRBOL CAÍDO  ": ARBOL_CAIDO  ,
									" VULKANO  ": VULKANO  ,
									" EXIT ACTION  ": EXIT_ACTION  ,
									" LOCALS ONLY  ": LOCALS_ONLY  ,
									
									
									
									
								}	
                             },
							 
                             {
								groupName : "Actividades al aire libre",
								expanded :false,
								layers    : { 
									"SKATEPARK GLEW": SKATEPARK_GLEW,
									"SKATEPARK BURZACO": SKATEPARK_ELPLAYON,
									"SKATEPARK CLAYPOLE": SKATEPARK_CLAYPOLE,
									"ESCUELA DE CALISTENIA ALMIRANTE BROWN": ESCUELA_DE_CALISTENIA_ALMIRANTE_BROWN,
									"CIRCUITO DE CALISTENIA POLIDEPORTIVO ALMIRANTE BROWN":CIRCUITO_DE_CALISTENIA_POLIDEPORTIVO_ALMIRANTE_BROWN,
									"CIRCUITO DE CALISTENIA PLAZA PUERTO ARGENTINO":CIRCUITODECALISTENIAPLAZAPUERTOARGENTINO,
									"CIRCUITO CALISTENIA MANZANA 1 ":CIRCUITO_CALISTENIA_MANZANA_1 ,
									"CIRCUITO CALISTENIA LONGCHAMPS":CIRCUITO_CALISTENIA_LONGCHAMPS,
									"ESCUELA DE SKATE  GLEW ":ESCUELA_DE_SKATE_GLEW ,
									"ESCUELA DE SKATE  CLAYPOLE ":ESCUELA_DE_SKATE_CLAYPOLE ,
									"ESCUELA DE SKATE  BURZACO  ":ESCUELA_DE_SKATE_BURZACO  ,
									"PLAZA HALABALUSSA": HALABALUSA,
								}	
                             },
							 {
								groupName : "Bares y Cervecerias",
								expanded : false,
								layers    : { 
									" LA COLORADA  ": LACOLORADA  ,
									"DEBARY": DEBARY,
									" EL BUFET  ": EL_BUFET  ,
									" ROX CLUB ": ROX_CLUB ,
									" EL PASAJE  ": EL_PASAJE  ,
									" BARRA VIP  ": BARRA_VIP  ,
									" LA ESTACIÓN DE LA BUENA BIRRA  ": LA_ESTACION_BUENA_BIRRA  ,
									" EL RINCÓN  ": EL_RINCON  ,
									" LOCOS POR LA BIRRA  ": LOCOS_BIRRA  ,
									" DEWEY BREWING CO ": DEWEY_BREWING_CO ,
									" BAUM ADROGUÉ  ": BAUM ,
									" ÖL TACK  ": OLTACK  ,
									" VANDONI  ": VANDONI  ,
									" HASKEN  ": HASKEN  ,
									" GUERNICA BAR  ": GUERNICA_BAR  ,
									" SOUTH SIDE OF BEER  ": SOUTH_SIDE_OF_BEER  ,
									" DE LA BARRA ": DE_LA_BARRA ,
									" CERVECERÍA ALMIRANTE BROWN  ": CERVECERIA_ALMIRANTE_BROWN  ,
									" LA ESQUINA DE LA CERVEZA ": LA_ESQUINA_DE_LA_CERVEZA ,
									" DIE KUNST 1860  ": DIE_KUNST_1860  ,
									" ALMIRANTE DÖNN CERVEZA  ": ALMIRANTE_CERVEZA  ,
									" EL CLÁSICO DE QUILMES  ": EL_CLASICO_DE_QUILMES  ,
									" BIRRACO  ": BIRRACO  ,
									" LADRAN SANCHO  ": LADRAN_SANCHO  ,
									" LONGBEER  ": LONGBEER  ,
									" EL VIEJO CINE  ": EL_VIEJO_CINE  ,
									" LA ZORRA PUB ": LA_ZORRA_PUB ,
									" NEFFER  ": NEFFER  ,
									" BEER HOUSE  ": BEER_HOUSE  ,
									" KINGSTON BEER  ": KINGSTON_BEER  ,
									" GLEWERS  ": GLEWERS  ,
									" LA ESQUINA BEER  ": LA_ESQUINA_BEER  ,
									" BROOKLYN BEER & COFFEE  ": BROOKLYN ,
									
									
									
								}	
                             },
							 {
								groupName : "Tatoos",
								expanded : false,
								layers    : { 
									"ROSANEGRA":ROSANEGRA,
									"1950":tatoo1950,
									"SHADE TATTOO":SHADETATTOO,
									"RAVEN TATTOO":RAVENTATTOO,
									"VIEJO KARMA TATTOO":VIEJOKARMA,
									"PABLO ARAGON TATUAJES":PABLOARAGONTATUAJES,
									"ROOTS":ROOTS,
									"LOVE KILLS ":LOVEKILLS ,
									"TASTE THE PAINT":TASTETHEPAINT,
									"ALBURQUERQUE":ALBURQUERQUE,
									"DEBBIE TATTOO":DEBBIETATTOO,
									"RED HANDER":REDHANDER,
									"LUKSTATTOO":LUKSTATTOO,
									"GRIZZLY":GRIZZLY,
									"LA NEGRA":LANEGRA,
									"FABI TATTOO PIERCING":FABITATTOOPIERCING,
									"IVO TATTOO STUDIO":IVOTATTOOSTUDIO,
									"TRUE HATE ":TRUEHATE ,
									"BUENOS MUCHACHOS":BUENOSMUCHACHOS,
									"SORRY MOM TATTOO":SORRYMOM,
									"HOUSE OF ALAN TATTOO INK":HOUSE,
									"NIKO CORTESE TATTOO":NIKOCORTESE,
									"LUCAS TATTOO":LUCASTATTOO,
									"TATTUGO INK STUDIO":TATTUGO,
									"BUTTERFLY":BUTTERFLY,
									"THE BIG FAMILY TATTOO":THEBIG,
									"BFL TATTO STUDIO":BFL,
									"BANTIERRE BARBERÍA & TATTOO":BANTIERREBARBERIA,
									"IPANEMA TATTOO":IPANEMATATTOO,
									"BARBA'S TATTOO":BARBA,
									"DARUMA":DARUMA,
									
									
									
								}	
                             },

							 {
								groupName : "Growshops",
								expanded : false,
								layers    : { 
									" ADROGROW  ": ADROGROW  ,
									" BURZAKO GROWSHOP ": BURZAKOGROWSHOP ,
									" UNDERGROUND GROWSHOP  ": UNDERGROUNDGROWSHOP  ,
									" LA BUENA VIDA  ": LABUENAVIDA  ,
									" LAS BRUJAS  ": LASBRUJAS  ,
									" HH GROW  ": HH ,
									
									
									
								}	
                             },

							 {
								groupName : "Salas de ensayo",
								expanded : false,
								layers    : { 
									" 1911 STUDIOS   ": STUDIOS_1911   ,
									" BOCEPHUS PRODUCCIONES ": BOCEPHUS_PRODUCCIONES ,
									" LIBRAH SALA DE ENSAYO  ": LIBRAH_SALA_DE_ENSAYO  ,
									" REDO  ": REDO  ,
									" DFH RECORDS  ": DFH_RECORDS  ,
									" SALA ALSINA  ": SALA_ALSINA  ,
									" ESTUDIO MAD  ": ESTUDIO_MAD  ,
									" SALA HELLFISH  ": SALA_HELLFISH  ,
									" NSR - NOLOGIA SOUND REC ESTUDIO  -  ": NSR ,
									" ESTUDIO QUINTO  ": ESTUDIO_QUINTO  ,
									" LA BRISA  ": LA_BRISA  ,
									" UNPLUGGED ROCK HOUSE  ": UNPLUGGED_ROCK_HOUSE  ,
									
									
									
								}	
                             },
                             ]

// configuracion de los estilos de capas


var options = {
				container_width 	: "300px",
				group_maxHeight     : "150px",
				//container_maxHeight : "350px", 
				exclusive       	: false,
				collapsed : true, 
				position: 'topright'
			};
		
var control = L.Control.styledLayerControl(baseMaps, overlays, options);
map.addControl(control);
map.scrollWheelZoom.disable();
