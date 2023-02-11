<script>
    const timeNow = new Date();

    const resetTime = Date.UTC(
        timeNow.getUTCFullYear(),
        timeNow.getUTCMonth(),
        timeNow.getUTCDate() + 1,
        0,
        0,
        0
    );

    let timeUntilReset = resetTime - timeNow.getTime();

    $: countdown = new Date(timeUntilReset).toLocaleTimeString([], {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    function updateTimer() {
        if (timeUntilReset <= 0) timeUntilReset += 86400000;
        timeUntilReset -= 1000;
    }

    setInterval(updateTimer, 1000);
</script>

<strong>{countdown}</strong>