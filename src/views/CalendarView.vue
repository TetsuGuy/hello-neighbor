<template>
    <div>
        <h1>July 2022</h1>
        <div class="calendar-grid">
            <div class="calendar-grid__weekday">Monday</div>
            <div class="calendar-grid__weekday">Tuesday</div>
            <div class="calendar-grid__weekday">Wednesday</div>
            <div class="calendar-grid__weekday">Thursday</div>
            <div class="calendar-grid__weekday">Friday</div>
            <div class="calendar-grid__weekday">Saturday</div>
            <div class="calendar-grid__weekday">Sunday</div>
            <div v-for="d in dates" :key="d" class="calendar-grid__day">
                <div>{{ d + 1 }}</div>
                <div v-if="d < 21 && d > 15" class="construction">Construction</div>
                <div class="garbage" v-if="d % 7 === 5">Garbage Collection</div>
                <div v-if="d % 19 === 0" class="blood-drive">Blood Drive</div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        dates: Array.from(Array(31).keys())
    })
}
</script>

<style scoped lang="scss">
.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr 4fr 4fr 4fr 4fr 4fr;
    &__day {
        border: 1px solid lightgray;
        height: 100px;
        .garbage {
            background: yellow;
        }
        .blood-drive {
            background: red;
        }
        .construction {
            background-image: linear-gradient(45deg, #00000059 25%, #f2ff0059 25%, #f2ff0059 50%, #00000059 50%, #00000059 75%, #f2ff0059 75%, #f2ff0059 100%);
            background-size: 56.57px 56.57px;
        }
    }
    &__weekday {
        border: 1px solid lightgray;
        background: lightblue;
    }
}
</style>