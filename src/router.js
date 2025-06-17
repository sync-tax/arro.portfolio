import { createRouter, createWebHistory } from "vue-router";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";
import LinkTree from "./views/LinkTree.vue";

//DEVELOPMENT PROJECTS
import progress from "./views/Projects/progress.vue";
import arro from "./views/Projects/arro.vue";
import SonicPi_Tools from "./views/Projects/midi_boilerplate.vue";
import VJ_Setup from "./views/Projects/TD_VJ_Setup.vue";

//DESIGN PROJECTS
import eioeiclub from "./views/Projects/808club.vue";
import screenprints from "./views/Projects/screenprints.vue";
import event_posters from "./views/Projects/event_posters.vue";
import pdf_portfolio from "./views/Projects/pdf_portfolio.vue";

//AV PROJECTS
import TD_tutorials from "./views/Projects/TD_tutorials.vue";
import coding_techno from "./views/Projects/coding_techno.vue";
import eioeispotlight from "./views/Projects/808spotlight.vue";

const routes = [
  //Main Routes
  {
    path: "/",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/LinkTree",
    name: "LinkTree",
    component: LinkTree,
  },

  //Project Routes
  //DEVELOPMENT
  {
    path: "/arro.at",
    name: "arro",
    component: arro,
  },
  {
    path: "/MIDI_Boilerplate",
    name: "SonicPi_Tools",
    component: SonicPi_Tools,
  },
  {
    path: "/TD_VJ_Setup",
    name: "VJ_Setup",
    component: VJ_Setup,
  },
  {
    path: "/progress",
    name: "progress",
    component: progress,
  },
  //DESIGN
  {
    path: "/808club.at",
    name: "eioeiclub",
    component: eioeiclub,
  },
  {
    path: "/screenprints",
    name: "screenprints",
    component: screenprints,
  },
  {
    path: "/event_posters",
    name: "event_posters",
    component: event_posters,
  },
  {
    path: "/pdf_portfolio",
    name: "pdf_portfolio",
    component: pdf_portfolio,
  },

  //AUDIO VISUAL
  {
    path: "/TD_tutorials",
    name: "TD_tutorials",
    component: TD_tutorials,
  },
  {
    path: "/coding_techno",
    name: "coding_techno",
    component: coding_techno,
  },
  {
    path: "/808Spotlight",
    name: "eioeispotlight",
    component: eioeispotlight,
  },
];

const projectRoutes = [
  "/AudioProject1",
  "/AudioProject2",
  "/AudioProject3",
  "/VisualProject1",
  "/VisualProject2",
  "/DesignProject1",
  "/DesignProject2",
  "/DesignProject3",
  "/OtherProject1",
  "/OtherProject2",
  "/OtherProject3",
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.path === "/" && projectRoutes.includes(from.path)) {
      return { top: 510 };
    }

    return { top: 0 };
  },
});

export default router;
