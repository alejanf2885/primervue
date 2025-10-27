<template>
    <div>
        <h1>Menu</h1>
        <nav>
            <ul class="list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/cine">Cine</router-link></li>
            <li><router-link to="/musica">Musica</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'MenuComponent'
}
</script>

<style>
    .list {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li {
        margin: 10px 5px;
    }
</style>