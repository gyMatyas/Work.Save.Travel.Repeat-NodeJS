<template>
  <div>
    <v-container fluid>
      <v-card color="grey lighten-4" flat>
        <v-card-text>
          <v-container fluid>
            <v-flex xs10 offset-xs1>
              <v-text-field
                id="testing"
                name="Title"
                label="Title"
                v-model="articleTitle"
              ></v-text-field>
            </v-flex>
            <v-layout row>
              <v-flex xs10 offset-xs1>
                <v-text-field
                  name="input-1"
                  label="Article"
                  textarea
                  clearable
                  v-model="articleText"
                  class="black-radius"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>

      <v-divider dark class="border-bottom"></v-divider>

      <div class="article-custom">
          <div class="media-body d-block">
            <h5 class="article-header-custom">{{articleTitle}}</h5>
            <p class="article-text-custom"><span v-html="articleText"></span></p>
          </div>
      </div>

      <v-btn
        color="green"
        class="white--text height-fix"
        @click="submitArticle"
      >Publish
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Editor",
    data: function () {
      return {
        articleText: "",
        articleTitle: ""
      }
    },
    methods: {
      submitArticle: function () {
        axios.post("https://wstr-rest.herokuapp.com/articles", {
          "title": this.articleTitle,
          "body": this.articleText
        }).then((response) => {
            this.$router.push('/')
          }
        )
      }
    }
  }
</script>

<style scoped>
  .black-radius {
    border: 2px solid black;
  }

  .height-fix {
    height: auto;
  }
</style>
