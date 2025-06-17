<script setup>
import { ref, computed } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const activeFilter = ref(localStorage.getItem("activeFilter") || "DEVELOPMENT");

const projects = ref([
  //DEVELOPMENT
  {
    categories: ["DEVELOPMENT"],
    title: "Progress",
    currentProjectView: "/progress",
    imagePath: "/bg_images/dev_4.jpg",
    tag: ["#Application", "#Electron"],
  },
  {
    categories: ["DEVELOPMENT"],
    title: "arro.at",
    currentProjectView: "/arro.at",
    imagePath: "/bg_images/dev_1.jpg",
    tag: ["#Webdev", "#Vue.js"],
  },
  {
    categories: ["DEVELOPMENT"],
    title: "MIDI Boilerplate",
    currentProjectView: "/MIDI_Boilerplate",
    imagePath: "/bg_images/dev_2.jpg",
    tag: ["#SonicPi", "#Tool"],
  },
  {
    categories: ["DEVELOPMENT"],
    title: "VJ-Setup v1.0",
    currentProjectView: "/TD_VJ_Setup",
    imagePath: "/bg_images/dev_3.jpg",
    tag: ["#Touchdesigner", "#Tool"],
  },

  //DESIGN WORK
  {
    categories: ["DESIGN WORK"],
    title: "Portfolio PDF",
    currentProjectView: "/pdf_portfolio",
    imagePath: "/bg_images/des_4.jpg",
    tag: ["#Different", "#Stuff"],
  },
  {
    categories: ["DESIGN WORK"],
    title: "808club.at",
    currentProjectView: "/808club.at",
    imagePath: "/bg_images/des_1.jpg",
    tag: ["#Webdesign", "#Wordpress"],
  },
  {
    categories: ["DESIGN WORK"],
    title: "Screenprints",
    currentProjectView: "/screenprints",
    imagePath: "/bg_images/des_2.jpg",
    tag: ["#Screenprint", "#Art"],
  },
  {
    categories: ["DESIGN WORK"],
    title: "Event Posters",
    currentProjectView: "/event_posters",
    imagePath: "/bg_images/des_3.jpg",
    tag: ["#Poster", "#Flyer"],
  },


  //AUDIO VISUAL
  {
    categories: ["AUDIO VISUAL"],
    title: "TD Tutorials",
    currentProjectView: "/TD_tutorials",
    imagePath: "/bg_images/av_1.jpg",
    tag: ["#Touchdesigner", "#Tutorials"],
  },
  {
    categories: ["AUDIO VISUAL"],
    title: "Coding Techno",
    currentProjectView: "/coding_techno",
    imagePath: "/bg_images/av_2.jpg",
    tag: ["#LiveSessions", "#SonicPi", "Techno"],
  },
  {
    categories: ["AUDIO VISUAL"],
    title: "808Spotlight",
    currentProjectView: "/808Spotlight",
    imagePath: "/bg_images/av_3.jpg",
    tag: ["#Deep Space", "#AEC", "#TD"],
  },
]);

const filteredProjects = computed(() => {
  if (!activeFilter.value) return projects.value;
  return projects.value.filter((project) =>
    project.categories.includes(activeFilter.value)
  );
});

function updateActiveFilter(filter) {
  if (activeFilter.value === filter) {
    activeFilter.value = null;
  } else {
    activeFilter.value = filter;
    localStorage.setItem("activeFilter", filter);
  }
}
</script>

<template>
  <div class="projectsWrapper">
    <div class="projectNav">
      <li
        v-for="filter in ['DEVELOPMENT', 'DESIGN WORK', 'AUDIO VISUAL']"
        :key="filter"
        :id="activeFilter === filter ? 'activeFilter' : ''"
        @click="updateActiveFilter(filter)"
      >
        {{ filter }}
      </li>
    </div>

    <div class="projectListContainer">
      <TransitionGroup name="project" tag="div" class="project-list">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.title"
          :subTitle="project.subTitle"
          :projectTitle="project.title"
          :currentProjectView="project.currentProjectView"
          :imagePath="project.imagePath"
          :projectTags="project.tag"
          :projectInfo="project.info"
        />
      </TransitionGroup>
    </div>
  </div>
</template>
