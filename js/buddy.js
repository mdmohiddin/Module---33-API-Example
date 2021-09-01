const loadBuddies = () => {
      fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(data => displayBuddies(data))
}
loadBuddies()

const displayBuddies = data => {
      const buddies = data.results;
      // ১. data'র(৫জন buddy আছে) ভিতরে buddies গুলো পাওয়ার জন্য
      console.log(data.results);
      const buddiesDiv = document.getElementById('buddies')
      for (const buddy of buddies) {
            console.log(buddy.name.first, buddy.name.last)
      // ২. email দেখার জন্য
            const p = document.createElement('p');
            // p.innerText = buddy.email;
      // dynamic ভাবে দেখানো জন্য
            p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} Last Name: ${buddy.name.last} Email: ${buddy.email}`;
            
            buddiesDiv.appendChild(p);
      }
}