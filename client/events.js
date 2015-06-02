Template.home.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
        //Counter.update();
    }
});

Template.testing.events({
    'click #abutton': function () {
        swal({
                title: "Are you sure?",
                text: "You will not be able to recover these \n valuable points!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    Session.set('counter', 0);
                    Meteor.call('resetPlayerVotes')
                    swal("Deleted!",
                        "Your imaginary file has been deleted.",
                        "success");
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            }
        );
    },
    'click #delete': function(){
        Meteor.call('clearPlayerVotes')
    },
    'click #userId': function(){
        alert(Meteor.userId())
    }
});

Template.player.events({
    'click button': function(){
        PlayerVotes.update(this._id, {$inc: {score: 5}});
    }
});
