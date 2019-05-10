const format = {
    
    "peoples_hand": [ [], [], [], []  ],
    "peoples_acquired": [],
    "peoples_large_t": [0,0,0,0],
    "peoples_small_t": [0,0,0,0],

    "people1_name" : "", 
    "people2_name" : "", 
    "people3_name" : "", 
    "people4_name" : "", 

    "team1_member":[],
    "team2_member":[],

    "team1_point": "",
    "team2_point": "",

    "card_dummy" : [],
    "field_card" : [],
    "field_card_power" : "",
    "first_player" : "",
}
const init = (format) => {
    const cards = ["*J", "*C", "*1", "*D"];
    let card_dummy = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    let pattern = ["S", "C", "H", "D"];
    for(var i = 0; i < 4; i++){
        for (var list in card_dummy){
            cards.push(card_dummy[list] + pattern[i]);
        }
    }
    const shuffle = (array) => {
        var j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }   
    format.card_dummy = shuffle(cards);
    return format;
}   

const handout = (n) => {

    var handout_x = (x) => {
        for(var i = 0; i < x; i++){
            for(var p = 0; p < 4; p++){
                let temp = format.card_dummy.pop();
                format.peoples_hand[p].push(temp);
                if(temp == "*1") format.first_player = p.toString();

            }
        }

    }
    switch(n){
        case 6:
            handout_x(6);
            break;

        case 8:
            handout_x(8);
            break;

        default:
            console.error("error")

    }
}


const raise_format = {
    "formatid" : 2,
    "who" : "",
    "cards" : [],
    "power" : "",
}
const make_raise_format = (who, cards) => {
    raise_format.who = who;
    raise_format.cards = cards;
    raise_format.power = checkpower(cards);
}
const checkpower = (cards) => {
    let power = 0;
    for(var i = 0; i < cards.length; i++){

        switch (cards[i][0]){
            case "T": power += 10;break;
            case "J": power += 11;break;
            case "Q": power += 12;break;
            case "K": power += 13;break;
            case "A": power += 14;break;
            default: power += parseInt(cards[i][0]); break;
        }
    }
    return power;
}

const verify = (cardset) => {
    if(cardset.length == 1) return true;
    else if(cardset.length == 2){
       if(cardset[0][0] == cardset[1][0]) return true;
   }
   return false;
}

const update = (json) => {
    if(json.formatid == 2){ // player rasie a card
        let who = parseInt(json.who, 10) - 1;
        let card = json.cards;
        for(var i = 0; i < card.length; i++){
            var cardindex = format.peoples_hand[who].findIndex((element) =>{
                return element == card[i];
            });
            format.field_card.push(card[i]);
            format.peoples_hand[who].splice(cardindex,1);
        }
        format.field_card_power = json.power;
    }
}

while(0){
    init();
    handout(6);
    handout(8);
/*    while(1){
        var x = Math.floor(Math.random() * (12 + 1));
        var y = Math.floor(Math.random() * (12 + 1));

        var temp_cards = [format.peoples_hand[3][x],format.peoples_hand[3][y]]
        if(!verify(temp_cards)) {
            console.log(temp_cards);
            console.error("Error"); 
            continue;
        }
        break;
    } */

    var temp_cards = [format.peoples_hand[3][1],format.peoples_hand[3][2]]
    make_raise_format("4", temp_cards, checkpower(temp_cards) );
    update(raise_format);
    console.log(format);


    break;
}
module.exports ={ init, handout };
