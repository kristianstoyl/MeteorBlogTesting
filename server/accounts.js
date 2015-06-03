Accounts.onLogin(function (user) {
    //Checks if user already has a playervotes table, if not it creates it
    var list = PlayerVotes.findOne({user:user.user._id});
    if(list === undefined){
        PlayerVotes.insert({
            user: user.user._id,
            score: 0
        });
    }

});
