 <script>
import CreateModal from './components/modal/CreateModal.vue';
import TagsTable from './components/TagsTable.vue';

export default {
    data() {
        return {
            // Notes interface
            notes: [],
            noteInputText: '',
            noteFilterText: '',
            noteFilterTag: '',
            noteSortingColumn: '',
            noteSortAsc: true,

            // Edit note interface
            editModalActiveNote: null,
            editModalNoteText: '',

            // Tags Modal Content
            tagsModalTags: [],
            tagsModalActiveNote: null,
            tagsModalActiveInput: "",
        }
    },
    components: {
        TagsTable,
        CreateModal,
    },
    computed: {
        displayedNotes() {
            // if(this.noteFilterText === '' && this.noteFilterTag === '')
            //     return this.notes

            let displayed = []

            for(const note of this.notes) {
                if(!note.text.toLowerCase().includes(this.noteFilterText.toLowerCase()))
                    continue
                let noteTagsCombined = note.tags.map(tag => tag.text).join(',')
                if(!noteTagsCombined.toLowerCase().includes(this.noteFilterTag.toLowerCase()))
                    continue
                displayed.push(note)
            }

            displayed.sort((itemA, itemB) => {
                let sortKeyA = itemA[this.noteSortingColumn] ?? ''
                let sortKeyB = itemB[this.noteSortingColumn] ?? ''

                if(typeof sortKeyA === 'string')
                    sortKeyA.toLowerCase()
                if(typeof sortKeyB === 'string')
                    sortKeyB.toLowerCase()

                if(sortKeyA < sortKeyB)
                    return this.noteSortAsc ? -1 : 1
                if(sortKeyA > sortKeyB)
                    return this.noteSortAsc ? 1 : -1
                return 0
            })

            return displayed
        },
    },
    created() {
        this.refreshData()
    },
    methods: {
        refreshData() {
            this.fetchNotes()
            this.fetchTags()
        },
        fetchNotes() {
            fetch('/api/notes?pagination=false')
                .then(res => res.json())
                .then(notes => {
                    this.notes = notes
                })
        },
        fetchTags() {
            fetch('/api/tags')
                .then(res => res.json())
                .then(tags => {
                    this.tags = tags
                    this.tagsModalTags = tags
                })
        },
        sortNotes(sortingColumn) {
            this.noteSortingColumn = sortingColumn
            if(this.noteSortingColumn === sortingColumn)
                this.noteSortAsc = !this.noteSortAsc
        },
        markNoteComplete(noteId, completeStatus) {
            const body = {
                status: completeStatus ? 'complete' : '',
            }
            this.patchNote(noteId, body)
                .then(() => {
                    this.fetchNotes()
                })
                .catch(err => console.log(err))
        },
        updateNoteText(noteId, newText) {
            const body = {
                text: newText
            }
            this.patchNote(noteId, body)
                .then(() => {
                    this.fetchNotes()
                })
                .catch(err => console.log(err))
        },
        patchNote : async (noteId, body) => {
            const headers = {
                "Accept": "application/json",
                "Content-Type": "application/merge-patch+json"
            }
            return fetch('/api/notes/'+noteId, {
                method: "PATCH",
                headers,
                body: JSON.stringify(body)
            })
                .catch(err => console.log(err))
        },
        addNoteTag(noteId, tag) {
            const body = {
                noteId, tag
            }
            const headers = {
                "Accept": "application/json",
                "Content-Type": "multipart/form-data"
            }
            fetch('/api/notes/'+noteId+'/tags', {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            })
                .then(() => {
                    this.fetchNotes()
                    this.fetchTags()
                })
                .catch(err => console.log(err))
        },
        deleteNote(noteId) {
            if(!confirm("Are you sure you want to delete?")) return
            const headers = {
                "Accept": "*/*",
            }
            fetch('/api/notes/'+noteId, {
                method: "DELETE",
                headers
            })
                .then(() => {
                    this.fetchNotes()
                    this.fetchTags()
                })
                .catch(err => console.log(err))
        },
        setTagsModalNote(noteId) {
            for(const note of this.notes) {
                if(note.id === noteId) {
                    this.tagsModalActiveNote = note
                    break
                }
            }
        },
        setEditModalNote(noteId) {
            for(const note of this.notes) {
                if(note.id === noteId) {
                    this.editModalActiveNote = note
                    this.editModalNoteText = note.text
                    break
                }
            }
        },
        submitModalEdit() {
            this.updateNoteText(this.editModalActiveNote.id, this.editModalNoteText)
        },
    }
}
</script>

<template>
<div class="container">

    <TagsTable
        v-bind:tags="this.tags"
        @refresh="refreshData"
    />

    <div>
        <h1>Note index</h1>

        <div class="row justify-content-between">
            <div class="col">
                <label for="noteFilterField">Filter Text: </label>
                <input id="noteFilterField" v-model="noteFilterText">
            </div>
            <div class="col">
                <label for="noteFilterTagsField">Filter Tags: </label>
                <input id="noteFilterTagsField" v-model="noteFilterTag">
            </div>
            <div class="col text-end">
                <button type="button" data-bs-toggle="modal" data-bs-target="#createModal">
                    New Note(s)
                </button>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th @click="sortNotes('text')">Text</th>
                    <th @click="sortNotes('createdAt')">Created</th>
                    <th @click="sortNotes('updatedAt')">Updated</th>
                    <th>Tags</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="note in displayedNotes" :key="note.id">
                    <td v-if="note.status === 'complete'" class="text-decoration-line-through">{{ note.text }}</td>
                    <td v-else>{{ note.text }}</td>
                    <td>{{ note.createdAt }}</td>
                    <td>{{ note.updatedAt }}</td>
                    <td>
                        <button v-for="tag in note.tags">{{ tag.text }}</button>
                    </td>
                    <td>
                        <button v-if="note.status !== 'complete'" @click="markNoteComplete(note.id, true)" type="button">Mark as complete</button>
                        <button v-else @click="markNoteComplete(note.id, false)" type="button">Mark as incomplete</button>
                        <button @click="deleteNote(note.id)" type="button">
                            Delete
                        </button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#editModal"
                            @click="setEditModalNote(note.id)">
                            Edit Note
                        </button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#tagsModal"
                            @click="setTagsModalNote(note.id)">
                            Add Tag
                        </button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#remindersModal">Add Reminder</button>
                    </td>
                </tr>

                <tr v-if="notes.length == 0">
                    <td colspan="3">no records found</td>
                </tr>
            </tbody>
        </table>
    </div>

    <CreateModal
        @refresh="refreshData"
    />

    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                </div>
                <div class="modal-body">
                    <textarea v-if="editModalActiveNote" v-model="editModalNoteText"></textarea>
                    <button type="button" data-bs-dismiss="modal" @click="submitModalEdit()">Submit</button>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="tagsModal" tabindex="-1" aria-labelledby="tagsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="tagsModalLabel" v-if="tagsModalActiveNote !== null">Add Tag to {{ tagsModalActiveNote.text }}</h1>
                    <h1 class="modal-title fs-5" id="tagsModalLabel" v-else>Add Tag</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p v-for="tag in tagsModalTags">
                        <button @click="addNoteTag(tagsModalActiveNote.id, tag.text)">{{ tag.text }}</button>
                    </p>
                    <input type="text" v-model="tagsModalActiveInput">
                    <button type="button" @click="addNoteTag(tagsModalActiveNote.id, tagsModalActiveInput)">Submit</button>
                </div>
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal">Close</button>
                    <button type="button">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="remindersModal" tabindex="-1" aria-labelledby="remindersModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="tagsModalLabel" v-if="tagsModalActiveNote !== null">Add Tag to {{ tagsModalActiveNote.text }}</h1>
                    <h1 class="modal-title fs-5" id="tagsModalLabel" v-else>Add Tag</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p v-for="tag in tagsModalTags">
                        <button @click="addNoteTag(tagsModalActiveNote.id, tag.text)">{{ tag.text }}</button>
                    </p>
                    <input type="text" v-model="tagsModalActiveInput">
                    <button type="button" @click="addNoteTag(tagsModalActiveNote.id, tagsModalActiveInput)">Submit</button>
                </div>
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal">Close</button>
                    <button type="button">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
