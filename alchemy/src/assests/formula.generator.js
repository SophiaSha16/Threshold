const COOCKED = "coocked";
const RAW = "raw";

export const NO_INFLUANCE = "אין השפעה";

export const ingredientsNames = {
  "Fire Salt": "fire_salt",
  "Frost Salts": "frost_salts",
  Deathball: "deathball",
  "Vampire Dust": "vampire_dust",
  "Bone Meal": "bone_meal",
  Nirnroot: "nirnroot",
  "Deadra Heart": "deadra_heart",
  "Falmer Ear": "falmer_ear",
  Nightshade: "nightshade",
  Bee: "bee",
  "Butterfly Wings": "butterfly_wings",
  Pearl: "pearl",
  Honeycomb: "honeycomb",
  "Chikens Egg": "chikens_egg",
  "Giants Toe": "giants_toe",
  "Moon Suger": "moon_suger",
  "Creep Closter": "creep_closter",
  "Dragon Bone": "dragon_bone",
  "Briar Heart": "briar_heart",
  "Void Salts": "void_salts",
  "Caniss Root": "caniss_root",
  "Mountian Flower": "mountian_flower",
  "Glowing Mushroom": "glowing_mushroom",
};

const ingredients = {
  "Fire Salt raw": { mode: RAW, ingridient: ingredientsNames["Fire Salt"] },
  "Fire Salt cooked": { mode: COOCKED, ingridient: ingredientsNames["Fire Salt"] },

  "Frost salts raw": { mode: RAW, ingridient: ingredientsNames["Frost Salts"] },
  "Frost salts cooked": { mode: COOCKED, ingridient: ingredientsNames["Frost Salts"] },

  "Deathball raw": { mode: RAW, ingridient: ingredientsNames["Deathball"] },
  "Deathball cooked": { mode: COOCKED, ingridient: ingredientsNames["Deathball"] },

  "Vampire Dust raw": { mode: RAW, ingridient: ingredientsNames["Vampire Dust"] },
  "Vampire Dust cooked": { mode: COOCKED, ingridient: ingredientsNames["Vampire Dust"] },

  "Bone Meal raw": { mode: RAW, ingridient: ingredientsNames["Bone Meal"] },
  "Bone Meal cooked": { mode: COOCKED, ingridient: ingredientsNames["Bone Meal"] },

  "Nirnroot raw": { mode: RAW, ingridient: ingredientsNames["Nirnroot"] },
  "Nirnroot cooked": { mode: COOCKED, ingridient: ingredientsNames["Nirnroot"] },

  "Deadra Heart raw": { mode: RAW, ingridient: ingredientsNames["Deadra Heart"] },
  "Deadra Heart cooked": { mode: COOCKED, ingridient: ingredientsNames["Deadra Heart"] },

  "Falmer Ear raw": { mode: RAW, ingridient: ingredientsNames["Falmer Ear"] },
  "Falmer Ear cooked": { mode: COOCKED, ingridient: ingredientsNames["Falmer Ear"] },

  "Nightshade raw": { mode: RAW, ingridient: ingredientsNames["Nightshade"] },
  "Nightshade cooked": { mode: COOCKED, ingridient: ingredientsNames["Nightshade"] },

  "Bee raw": { mode: RAW, ingridient: ingredientsNames["Bee"] },
  "Bee cooked": { mode: COOCKED, ingridient: ingredientsNames["Bee"] },

  "Butterfly Wings raw": { mode: RAW, ingridient: ingredientsNames["Butterfly Wings"] },
  "Butterfly Wings cooked": { mode: COOCKED, ingridient: ingredientsNames["Butterfly Wings"] },

  "Pearl raw": { mode: RAW, ingridient: ingredientsNames["Pearl"] },
  "Pearl cooked": { mode: COOCKED, ingridient: ingredientsNames["Pearl"] },

  "Honeycomb raw": { mode: RAW, ingridient: ingredientsNames["Honeycomb"] },
  "Honeycomb cooked": { mode: COOCKED, ingridient: ingredientsNames["Honeycomb"] },

  "Chikens Egg raw": { mode: RAW, ingridient: ingredientsNames["Chikens Egg"] },
  "Chikens Egg cooked": { mode: COOCKED, ingridient: ingredientsNames["Chikens Egg"] },

  "Giants Toe raw": { mode: RAW, ingridient: ingredientsNames["Giants Toe"] },
  "Giants Toe cooked": { mode: COOCKED, ingridient: ingredientsNames["Giants Toe"] },

  "Moon Suger raw": { mode: RAW, ingridient: ingredientsNames["Moon Suger"] },
  "Moon Suger cooked": { mode: COOCKED, ingridient: ingredientsNames["Moon Suger"] },

  "Creep Closter raw": { mode: RAW, ingridient: ingredientsNames["Creep Closter"] },
  "Creep Closter cooked": { mode: COOCKED, ingridient: ingredientsNames["Creep Closter"] },

  "Dragon Bone raw": { mode: RAW, ingridient: ingredientsNames["Dragon Bone"] },
  "Dragon Bone cooked": { mode: COOCKED, ingridient: ingredientsNames["Dragon Bone"] },

  "Briar Heart raw": { mode: RAW, ingridient: ingredientsNames["Briar Heart"] },
  "Briar Heart cooked": { mode: COOCKED, ingridient: ingredientsNames["Briar Heart"] },

  "Void Salts raw": { mode: RAW, ingridient: ingredientsNames["Void Salts"] },
  "Void Salts cooked": { mode: COOCKED, ingridient: ingredientsNames["Void Salts"] },

  "Caniss Root raw": { mode: RAW, ingridient: ingredientsNames["Caniss Root"] },
  "Caniss Root cooked": { mode: COOCKED, ingridient: ingredientsNames["Caniss Root"] },

  "Mountian Flower raw": { mode: RAW, ingridient: ingredientsNames["Mountian Flower"] },
  "Mountian Flower cooked": { mode: COOCKED, ingridient: ingredientsNames["Mountian Flower"] },

  "Glowing Mushroom raw": { mode: RAW, ingridient: ingredientsNames["Glowing Mushroom"] },
  "Glowing Mushroom cooked": { mode: COOCKED, ingridient: ingredientsNames["Glowing Mushroom"] },
};

const potions = {
  "Resist Fire": [ingredients["Dragon Bone cooked"], ingredients["Fire Salt raw"]],
  "Damage Health": [
    ingredients["Fire Salt cooked"],
    ingredients["Nirnroot raw"],
    ingredients["Nightshade cooked"],
    ingredients["Butterfly Wings cooked"],
  ],
  "Resist Frost": [ingredients["Frost salts cooked"], ingredients["Mountian Flower raw"]],
  Paralyze: [ingredients["Fire Salt cooked"], ingredients["Bee raw"], ingredients["Caniss Root cooked"]],
  Poison: [ingredients["Deathball cooked"], ingredients["Bone Meal raw"], ingredients["Chikens Egg raw"]],
  Invisibility: [ingredients["Vampire Dust cooked"], ingredients["Giants Toe raw"]],
  "Restore Magicka": [
    ingredients["Vampire Dust raw"],
    ingredients["Bee cooked"],
    ingredients["Pearl raw"],
    ingredients["Moon Suger cooked"],
  ],
  "Resist Magic": [
    ingredients["Nirnroot cooked"],
    ingredients["Dragon Bone raw"],
    ingredients["Mountian Flower cooked"],
  ],
  Fear: [
    ingredients["Deadra Heart cooked"],
    ingredients["Honeycomb cooked"],
    ingredients["Creep Closter raw"],
    ingredients["Void Salts raw"],
  ],
  Frenzy: [ingredients["Falmer Ear raw"], ingredients["Moon Suger raw"], ingredients["Briar Heart raw"]],
  "Restore Health": [
    ingredients["Butterfly Wings raw"],
    ingredients["Honeycomb raw"],
    ingredients["Chikens Egg cooked"],
  ],
  "Fortify Health": [
    ingredients["Giants Toe cooked"],
    ingredients["Creep Closter cooked"],
    ingredients["Void Salts cooked"],
  ],
  "Resist Poison": [ingredients["Glowing Mushroom cooked"], ingredients["Falmer Ear cooked"]],
  Antidote: [ingredients["Deathball raw"], ingredients["Briar Heart cooked"], ingredients["Caniss Root raw"]],
  "Damage Magicka": [ingredients["Deadra Heart raw"], ingredients["Glowing Mushroom cooked"]],
};
export const potionInfo = {
  "Resist Fire": "מבטל אפקט ראשון של אש ",
  "Damage Health": 'מוריד נק"פ 1 קבוע ליום (מצטבר)',
  "Resist Frost": "מבטל אפקט אחד של כפור",
  Paralyze:
    "דמות שהופעל עליה תקפא במקום (רצוי באותה התנוחה שהייתה) למשך 5 שניות בהם היא תהיה עמידה לנזק ושאר השפעות, יש להמתין 2 שניות של אדיבות משחקית לפני שמתחילים לתקוף דמות שהשתחררה מהקפאה.",
  Poison: "להחלטת המאסטר (יכול להיות כל דבר מלבד: paralyze, fear, frenzy)",
  Invisibility:
    "לא ניתן לראות את הדמות (יש להצליב ידיים על החזה לכל אורך ההשפעה עד שמחליטים לעצור), במהלך ההשפעה לא ניתן לדבר, להרים חפצים, לתקוף, להטיל קסם/יכולת, להחזיק עמדה. בסיום ההשפעה יש להמתין כ5 שניות לפני שניתן ליזום התקפה/קסם/יכולת אך ניתן להגן על עצמך בכל שלב.",
  "Restore Magicka": "מחזיר מג'יקה לאפקט אחד (מצטבר)",
  "Resist Magic": "חסינות לכל יכולת קסומה אחת (מצטבר)",
  Fear: "הדמות תנהג כאילו המטיל הוא הפחד הגדול ביותר שלה למשך כ10 שניות (לשיקול השחקן האם הוא בורח/מתקפל על הרצפה בפחד/תגובה הולמת אחרת).",
  Frenzy: "הדמות לא תוכל להבדיל בין חבר לאויב ותיכנס להתקף זעם בלתי נשלט לכ10 שניות בה היא תתחיל לתקוף את כל מי שמולה.",
  "Restore Health": 'מרפא נק"פ מלא (לא יעלה נק"פ מעל המקסימום אלא רק ירפא מה שאבד).',
  "Fortify Health": 'מוסיף 1 נק"פ ליום (מצטבר)',
  "Resist Poison": "חסינות לרעל אחד מסוג POISON בלבד, לא עובד על רעלים מסוג אחר",
  Antidote: "מרפא כל סוג של רעל או אפקט",
  "Damage Magicka": "הורדת יכולת קסומה 1 (מצטבר)",
};
export const getPotionInfo = (potion) => {
  return potionInfo[potion] ? potionInfo[potion] : NO_INFLUANCE;
};

const getAllCombinations = (ingList) => {
  return ingList.reduce((acc, v, i) => acc.concat(ingList.slice(i + 1).map((w) => [v, w])), []);
};

const getIngridientCodeName = (ing) => {
  return `${ing.ingridient}_${ing.mode}`;
};

export const getMapPotionsFormula = () => {
  const formulaMap = {};
  Object.keys(potions).forEach((potionName) => {
    getAllCombinations(potions[potionName]).map((_) => {
      formulaMap[`${getIngridientCodeName(_[0])}_${getIngridientCodeName(_[1])}`] = potionName;
      formulaMap[`${getIngridientCodeName(_[1])}_${getIngridientCodeName(_[0])}`] = potionName;
    });
  });
  return formulaMap;
};

export const initCounters = {
  "Resist Fire": 0,
  "Damage Health": 0,
  "Resist Frost": 0,
  Paralyze: 0,
  Poison: 0,
  Invisibility: 0,
  "Restore Magicka": 0,
  "Resist Magic": 0,
  Fear: 0,
  Frenzy: 0,
  "Restore Health": 0,
  "Fortify Health": 0,
  "Resist Poison": 0,
  Antidote: 0,
  "Damage Magicka": 0,
};
