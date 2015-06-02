Accounts.onCreateUser(function(options, user){
    PlayerVotes.insert({
        user: user.user._id,
        score: 0
    });
});

Accounts.onLogin(function (user) {
    //TODO: Should check if user is connected to PlayerVotes, if not, insert user.

    var list = Meteor.call('searchPlayerVotesUser', user.user._id);
    if(typeof list === undefined){
        PlayerVotes.insert({
            user: user.user._id,
            score: 0
        });
    }

});
