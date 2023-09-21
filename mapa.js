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
 
// ZOOM A MARCADOR
var xxy = function(e){
    var coord = e.latlng.toString().split(',');
    var lat = coord[0].split('(');
    var lng = coord[1].split(')');
    console.log("You clicked the map at latitude: " + lat[1] + " and longitude:" + lng[0]);
    map.flyTo([lat[1], lng[0]], 16, {animate: true,duration: 2 });}

	function crearIcono(varName, iconUrl) {
		window[varName] = L.icon({
			iconUrl: iconUrl,
			shadowUrl: '',
			iconSize: [20, 20], // Recomendado
			iconAnchor: [10, 20], // La mitad e igual
			popupAnchor: [0, -10],
			// shadowSize: [50, 50] // Igual a icono
		});
	}
	
	// Uso de la función para crear dos instancias de iconos
	crearIcono('cerve', 'https://descubriurbana.ar/wp-content/uploads/2023/09/16.png');
	crearIcono('pint', 'https://descubriurbana.ar/wp-content/uploads/2023/09/37.png');
	crearIcono('tienda', 'https://descubriurbana.ar/wp-content/uploads/2023/09/47.png');
	crearIcono('tatoo', 'https://descubriurbana.ar/wp-content/uploads/2023/09/52.png');
	crearIcono('punto', 'https://descubriurbana.ar/wp-content/uploads/2023/09/8.png');
	crearIcono('rec', 'https://descubriurbana.ar/wp-content/uploads/2023/09/7.png');
	crearIcono('grow', 'https://descubriurbana.ar/wp-content/uploads/2023/09/6.png');
	crearIcono('pint', 'https://descubriurbana.ar/wp-content/uploads/2023/09/37.png');
	


	var BURZAPO = L.marker([-34.8333125, -58.40168749], {icon: tienda},13).bindPopup("<strong>Burzapo<strong>" + "<br/>" + "Direccion: 25 de Mayo 1208,Ministro Rivadavia" + "<br/>" + "<br/>" +"Instagram: @burzaposkateshop"+ "<A HREF='https://www.instagram.com/burzaposkateshop/' target=_blank rel=noopener> Mas info... </A> ").on('click', xxy).addTo(map);
	var SKATEPARK_GLEW = L.marker([-34.88306, -58.38406], {icon: pint},13).bindPopup("<strong>Skatepark Glew<strong>" + "<br/>" + "Direccion: Jorge Newbery y Paz" + "<br/>" + "<br/>" +"Instagram: @skatepark_glew"+"<A HREF='https://www.instagram.com/skatepark_glew/'target=_blank> Mas info... </A> ").on('click', xxy).addTo(map);
	var SKATEPARK_ELPLAYON = L.marker([-34.82268, -58.39143], {icon: pint},13).bindPopup("<strong>Skatepark El Playon<strong>" + "<br/>" + "Direccion: Pellegrini y 9 de Julio, Burzaco").on('click', xxy).addTo(map);
	var SKATEPARK_CLAYPOLE = L.marker([-34.80056, -58.33956], {icon: pint},13).bindPopup("<strong>Skatepark Claypole<strong>" + "<br/>" + "Direccion: Av. 17 de ocubre 442, Claypole").on('click', xxy).addTo(map);	
	var ESCUELA_DE_CALISTENIA_ALMIRANTE_BROWN = L.marker([-34.84268, -58.37206], {icon: punto},13).bindPopup("<strong>Escuela de Calistenia Brown<strong>" + "<br/>" + "Direccion: 25 de Mayo y Camila Quiroga" + "<br/>" +"<A HREF='https://www.instagram.com/institutodeldeportealtebrown/'target=_blank> Mas info... </A> ").on('click', xxy).addTo(map);
	var CIRCUITO_DE_CALISTENIA_POLIDEPORTIVO_ALMIRANTE_BROWN= L.marker([-34.84268, -58.37206], {icon: punto},13).bindPopup("<strong>Circuito de Calistenia Brown<strong>" + "<br/>" + "Direccion: 25 de Mayo y Camila Quiroga" +"<br/>" + "Instagram @institutodeldeportealtebrown").on('click', xxy).addTo(map);
	var CIRCUITODECALISTENIAPLAZAPUERTOARGENTINO = L.marker([-34.81656, -58.41793], {icon: punto},13).bindPopup("<strong>Circuito de Calistenia Plaza Puerto Argentino<strong>" + "<br/>" + "Direccion: Pedro Echagüe 299").on('click', xxy).addTo(map);
	var CIRCUITO_CALISTENIA_MANZANA_1 = L.marker([-34.81856, -58.35318], {icon: punto},13).bindPopup("<strong>Circuito Calistenia Manzana 1 <strong>" + "<br/>" + "Direccion: Av. Monteverde y Figueroa").on('click', xxy).addTo(map);
	var CIRCUITO_CALISTENIA_LONGCHAMPS= L.marker([-34.86118, -58.38743], {icon: punto},13).bindPopup("<strong>Circuito Calistenia Longchamps<strong>" + "<br/>" + "Direccion: Av. La Aviacion 889").on('click', xxy).addTo(map);
	var ENTER_CLUB= L.marker([-34.79931, -58.39206], {icon: cerve},13).bindPopup("<strong>Enter Club <strong>" + "<br/>" + "Direccion: Spiro 1022" + "<br/>" +"<A HREF='https://www.instagram.com/enterclubadrogue/'target=_blank> Mas info... </A> ").on('click', xxy).addTo(map);
	var EL_TIO_BIZARRO= L.marker([-34.82581, -58.39031], {icon: cerve},13).bindPopup("<strong>El Tio Bizarro<strong>" + "<br/>" + "Direccion:Carlos Pellegrini 800").on('click', xxy);
	var EL_AMPARO= L.marker([-34.82581, -58.39031], {icon: cerve},13).bindPopup("<strong>El Amparo<strong>" + "<br/>" + "Direccion: Carlos Pellegrini 788"+"<br/>" +"<A HREF='https://www.instagram.com/elamparobar/'target=_blank> Mas info... </A> ").on('click', xxy).addTo(map);
	var HUELGABAR= L.marker([-34.79643, -58.39031], {icon: cerve},13).bindPopup("<strong>Huelga Bar<strong>" + "<br/>" + "Direccion: Bartolomé Mitre 1299" + "<br/>" +"<A HREF='https://www.instagram.com/huelgabar/'target=_blank> Mas info... </A> ").on('click', xxy).addTo(map);
	var THEHOUSEBAR= L.marker([-34.79793, -58.38768], {icon: cerve},13).bindPopup("<strong>The House Bar<strong>" + "<br/>" + "Direccion: Cerreti 831" + "<br/>" +"<A HREF='https://www.instagram.com/thehousebar_bar/'target=_blank> Mas info... </A> ").on('click', xxy).addTo(map);
	var GIBSONBAR= L.marker([-34.79681, -58.39143], {icon: cerve},13).bindPopup("<strong>Gibson Bar<strong>" + "<br/>" + "Direccion: Macias 589 " +"<br/>" +"<A HREF='https://www.instagram.com/gibsonbar_adrogue/'target=_blank> Mas info... </A> ").on('click', xxy).addTo(map);
	var MEDOBAR= L.marker([-34.79993, -58.39006], {icon: cerve},13).bindPopup("<strong>Medo Bar<strong>" + "<br/>" + "Direccion: Pellerano 775").on('click', xxy);
	var MOEBIUSBAR= L.marker([-34.79681, -58.39143], {icon: cerve},13).bindPopup("<strong>Moebius Bar<strong>" + "<br/>" + "Direccion: Castelli 1003" +"<br/>" +"<A HREF='https://www.instagram.com/moebiusbar/'target=_blank> Mas info... </A> ").on('click', xxy).addTo(map);
	var MOCCA= L.marker([-34.79818, -58.38531], {icon: cerve},13).bindPopup("<strong>Mocca<strong>" + "<br/>" + "Direccion: Plaza Alte. Brown 303" +"<br/>" +"<A HREF='https://www.instagram.com/moccacoffeebar/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var THEMITRE= L.marker([-34.79731, -58.39181], {icon: cerve},13).bindPopup("<strong>The Mitre<strong>" + "<br/>" + "Direccion: Mitre 1171" + "<br/>" +"<A HREF='https://www.instagram.com/_themitre/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var YUNGA= L.marker([-34.79831, -58.39093], {icon: cerve},13).bindPopup("<strong>Yunga<strong>" + "<br/>" + "Direccion: Esteban Adrogué 1151" +"<br/>" +"<A HREF='https://www.instagram.com/yungabar/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LACOLORADA= L.marker([-34.79706, -58.39106], {icon: cerve},13).bindPopup("<strong>La Colorada<strong>" + "<br/>" + "Direccion: Mitre 1230 " + "<br/>" +"<A HREF='https://www.instagram.com/lacoloradaclub/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var DEBARY  = L.marker([-34.80118, -58.38843], {icon: cerve},13).bindPopup("<strong>Debary<strong>" + "<br/>" + "Direccion: Av. Espora 919").on('click', xxy);
	var EL_BUFET  = L.marker([-34.79868, -58.39143], {icon: cerve},13).bindPopup("<strong>El Buffet<strong>" + "<br/>" + "Direccion: Spiro 1093 " +"<br/>" +"<A HREF='https://www.instagram.com/elbufetbar/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var ROX_CLUB = L.marker([-34.79906, -58.39218], {icon: cerve},13).bindPopup("<strong>Roxi Club<strong>" + "<br/>" + "Direccion: Spiro 1051" + "<br/>" +"<A HREF='https://www.instagram.com/roxclub.ba/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var EL_PASAJE  = L.marker([-34.79656, -58.39406], {icon: cerve},13).bindPopup("<strong>El Pasaje<strong>" + "<br/>" + "Direccion: Pasaje Estrada 435" + "<br/>" +"<A HREF='https://www.instagram.com/elpasaje.bar/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var BARRA_VIP  = L.marker([-34.79906, -58.39131], {icon: cerve},13).bindPopup("<strong>Barra Vip<strong>" + "<br/>" + "Direccion: Spiro 1075").on('click', xxy);
	var LA_ESTACION_BUENA_BIRRA  = L.marker([-34.79706, -58.38931], {icon: cerve},13).bindPopup("<strong>La Estacion de la Buena Virra<strong>" + "<br/>" + "Direccion: BARTOLOMÉ MITRE 1230 " +"<br/>" +"<A HREF='https://www.instagram.com/laestaciondelabuenabirra/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var EL_RINCON  = L.marker([-34.79593, -58.38931], {icon: cerve},13).bindPopup("<strong>El Rincón<strong>" + "<br/>" + "Direccion: Mitre y Ferrari" + "<br/>" +"<A HREF='https://www.instagram.com/rinconcerveceria/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LOCOS_BIRRA  = L.marker([-34.79731, -58.39031], {icon: cerve},13).bindPopup("<strong>Locos por la Birra<strong>" + "<br/>" + "Direccion: Diagonal Brown 1272 " +"<br/>" +"<A HREF='https://www.instagram.com/locosporlabirra.adrogue/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var DEWEY_BREWING_CO = L.marker([-34.79756, -58.38606], {icon: cerve},13).bindPopup("<strong>Dewey Brewing CO<strong>" + "<br/>" + "Direccion: Diagonal Brown 1571 " +"<br/>" +"<A HREF='https://www.instagram.com/cervezadewey/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var BAUM = L.marker([-34.79743, -58.39143], {icon: cerve},13).bindPopup("<strong>Baum Adrogué<strong>" + "<br/>" + "Direccion: Mitre 1184 " + "<br/>" +"<A HREF='https://www.instagram.com/baumadrogue/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var OLTACK  = L.marker([-34.80193, -58.39456], {icon: cerve},13).bindPopup("<strong>Öl Tack<strong>" + "<br/>" + "Direccion: Cordero 759" + "<br/>" +"<A HREF='https://www.instagram.com/ol.tackcerveceria/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var VANDONI  = L.marker([-34.80606, -58.38568], {icon: cerve},13).bindPopup("<strong>Vandoni<strong>" + "<br/>" + "Direccion: Murature 1135").on('click', xxy);
	var HASKEN  = L.marker([-34.79956, -58.39593], {icon: cerve},13).bindPopup("<strong>Hasken<strong>" + "<br/>" + "Direccion: Seguí 765" + "<br/>" +"<A HREF='https://www.instagram.com/haskencerveceria/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var GUERNICA_BAR  = L.marker([-34.79893, -58.39131], {icon: cerve},13).bindPopup("<strong>Guernica Bar<strong>" + "<br/>" + "Direccion: Pellerano 706" + "<br/>" +"<A HREF='https://www.instagram.com/guernicabar/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var SOUTH_SIDE_OF_BEER  = L.marker([-34.79893, -58.39268], {icon: cerve},13).bindPopup("<strong>South Side of Beer<strong>" + "<br/>" + "Direccion: Somellera 657 " + "<br/>" +"<A HREF='https://www.instagram.com/southside.ofbeer/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var DE_LA_BARRA = L.marker([-34.82593, -58.39718], {icon: cerve},13).bindPopup("<strong>De la Barra<strong>" + "<br/>" + "Direccion: Av Hipolito Irigoyen 14770 " + "<br/>" +"<A HREF='https://www.instagram.com/delabarracerveceria/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var CERVECERIA_ALMIRANTE_BROWN  = L.marker([-34.82468, -58.39718], {icon: cerve},13).bindPopup("<strong>Cerveceria Almirante Brown<strong>" + "<br/>" + "Direccion: HIPÓLITO YRIGOYEN 14687" + "<br/>" +"<A HREF='https://www.instagram.com/altebrowncerveceria/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LA_ESQUINA_DE_LA_CERVEZA  = L.marker([-34.82856, -58.39418], {icon: cerve},13).bindPopup("<strong>La Esquina de la Cerveza<strong>" + "<br/>" + "Direccion: AAlsina 595" + "<br/>" +"<A HREF='https://www.instagram.com/laesquinadelacervezaa/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var DIE_KUNST_1860    = L.marker([-34.83518, -58.37893], {icon: cerve},13).bindPopup("<strong> Die Kunst 1860<strong>" + "<br/>" + "Direccion: Hugo del Carril 333" +"<br/>"+"<A HREF='https://www.instagram.com/diekunst1860_cerveceria/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var ALMIRANTE_CERVEZA   = L.marker([-34.78781, -58.37393], {icon: cerve},13).bindPopup("<strong>Almirante Dönn Cerveza<strong>" + "<br/>" + "Direccion: Mitre 2680" + "<br/>" +"<A HREF='https://www.instagram.com/almirantedonn/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var EL_CLASICO_DE_QUILMES   = L.marker([-34.80831, -58.40106], {icon: cerve},13).bindPopup("<strong>El Clasico de Quilmes<strong>" + "<br/>" + "Direccion: AV HIPÓLITO YRIGOYEN 13298").on('click', xxy);
	var BIRRACO  = L.marker([-34.82531, -58.39368], {icon: cerve},13).bindPopup("<strong>Birraco<strong>" + "<br/>" + "Direccion: DR. MANUEL QUINTANA 636 " + "<br/>" +"<A HREF='https://www.instagram.com/birracobeer/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LADRAN_SANCHO  = L.marker([-34.86081, -58.38443], {icon: cerve},13).bindPopup("<strong>Ladran Sancho<strong>" + "<br/>" + "Direccion: CARLOS DIEHL 1263" + "<br/>" +"<A HREF='https://www.instagram.com/cervezaladransancho/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LONGBEER  = L.marker([-34.85968, -58.39018], {icon: cerve},13).bindPopup("<strong>Longbeer<strong>" + "<br/>" + "Direccion: MANUEL BELGRANO 1621" + "<br/>" +"<A HREF='https://www.instagram.com/longbeertakeaway/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var EL_VIEJO_CINE  = L.marker([-34.86006, -58.38981], {icon: cerve},13).bindPopup("<strong>El Viejo Cine<strong>" + "<br/>" + "Direccion: AV. HIPÓLITO YRIGOYEN 18335" +"<br/>" +"<A HREF='https://www.instagram.com/elviejocine.cerveceria/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LA_ZORRA_PUB = L.marker([-34.79906, -58.39218], {icon: cerve},13).bindPopup("<strong>La Zorra Pub<strong>" + "<br/>" + "Direccion: SPIRO 1051 " +"<br/>" + "INSTAGRAM: @ LACOLORADACLUB").on('click', xxy);
	var NEFFER  = L.marker([-34.79356, -58.33656], {icon: cerve},13).bindPopup("<strong>Neffer<strong>" + "<br/>" + "Direccion: PEDRO CORVERA 640").on('click', xxy);
	var BEER_HOUSE  = L.marker([-34.79743, -58.39156], {icon: cerve},13).bindPopup("<strong>Beer House<strong>" + "<br/>" + "Direccion: MITRE Y MACIAS" + "<br/>" +"<A HREF='https://www.instagram.com/beerhouse1973/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var KINGSTON_BEER  = L.marker([-34.79981, -58.33718], {icon: cerve},13).bindPopup("<strong>Kingstone Beer<strong>" + "<br/>" + "Direccion: LOBATO 751" + "<br/>" +"<A HREF='https://www.instagram.com/kingstonbeer/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var GLEWERS  = L.marker([-34.88856, -58.38743], {icon: cerve},13).bindPopup("<strong>Glewers<strong>" + "<br/>" + "Direccion: MARCOS SASTRE 955" + "<br/>" +"<A HREF='https://www.instagram.com/glewerscerveza/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LA_ESQUINA_BEER  = L.marker([-34.88531, -58.38306], {icon: cerve},13).bindPopup("<strong>La Esquina Beer<strong>" + "<br/>" + "Direccion: JORGE NEWBERY 2898" + "<br/>" +"<A HREF='https://www.instagram.com/freenchrestobar/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var BROOKLYN = L.marker([-34.86093, -58.38968], {icon: cerve},13).bindPopup("<strong>Brooklyn Beer & Coffe<strong>" + "<br/>" + "Direccion: AV HIPÓLITO YRIGOYEN 18391 " + "<br/>" +"<A HREF='https://www.instagram.com/brooklyn_beer_coffee/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var  ESCUELA_DE_SKATE_GLEW   = L.marker([-34.88306, -58.38406], {icon: pint},13).bindPopup("<strong>Escuela de Skate Glew <strong>" + "<br/>" + "Direccion: JORGE NEWBERY Y PAZ" + "<br/>" +"<A HREF='https://www.instagram.com/escuelitaskateglew/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var  ESCUELA_DE_SKATE_CLAYPOLE  = L.marker([-34.80056, -58.33956], {icon: pint},13).bindPopup("<strong>Escuela de Skate Claypole<strong>" + "<br/>" + "Direccion: AV 17 DE OCTUBRE 422" + "<br/>" +"<A HREF='https://www.instagram.com/escueladeskate.claypole/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var ESCUELA_DE_SKATE_BURZACO  = L.marker([-34.82268, -58.39143], {icon: pint},13).bindPopup("<strong>Escuela de Skate Burzaco<strong>" + "<br/>" + "Direccion: CARLOS PELLEGRINI Y 9 DE JULIO "  + "<br/>" +"<A HREF='https://www.instagram.com/playon_skatepark_diy/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var STUDIOS_1911   = L.marker([-34.86681, -58.38993], {icon: rec},13).bindPopup("<strong>1911 Studios<strong>" + "<br/>" + "Dirección: LORENZINI 1911 " + "<br/>" +"<A HREF='https://www.instagram.com/1911studios/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var BOCEPHUS_PRODUCCIONES  = L.marker([-34.86118, -58.39343], {icon: rec},13).bindPopup("<strong>Bocephus roducciones <strong>" + "<br/>" + "Dirección: JUAN DE GARAY 699 " + "<br/>" +"<A HREF='https://www.instagram.com/claudio_pineiro_bocephus/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LIBRAH_SALA_DE_ENSAYO  = L.marker([-34.81993, -58.42268], {icon: rec},13).bindPopup("<strong>  LIBRAH SALA DE ENSAYO   <strong>" + "<br/>" + "Dirección: INT. ALVARO PINTOS 428 " + "<br/>" +"<A HREF='https://www.instagram.com/librah.records/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var REDO    = L.marker([-34.78381, -58.36718], {icon: rec},13).bindPopup("<strong> REDO   <strong>" + "<br/>" + "Dirección: BARTOLOMÉ MITRE 3199" + "<br/>" ).on('click', xxy).addTo(map);
	var DFH_RECORDS  = L.marker([-34.80118, -58.38206], {icon: rec},13).bindPopup("<strong>  DFH RECORDS     <strong>" + "<br/>" + "Dirección: JORGE 1581 " + "<br/>" +"<A HREF='https://www.instagram.com/dfhsalaestudioadrogue/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var SALA_ALSINA  = L.marker([-34.82831, -58.39231], {icon: rec},13).bindPopup("<strong> SALA ALSINA  <strong>" + "<br/>" + "Dirección: ADOLFO ALSINA 728" + "<br/>" +"<A HREF='https://www.instagram.com/salaalsina/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var ESTUDIO_MAD  = L.marker([-34.82681, -58.39418], {icon: rec},13).bindPopup("<strong> ESTUDIO MAD  <strong>" + "<br/>" + "Dirección:25 DE MAYO 742" + "<br/>" +"<A HREF='https://www.instagram.com/estudio.mad/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var SALA_HELLFISH  = L.marker([], {icon: rec},13).bindPopup("<strong> SALA HELLFISH  <strong>" + "<br/>" + "Dirección: JUAN LARREA 2375").on('click', xxy).addTo(map);
	var NSR = L.marker([-34.80406, -58.38081], {icon: rec},13).bindPopup("<strong>  BOCEPHUS PRODUCCIONES   <strong>" + "<br/>" + "Dirección: ERASMO OBLIGADO 1451 " ).on('click', xxy).addTo(map);
	var ESTUDIO_QUINTO  = L.marker([-34.79118, -58.38868], {icon: rec},13).bindPopup("<strong>  ESTUDIO QUINTO    <strong>" + "<br/>" + "Dirección: AV. ESPORA 313").on('click', xxy).addTo(map);
	var LA_BRISA  = L.marker([-34.78918, -58.38731], {icon: rec},13).bindPopup("<strong>  LA BRISA  <strong>" + "<br/>" + "Dirección:CONSCRIPTO BERNARDI 1820" + "<br/>" ).on('click', xxy).addTo(map);
	var UNPLUGGED_ROCK_HOUSE  = L.marker([-34.79468, -58.38331], {icon: rec},13).bindPopup("<strong> UNPLUGGED ROCK HOUSE    <strong>" + "<br/>" + "Dirección: PLAZA BYNNON 44 " + "<br/>" +"<A HREF='https://www.instagram.com/unpluggedrockhouse/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var ARBOL_CAIDO  = L.marker([-34.80331, -58.38568], {icon: rec},13).bindPopup("<strong>  ÁRBOL CAÍDO  <strong>" + "<br/>" + "Dirección: DIAGONAL TOLL 1245 " + "<br/>" +"<A HREF='https://www.instagram.com/arbolcaido.salas/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var VULKANO  = L.marker([-34.79756, -58.38793], {icon: tienda},13).bindPopup("<strong> VULKANO  <strong>" + "<br/>" + "Dirección:PLAZA ESTEBAN ADROGUÉ 48 " + "<br/>" +"<A HREF='https://www.instagram.com/vulkanoargentina/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var EXIT_ACTION   = L.marker([-34.80031, -58.40793], {icon: tienda},13).bindPopup("<strong> EXIT ACTION  <strong>" + "<br/>" + "Dirección: HIPÓLITO YRIGOYEN 12485 " + "<br/>" +"<A HREF='https://www.instagram.com/exitactionsport/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LOCALS_ONLY  = L.marker([-34.80831, -58.40131], {icon: tienda},13).bindPopup("<strong> LOCALS ONLY  <strong>" + "<br/>" + "Dirección: AV. HIPÓLITO YRIGOYEN 13200 " + "<br/>" +"<A HREF='https://www.instagram.com/localsonly_adrogue/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var ADROGROW  = L.marker([-34.79918, -58.39143], {icon: grow},13).bindPopup("<strong> ADROGROW  <strong>" + "<br/>" + "Dirección: PELLERANO 730" +"<A HREF='https://www.instagram.com/adrogrow/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var BURZAKOGROWSHOP = L.marker([-34.82781, -58.38893], {icon: grow},13).bindPopup("<strong> BURZAKO GROWSHOP <strong>" + "<br/>" + "Dirección: ALSINA 1035" +"<A HREF='https://www.instagram.com/burzakogrowshop/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var UNDERGROUNDGROWSHOP    = L.marker([-34.79518, -58.36293], {icon: grow},13).bindPopup("<strong>  UNDERGROUND GROWSHOP   <strong>" + "<br/>" + "Dirección: AV SAN MARTÍN 2936"  + "<br/>"+"<A HREF='https://www.instagram.com/underground.grow/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LABUENAVIDA    = L.marker([-34.79056, -58.37593], {icon: grow},13).bindPopup("<strong> LA BUENA VIDA  <strong>" + "<br/>" + "Dirección: BYNNON 2458"  + "<br/>"+"<A HREF='https://www.instagram.com/labuenavidagrow/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LASBRUJAS  = L.marker([-34.81718, -58.37418], {icon: grow},13).bindPopup("<strong> LAS BRUJAS  <strong>" + "<br/>" + "Dirección: JOAQUIN V. GONZALEZ 2032"  + "<br/>"+"<A HREF='https://www.instagram.com/las_brujas_grow/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var HH   = L.marker([-34.82406, -58.39431], {icon: grow},13).bindPopup("<strong> HH GROW   <strong>" + "<br/>" + "Dirección: HUMBERTO PRIMO 605"  + "<br/>").on('click', xxy).addTo(map);
	var HALABALUSA= L.marker([-34.80081, -58.34168], {icon: punto},13).bindPopup("<strong>PLAZA HALABALUSA UNDERGROUND<strong>" + "<br/>" + "Dirección:REMEDIOS DE ESCALADA DE SAN MARTIN Y JUAN JOSÉ PASO").on('click', xxy).addTo(map);
	var ROSANEGRA= L.marker([-34.79881, -58.39393], {icon: tatoo},13).bindPopup("<strong>ROSA NEGRA<strong>" + "<br/>" + "Dirección: BARTOLOMÉ MITRE 954 LOC. 5" + "<br/>" +"<A HREF='https://www.instagram.com/rosanegra_tattooshop/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var tatoo1950 = L.marker([-34.79893, -58.39156], {icon: tatoo},13).bindPopup("<strong>1950 TATTOO<strong>" + "<br/>" + "Dirección: SPIRO 1075" + "<br/>" +"<A HREF='https://www.instagram.com/1950tattooshop/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var SHADETATTOO = L.marker([-34.79756, -58.35981], {icon: tatoo},13).bindPopup("<strong>SHADE TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES" + "<br/>" +"<A HREF='https://www.instagram.com/shadetattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var RAVENTATTOO = L.marker([-34.79431, -58.35993], {icon: tatoo},13).bindPopup("<strong>RAVEN TATTOO<strong>" + "<br/>" + "Dirección: PRESIDENTE ARTURO ILLIA 3127" + "<br/>" +"<A HREF='https://www.instagram.com/theraven.tattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var VIEJOKARMA = L.marker([-34.81893, -58.34918], {icon: tatoo},13).bindPopup("<strong>SHADE TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES" + "<br/>" +"<A HREF=' https://www.instagram.com/viejokarma_tattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var PABLOARAGONTATUAJES= L.marker([-34.80393, -58.35731], {icon: tatoo},13).bindPopup("<strong>PABLO ARAGON TATUAJES<strong>" + "<br/>" + "Dirección: OLEGARIO VICTOR ANDRADE 3415" + "<br/>" +"<A HREF='https://www.instagram.com/pabloaragontatuajes/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var ROOTS= L.marker([-34.79518, -58.35906], {icon: tatoo},13).bindPopup("<strong>ROOTS TATTOO<strong>" + "<br/>" + "Dirección:BERNARDINO RIVADAVIA 3116" + "<br/>" +"<A HREF='https://www.instagram.com/rootstattoo.studio/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LOVEKILLS = L.marker([-34.80818, -58.39606], {icon: tatoo},13).bindPopup("<strong>LOVE KILLS <strong>" + "<br/>" + "Dirección:HIPÓLITO BOUCHARD 371" + "<br/>" +"<A HREF='https://www.instagram.com/lovekillstattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var TASTETHEPAINT= L.marker([-34.80168, -58.39481], {icon: tatoo},13).bindPopup("<strong>TASTE THE PAINT<strong>" + "<br/>" + "Dirección:CORDERO 739" + "<br/>" + +"<A HREF='https://www.instagram.com/gonzalo_tastethepaint/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var ALBURQUERQUE= L.marker([-34.79356, -58.38906], {icon: tatoo},13).bindPopup("<strong>ALBURQUERQUE<strong>" + "<br/>" + "Dirección: AV ESPORA 428" + "<br/>" +"<A HREF='https://www.instagram.com/alburquerquestudio/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var DEBBIETATTOO= L.marker([-34.81393, -58.36106], {icon: tatoo},13).bindPopup("<strong>DEBBIE TATTOO<strong>" + "<br/>" + "Dirección:SAN FRANCISCO 706").on('click', xxy).addTo(map);
	var REDHANDER= L.marker([-34.79893, -58.39393], {icon: tatoo},13).bindPopup("<strong>RED HANDER<strong>" + "<br/>" + "Dirección:BARTOLOMÉ MITRE 954 LOC. 7" + "<br/>" +"<A HREF='https://www.instagram.com/redhanded.tattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LUKSTATTOO= L.marker([-34.78181, -58.34943], {icon: tatoo},13).bindPopup("<strong>LUKSTATTOO<strong>" + "<br/>" + "Dirección:PASAJE SAN JUAN 2223" + "<br/>" +"<A HREF='https://www.instagram.com/luks_tattoos/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var GRIZZLY= L.marker([-34.79831, -58.39093], {icon: tatoo},13).bindPopup("<strong>GRIZZLY TATTOO<strong>" + "<br/>" + "Dirección:ESTEBAN ADROGUÉ 1151" + "<br/>" +"<A HREF='https://www.instagram.com/analiagangale/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LANEGRA =L.marker([-34.79243, -58.37656], {icon: tatoo},13).bindPopup("<strong>LA NEGRA<strong>" + "<br/>" + "Dirección:JULIO ARIN 939" + "<br/>" +"<A HREF='https://www.instagram.com/lanegrainsumostattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var FABITATTOOPIERCING =L.marker([-34.77481, -58.35093], {icon: tatoo},13).bindPopup("<strong>FABI TATTOO PIERCING<strong>" + "<br/>" + "Dirección:SALTA 1609" + "<br/>" +"<A HREF='https://www.instagram.com/fabibogadotattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var IVOTATTOOSTUDIO = L.marker([-34.81368, -58.33293], {icon: tatoo},13).bindPopup("<strong>SHADE TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES").on('click', xxy).addTo(map);
	var TRUEHATE = L.marker([-34.82268, -58.35143], {icon: tatoo},13).bindPopup("<strong>TRUE HATE <strong>" + "<br/>" + "Dirección:RÍO QUINTO Y FIGUEROA" + "<br/>" +"<A HREF='https://www.instagram.com/true_hate.tattoo.art/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var BUENOSMUCHACHOS= L.marker([-34.82818, -58.39056], {icon: tatoo},13).bindPopup("<strong>BUENOS MUCHACHOS<strong>" + "<br/>" + "Dirección: ALSINA 840 / HIPÓLITO YRIGOYEN 18303 " + "<br/>" +"<A HREF='https://www.instagram.com/buenos.muchachos.bur/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var SORRYMOM= L.marker([-34.85981, -58.38993], {icon: tatoo},13).bindPopup("<strong>SORRY MOM TATTOO<strong>" + "<br/>" + "Dirección:RAWSON 750 "+"<br/>"+"<A HREF='https://www.instagram.com/sorrymomtattoo2.0/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var HOUSE= L.marker([-34.79131, -58.32468], {icon: tatoo},13).bindPopup("<strong>HOUSE OF ALAN TATTOO INK<strong>" + "<br/>" + "Dirección:PROVINCIA DE BUENOS AIRES 1274" + "<br/>" +"<A HREF='https://www.instagram.com/tattooinkalan/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var NIKOCORTESE= L.marker([-34.86293, -58.38168], {icon: tatoo},13).bindPopup("<strong>NIKO CORTESE TATTOO<strong>" + "<br/>" + "Dirección:AV. 2 DE ABRIL 1817" + "<br/>" +"<A HREF='https://www.instagram.com/nikocortesetattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var LUCASTATTOO = L.marker([-34.82468, -58.37281], {icon: tatoo},13).bindPopup("<strong>LUCAS TATTOO<strong>" + "<br/>" + "Dirección:CARLOS PELLEGRINI 974").on('click', xxy).addTo(map);
	var TATTUGO= L.marker([-34.82368, -58.39043], {icon: tatoo},13).bindPopup("<strong>TATTUGO INK STUDIO<strong>" + "<br/>" + "Dirección:ENRIQUE DE ROSAS 1161" + "<br/>" +"<A HREF='https://www.instagram.com/tattugo_ink/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var BUTTERFLY= L.marker([-34.83718, -58.36381], {icon: tatoo},13).bindPopup("<strong>BUTTERFLY TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES" + "<br/>" +"<A HREF='https://www.instagram.com/butterfly_tatto/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var THEBIG= L.marker([-34.85206, -58.38968], {icon: tatoo},13).bindPopup("<strong>THE BIG FAMILY TATTOO<strong>" + "<br/>" + "Dirección:SAN MARTIN 1116").on('click', xxy).addTo(map);
	var BFL= L.marker([-34.86268, -58.38468], {icon: tatoo},13).bindPopup("<strong>BFL TATTO STUDIO<strong>" + "<br/>" + "Dirección:DR. RAÚL SCALABRINI ORTIZ 1724").on('click', xxy).addTo(map);
	var BANTIERREBARBERIA = L.marker([-34.87056, -58.38481], {icon: tatoo},13).bindPopup("<strong>SHADE TATTOO<strong>" + "<br/>" + "Dirección: GENERAL MARTIN DE GUEMES Y CERVANTES" + "<br/>" +"<A HREF='https://www.instagram.com/bantierre_barberia_tattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var IPANEMATATTOO= L.marker([-34.88806, -58.38268], {icon: tatoo},13).bindPopup("<strong>IPANEMA TATTOO<strong>" + "<br/>" + "Dirección: " + "<br/>" +"<A HREF='https://www.instagram.com/ipanema.tattoo/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var BARBA= L.marker([-34.89018, -58.38618], {icon: tatoo},13).bindPopup("<strong>BARBA'S TATTOO<strong>" + "<br/>" + "Dirección:ÁNGEL DELLA VALLE 3598" + "<br/>" +"<A HREF='https://www.instagram.com/barbastattoos/'target=_blank>Contacto... </A> ").on('click', xxy).addTo(map);
	var DARUMA= L.marker([-34.88868, -58.36543], {icon: tatoo},13).bindPopup("<strong>DARUMA TATTOO<strong>" + "<br/>" + "Dirección: HUMAHUACA 611" + "<br/>" +"<A HREF='https://www.instagram.com/darumatrad94/'target=_blank> Mas info... </A> ").on('click', xxy).addTo(map);





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
								groupName : "Indumentaria y accesorios",
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
								groupName : "Deportes",
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
									"ENTER CLUB": ENTER_CLUB,
									
									
									
								}	
                             },
							 {
								groupName : "Tatuadores",
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
								groupName : "Salas de ensayo y grabación",
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

	{
								groupName : "Puntos de encuntro",
								expanded : false,
								layers    : { 
									"Plaza Halabalusa": HALABALUSA ,
									
									
									
									
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

