var apolloCountdownMessage = "All engines running... LIFT-OFF!";
var countdown = 8;

function CountDown() {
    if (countdown > 0) {
      setTimeout(CountDown, 1000);
      countdown -= 1;
      console.log(countdown);
    }
    else
    {
        console.log(apolloCountdownMessage);
    }
  }


CountDown();
