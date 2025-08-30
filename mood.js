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
    },
    sad: {
      ref: "Psalm 34:18",
      text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
      encouragement: "God feels your pain — He is near."
    },
    angry: {
      ref: "James 1:19-20",
      text: "Everyone should be quick to listen, slow to speak and slow to become angry.",
      encouragement: "Breathe. Patience brings peace."
    },
    grateful: {
      ref: "1 Thessalonians 5:18",
      text: "Give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
      encouragement: "Gratitude opens the door to joy."
    },
    lonely: {
      ref: "Deuteronomy 31:6",
      text: "Be strong and courageous… for the Lord your God goes with you; he will never leave you nor forsake you.",
      encouragement: "You are never truly alone."
    },
    tired: {
      ref: "Isaiah 40:31",
      text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
      encouragement: "Rest in Him — your strength will rise again."
    },
    confused: {
      ref: "Proverbs 3:5-6",
      text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      encouragement: "When you can’t see the way, trust the Guide."
    }
  };
  
  function getVerse(mood) {
    const verse = verses[mood];
    document.getElementById("verse-ref").textContent = verse.ref;
    document.getElementById("verse-text").textContent = verse.text;
    document.getElementById("encouragement").textContent = "— Encouragement: " + verse.encouragement;
  
    // Save last selection in localStorage
    localStorage.setItem("lastMood", mood);
  }
  
  // Restore last mood on page load
  window.onload = () => {
    const lastMood = localStorage.getItem("lastMood");
    if (lastMood && verses[lastMood]) {
      getVerse(lastMood);
    }
  };
  