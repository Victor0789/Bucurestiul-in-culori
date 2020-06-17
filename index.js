
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {
        lat: 44.434722,
        lng: 26.102189
      }
    });
  //
  var sectorOne = [
  {lat:44.491721, lng: 25.987779},
  {lat:44.499985, lng: 26.007192},
  {lat:44.513507, lng: 26.010241},
  {lat:44.539333, lng:26.103642},
  {lat:44.436157, lng:26.101178},
  {lat:44.438882, lng:26.073012},
  {lat:44.462723, lng:26.048248},
  {lat:44.488786, lng:25.986088}];
  var sectorOnePolygon = new google.maps.Polygon({
    paths: sectorOne,
    strokeColor: 'black',
    strokeWeight:0.5,
    fillColor: 'red',
    fillOpacity: 0.5
  });
  sectorOnePolygon.setMap(map);
  var sectorTwo=[
  {lat:44.479192, lng:26.181067},
  {lat:44.456413, lng:26.155976},
  {lat:44.442300, lng:26.196644},
  {lat:44.433134, lng:26.153558},
  {lat:44.435224, lng:26.106371},
  {lat:44.486562, lng:26.103788}];
  var sectorTwoPolygon = new google.maps.Polygon({
    paths: sectorTwo,
    strokeColor: 'black',
    strokeWeight:0.5,
    fillColor: 'orange',
    fillOpacity: 0.5
  });
  sectorTwoPolygon.setMap(map);
  var sectorThree=[
  {lat:44.430091, lng:26.096848},
  {lat:44.435742, lng:26.101594},
  {lat:44.431768, lng:26.150139},
  {lat:44.441315, lng:26.194968},
  {lat:44.430014, lng:26.223463},
  {lat:44.395690, lng:26.210704},
  {lat:44.393993, lng:26.180840},
  {lat:44.409211, lng:26.122496},
  {lat:44.425415, lng:26.107902}];
  var sectorThreePolygon = new google.maps.Polygon({
    paths: sectorThree,
    strokeColor: 'black',
    strokeWeight:0.5,
    fillColor: 'yellow',
    fillOpacity: 0.5
  });
  sectorThreePolygon.setMap(map);
  var sectorFour=[
  {lat:44.420523, lng:26.088553},
  {lat:44.426078, lng:26.100950},
  {lat:44.424421, lng:26.107530},
  {lat:44.407732, lng:26.124836},
  {lat:44.398201, lng:26.161625},
  {lat:44.370549, lng:26.141506},
  {lat:44.341843, lng:26.163315},
  {lat:44.337377, lng:26.146317},
  {lat:44.371961, lng:26.087526},
  {lat:44.403654, lng:26.096929}];
  var sectorFourPolygon = new google.maps.Polygon({
    paths: sectorFour,
    strokeColor: 'black',
    strokeWeight:0.5,
    fillColor: 'green',
    fillOpacity: 0.5
  });
  sectorFourPolygon.setMap(map);
  var sectorFive=[
  {lat:44.434302, lng:26.059945},
  {lat:44.436056, lng:26.070466},
  {lat:44.433664, lng:26.095507},
  {lat:44.419182, lng:26.087318},
  {lat:44.399707, lng:26.096574},
  {lat:44.369507, lng:26.087731},
  {lat:44.405654, lng:26.011207},
  {lat:44.420045, lng:26.060552}];
  var sectorFivePolygon = new google.maps.Polygon({
    paths: sectorFive,
    strokeColor: 'black',
    strokeWeight:0.5,
    fillColor: 'blue',
    fillOpacity: 0.5
  });
  sectorFivePolygon.setMap(map);
  var sectorSix=[
  {lat:44.466343, lng:25.976587},
  {lat:44.478770, lng:25.991396},
  {lat:44.479453, lng:26.002281},
  {lat:44.462239, lng:26.045293},
  {lat:44.440506, lng:26.072467},
  {lat:44.434555, lng:26.059083},
  {lat:44.418185, lng:26.058282},
  {lat:44.406476, lng:25.976306},
  {lat:44.440438, lng:25.967164},
  {lat:44.442766, lng:26.012482},
  {lat:44.448659, lng:26.021048},
  {lat:44.458452, lng:26.013521}
  ];
  var sectorSixPolygon = new google.maps.Polygon({
    paths: sectorSix,
    strokeColor: 'black',
    strokeWeight:0.5,
    fillColor: 'indigo',
    fillOpacity: 0.5
  });
  sectorSixPolygon.setMap(map);

};
