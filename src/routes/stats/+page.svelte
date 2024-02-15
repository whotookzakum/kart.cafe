<script>
    export let data;

    function getImg(id) {

        if (["Kart_413000002", "Kart_413000003", "Kart_413000004", "Kart_413000006", "Kart_413000007", "Kart_413000008", "Kart_413000010", "Kart_413000014", "Kart_413000018", "Kart_413000019", "Kart_413000021", "Kart_413000022"].some(specialId => specialId === id)) {
            return `/UI_Common/_Res/ItemIcon/hover_body/${id}.png`
        }

        return `/UI_Common/_Res/ItemIcon/kart/${id}.png`
    }
</script>

<h1>Kart Stats</h1>
<p>Karts are sorted by Drift Accel. &gt; Boost Dur. &gt; everything else. Score 1 is Drift Accel. + Boost Dur., and Score 2 is Boost Accel. + Drift Accel. + and Boost Dur. <br> These max values are taken from the Heroic tier—while the tiers don't appear to have different max values, you never know.</p>

<table class="box surface full-bleed">
    <thead>
        <tr>
            <th>Kart</th>
            <th>Boost Accel.</th>
            <th>Drift Accel.</th>
            <th>Boost Dur.</th>
            <th>Boost Charge</th>
            <th>Long Slide D.S.</th>
            <th>Crash Decel.</th>
            <th>Starting Boost</th>
            <th>Draft Accel.</th>
            <th>Auto Long Slide</th>
            <th>Score 1</th>
            <th>Score 2</th>
        </tr>
    </thead>
    <tbody>
        {#each data.karts as kart}
            <tr>
                <td>
                    <div class="grid">
                        <img src={getImg(kart.kartItemId.replace(":", "_"))} alt="" width="408" height="380">
                        <span>{kart.name}</span>
                        <small>{kart.kartItemId}</small>
                    </div>
                </td>
                <td>{kart.kartUpgradeDefaultGearVector[3].gearLimit[0].TransAccelFactor}</td>
                <td>{kart.kartUpgradeDefaultGearVector[3].gearLimit[1].DriftEscapeForce}</td>
                <td>{kart.kartUpgradeDefaultGearVector[3].gearLimit[2].BoosterTime}</td>
                <td>{kart.kartUpgradeDefaultGearVector[3].gearLimit[3].DriftMaxGauge}</td>
                <td>{kart.kartUpgradeDefaultGearVector[3].gearLimit[4].ForceSlipEscapeFactor}</td>
                <td>{kart.kartUpgradeDefaultGearVector[3].gearLimit[5].DriftGaugePreservePercent}</td>
                <td>{kart.kartUpgradeDefaultGearVector[3].gearLimit[6].BoosterAccel}</td>
                <td>{kart.kartUpgradeDefaultGearVector[3].gearLimit[7].DraftMulAccelFactor}</td>
                <td>{kart.kartUpgradeDefaultGearVector[3].gearLimit[8].AutoLongSlideDrift}</td>

                <td>
                    <strong style="color: var(--accent)">
                        {kart.kartUpgradeDefaultGearVector[3].gearLimit[1].DriftEscapeForce +
                            kart.kartUpgradeDefaultGearVector[3].gearLimit[2].BoosterTime
                            }
                    </strong>
                </td>

                <td>
                    <strong style="color: var(--highlight)">
                        {kart.kartUpgradeDefaultGearVector[3].gearLimit[0].TransAccelFactor + kart.kartUpgradeDefaultGearVector[3].gearLimit[1].DriftEscapeForce +
                            kart.kartUpgradeDefaultGearVector[3].gearLimit[2].BoosterTime
                            }
                    </strong>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
    table {
        text-align: left;
        font-size: 1.2rem;
        border-collapse: collapse;
        
        tr:nth-of-type(2n) {
            background: var(--surface2);
        }
        
        td, th {
            padding: 0.5rem;
        }

        thead th {
            position: sticky; 
            top: 90px;
            background: var(--surface1);
        }
    }

    img {
        max-width: 120px;
        height: auto;
    }
</style>