<script>
export default {
    props: {
        tags: {
            type: Array,
            default: [],
        },
    },
    data() {
        return {
            tagInputText: '',
        }
    },
    methods: {
        submitTag() {
            if(!this.tagInputText) return
            const body = {
                text: this.tagInputText,
                status: '',
                userId: 1
            }
            const headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
            fetch('/api/tags', {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            })
                .then(() => {
                    this.$emit('refresh')
                    this.tagInputText = ''
                })
                .catch(err => console.log(err))
        },
        deleteTag(tagId) {
            if(!confirm("Are you sure you want to delete?")) return
            const headers = {
                "Accept": "*/*",
            }
            fetch('/api/tags/'+tagId, {
                method: "DELETE",
                headers
            })
                .then(() => {
                    this.$emit('refresh')
                })
                .catch(err => console.log(err))
        },
    }
}
</script>

<template>
<div>
    <h1>Tag index</h1>

    <div>
        <input v-model="tagInputText">
        <button @click="submitTag">Submit</button>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th>Text</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="tag in tags" :key="tag.id">
                <td>{{ tag.text }}</td>
                <td>
                    <button @click="deleteTag(tag.id)" type="button">Delete</button>
                </td>
            </tr>

            <tr v-if="tags.length == 0">
                <td colspan="3">no records found</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<style scoped>

</style>
