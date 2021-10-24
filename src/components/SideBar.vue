<div id="app">
  <v-app id="inspire">
    <v-card
      height="400"
      width="256"
      class="mx-auto"
      style="backgroung:#122132 !important"
    >
      <v-navigation-drawer permanent st style="background : #122132;">
        <v-list-item>
          <v-list-item-content>
             <v-list-item-title  style="color:white"
                                class="text-center">
              Di Bartolomeo
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            class="mx-5"
          >

            <v-list-item-icon>
              <v-icon style="color:white">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content style="color:white">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-app>
</div>