Accounts.onCreateUser(function(options, user){
    PlayerVotes.insert({
        user: this.userId,
        score: 0
    });
});

Accounts.onLogin(function (user) {

    //TODO: Should check if user is connected to PlayerVotes, if not, insert user.
    var list = searchPlayerVotesUser(user.user._id);
    if(list.count() == 0){
      PlayerVotes.insert({
          user: user.user._id,
          score: 0
      });
    }

});
