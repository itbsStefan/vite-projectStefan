import { useState, useEffect } from 'react';

const offlineCountries = [{"name":{"common":"Bermuda","official":"Bermuda","nativeName":{"eng":{"official":"Bermuda","common":"Bermuda"}}},"tld":[".bm"],"cca2":"BM","ccn3":"060","cca3":"BMU","cioc":"BER","independent":false,"status":"officially-assigned","unMember":false,"currencies":{"BMD":{"name":"Bermudian dollar","symbol":"$"}},"idd":{"root":"+1","suffixes":["441"]},"capital":["Hamilton"],"altSpellings":["BM","The Islands of Bermuda","The Bermudas","Somers Isles"],"region":"Americas","subregion":"North America","languages":{"eng":"English"},"translations":{"ara":{"official":"برمودا","common":"برمودا"},"bre":{"official":"Bermuda","common":"Bermuda"},"ces":{"official":"Bermudské ostrovy","common":"Bermudy"},"cym":{"official":"Bermiwda","common":"Bermiwda"},"deu":{"official":"Bermuda","common":"Bermuda"},"est":{"official":"Bermuda","common":"Bermuda"},"fin":{"official":"Bermuda","common":"Bermuda"},"fra":{"official":"Bermudes","common":"Bermudes"},"hrv":{"official":"Bermuda","common":"Bermudi"},"hun":{"official":"Bermuda","common":"Bermuda"},"ita":{"official":"Bermuda","common":"Bermuda"},"jpn":{"official":"バミューダ","common":"バミューダ"},"kor":{"official":"버뮤다","common":"버뮤다"},"nld":{"official":"Bermuda","common":"Bermuda"},"per":{"official":"جزایر برمودا","common":"برمودا"},"pol":{"official":"Bermudy","common":"Bermudy"},"por":{"official":"Bermudas","common":"Bermudas"},"rus":{"official":"Бермудские острова","common":"Бермудские Острова"},"slk":{"official":"Bermudy","common":"Bermudy"},"spa":{"official":"Bermuda","common":"Bermudas"},"srp":{"official":"Бермуда","common":"Бермуда"},"swe":{"official":"Bermuda","common":"Bermuda"},"tur":{"official":"Bermuda","common":"Bermuda"},"urd":{"official":"برمودا","common":"برمودا"},"zho":{"official":"百慕大","common":"百慕大"}},"latlng":[32.33333333,-64.75],"landlocked":false,"area":54.0,"demonyms":{"eng":{"f":"Bermudian","m":"Bermudian"},"fra":{"f":"Bermudienne","m":"Bermudien"}},"flag":"\uD83C\uDDE7\uD83C\uDDF2","maps":{"googleMaps":"https://goo.gl/maps/NLsRGNjTzDghTtAJA","openStreetMaps":"https://www.openstreetmap.org/relation/1993208"},"population":63903,"fifa":"BER","car":{"signs":["GB"],"side":"left"},"timezones":["UTC-04:00"],"continents":["North America"],"flags":{"png":"https://flagcdn.com/w320/bm.png","svg":"https://flagcdn.com/bm.svg"},"coatOfArms":{"png":"https://mainfacts.com/media/images/coats_of_arms/bm.png","svg":"https://mainfacts.com/media/images/coats_of_arms/bm.svg"},"startOfWeek":"monday","capitalInfo":{"latlng":[32.28,-64.78]},"postalCode":{"format":"@@ ##","regex":"^([A-Z]{2}\\d{2})$"}}];
const url = "https://restcountries.com/v3.1/all";

export function useCountries( defaultCountries=offlineCountries, defaultURL=url) {
   
  async function  fetchCountries() {
    let RESPONSE = {};
    let data = [];
    try{
        RESPONSE = await fetch('https://restcountries.com/v3.1/all');
        data = await RESPONSE.json();
    }catch(err){
        console.log("API:",err,"\nEs geht weiter mit Beispieldaten und RESPONSE={'ok':false}");
        RESPONSE.ok = false;
        RESPONSE.error = err;
        // Aussehen der Countries Datenstruktur für ein Land
        data = [];
    }
    //console.log("fetch gab folgendes an RESPONSE",RESPONSE);
    
    //console.log(data)
    if (!RESPONSE.ok) {
        console.log("Couldn't fetch Data");
    }

    return data;
  }


  async function  getCountriesData() {

    //console.log(window.countries.constructor === Array,window.countries, (typeof window.countries === 'undefined'));
    if (listCountries.length<3 ) {
        console.log("getCountriesData try to fetch ... await");
        const countries = await fetchCountries();
        //console.log("countries.constructor",countries.constructor);
        setListCountries(countries);
        //console.log("getCountriesData fetched again",countries);
    }
  }

  await getCountriesData();

  const [listCountries, setListCountries] = useState(defaultCountries);
  useEffect(() => {

  }, []);
  return  listCountries;
}
