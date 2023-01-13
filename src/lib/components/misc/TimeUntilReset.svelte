<script>
    let timeNow = new Date();
    let timeRemaining = getTimeUntilReset();
    $: seconds = Math.floor((timeRemaining / 1000) % 60).toString();
    $: minutes = Math.floor((timeRemaining / 60000) % 60).toString();
    $: hours = Math.floor(timeRemaining / 3600000).toString();
    $: timeRemainingString = `${hours}:${
        minutes.length === 1 ? minutes.padStart(2, "0") : minutes
    }:${seconds.length === 1 ? seconds.padStart(2, "0") : seconds}`;

    function updateTimer() {
        if (timeRemaining <= 0) {
            timeRemaining += 86399000;
        } else {
            timeRemaining -= 1000;
        }
    }

    function getTimeUntilReset() {
        const target = new Date();
        target.setUTCHours(0);
        target.setUTCMinutes(0);
        target.setUTCSeconds(0);

        let timeUntilTarget = target.getTime() - timeNow.getTime();

        if (timeUntilTarget < 0) timeUntilTarget += 86400000;

        return timeUntilTarget;
    }

    setInterval(updateTimer, 1000);
</script>

{timeRemainingString}