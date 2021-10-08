<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="emploi_du_temps"
    item-key="name"
    show-select
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>COURS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nouveau cours
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nom"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.horraire"
                      label="Horraire"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.description"
                      label="Description"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.prix"
                      label="Prix"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nbr"
                      label="Nbr d\'élèves"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.note"
                      label="Note"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
      <v-icon
      small
    >
      mdi-message-text
    </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Nom',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Horraire', value: 'horraire' },
      { text: 'Description', value: 'description' },
      { text: 'Prix', value: 'prix' },
      { text: 'Nbr inscrit / Nbr d\'élèves', value: 'nbr' },
      { text: 'Note', value: 'note' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    emploi_du_temps: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      horraire: '',
      description: '',
      prix: 0,
      nbr: '',
      note: ''
    },
    defaultItem: {
      name: '',
      horraire: '',
      description: '',
      prix: 0,
      nbr: '',
      note: ''
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.emploi_du_temps = [
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'

        },
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'
        },
        {
          name: 'Les Petits',
          horraire: 'Mardi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed ex vitae eros tincidunt iaculis ac eu lacus. Aenean at nisi feugiat, venenatis purus nec, hendrerit arcu. Aenean sit amet',
          prix: 24,
          nbr: '18/20',
          note: 'Lorem ipsum dolor sit amet, consectet'
        }
      ]
    },
    editItem (item) {
      this.editedIndex = this.emploi_du_temps.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      this.editedIndex = this.emploi_du_temps.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.emploi_du_temps.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.emploi_du_temps[this.editedIndex], this.editedItem)
      } else {
        this.emploi_du_temps.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
