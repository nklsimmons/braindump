<script>
export default {
    data() {
        return {
            createNotesInput: '',
        }
    },
    methods: {
        submitNote() {
            if(!this.createNotesInput) return;
            const filteredInput = this.createNotesInput.split('\n')
                .map(i => i.trim())
                .filter(i => i)
            if(!filteredInput.length) return;

            for(const note of filteredInput) {
                const body = {
                    text: note,
                    status: '',
                    userId: 1
                }
                const headers = {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
                fetch('/api/notes', {
                    method: "POST",
                    headers,
                    body: JSON.stringify(body)
                })
                    .then(res => res.json())
                    .then(() => {
                        this.$emit('refresh')
                    })
                    .catch(err => console.log(err))
            }

            this.createNotesInput = ''
            this.hideModal()
        },
        hideModal() {
            const thisModal = document.getElementById('createModal');
            bootstrap.Modal.getInstance(thisModal).hide();
        }
    }
}
</script>

<template>
    <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1>Create New Note</h1>
                </div>
                <div class="modal-body">
                    <textarea style="height: 400px; width: 100%" v-model:="createNotesInput"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal">Close</button>
                    <button type="button" @click="submitNote">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
