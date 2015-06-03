Session.set('counter', 0);

Template.home.helpers({
    counter: function () {
        return Session.get('counter');
    },
    points: function () {
        return Session.get('counter') * 4;
    }
});

Template.leaderboard.helpers({
    playerinfo: function () {
        return PlayerVotes.find({}, {sort: {score: -1}});
    }
});
Template.player.helpers({
    userName: function () {
        var result = Meteor.users.findOne({_id: this.user});
        if(result === undefined) {
        } else {
            if (typeof result.profile.name !== undefined)
                return result.profile.name;
        }
    }
});

// remember to read TODO.txt
