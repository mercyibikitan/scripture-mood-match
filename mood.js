const verses = {
    stressed: {
      ref: "Matthew 11:28",
      text: "Come to me, all you who are weary and burdened, and I will give you rest.",
      encouragement: "Take a deep breath. You're not alone."
    },
    anxious: {
      ref: "Philippians 4:6-7",
      text: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.",
      encouragement: "Pause. Pray. God’s peace will guide you."
    },
    hopeful: {
      ref: "Jeremiah 29:11",
      text: "For I know the plans I have for you… plans to give you hope and a future.",
      encouragement: "Keep going — your story is still being written."
    },
    joyful: {
      ref: "Psalm 118:24",
      text: "This is the day that the Lord has made; let us rejoice and be glad in it.",
      encouragement: "Smile and share your joy today!"
    }
  };
  
  function getVerse(mood) {
    const verse = verses[mood];
    document.getElementById("verse-ref").textContent = verse.ref;
    document.getElementById("verse-text").textContent = verse.text;
    document.getElementById("encouragement").textContent = "— Encouragement: " + verse.encouragement;
  }
  