var trip = Array.prototype.filter.call(document.getElementsByClassName("result-details"), function(element){return element.className.indexOf("hidden") == -1})[0];

var trainAndStations = Array.prototype.map.call(Array.prototype.splice.call(trip.getElementsByTagName("a"), 0, 3), function(e){if (e.title) return (e.title + ": " + e.textContent)});

var departureAndArrival = Array.prototype.filter.call(Array.prototype.map.call(Array.prototype.splice.call(trip.getElementsByTagName("strong"), 0, 7), function(e){if (e.textContent.indexOf("Avg") != -1 || e.textContent.indexOf("Ank") != -1) return e.textContent}), function(e){return e != null});

//

var body = (departureAndArrival.concat(trainAndStations) + "").replace(/,/g,"\n")

body += "\n\n";

body += 'Länk till blanketten: http://www.skanetrafiken.se/upload/Dokumentbank/Resegarantin/resegaranti_juli_2012.pdf';

body += "\n";

body += 'Länk till information om resegarantin: http://www.skanetrafiken.se/templates/InformationPage.aspx?id=32942&epslanguage=SV';

body = body.replace(/\n/g,"%0D%0A");


var div = document.createElement("div");
div.innerHTML = '<a href="mailto:gustaf.nk@gmail.com?subject=Resegaranti att hämta ut!&body=' + body +'">Maila mig information för resegaranti</a><br /><a href="http://www.skanetrafiken.se/upload/Dokumentbank/Resegarantin/resegaranti_juli_2012.pdf">Länk till blanketten</a><br /><a href="http://www.skanetrafiken.se/templates/InformationPage.aspx?id=32942&epslanguage=SV">Information om resegarantin</a>'

trip.getElementsByClassName("details-container")[0].appendChild(div);

// Debug
// document.getElementsByTagName("body")[0].parentNode.replaceChild(div, document.getElementsByTagName("body")[0])