Session.set('counter', 0);
document.title = "My Title";

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

Template.chat.helpers({
    comments: function(){
        return Comments.find({}, {sort: {createdAt: -1}});
    }
});

Template.chat.rendered = function(){
    $(".scroll").tinyscrollbar();
}

// remember to read TODO.txt
