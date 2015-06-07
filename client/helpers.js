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
        return this.name;
    }
});

Template.playground.helpers({
    comments: function(){
        return Comments.find({}, {sort: {createdAt: -1}});
    }
});

// remember to read TODO.txt
