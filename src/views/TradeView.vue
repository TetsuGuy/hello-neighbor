<template>
  <div>
        <h1>Trade Center</h1>
        <div class="trade-grid">
            <div class="trade-grid__header">What</div>
            <div class="trade-grid__header">Who</div>
            <div class="trade-grid__header">Trash Date</div>
            <div class="trade-grid__header">Actions</div>
            <div>10 Plates (white) + Cutlery</div>
            <div>Nathan</div>
            <div>01.08.2022</div>
            <div>
              <button>reserve</button>
              <button disabled>delete</button>
            </div>
            <div>Lego Set: "Death Star"</div>
            <div>You</div>
            <div>10.08.2022</div>
            <div>
              <button>reserve</button>
              <button>delete</button>
            </div>
            <div>Misc. Clothing (Size L)</div>
            <div>Margareth</div>
            <div>5.08.2022</div>
            <div>
              <button>reserve</button>
              <button disabled>delete</button>
            </div>
            <div class="reserved">(reserved) PC Monitor (26")</div>
            <div class="reserved">Woynech</div>
            <div class="reserved">1.08.2022</div>
            <div class="reserved">
              <button disabled>reserve</button>
              <button disabled>delete</button>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.trade-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    > div {
      border: 1px solid lightgray;
    }
    &__header {
        border: 1px solid lightgray;
        background: lightblue;
    }
    button {
      width: 75px;
    }
    .reserved {
      opacity: 0.6;
    }
}
</style>