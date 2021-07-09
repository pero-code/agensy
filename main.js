var waypoint = new Waypoint({
    element: document.getElementById('skills'),
    handler: function() {
      var progress = document.querySelectorAll('.progress-bar');
      progress[0].setAttribute('style', 'width:99%;transition-duration: 1s;');
      progress[1].setAttribute('style', 'width:95%;transition-duration: 2s;');
      progress[2].setAttribute('style', 'width:79%;transition-duration: 3s;');
      progress[3].setAttribute('style', 'width:69%;transition-duration: 4s;');
    },
    offset: '90%'
});

$('.navbar-toggler').html("<i class='fas fa-bars fa-2x' style='color:var(--orange);'></i>");