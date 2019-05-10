const init = (emptyformat) => {
    var format = emptyformat;
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
const handout = (format, n) => {
    var handout_x = (x) => {
        for(var i = 0; i < x; i++){
            for(var p = 0; p < 4; p++){
                let temp = format.card_dummy.pop();
                format.peoples_hand[p].push(temp);
                if(temp == "*1") {
                    format.first_player = p;
                }
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
    return format;
}
const checkpower = (format, player) => {
    
    
    let power = 0;
    let cards = format.top_card;
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
    format.first_player = player;
    format.next_player = player+1;
    format.top_card_power = power;

    return format;
}

const take = (format) => {
    
    let player = format.first_player;
    let temp = format.field_card.slice();
    let point = 0;
    for(var i = 0; i < temp.length; i++){
        if(temp[i][0] == "5") point += 5;
        if(temp[i][0] == "T" || temp[i][0] == "K") point += 10;
    }
    
    format.team1_point += point;
    format.peoples_acquired[player].push(temp);
    format.field_card = [];
    format.top_card = [];
    format.top_card_power = 0;

    

    return format;
}





module.exports = { init, handout, checkpower, take };
