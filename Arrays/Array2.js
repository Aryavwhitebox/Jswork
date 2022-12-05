let mFriends=['shaw','clara','jacob','jack']

mFriends.splice(2,0,'Donna','Rachel')


console.log(mFriends);



mFriends.forEach((element,index,mFriends) => {
    console.log(element+""+index+""+mFriends);
    
});