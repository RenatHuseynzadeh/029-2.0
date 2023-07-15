// 1
let cto = 0
function two(numm){
    for(let i in numm){
        if(numm[i] == 7){
        
            cto = 1
        } 

        
    }  
    if(cto == 0){
        console.log('netu 7');
    } else if(cto == 1){
        console.log('boom');

    }
}

two([1, 2, 3, 7])

// 2
function second(obj){
    for(let arr of Object.entries(obj)){
        if(arr.includes(Math.max(...Object.values(obj)))){
            return arr[0]
        }
    }
}

console.log(second({
    'gold': 300,
    'something': 100,
    'dimand': 1000
}));

// 3

function threee(arr){
    return arr.map(item => {
        const topNote = Math.max(...item.notes)
        return {
            name: item.name,
            topNote
        }
    })
}

console.log(threee([
    {name: 'Veli', notes: [2, 3, 4]},
    {name: 'Renat', notes: [2, 5, 4]}
]));