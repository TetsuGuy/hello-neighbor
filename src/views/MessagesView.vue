<template>
<div>
        <h1>Message Center (1 new message)</h1>
        <div style="text-align: right;">
            <span>Filter</span>
            <button>Other</button>
            <button disabled>Warning</button>
            <button disabled>Knock</button>
            <button>Package</button>
        </div>
        <div class="message-grid">
                <div class="header">from</div>
                <div class="header">message</div>
                <div class="header">date</div>
                <div class="header"></div>
                <div>K.Jovovitch</div>
                <div>Thanks for the books! Our son loves dinosaurs and is very hapily reading them!</div>
                <div>8. Juli 2022</div>
                <button>reply</button>
                <div>A.Müller</div>
                <div>Want to watch the football match tmr? We got beer too 💪</div>
                <div>10. Juli 2022</div>
                <button disabled>replied</button>
                <div><strong>Wieland</strong></div>
                <div><strong>There is a package for you waiting for.</strong></div>
                <div><strong>5. Juli 2022</strong></div>
                <button>mark as 'retrieved'</button>
        </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.message-grid {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border: 1px solid lightgray;
    .header {
        background:lightgray;
    }
}
</style>