<template>
        <v-text-field
            :value="$store.state.search"
            @input="$store.commit('setSearch', $event)"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            outlined
            single-line
            rounded
            dense
            hide-details
            class="mt-1 field-add-task"
            background-color="rgba(255,255,255,0.1)"
          ></v-text-field>

</template>

<script>
export default {

}
</script>

<style>
.field-add-task.v-input--is-focused .v-input__slot{
  background:rgba(71, 114, 146, 0.5)!important;
}
</style>
