let mFriends=['shaw','clara','jacob']
//arrays are special type of objects which are used to 
//store the values

console.log(mFriends);
console.log(typeof(mFriends));
console.log(mFriends[2]);
console.log(mFriends[0]);
console.log("at method "+mFriends.at(1)
);

//update a value
mFriends[0]='shawn'
console.log(mFriends);

//add more items
mFriends[3]='Alan'
console.log(mFriends);

mFriends[mFriends.length]='Rob'
console.log(mFriends);
//adds value to the last index
mFriends.push('jack')
console.log(mFriends);

//unshift adds value to the first index
mFriends.unshift('unshift')
console.log(mFriends);
//Delete the last value from the array
mFriends.pop()
console.log(mFriends);
mFriends.pop()
mFriends.pop()
mFriends.pop()
mFriends.pop()
console.log(mFriends);