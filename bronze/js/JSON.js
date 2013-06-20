// Matt Nowakowski
// MIU
// term 1306
// project 2

var json = {
    "1": {
        "loadoutName": ["Media Name:", "metal gear rising"],
        "weaponCategory": ["Media Type:", "xbox"],
        "deadly": ["format:", "dvd"],
        "fav": ["favorite:", "Yes"],
        "rate": ["Rating:", "8"],
        "comments": ["Comments:", "A spin-off from the franchise"]
    },
    "2": {
        "loadoutName": ["Media Name:", "halo 4"],
        "weaponCategory": ["media type:", "xbox"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "Yes"],
        "rate": ["rating:", "9"],
        "comments": ["comments:", "One of the best multiplayer games to date."]
    },
    "3": {
        "loadoutName": ["Media Name:", "max payne 3"],
        "weaponCategory": ["media type:", "xbox"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "no"],
        "rate": ["Rating:", "2"],
        "comments": ["Comments:", "game with poor multiplayer"]
    },
    "4": {
        "loadoutName": ["Media Name:", "dragons dogma"],
        "weaponCategory": ["Media type:", "xbox"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "Yes"],
        "rate": ["Rating:", "9"],
        "comments": ["Comments:", "one of the greatest rpgs"]
    },
    "5": {
        "loadoutName": ["Media Name:", "fable 3"],
        "weaponCategory": ["Media type:", "xbox"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "no"],
        "rate": ["Rating:", "1"],
        "comments": ["Comments:", "worst rpg ever played with a lot of broken promises."]
    },
    "6": {
        "loadoutName": ["Media Name:", "uncharted"],
        "weaponCategory": ["Media type:", "playstation"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "10"],
        "comments": ["Comments:", "similar to tomb raider."]
    },
    "7": {
        "loadoutName": ["Media Name:", "uncharted 2"],
        "weaponCategory": ["Media type:", "playstation"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "10"],
        "comments": ["Comments:", "sequel to uncharted."]
    },
    "8": {
        "loadoutName": ["Media Name:", "uncharted 3"],
        "weaponCategory": ["Media type:", "playstation"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "9"],
        "comments": ["Comments:", "takes place after uncharted 2."]
    },
    "9": {
        "loadoutName": ["Media Name:", "killzone"],
        "weaponCategory": ["Media type:", "playstation"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "8"],
        "comments": ["Comments:", "similar to cod."]
    },
    "10": {
        "loadoutName": ["Media Name:", "black ops 2"],
        "weaponCategory": ["Media type:", "playstation"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "8"],
        "comments": ["Comments:", "latest call of duty game."]
    },
    "11": {
        "loadoutName": ["Media Name:", "the witcher"],
        "weaponCategory": ["Media type:", "pc"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "10"],
        "comments": ["Comments:", "best rpg ever played."]
    },
    "12": {
        "loadoutName": ["Media Name:", "the witcher 2"],
        "weaponCategory": ["Media type:", "pc"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "10"],
        "comments": ["Comments:", "sequel to the best rpg."]
    },
    "13": {
        "loadoutName": ["Media Name:", "swtor"],
        "weaponCategory": ["Media type:", "pc"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "no"],
        "rate": ["Rating:", "5"],
        "comments": ["Comments:", "mmo set inthe starwars universe."]
    },
    "14": {
        "loadoutName": ["Media Name:", "dc universe"],
        "weaponCategory": ["Media type:", "pc"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "7"],
        "comments": ["Comments:", "mmo set in the dc universe."]
    },
    "15": {
        "loadoutName": ["Media Name:", "apb"],
        "weaponCategory": ["Media type:", "pc"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "no"],
        "rate": ["Rating:", "4"],
        "comments": ["Comments:", "a poorly made game."]
    },
    "16": {
        "loadoutName": ["Media Name:", "super mario bros u"],
        "weaponCategory": ["Media type:", "wii u"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "8"],
        "comments": ["Comments:", "classic side scroller mario."]
    },
    "17": {
        "loadoutName": ["Media Name:", "skyward sword"],
        "weaponCategory": ["Media type:", "wii u"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "10"],
        "comments": ["Comments:", "typical zelda game."]
    },
    "18": {
        "loadoutName": ["Media Name:", "black ops 2"],
        "weaponCategory": ["Media type:", "wii u"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "no"],
        "rate": ["Rating:", "5"],
        "comments": ["Comments:", "a badly ported game."]
    },
    "19": {
        "loadoutName": ["Media Name:", "zombiu"],
        "weaponCategory": ["Media type:", "wii u"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "no"],
        "rate": ["Rating:", "4"],
        "comments": ["Comments:", "a poorly made zombie game."]
    },
    "20": {
        "loadoutName": ["Media Name:", "assassins creed 3"],
        "weaponCategory": ["Media type:", "wii u"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "8"],
        "comments": ["Comments:", "who doesnt love assassins."]
    },
    "21": {
        "loadoutName": ["Media Name:", "casino"],
        "weaponCategory": ["Media type:", "movie"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "10"],
        "comments": ["Comments:", "american crime drama."]
    },
    "22": {
        "loadoutName": ["Media Name:", "eminem"],
        "weaponCategory": ["Media type:", "music"],
        "deadly": ["media format:", "cd"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "7"],
        "comments": ["Comments:", "one of the best whote rappers."]
    },
    "23": {
        "loadoutName": ["Media Name:", "nightwish"],
        "weaponCategory": ["Media type:", "music"],
        "deadly": ["media format:", "cd"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "10"],
        "comments": ["Comments:", "awesome swedish rock band."]
    },
    "24": {
        "loadoutName": ["Media Name:", "casino royal"],
        "weaponCategory": ["Media type:", "movie"],
        "deadly": ["media format:", "dvd"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "9"],
        "comments": ["Comments:", "first bond movie to star daniel craig."]
    },
    "25": {
        "loadoutName": ["Media Name:", "quantum of solace"],
        "weaponCategory": ["Media type:", "movie"],
        "deadly": ["media format:", "bluray"],
        "fav": ["favorite:", "yes"],
        "rate": ["Rating:", "8"],
        "comments": ["Comments:", "second bond movie to star daniel craig."]
    }
  
     
     
    };