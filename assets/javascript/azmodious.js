$(document).ready(function(){
    const azmodious = {
        name: 'Azmodious',
        class: 'Wizard',
        level: 6,
        race: 'Human',
        alignment: 'chaotic good',
        currentExperience: 1000,
        experienceNeededForNextLevel: 2000,
        ac: 12, 
        initiative: -1,
        speed: 30,
        fullHealth: 72,
        tempHealth: 0,
        hitDice: "7d6",
        deathSaves: 3,
        inspiration:0,
        proficiencyBonus: 3,
        strength: 11,
        strengthBonus: 0,
        athletics:0,
        dexterity:9,
        dexterityBonus: -1,
        acrobatics:0,
        sleightOfHand: 0,
        stealth:0,
        intelligence:19,
        intelligenceBonus: 4,
        arcana: 4,
        history: 6,
        investigation:6,
        nature:4,
        religion:6,
        charisma:12,
        charismaBonus:1,
        deception:1,
        intimidation:1,
        performance:1,
        persuasion:1,
        wisdom:15,
        wisdomBonus:2,
        insight:2,
        medicine:2,
        perception:2,
        survival:2,
        constitution:16,
        constitutionBonus:3,
        city: 'Hamilton',
        bio: 'Wes is a really cool guy that loves to teach web development!'
    }
    let Class = document.getElementById("class").innerHTML = `Class: ${azmodious.class}`;
    let Level = document.getElementById("level").innerHTML = `Level: ${azmodious.level}`;
    let Race = document.getElementById("race").innerHTML = `Race: ${azmodious.race}`;
    let Alignment = document.getElementById("alignment").innerHTML = `Alignment: ${azmodious.alignment}`;
    let Strength = document.getElementById("Str").innerHTML = `Strength: ${azmodious.strength}`;
    let Athletics = document.getElementById("athletics").innerHTML = `Athletics: ${azmodious.athletics}`;
    let Dexterity = document.getElementById("Dex").innerHTML = `Dexterity: ${azmodious.dexterity}`;
    let Acrobatics = document.getElementById("acrobatics").innerHTML = `Acrobatics: ${azmodious.acrobatics}`;
    let SleightOfHand = document.getElementById("sleight-of-hand").innerHTML = `Sleight of hand: ${azmodious.sleightOfHand}`;
    let Stealth = document.getElementById("stealth").innerHTML = `Stealth: ${azmodious.stealth}`;
    let Intelligence = document.getElementById("Int").innerHTML = `Intelligence: ${azmodious.intelligence}`;
    let Arcana = document.getElementById("arcana").innerHTML = `Arcana: ${azmodious.arcana}`;
    let Investigation = document.getElementById("investigation").innerHTML = `Investigation: ${azmodious.investigation}`;
     let Nature = document.getElementById("nature").innerHTML = `Nature: ${azmodious.nature}`;
     let Charisma = document.getElementById("Cha").innerHTML = `Charisma: ${azmodious.charisma}`;
     let Deception = document.getElementById("deception").innerHTML = `Deception: ${azmodious.deception}`;
     let Intimidation = document.getElementById("intimidation").innerHTML = `Intimidation: ${azmodious.intimidation}`;
     let Performance = document.getElementById("performance").innerHTML = `Performance: ${azmodious.performance}`;
     let Persuasion = document.getElementById("persuasion").innerHTML = `Persuasion: ${azmodious.persuasion}`;
     let Wisdom = document.getElementById("Wis").innerHTML = `Wisdom: ${azmodious.wisdom}`;
     let Insight = document.getElementById("insight").innerHTML = `Insight: ${azmodious.insight}`;
     let Medicine = document.getElementById("medicine").innerHTML = `Medicine: ${azmodious.medicine}`;
     let Perception = document.getElementById("perception").innerHTML = `Perception: ${azmodious.perception}`;
     let Survival = document.getElementById("survival").innerHTML = `Survival: ${azmodious.survival}`;
     let Constitution = document.getElementById("Con").innerHTML = `Constitution: ${azmodious.constitution}`;
     let ArmorClass = document.getElementById("AC").innerHTML = `Armor Class: ${azmodious.ac}`;
     let Initiative = document.getElementById("initiative").innerHTML = `Initiative: ${azmodious.initiative}`;
     let Speed = document.getElementById("speed").innerHTML = `Speed: ${azmodious.speed}`;
     let baseHealth = document.getElementById("baseHealth").innerHTML = `Main Health: ${azmodious. fullHealth}`;
     let TempHp = document.getElementById("tempHP").innerHTML = `Temp Health Points: ${azmodious.tempHealth}`;
     let HitDice = document.getElementById("healthDice").innerHTML = `Hit Dice: ${azmodious.hitDice}`;
     let DeathSave = document.getElementById("deathSave").innerHTML = `Death Saving Throws: ${azmodious.deathSaves}`;
     let Inspiration = document.getElementById("inspiration").innerHTML = `Inspiration: ${azmodious.inspiration}`;
     let ProficiencyBonus = document.getElementById("prof_bonus").innerHTML = `Proficiency git Bonus: ${azmodious.proficiencyBonus}`;
    // let Arcana = document.getElementById("arcana").innerHTML = `Arcana: ${azmodious.arcana}`;
    // let Arcana = document.getElementById("arcana").innerHTML = `Arcana: ${azmodious.arcana}`;
    // let Arcana = document.getElementById("arcana").innerHTML = `Arcana: ${azmodious.arcana}`;
    // let Arcana = document.getElementById("arcana").innerHTML = `Arcana: ${azmodious.arcana}`;
    // let Arcana = document.getElementById("arcana").innerHTML = `Arcana: ${azmodious.arcana}`;




























});//end of document ready fn. 


