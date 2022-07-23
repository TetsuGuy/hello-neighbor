<template>
  <div class="house">
    <div v-for="floor in [11,10,9,8,7,6,5,4,3,2,1]" :key="floor" class="floor">
        <div style="width: 100px;"><h1>FLOOR {{floor}}</h1></div>
        <div v-for="ap in [1,2,3,4]" :key="ap" class="ap">
            <span>Nr.{{ap}}</span>
            <span style="font-size: x-large;"><b>{{getName(floor, ap)}}</b></span>
            <div class="ap__actions">
                <button>Knock</button>
                <button>Message</button>
                <button>Package</button>
                <button>Warning</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { users } from "@/db"
export default {
    data: () => ({
        users,
        house: {
            floors: 10,
            appartmentsPerFloor: 4
        }
    }),
    methods: {
        getName(floor, ap) {
            return users[floor*ap].name
        }
    }
};
</script>

<style scoped lang="scss">
.floor {
    display: inline-flex;
    width: 100%;
    border: 1px solid lightgray;
    background: rgb(221, 221, 221);
    .ap {
        margin: 1rem;
        flex: 1;
        display: flex;
        height: 100px;
        background: white;
        border: 1px solid lightgray;
        > * {
            margin: auto;
        }
        &__actions {
            display: flex; 
            flex-direction: column;
        }
    
    }
}
</style>
