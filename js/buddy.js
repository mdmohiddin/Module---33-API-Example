const loadBuddies = () => {
      fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(data => displayBuddies(data))
}
loadBuddies()

const displayBuddies = data => {
      const buddies = data.results;
      // ১ data'র(৫জন buddy আছে) ভিতরে buddies গুলো পাওয়ার জন্য
      // console.log(data.results);
      for (const buddy of buddies) {
            console.log(buddy)
      }
}