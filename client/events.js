Template.home.events({
    'click button': function () {
        Session.set('counter', Session.get('counter') + 1);
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
                    Meteor.call('resetPlayerVotes');
                    swal("Deleted!",
                        "Your imaginary points has been deleted.",
                        "success");
                } else {
                    swal("Cancelled", "Your imaginary points are safe :)", "error");
                }
            }
        );
    },
    'click #poeng': function(){
        Meteor.call('addUserPoints', Meteor.user());
    },
    'click #del': function(){
        Meteor.call('clearPlayerVotes')
    }
});
