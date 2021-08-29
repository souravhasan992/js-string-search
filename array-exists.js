function megaFriend(friends){
    if (Array.isArray(friends)== false){
        return 'please provide an array'
    }
    let mega = friends[1];
    // console.log(mega);
    for (const friend of friends){
        if ( friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['putu','polash', 'farhad', 'riad', 'rimon', 'mithun'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy)

if (friends.includes('polashe')){
    console.log('polash ke pawa gese');

}

else{
    console.log('polsah ke pawa jai nai');
}