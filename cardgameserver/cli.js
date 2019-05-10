const axios = require('axios');

var format;

const response = async() => {
    try{
        const res0 = await axios.get('http://localhost:11220/');
        format = res0.data;

        const res1 = await axios.get('http://localhost:11220/start');
        format = res1.data;

        const res2 = await axios.put('http://localhost:11220/divide6', { format });
        format = res2;
        
        const res3 = await axios.get('http://localhost:11220/card');
        format = res3.data;
        
        const res4 = await axios.put('http://localhost:11220/divide8', { format });
        format = res4;
        
        const res5 = await axios.get('http://localhost:11220/card');
        format = res5.data;

        format.field_card.push(format.peoples_hand[parseInt(format.current_player)].pop());
        const res6 = await axios.put('http://localhost:11220/raise', { format });
        format = res6;
        
        const res7 = await axios.get('http://localhost:11220/card');
        format = res7.data;
        return format;
    } catch(error){

    }
}
response();

