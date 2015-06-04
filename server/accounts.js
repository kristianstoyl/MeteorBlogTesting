Accounts.onLogin(function (user) {
    //Checks if user already has a playervotes table, if not it creates it
    var list = PlayerVotes.findOne({user:user.user});
    if(list === undefined){
        PlayerVotes.insert({
            user: user.user,//user.user._id,
            name: user.user.profile.name,
            score: 0
        });
    }

});
