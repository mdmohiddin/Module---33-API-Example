const loadCountries = () => {
      fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => displayCountries(data));
}
loadCountries()

// দেখানোর জন্য একটা function, arrow function নিম্নে লিখি
const displayCountries = countries => {
      console.log(countries);

//       for (const country of countries) {
// // countries থেকে এক একটা করে country দেখার জন্য
//             console.log(country);
//       }
// অন্যভাবে, return না লাগলে map এর কাছাকাছি forEach ব্যবহার করি। অর্থাৎ যত countries আছে তার মধ্যে একটা একটা করে country দেখাবে। forEach, array'র উপরে প্রয়োগ করে।
      
const countriesDiv = document.getElementById('countries');

      countries.forEach(country => {
            console.log(country);

            const div = document.createElement('div');
            div.classList.add('country')
// প্রত্যেকটা country'র জন্য একটা করে <h3> তৈরি করার জন্য
            const h3 = document.createElement('h3');
            h3.innerText = country.name;
// দেখানোর জন্য countries div এর মধ্যে একটা করে <h3> চাইল্ড তৈরি করার জন্য।
            div.appendChild(h3);
// এক একটা country, Capital দেখার জন্য
            const p = document.createElement('p');

            p.innerText = country.capital;
            
            div.appendChild(p);

            countriesDiv.appendChild(div);

      })
}